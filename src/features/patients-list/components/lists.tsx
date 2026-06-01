// src/features/patients/components/lists.tsx
"use client";

import Image from "next/image";
import { usePatients } from "../hooks/usePatients";
import { Icon } from "@/components/ui/Icon";
import horizontal from "@/features/patients-list/assets/horizontal.svg";
import { Patient } from "../types";

export default function List({
  initialPatients,
}: {
  initialPatients: Patient[];
}) {
  const { data: patients, isPending, error } = usePatients(initialPatients);


  if (isPending) return <div className="p-4 text-center">Loading patients...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error loading data</div>;

  return (
    <div className="w-full mt-3">
      <ul className="w-full flex flex-col">
        {patients?.map((p) => {
          const isJessica = p.name === "Jessica Taylor";
          
          return (
            <li
              key={p.name}
              className={`w-full flex flex-row items-center justify-between px-1 py-4 cursor-pointer transition-colors duration-200 ${
                isJessica 
                  ? " bg-[#D8FCF7]" 
                  : "hover:bg-[#F6F7F8]"
              }`}
            >
{/* Left side */}
              <div className="flex flex-row items-center gap-3">
                <div className="relative w-[44px] h-[44px] shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={p.profile_picture}
                    alt={`${p.name} avatar`}
                    fill
                    sizes="44px"
                    priority={isJessica}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#07263E] leading-tight">
                    {p.name}
                  </span>
                  <span className="text-[14px] font-normal text-[#707070]">
                    {p.gender}, {p.age}
                  </span>
                </div>
              </div>

              {/* Right Side */}
              <button 
                type="button" 
                className="p-1 hover:bg-black/5 rounded-full transition-colors shrink-0"
                
              >
                <Icon src={horizontal} alt="More options" width={18} height={4} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}