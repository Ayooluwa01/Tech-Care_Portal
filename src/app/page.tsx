// src/app/page.tsx
import DiagnosticHistory from "@/features/diagnostics/page/DiagnosticHistory";
import PatientProfile from "@/features/patient-profile/page/PatientProfile";
import PatientLists from "@/features/patients-list/page/PatientLists";
import { getPatients } from "@/features/patients-list/services/getPatientServer";

export default async function Home() {
  const PatientsLists = await getPatients();

  return (
    <div className="w-full max-w-[1564px] mx-auto px-4 lg:px-0 mt-[32px] mb-8 transition-all">
      <div className="flex flex-col lg:flex-row gap-[32px] items-start justify-center">
        {/* Left: Patient List Column */}
        <aside className="w-full lg:w-[367px] h-full lg:h-[1054px] shrink-0 bg-white border border-[#E3E4E6] rounded-[16px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] overflow-y-auto">
          <PatientLists initialPatients={PatientsLists} />
        </aside>

        {/* Center: Diagnostic History Column */}
        <main className="w-full lg:w-[766px] h-full lg:h-[1054px] shrink-0 bg-white border border-[#E3E4E6] rounded-[16px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.01)] overflow-y-auto">
          <DiagnosticHistory />
        </main>

        {/* 🚀 Right Sidebar Section: Made transparent so the children render as two distinct cards with a gap! */}
        <section className="w-full lg:w-[367px] h-full lg:h-[1054px] shrink-0 flex flex-col">
          <PatientProfile />
        </section>
      </div>
    </div>
  );
}
