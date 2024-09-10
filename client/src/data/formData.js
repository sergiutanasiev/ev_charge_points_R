// Form Input Data

const chargePoints = {  
    id: 1,
    tag: 'input',
    data: {
        text: 'Number of charge stations',
        name: 'number_charge_points',
        title: 'number_charge_points',
        id: 'number_charge_points',
        type: 'number',
        placeholder: '',
        value: '20',
    }
}

const arrivalProbability = {
    id: 2,
    tag: 'input',
    data: {
        text: 'Multiplier arrival probability in %',
        name: 'arrival_probability',
        title: 'arrival_probability',
        id: 'arrival_probability',
        type: 'number',
        placeholder: '',
        value: '100',
    },
}

const consumption = {
    id: 3,
    tag: 'input',
    data: {
        text: 'Consumption of the cars',
        name: 'consumption',
        title: 'consumption',
        id: 'consumption',
        type: 'number',
        placeholder: '',
        value: '18',
    },
}

const chargingPower = {
    id: 4,
    tag: 'input',
    data: {
        text: 'Charging power per chargepoint',
        name: 'charging_power',
        title: 'charging_power',
        id: 'charging_power',
        type: 'number',
        placeholder: '',
        value: '11',
    },
}

const ChargingStationForm = [
    chargePoints,
    arrivalProbability,
    consumption,
    chargingPower
]


export default ChargingStationForm;