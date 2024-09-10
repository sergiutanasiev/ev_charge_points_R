import React from 'react';

const DayCard = ({
    title,
    value
}) => {

    return (
        <div className="md:col-span-2 card rounded border border-base-200 bg-base-100 p-4">
            <div className="flex flex-col">
                <p className="mb-2 text-sm leading-6 font-semibold text-500 dark:text-sky-400">{title}</p>
                <div className="overflow-y-auto h-72">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-2 dark:bg-slate-900 dark:text-slate-300">Day</th>
                            <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-2 dark:bg-slate-900 dark:text-slate-300">Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.map((day, idx) => (
                            <tr key={idx}>
                                <td>{`Day ${idx + 1} :`}</td>
                                <td>{day}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
    )
}

export default DayCard;