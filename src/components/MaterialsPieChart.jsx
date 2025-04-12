import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MaterialsPieChart = ({ materials }) => {
    // Generate distinct colors for each material
    const generateColors = (count) => {
        const colors = [];
        const hueStep = 360 / count;

        for (let i = 0; i < count; i++) {
            const hue = i * hueStep;
            colors.push(`hsl(${hue}, 70%, 60%)`);
            colors.push(`hsl(${hue}, 70%, 45%)`); // Darker variant
        }

        return colors.slice(0, count);
    };

    const chartData = {
        labels: materials.map(material => material.name),
        datasets: [
            {
                data: materials.map(material => material.totalCost),
                backgroundColor: generateColors(materials.length),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12,
                    padding: 20,
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
                    }
                }
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Material Cost Distribution</h3>
            <div className="h-96">
                <Pie data={chartData} options={options} />
            </div>
        </div>
    );
};

export default MaterialsPieChart;