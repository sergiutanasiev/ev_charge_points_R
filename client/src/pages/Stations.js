import React from 'react';
import Form from '../components/form';
import Simulation from '../modules/simulation';

const Stations = () => {    

    React.useEffect(() => {
    }, []);

  return (
    <div>
        <h2 className="mb-2 text-sky-500 dark:text-sky-400 text-2xl sm:text-3xl font-extrabold tracking-tight dark:text-slate-200">Calculator Kw</h2>
        <Form />
        <Simulation />
    </div>
  );
};

export default Stations;