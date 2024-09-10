import React from 'react';
import ChargingStationForm from '../data/formData';
import Input from './input';
import { runSimulation } from '../services/api';

const Form = () => {
  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState([]);
  const [formValue, setFormValue] = React.useState([]);

  React.useEffect(() => {
    setFormState(ChargingStationForm);
    console.log(formValue, 'hform Value');
  }, [formValue, setFormState]);

  // Check if form value is already present
  const getFormElById = (id) => {
    const index = formValue.findIndex((el) => el.id === id);
    return index !== -1;
  }
  
  // Update form values
  const handleInputChange = (id, name, value) => {
    let updateFormValue;
    if (getFormElById(id)) {
      updateFormValue = formValue.map((formEntry) => {
          if (formEntry.id === id) {
            return {
              ...formEntry,
              value: value
            }
          }
          return formEntry;
      })
    } else {
      updateFormValue = [...formValue, {['id']: id, ['name']: name, ['value']:value}]
    }
    setFormValue(updateFormValue);
  }
  
  // Render specific form tag
  const getFormElement = ({ tag, id, data }) => {
    if (tag === 'input') {
      return <Input key={id} {...data} onChange={(value) => handleInputChange(id, data.name, value)} />;
    }
    return null;
  };

  const handleRunSimulation = (e) => {
    e.preventDefault();
    runSimulation(formValue);
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