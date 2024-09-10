import { useSimulationContext } from "./simulationContext";

const useSimulation = () => {
    const { setSimulation } = useSimulationContext();

    const updateSimulationResponse = (data) => {
        setSimulation(data);
    };

    return {
        updateSimulationResponse
    };
};

export default useSimulation;