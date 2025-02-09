import React from "react";
import ConsumptionChart from "./ConsumptionChart";
import DeviceStatusGrid from "./DeviceStatusGrid";
import ConsumptionForm from "./ConsumptionForm";
import OptimizationReport from "./OptimizationReport";

interface DashboardProps {
  consumptionData?: {
    time: string;
    consumption: number;
    isPeak: boolean;
  }[];
  devices?: {
    dispozitivId: string;
    consum_kWh: number;
    state: "ON" | "OFF";
    recommendation: string;
  }[];
  optimizationReport?: {
    dispozitivId: string;
    consum_kWh: number;
    recomandare: string;
    economii: number;
  }[];
}

export default function Dashboard({
  consumptionData,
  devices,
  optimizationReport,
}: DashboardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 space-y-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Energy Dashboard
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
          {/* Left column - Consumption Form */}
          <div className="lg:col-span-1">
            <ConsumptionForm />
          </div>

          {/* Right column - Consumption Chart */}
          <div className="lg:col-span-2">
            <ConsumptionChart data={consumptionData} />
          </div>
        </div>

        {/* Device Status Grid - Full width */}
        <div className="w-full">
          <DeviceStatusGrid devices={devices} />
        </div>

        {/* Optimization Report - Full width */}
        <div className="w-full">
          <OptimizationReport report={optimizationReport} />
        </div>
      </div>
    </div>
  );
}
