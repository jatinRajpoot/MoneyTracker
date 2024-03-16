"use client"
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

// graph.js

// Add the "use client" directive to indicate that this is a Client Component
export default function DoughnutChartComponent() {
    useEffect(() => {
      const ctx = document.getElementById('chartDoughnut').getContext('2d');
      const dataDoughnut = {
        labels: ["Want", "Need", "waste","Invest"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100,30],
            backgroundColor: [
              "rgb(133, 105, 241)",
              "rgb(164, 101, 241)",
              "rgb(101, 143, 241)",
              "rgb(101,143, 200)"
            ],
            hoverOffset: 4,
          },
        ],
      };
  
      const configDoughnut = {
        type: 'doughnut',
        data: dataDoughnut,
        options: {},
      };
  
      const chartDoughnut = new Chart(ctx, configDoughnut);
  
      // Cleanup
      return () => {
        chartDoughnut.destroy();
      };
    }, []);
  
    return (
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="py-3 px-5 text-center bg-gray-50">Monthly</div>
        <canvas className="p-10" id="chartDoughnut"></canvas>
      </div>
    );
  }
