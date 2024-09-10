import React from 'react';
import MonthCard from './monthCard';
import WeekCard from './weekCard';
import DayCard from './dayCard';
import SingleDay from './singleDay';

const SimulationCard = ({ title, value, format }) => {

    // Function to render content based on format
    const formatContent = () => {
        switch (format) {
            case "day":
                return (
                    <DayCard title={title} value={value} />
                );
            case "month":
                return (
                    <MonthCard title={title} value={value} />
                );
            case "week":
                return (
                    <WeekCard title={title} value={value} />
                );
            case "single_day":
                return (
                    <SingleDay title={title} value={value} />
                );
            default:
                return (
                    <div className="card rounded border border-base-200 bg-base-100">
                        <div className="card-body p-6">
                            <p className="card-title text-xl text-sky-400 font-bold text-left">{value}</p>
                            <p className="text-sm text-gray-500 text-left">{title}</p>
                        </div>
                    </div>
                );
        }
    };

    // Render the content based on format
    return formatContent();
}

export default SimulationCard;
