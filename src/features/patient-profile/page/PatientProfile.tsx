import LabResults from "../component/LabResults";
import { ProfileCard } from "../component/ProfileCard";

export default function PatientProfile() {
  return (
    <div className="flex flex-col h-full w-full justify-between gap-8">
      <ProfileCard />
      <LabResults />
    </div>
  );
}
