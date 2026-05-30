"use client";

import Chart from "../components/chart";
import DiagnosticList from "../components/DiagnosticList";
import VitalCard from "../components/VitalCard";

export default function DiagnosticHistory() {
  return (
    <div>
      <p>DiagnosticHistory</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <Chart />
        <VitalCard />
        <DiagnosticList />
      </div>
    </div>
  );
}
