import React from 'react';
import { useSimulationContext } from '../context/simulationContext';
import SimulationCard from './simulationCard';

const Simulation = () => {
    const {
        simulation,
    } = useSimulationContext();

    return (
        <>
        {Object.keys(simulation).length > 0 && (
            <div className="mt-8">
                <h3 className="mb-8 text-lg text-slate-700 dark:text-slate-400 font-bold divider divider-start">Simulation Results</h3>
                <div className="flex flex-wrap gap-4 grid grid-cols-1 lg:grid-cols-5">
                    {simulation.map((card, idx) => (
                        <SimulationCard key={idx} {...card} />
                    ))}
                </div>
            </div>
        )}
        </>
    );
}

export default Simulation;