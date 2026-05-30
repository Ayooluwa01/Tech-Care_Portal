// src/features/patients/services/getPatientsServer.ts
import { api } from "@/services/api";
import { Patient } from "../types";

export async function getPatients(): Promise<Patient[]> {
  try {
    const response = await api.get<Patient[]>("");
    return response.data;
  } catch (error: any) {
    console.error("❌ Server Fetch Pipeline Failure:", error.response?.data || error.message);
    throw error;
  }
}