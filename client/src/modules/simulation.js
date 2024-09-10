import React from 'react';
import { useSimulationContext } from '../context/simulationContext';

const Simulation = () => {
    const {
        simulation,
    } = useSimulationContext();

    return (
        <>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Simulation Results</h2>
            </div>
            {simulation.map((entry) => (
                <p key={entry.id}>{entry.name} - {entry.value}</p>
            ))}
        </>
    )
}

export default Simulation;