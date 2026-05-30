// src/features/patient-profile/page/PatientProfile.tsx
import LabResults from "../component/LabResults";
import { ProfileCard } from "../component/ProfileCard";

export default function PatientProfile() {
  return (
    // 💡 h-full handles the vertical space. gap-8 creates the visible separation.
    <div className="flex flex-col h-full w-full justify-between gap-8">
      <ProfileCard />
      <LabResults />
    </div>
  );
}
