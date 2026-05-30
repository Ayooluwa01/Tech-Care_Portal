
export interface BloodPressureReading {
  value: number;
  status: "Normal" | "Lower than Average" | "Higher than Average";
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: {
    systolic: BloodPressureReading;
    diastolic: BloodPressureReading;
  };
  heart_rate: {
    value: number;
    status: string;
  };
  respiratory_rate: {
    value: number;
    status: string;
  };
  temperature: {
    value: number;
    status: string;
  };
}

export interface DiagnosticList {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: "Male" | "Female";
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticList[];
  lab_results: string[];
}