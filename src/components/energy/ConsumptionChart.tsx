import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

interface ConsumptionData {
  time: string;
  consumption: number;
  isPeak: boolean;
}

interface ConsumptionChartProps {
  data: ConsumptionData[];
}

export default function ConsumptionChart({
  data = [
    { time: "00:00", consumption: 2.5, isPeak: false },
    { time: "04:00", consumption: 1.8, isPeak: false },
    { time: "08:00", consumption: 3.2, isPeak: false },
    { time: "12:00", consumption: 4.5, isPeak: false },
    { time: "16:00", consumption: 5.1, isPeak: false },
    { time: "18:00", consumption: 7.2, isPeak: true },
    { time: "20:00", consumption: 6.8, isPeak: true },
    { time: "22:00", consumption: 4.2, isPeak: false },
  ],
}: ConsumptionChartProps) {
  return (
    <Card className="w-full h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardHeader>
        <CardTitle>Daily Energy Consumption</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: "Time", position: "bottom" }}
              />
              <YAxis
                label={{
                  value: "Consumption (kWh)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as ConsumptionData;
                    return (
                      <div className="bg-white p-4 border rounded shadow-lg">
                        <p className="font-bold">{`Time: ${label}`}</p>
                        <p className="text-sm">{`Consumption: ${payload[0].value} kWh`}</p>
                        {data.isPeak && (
                          <p className="text-red-500 text-sm">Peak Hours</p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="consumption"
                fill="url(#colorGradient)"
                stroke="#22c55e"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              {/* Highlight peak hours with different color */}
              <Line
                type="monotone"
                data={data.filter((d) => d.isPeak)}
                dataKey="consumption"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: "#ef4444" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
