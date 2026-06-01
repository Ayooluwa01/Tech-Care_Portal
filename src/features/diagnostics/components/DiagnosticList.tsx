"use client";

import { Text } from "@/components/ui/Texts";

interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface PatientData {
  diagnostic_list?: Diagnostic[];
}

interface DiagnosticListProps {
  patientData?: PatientData;
}

export default function DiagnosticList({ patientData }: DiagnosticListProps) {
  const diagnostics = patientData?.diagnostic_list || [];

  return (
    <div className="w-full bg-white rounded-[16px] p-5 shadow-sm mt-[20px]">
      {/* Table Header / Title */}
      <div className="mb-6">
        <Text variant="title" className=" font-[800] ">
          Diagnostic List
        </Text>
      </div>

      <div className="w-full overflow-x-auto max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
        <table className="w-full text-left border-collapse">
          {/* Table Headers */}
          <thead>
            <tr className="bg-[#F6F7F8] rounded-[24px] overflow-hidden">
              <th className="p-4 text-[14px] font-[700] text-[#07263E] rounded-l-[24px] w-[35%]">
                Problem / Diagnosis
              </th>
              <th className="p-4 text-[14px] font-[700] text-[#07263E] w-[45%]">
                Description
              </th>
              <th className="p-4 text-[14px] font-[700] text-[#07263E] rounded-r-[24px] w-[20%]">
                Status
              </th>
            </tr>
          </thead>

          {/* Table */}
          <tbody>
            {diagnostics.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-[14px] font-[400] text-[#707070]">
                  No diagnostic records available.
                </td>
              </tr>
            ) : (
              diagnostics.map((item, index) => (
                <tr 
                  key={`${item.name}-${index}`} 
                  className="border-b border-[#F6F7F8] last:border-b-0 hover:bg-neutral-50/50 transition-colors"
                >
                  {/* Problem Column */}
                  <td className="p-4 text-[14px] font-[700] text-[#07263E] align-middle">
                    {item.name}
                  </td>
                  {/* Description Column */}
                  <td className="p-4 text-[14px] font-[400] text-[#07263E] align-middle">
                    {item.description}
                  </td>
                  {/* Status Column */}
                  <td className="p-4 text-[14px] font-[400] text-[#07263E] align-middle">
                    <span className="inline-block">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}