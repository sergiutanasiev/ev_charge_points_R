import React, { useCallback } from 'react';
import ChargingStationForm from '../data/formData';
import Input from './input';
import useRunSimulation from '../services/api';

const Form = () => {

  const { runSimulation } = useRunSimulation();

  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState([]);
  const [formData, setformData] = React.useState([]);


  const defaultFormData = useCallback(() => {
    const defaultFormValues = ChargingStationForm.map(item => ({
      id: item.id,
      name: item.data.name,
      value: parseInt(item.data.value)
    }));
    
    setformData(defaultFormValues);
  }, [])

  React.useEffect(() => {
    setFormState(ChargingStationForm);
    defaultFormData();
  }, [setFormState, defaultFormData]);

  // Check if form value is already present
  const getFormElById = (id) => {
    const index = formData.findIndex((el) => el.id === id);
    return index !== -1;
  }
  
  // Update form values
  const handleInputChange = (id, name, value) => {
    let updateformData;
    if (getFormElById(id)) {
      updateformData = formData.map((formEntry) => {
          if (formEntry.id === id) {
            return {
              ...formEntry,
              value: parseInt(value)
            }
          }
          return formEntry;
      })
    } else {
      updateformData = [...formData, {['id']: id, ['name']: name, ['value']:parseInt(value)}]
    }
    setformData(updateformData);
  }
  
  // Render specific form tag
  const getFormElement = ({ tag, id, data }) => {
    if (tag === 'input') {
      return <Input key={id} {...data} onChange={(value) => handleInputChange(id, data.name, value)} />;
    }
    return null;
  };

  const handleRunSimulation = async (e) => {
    e.preventDefault();
    try {
      await runSimulation(formData);
    } catch (error) {
      throw new Error(`Failed simulation run ${error}`)
    }
    
  }
  return (
    <div className="card rounded border border-base-200 bg-base-100 p-4">
        <div className="flex gap-4 lg:gap-4 md:gap-6 flex-col md:flex-row">
          {formState.map((tag) => getFormElement({ ...tag }))}
        </div>  
        <div className="py-4">
          <button onClick={handleRunSimulation} className="btn btn-sm rounded btn-active btn-secondary">
            Run Simulation
          </button>
        </div>
    </div>
  );
};

export default Form;