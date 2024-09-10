import React from 'react'

const MonthCard = ({
    title,
    value
}) => {
    const [months, setMonths] = React.useState([]);

    React.useEffect(() => {
      setMonths(generateMonthsArray());
    }, [setMonths]);

    const generateMonthsArray = () => {
        const date = new Date();
        const generatedMonths = [];

        for (let i = 0; i < 12; i++) {
            date.setMonth(i);
            generatedMonths.push(date.toLocaleString('default', { month: 'long' }));
        }

        return generatedMonths;
    };
  
    return (
        <div className="md:col-span-2 card rounded border border-base-200 bg-base-100 p-4">
            <div className="flex flex-col">
                <p className="mb-2 text-sm leading-6 font-semibold text-500 dark:text-sky-400">{title}</p>
                <div className="overflow-y-auto h-72">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-2 dark:bg-slate-900 dark:text-slate-300">Month</th>
                            <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-2 dark:bg-slate-900 dark:text-slate-300">Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        {months.map((month, idx) => (
                            <tr key={idx}>
                                <td>{month}</td>
                                <td>{value[idx]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
    );
}

export default MonthCard;