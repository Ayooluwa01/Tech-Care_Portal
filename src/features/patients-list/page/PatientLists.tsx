import List from "../components/lists";
import { Text } from "@/components/ui/Texts";
import { Patient } from "../types";
import searchIcon from "@/features/patients-list/assets/searchIcon.svg";
import { Icon } from "@/components/ui/Icon";

export default function PatientLists({
  initialPatients,
}: {
  initialPatients: Patient[];
}) {
  return (
    <div className="">
      <div className="flex items-center relative p-4">
        <Text variant="title" className=" font-bold">
          Patients
        </Text>

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Icon src={searchIcon} alt="Search" width={19} height={17} />
        </div>
      </div>
      <List initialPatients={initialPatients} />
    </div>
  );
}
