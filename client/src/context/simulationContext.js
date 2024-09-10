import React from 'react';

const SimulationContext = React.createContext(null);

const useSimulationContext = () => {
    const context = React.useContext(SimulationContext);

    if (!context) {
        throw new Error('Failed simulation context')
    }

    return context;
}

const SimulationProvider = ({children}) => {

    const [simulation, setSimulation] = React.useState([]);

    const simulationContextState = {
        simulation,
        setSimulation
    }

    return (
        <SimulationContext.Provider value={simulationContextState}>
            {children}
        </SimulationContext.Provider>
    )
}

export {
    SimulationProvider,
    useSimulationContext
}