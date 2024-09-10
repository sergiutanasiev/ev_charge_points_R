const simulateCharging = (chargePoints, arrivalProbability, consumption, chargingPower) => {
    // Transform percentage to decimal value;
    arrivalProbability = arrivalProbability / 100;
    // ticks 15min
    const ticks_day = 96;
    const days_year = 365;
    const total_ticks = ticks_day * days_year;
  
    // Assuming arrival probabilities
    const defaultArrivalProbabilities = [
        0.094, 0.094, 0.094, 0.094, 0.094, 0.094, 0.094, 0.094,
        0.283, 0.283, 0.566, 0.566, 0.566, 0.755, 0.755, 0.755,
        0.1038, 0.1038, 0.1038, 0.472, 0.472, 0.472, 0.094, 0.094
    ];
  
    const defaultChargingDemandProbabilities = [
        { probability: 0.3431, demand: 0 },
        { probability: 0.0490, demand: 5 },
        { probability: 0.0980, demand: 10 },
        { probability: 0.1176, demand: 20 },
        { probability: 0.0882, demand: 30 },
        { probability: 0.1176, demand: 50 },
        { probability: 0.1078, demand: 100 },
        { probability: 0.0490, demand: 200 },
        { probability: 0.0294, demand: 300 }
    ];
  
    // arrival probability for a given tick
    const getArrivalProbability = (tick) => {
        // hour of the day from the tick
        const hour = Math.floor(tick / 4) % 24;
        const baseProbability = defaultArrivalProbabilities[hour];
        return Math.min(baseProbability * arrivalProbability);
    };
  
    const getChargingDemand = () => {
        const r = Math.random();
        let cumulativeProbability = 0;
        for (const { probability, demand } of defaultChargingDemandProbabilities) {
            cumulativeProbability += probability;
            if (r <= cumulativeProbability) {
                return demand;
            }
        }
        return 0;
    };
  
    
    let totalEnergyConsumed = 0;
    let totalChargingEvents = 0;
    
    const chargepoints = new Array(chargePoints).fill(0);
    const actualPowerDemand = new Array(total_ticks).fill(0);
    const dailyChargingEvents = new Array(days_year).fill(0);
  
    // iterate over each tick in the year
    for (let tick = 0; tick < total_ticks; tick++) {
        // arrival probability for the current tick
        const arrivalProbability = getArrivalProbability(tick);
        // vehicle arrival probability
        if (Math.random() < arrivalProbability) {
            const chargingDemandKm = getChargingDemand();
            if (chargingDemandKm > 0) {
                // calculate the energy needed
                const energyNeeded = (chargingDemandKm / 100) * consumption;
                // charging time in ticks 
                const chargingTimeTicks = Math.ceil((energyNeeded / chargingPower) * 4);

                // find charge point
                for (let i = 0; i < chargePoints; i++) {
                    if (chargepoints[i] === 0) {
                        chargepoints[i] = chargingTimeTicks;
                        // update total energy consumed
                        totalEnergyConsumed += energyNeeded;
                        // increment total charging events count
                        totalChargingEvents++;
                        // increment daily charging events count
                        dailyChargingEvents[Math.floor(tick / ticks_day)]++;
                        break;
                    }
                }
            }
        }
  
        const currentPowerDemand = chargepoints.reduce((acc, cp) => acc + (cp > 0 ? chargingPower : 0), 0);
        actualPowerDemand[tick] = currentPowerDemand;
  
        for (let i = 0; i < chargePoints; i++) {
            if (chargepoints[i] > 0) {
                chargepoints[i]--;
            }
        }
    }
  
    // calculate maximum power demand
    const theoreticalMaxDemand = chargePoints * chargingPower;
    // calculate actual maximum power
    const actualMaxDemand = Math.max(...actualPowerDemand);
    const concurrencyFactor = (actualMaxDemand / theoreticalMaxDemand) * 100;
  
    // Months values in days
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const monthlyChargingEvents = new Array(12).fill(0);

    // add daily charging events into monthly charging events
    dailyChargingEvents.forEach((events, index) => {
        let cumulativeDays = 0;
        for (let month = 0; month < 12; month++) {
        cumulativeDays += daysInMonth[month];
        if (index < cumulativeDays) {
            monthlyChargingEvents[month] += events;
            break;
        }
        }
    });
  
    // add daily charging events into weekly charging events
    const weeklyChargingEvents = dailyChargingEvents.reduce((acc, events, index) => {
        const week = Math.floor(index / 7);
        acc[week] = (acc[week] || 0) + events;
        return acc;
    }, []);
  
    const returnValue = [
        {
            title: 'Total energy consumed',
            value: `${totalEnergyConsumed.toFixed(2)} Kw`,
        },
        {
            title: 'Theoretical max power demand Kw',
            value: `${theoreticalMaxDemand} Kw`,
        },
        {
            title: 'Actual max power demand',
            value: `${actualMaxDemand} Kw`,
        },
        {
            title: 'Total charging events',
            value: totalChargingEvents,
        },
        {
            title: 'Concurency factor',
            value: `${Math.floor(concurrencyFactor)}%`,
        },
        {
            format: 'month',
            title: 'Monthly charging events',
            value: monthlyChargingEvents,
        },
        {
            format: 'week',
            title: 'Weekly charging events',
            value: weeklyChargingEvents,
        },
        {
            format: 'day',
            title: 'Daily charging events',
            value: dailyChargingEvents,
        },
        {
            format: 'single_day',
            title: 'Examplary day',
            value: actualPowerDemand.slice(0, ticks_day),
        }
    ]

    return returnValue;
};

module.exports = {
    simulateCharging
};
