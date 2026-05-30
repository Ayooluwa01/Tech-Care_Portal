// src/features/navigation/components/TopNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, DASHBOARD_ROUTES } from "../constants";
import { Text } from "@/components/ui/Texts";
import Testlogo from "../assets/TestLogo.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import moreIcon from "../assets/moreIcon.svg";
import femaleDoctor from "../assets/femaleDoctor.png";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-[1564px] mx-auto mt-[18px] bg-white h-[72px] px-8 flex items-center justify-between rounded-[70px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] border border-[#E3E4E6] opacity-100 transition-all">
      {/*  Logo  */}
      <div className="flex items-center">
        <Icon src={Testlogo} alt="Tech.Care Logo" width={211} height={48} />
      </div>

      {/* links */}
      <nav className="hidden md:flex items-center gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.path === DASHBOARD_ROUTES.PATIENTS
              ? pathname === DASHBOARD_ROUTES.PATIENTS
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`h-10 px-4 flex items-center gap-2 transition-all duration-150 rounded-[70px] ${
                isActive
                  ? "bg-[#01F0D0] text-[#07263E] font-bold"
                  : "text-[#707070] hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center">
                <Icon
                  src={item.iconName}
                  alt="Tech.Care Logo"
                  width={16}
                  height={17}
                  className="object-contain"
                />
              </div>

              <Text
                variant="body"
                className={
                  isActive ? "text-[#07263E]  " : "text-[#707070] font-[500]"
                }
              >
                {item.label}
              </Text>
            </Link>
          );
        })}
      </nav>

      {/* Right Column Profile Settings Utility Box */}
      <div className="flex items-center gap-3">
        <Icon src={femaleDoctor} alt="Tech.Care Logo" width={44} height={44} />

        <div className="hidden lg:flex flex-col text-left pr-3 border-r border-[#E3E4E6]">
          <Text
            variant="body"
            className="text-[#07263E] text-[14px] font-[700] leading-none"
          >
            Dr. Jose Simmons
          </Text>
          <Text
            variant="caption"
            className="text-[#707070] text-[12px] mt-1 font-[400]"
          >
            General Practitioner
          </Text>
        </div>

        <button className="p-1 hover:bg-gray-50 rounded-full transition-colors flex gap-2 ">
          {/* settings icon */}
          <Icon
            src={settingsIcon}
            alt="Tech.Care Logo"
            width={19}
            height={17}
          />

          {/* More icon */}
          <Icon src={moreIcon} alt="Tech.Care Logo" width={4} height={4} />
        </button>
      </div>
    </header>
  );
}
