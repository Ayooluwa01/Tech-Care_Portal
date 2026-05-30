// src/features/patient-profile/components/LabResults.tsx
"use client";

import Image from "next/image";
import { usePatients } from "@/features/patients-list/hooks/usePatients";
import downloadIcon from "@/features/patient-profile/assets/DownloadIcon.svg";
import { Text } from "@/components/ui/Texts";

export default function LabResults() {
  const { data: patients } = usePatients();
  const activePatient = patients?.find((p) => p.name === "Jessica Taylor");

  if (!activePatient) return null;

  const labResults = activePatient.lab_results || [];

  return (
    <div className="w-full bg-white border border-[#E3E4E6] rounded-[16px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col flex-1 min-h-[296px]">
      {" "}
      <Text variant="title" className="font-bold text-[#072635] text-xl mb-4">
        Lab Results
      </Text>
      <div className="w-full max-h-[220px] overflow-y-auto space-y-1 pr-1">
        {labResults.length === 0 ? (
          <p className="text-sm text-zinc-400 py-2 px-2">
            No lab records on file.
          </p>
        ) : (
          labResults.map((result: string, index: number) => (
            <div
              key={`${result}-${index}`}
              className="w-full h-[40px] flex flex-row items-center justify-between px-4 hover:bg-[#F6F7F8] transition-colors duration-150 group cursor-pointer"
            >
              <Text
                variant="body"
                className="text-sm text-[#072635] truncate pr-4"
              >
                {result}
              </Text>

              <button
                type="button"
                aria-label={`Download ${result}`}
                className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity p-1 focus:outline-none"
              >
                <Image
                  src={downloadIcon}
                  alt="Download Report"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
