import React from 'react';
import ChargingStationForm from '../data/formData';
import Input from './input';

const Form = () => {
  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState([]);
  const [formValue, setFormValue] = React.useState([]);

  React.useEffect(() => {
    setFormState(ChargingStationForm);
  }, []);

  const handleInputChange = (id, name, value) => {
    console.log(id, name, value)
  }
  
  const getFormElement = ({ tag, id, data }) => {
    if (tag === 'input') {
      return <Input key={id} {...data} onChange={(value) => handleInputChange(id, data.name, value)} />;
    }
    return null;
  };

  const handleRunSimulation = () => {
    console.log('run');
  }

  return (
    <>
      {formState.map((tag) => getFormElement({ ...tag }))}
      <button onClick={handleRunSimulation} className="btn btn-sm btn-active btn-secondary">
        Run Simulation
      </button>
    </>
  );
};

export default Form;