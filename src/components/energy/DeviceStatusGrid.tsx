import React from "react";
import DeviceStatusCard from "./DeviceStatusCard";

interface Device {
  dispozitivId: string;
  consum_kWh: number;
  state: "ON" | "OFF";
  recommendation: string;
}

interface DeviceStatusGridProps {
  devices: Device[];
}

export default function DeviceStatusGrid({
  devices = [
    {
      dispozitivId: "Device-001",
      consum_kWh: 6.5,
      state: "ON",
      recommendation: "Consider reducing usage during peak hours",
    },
    {
      dispozitivId: "Device-002",
      consum_kWh: 3.2,
      state: "OFF",
      recommendation: "Current usage pattern is optimal",
    },
    {
      dispozitivId: "Device-003",
      consum_kWh: 8.1,
      state: "ON",
      recommendation: "High consumption detected, consider immediate action",
    },
  ],
}: DeviceStatusGridProps) {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceStatusCard
            key={device.dispozitivId}
            dispozitivId={device.dispozitivId}
            consum_kWh={device.consum_kWh}
            state={device.state}
            recommendation={device.recommendation}
          />
        ))}
      </div>
    </div>
  );
}
