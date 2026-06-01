/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Text } from "@/components/ui/Texts";

import RespiratoryIcon from "@/features/diagnostics/assets/respiratory.svg";
import TemperatureIcon from "@/features/diagnostics/assets/temperature.svg";
import HeartRateIcon from "@/features/diagnostics/assets/HeartBPM.svg";

interface VitalCardProps {
  patientData: any; 
}

export default function VitalCard({ patientData }: VitalCardProps) {
  if (!patientData || !patientData.diagnosis_history?.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px] w-full mt-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-[242px] bg-gray-100 animate-pulse rounded-[12px]" />
        ))}
      </div>
    );
  }

  const latest = patientData.diagnosis_history[0];

  const vitalsData = [
    {
      title: "Respiratory Rate",
      value: latest.respiratory_rate?.value ? `${latest.respiratory_rate.value} bpm` : "N/A",
      status: latest.respiratory_rate?.status || "Normal",
      icon: RespiratoryIcon,
      bgColor: "bg-[#E0F3FA]",
    },
    {
      title: "Temperature",
      value: latest.temperature?.value ? `${latest.temperature.value}°F` : "N/A",
      status: latest.temperature?.status || "Normal",
      icon: TemperatureIcon,
      bgColor: "bg-[#FFE6E9]",
    },
    {
      title: "Heart Rate",
      value: latest.heart_rate?.value ? `${latest.heart_rate.value} bpm` : "N/A",
      status: latest.heart_rate?.status || "Normal",
      icon: HeartRateIcon,
      bgColor: "bg-[#FFE6F1]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px] w-full mt-5">
      {vitalsData.map((vital) => (
        <div
          key={vital.title}
          className={`w-full rounded-[12px] p-4 flex flex-col justify-between ${vital.bgColor}`}
        >
          <div className="w-[96px] h-[96px] rounded-full bg-white flex items-center justify-center mb-4">
            <Image
              src={vital.icon}
              alt={`${vital.title} icon`}
              width={48}
              height={48}
              priority
            />
          </div>

          {/* Metric Label */}
          <Text variant="body" className="text-[#072635] font-medium text-base mb-1">
            {vital.title}
          </Text>

          {/* Value Display */}
          <Text variant="title" className="text-[#072635] font-bold leading-none mb-[17px]">
            {vital.value}
          </Text>

          <Text variant="body" className="text-sm text-[#072635] font-normal flex items-center gap-1 opacity-90">
            {vital.status?.toLowerCase().includes("higher") && "▲"}
            {vital.status?.toLowerCase().includes("lower") && "▼"}
            {vital.status}
          </Text>
        </div>
      ))}
    </div>
  );
}