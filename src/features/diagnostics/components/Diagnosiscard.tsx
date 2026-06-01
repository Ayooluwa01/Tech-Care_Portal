/* eslint-disable @typescript-eslint/no-explicit-any */
import BloodPressureChart from "./Bloodpressurechart";

export default function DiagnosisHistoryCard({ patientData }: { patientData: any }) {
  const history = patientData?.diagnosis_history || [];
  
  const latestReading = history[0] || {
    blood_pressure: {
      systolic: { value: 160, status: "Higher than average" },
      diastolic: { value: 78, status: "Lower than average" }
    }
  };

  return (
    <div className="w-full bg-[#F4F0FE] rounded-[16px] p-4 flex flex-col xl:flex-row gap-6 relative">
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#072635] text-[18px] font-bold">Blood Pressure</h3>
          <span className="text-sm text-[#072635] opacity-70 cursor-pointer flex items-center gap-2">
            Last 6 Months <span className="text-[10px]">▼</span>
          </span>
        </div>
        <div className="h-[220px]">
          <BloodPressureChart diagnosisHistory={history} />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full xl:w-[150px] shrink-0 flex flex-col justify-center gap-4 border-t xl:border-t-0 xl:border-l border-[#E3E4E6] pt-4 xl:pt-0 xl:pl-4">
        {/* Systolic Monitor */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 rounded-full bg-[#E574BC]" />
            <span className="text-sm font-bold text-[#072635]">Systolic</span>
          </div>
          <span className="text-[22px] font-bold text-[#072635] leading-none mb-1">
            {latestReading.blood_pressure.systolic.value}
          </span>
          <span className="text-xs text-[#072635] opacity-80">
            {latestReading.blood_pressure.systolic.status === "Higher than average" ? "▲ Higher than average" : "▼ Lower than average"}
          </span>
        </div>

        <hr className="border-[#E3E4E6]" />

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 rounded-full bg-[#8C6FE6]" />
            <span className="text-sm font-bold text-[#072635]">Diastolic</span>
          </div>
          <span className="text-[22px] font-bold text-[#072635] leading-none mb-1">
            {latestReading.blood_pressure.diastolic.value}
          </span>
          <span className="text-xs text-[#072635] opacity-80">
            {latestReading.blood_pressure.diastolic.status === "Lower than average" ? "▼ Lower than average" : "▲ Higher than average"}
          </span>
        </div>
      </div>

    </div>
  );
}