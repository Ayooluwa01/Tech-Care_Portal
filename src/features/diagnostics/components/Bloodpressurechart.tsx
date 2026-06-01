"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";
import { Line } from "react-chartjs-2";

// 1. Register required modules natively with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; status: string };
    diastolic: { value: number; status: string };
  };
}

interface BloodPressureChartProps {
  diagnosisHistory: DiagnosisHistoryEntry[];
}

export default function BloodPressureChart({ diagnosisHistory }: BloodPressureChartProps) {

  const chartDataEntries = diagnosisHistory ? diagnosisHistory.slice(0, 6).reverse() : [];

  // Extracting axis labels and datas
  const labels = chartDataEntries.map((date)=> `${date.month} ${date.year}`);
  const systolicValues = chartDataEntries.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicValues = chartDataEntries.map((entry) => entry.blood_pressure.diastolic.value);

  // 4. Chart config
// Systolic-pink
// Diastolic-purple
  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        borderColor: "#C26EB4", 
        backgroundColor: "#C26EB4",
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension:0.4,
        borderWidth: 2,
      },
      {
        label: "Diastolic",
        data: diastolicValues,
        borderColor: "#7E6CAB", 
        backgroundColor: "#7E6CAB",
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4, 
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: "#072635",
        titleFont: { family: "Manrope", size: 12 },
        bodyFont: { family: "Manrope", size: 12 },
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Strips background vertical lines
        },
        ticks: {
          color: "#3B4A54",
          font: {
            family: "Manrope",
            size: 12,
          },
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
          },
        },
        grid: {
          color: "#E3E4E6", 
        },
      },
    },
  };

  return (
    <div className="w-full h-full min-h-[220px]">
      <Line data={data} options={options} />
    </div>
  );
}