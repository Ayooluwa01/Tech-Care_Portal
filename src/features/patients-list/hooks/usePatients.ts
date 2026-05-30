// src/features/patients/hooks/usePatients.ts
"use client";

import { api } from "@/services/api";
import { Patient } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/getPatientServer";

// async function getPatients(): Promise<Patient[]> {
//   try {
    
//     const response = await api.get<Patient[]>("");
    
//     console.log("📦 Payload Data Sample:", response.data ? response.data : "No data");
    
//     return response.data;
//   } catch (error: any) {
//     if (error.response) {
//       console.log("Response Body data context:", error.response.data);
//     } else if (error.request) {
//       console.log("No response was received from server. Network/CORS block?", error.request);
//     } else {
//       console.log("Error configuration setup failure message:", error.message);
//     }
//     throw error;
//   }
// }


export function usePatients(initialPatients?: Patient[]) {
  return useQuery<Patient[]>({
    queryKey: ["patients"],
    queryFn: ()=>getPatients(),
    initialData: initialPatients,
    retry: 1,
  });
}