// src/features/patients/components/lists.tsx
"use client";

import { Text } from "@/components/ui/Texts";
import { usePatients } from "../hooks/usePatients";
import { Icon } from "@/components/ui/Icon";
import horizontal from "@/features/patients-list/assets/horizontal.svg";
import { Patient } from "../types";
import { useEffect } from "react";

export default function List({
  initialPatients,
}: {
  initialPatients: Patient[];
}) {
  const { data: patients, isPending, error } = usePatients(initialPatients);
  let jessicaId = "";
  useEffect(() => {
    console.log("all patience", patients);
    console.log("looking for jessica");
    const splitNames = patients?.forEach((p) => {
      const split = p.name.split(" ");
      const findJessica = split[0] === "Jessica";
      if (findJessica) {
        console.log("found jessica", findJessica);
        // get her id
        const id = p.name;
        console.log("jessica id", id);
      }
    });
  }, [patients]);
  return (
    <div className="p-3">
      {!isPending && !error && (
        <ul className="space-y-5">
          {patients?.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-row items-center py-2 ${p.name === "Jessica Taylor" ? "bg-[#01F0D0] w-full" : ""}`}
            >
              {/* Profile icon */}
              <Icon
                src={`${p.profile_picture}`}
                alt={`${p.name} avatar`}
                width={44}
                height={44}
              />

              <aside className="flex flex-col ml-3">
                <li>
                  <Text variant="body" className="font-bold text-zinc-800">
                    {p.name}
                  </Text>
                </li>
                <Text variant="body" className="text-zinc-500 text-xs mt-0.5">
                  {p.gender}, {p.age}
                </Text>
              </aside>

              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <Icon
                  src={horizontal}
                  alt="Action Menu"
                  width={19}
                  height={17}
                />
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
