import useSimulation from "../context/useSimulation";

const API_ENDPOINT = 'http://localhost:3001/api';

const useRunSimulation = () => {
    const { updateSimulationResponse } = useSimulation();

    const runSimulation = async (formData) => {
        try {
            const res = await fetch(`${API_ENDPOINT}/simulate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Network response failed');
            }

            const data = await res.json();

            if (data.response) {
                updateSimulationResponse(data.response);
            }
        } catch (error) {
            throw new Error(`Request failed: ${error.message}`)
        }
    };

    return { runSimulation };
};

export default useRunSimulation;