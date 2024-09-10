// Form Input Data

const chargePoints = {  
    id: 1,
    tag: 'input',
    data: {
        text: 'Number of charge points',
        name: 'number_charge_points',
        title: 'number_charge_points',
        id: 'number_charge_points',
        type: 'text',
        placeholder: '',
        value: '',
    }
}

const arrivalProbability = {
    id: 2,
    tag: 'input',
    data: {
        text: 'Arrival probability',
        name: 'arrival_probability',
        title: 'arrival_probability',
        id: 'arrival_probability',
        type: 'text',
        placeholder: '',
        value: '',
    },
}

const consumption = {
    id: 3,
    tag: 'input',
    data: {
        text: 'Consumption',
        name: 'consumption',
        title: 'consumption',
        id: 'consumption',
        type: 'text',
        placeholder: '',
        value: '',
    },
}

const chargingPower = {
    id: 4,
    tag: 'input',
    data: {
        text: 'Charging Power (kW):',
        name: 'charging_power',
        title: 'charging_power',
        id: 'charging_power',
        type: 'text',
        placeholder: '',
        value: '',
    },
}

const ChargingStationForm = [
    chargePoints,
    arrivalProbability,
    consumption,
    chargingPower
]


export default ChargingStationForm;