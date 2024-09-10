const API_ENDPOINT = 'http://localhost:3001/api';

const runSimulation = async(formData) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/simulate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

    } catch (error) {
        throw new Error(`Request failed: ${error}`)
    }
}