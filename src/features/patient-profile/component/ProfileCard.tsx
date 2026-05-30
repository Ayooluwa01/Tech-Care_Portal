// src/features/patient-profile/components/ProfileCard.tsx
"use client";

import Image from "next/image";
import { usePatients } from "@/features/patients-list/hooks/usePatients";
import { Text } from "@/components/ui/Texts";

import calendarIcon from "@/features/patient-profile/assets/BirthIcon.svg";
import phoneIcon from "@/features/patient-profile/assets/PhoneIcon.svg";
import insuranceIcon from "@/features/patient-profile/assets/InsuranceIcon.svg";

export const ProfileCard = () => {
  const { data: patients } = usePatients();
  const activePatient = patients?.find((p) => p.name === "Jessica Taylor");

  if (!activePatient) return null;

  const infoItems = [
    {
      label: "Date Of Birth",
      value: activePatient.date_of_birth || "August 23, 1996",
      icon: calendarIcon,
      capitalize: false,
    },
    {
      label: "Gender",
      value: activePatient.gender,
      icon: insuranceIcon,
      capitalize: true,
    },
    {
      label: "Contact Info.",
      value: activePatient.phone_number || "(415) 555-1234",
      icon: phoneIcon,
      capitalize: false,
    },
    {
      label: "Emergency Contacts",
      value: activePatient.emergency_contact || "(415) 555-5678",
      icon: phoneIcon,
      capitalize: false,
    },
    {
      label: "Insurance Provider",
      value: activePatient.insurance_type || "Sunrise Health Assurance",
      icon: insuranceIcon,
      capitalize: false,
    },
  ];

  return (
    <div className="w-full bg-white border border-[#E3E4E6] rounded-[16px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col items-center">
      {" "}
      {/* Avatar Section */}
      <div className="relative w-[200px] h-[200px] mb-6 flex justify-center items-center">
        <Image
          src={activePatient.profile_picture}
          alt={`${activePatient.name} Avatar`}
          width={200}
          height={200}
          className="rounded-full object-cover"
          priority
        />
      </div>
      {/* Patient Name */}
      <Text
        variant="title"
        className="font-bold text-center text-[#072635] text-2xl mb-7"
      >
        {activePatient.name}
      </Text>
      {/* Metadata Info Loop */}
      <div className="w-full space-y-6 mb-10 px-2">
        {infoItems.map((item) => (
          <div key={item.label} className="flex flex-row items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#F6F7F8] flex items-center justify-center mr-4 shrink-0">
              <Image
                src={item.icon}
                alt=""
                width={20}
                height={20}
                className="opacity-70"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <Text
                variant="body"
                className="text-xs text-[#072635] opacity-60 font-medium leading-none mb-1"
              >
                {item.label}
              </Text>
              <Text
                variant="body"
                className={`text-sm text-[#072635] font-bold leading-tight ${item.capitalize ? "capitalize" : ""}`}
              >
                {item.value}
              </Text>
            </div>
          </div>
        ))}
      </div>
      {/* Action Button */}
      <button className="w-[220px] h-[41px] bg-[#01F8D3] hover:bg-[#00e0be] text-[#072635] text-sm font-bold transition-colors duration-150 rounded-full focus:outline-none">
        Show All Information
      </button>
    </div>
  );
};
