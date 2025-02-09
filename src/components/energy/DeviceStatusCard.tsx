import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Power, AlertTriangle, CheckCircle } from "lucide-react";

interface DeviceStatusCardProps {
  dispozitivId: string;
  consum_kWh: number;
  state: "ON" | "OFF";
  recommendation: string;
}

export default function DeviceStatusCard({
  dispozitivId = "Device-001",
  consum_kWh = 5.5,
  state = "ON",
  recommendation = "Consider optimizing usage during peak hours",
}: DeviceStatusCardProps) {
  const getStatusColor = (state: string, consumption: number) => {
    if (state === "OFF") return "bg-gray-100";
    return consumption > 5 ? "bg-red-50" : "bg-green-50";
  };

  const getStatusBadge = (state: string) => {
    return state === "ON" ? (
      <Badge className="bg-green-500">
        <Power className="w-3 h-3 mr-1" /> Active
      </Badge>
    ) : (
      <Badge variant="secondary">
        <Power className="w-3 h-3 mr-1" /> Inactive
      </Badge>
    );
  };

  const getConsumptionStatus = (consumption: number) => {
    if (consumption > 5) {
      return {
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        text: "High Consumption",
        color: "text-red-500",
      };
    }
    return {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Optimal Consumption",
      color: "text-green-500",
    };
  };

  const consumptionStatus = getConsumptionStatus(consum_kWh);

  return (
    <Card
      className={`${getStatusColor(state, consum_kWh)} border-2 transform hover:scale-[1.02] transition-all duration-200 hover:shadow-lg group motion-safe:animate-fadeIn`}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">
            {dispozitivId}
          </CardTitle>
          {getStatusBadge(state)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Consumption</span>
            <span className="text-lg font-medium">{consum_kWh} kWh</span>
          </div>

          <div className="flex items-center gap-2">
            {consumptionStatus.icon}
            <span className={`text-sm ${consumptionStatus.color}`}>
              {consumptionStatus.text}
            </span>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium mb-2">Recommendation</h4>
            <p className="text-sm text-gray-600">{recommendation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
