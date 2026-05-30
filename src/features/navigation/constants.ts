import patientsIcon from "./assets/patientsIcon.svg";
import scheduleIcon from "./assets/scheduleIcon.svg";
import transactionsIcon from "./assets/transactionsIcon.svg";
import messagesIcon from "./assets/messagesIcon.svg";
import overviewIcon from "./assets/overviewIcon.svg";
export const DASHBOARD_ROUTES = {
  OVERVIEW: "/overview",
  PATIENTS: "/",        
  SCHEDULE: "/schedule",
  MESSAGES: "/messages",
  TRANSACTIONS: "/transactions",
} as const;

export interface NavItem {
  label: string;
  path: typeof DASHBOARD_ROUTES[keyof typeof DASHBOARD_ROUTES];
  iconName: string; 
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Overview",
    path: DASHBOARD_ROUTES.OVERVIEW,
    iconName: overviewIcon,
  },
  {
    label: "Patients",
    path: DASHBOARD_ROUTES.PATIENTS,
    iconName: patientsIcon,
  },
  {
    label: "Schedule",
    path: DASHBOARD_ROUTES.SCHEDULE,
    iconName:scheduleIcon,
  },
  {
    label: "Messages",
    path: DASHBOARD_ROUTES.MESSAGES,
    iconName: messagesIcon,
  },
  {
    label: "Transactions",
    path: DASHBOARD_ROUTES.TRANSACTIONS,
    iconName: transactionsIcon,
  },
];