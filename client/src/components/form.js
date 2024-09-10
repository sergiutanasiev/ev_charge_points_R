import React from 'react';
import ChargingStationForm from '../data/formData';
import Input from './input';

const Form = () => {
  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState([]);

  React.useEffect(() => {
    setFormState(ChargingStationForm);
  }, []);

  const getFormElement = ({ tag, id, data }) => {
    if (tag === 'input') {
      return <Input key={id} {...data} />;
    }
    return null;
  };

  const handleRunSimulation = () => {
    console.log('run');
  }

  return (
    <>
      {formState.map((tag) => getFormElement({ ...tag }))}
      <button onClick={handleRunSimulation} className="btn btn-primary">
        Run Simulation
      </button>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to DaisyUI with Tailwind CSS</h1>
      <button className="btn btn-primary">DaisyUI Button</button>
    </div>
    </>
  );
};

export default Form;