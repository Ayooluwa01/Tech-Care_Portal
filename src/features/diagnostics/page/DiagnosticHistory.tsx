"use client";

import { usePatients } from "@/features/patients-list/hooks/usePatients";
import VitalCard from "../components/VitalCard";
import DiagnosisHistoryCard from "../components/Diagnosiscard";
import DiagnosticList from "../components/DiagnosticList";
import { Text } from "@/components/ui/Texts";

export default function DiagnosticHistory() {
  const { data: patients, isPending, error } = usePatients();
  
  const activePatient = patients?.find((p) => p.name === "Jessica Taylor");

  if (isPending) {
    return <div className="p-6 text-[#07263E] font-medium font-sans">Loading history...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500 font-medium font-sans">Error loading diagnostic metrics.</div>;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      
      <div className="w-full bg-white rounded-[16px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ">
        {/* Title  */}
        <div className="mb-6">
          <Text variant="title" className="text-[24px] font-[800] text-[#07263E] font-sans">
            Diagnostic History
          </Text> 
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <DiagnosisHistoryCard patientData={activePatient} />
          <VitalCard patientData={activePatient} /> 
        </div>
      </div>
      
      {/* 2. Standalone Diagnostic Conditions Table Box */}
      <div className="w-full">
        <DiagnosticList patientData={activePatient} />
      </div>

    </div>
  );
}