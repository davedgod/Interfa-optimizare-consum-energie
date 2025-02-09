import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, AlertCircle, CheckCircle } from "lucide-react";

interface ReportItem {
  dispozitivId: string;
  consum_kWh: number;
  recomandare: string;
  economii: number;
}

interface OptimizationReportProps {
  report: ReportItem[];
}

export default function OptimizationReport({
  report = [
    {
      dispozitivId: "Device-001",
      consum_kWh: 6.5,
      recomandare: "Reduce usage during peak hours",
      economii: 0.65,
    },
    {
      dispozitivId: "Device-002",
      consum_kWh: 3.2,
      recomandare: "Optimal consumption",
      economii: 0,
    },
    {
      dispozitivId: "Device-003",
      consum_kWh: 8.1,
      recomandare: "Consider replacement with energy-efficient model",
      economii: 1.2,
    },
  ],
}: OptimizationReportProps) {
  const totalSavings = report.reduce((acc, item) => acc + item.economii, 0);
  const totalConsumption = report.reduce(
    (acc, item) => acc + item.consum_kWh,
    0,
  );

  const getStatusIcon = (savings: number) => {
    if (savings > 1) {
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    } else if (savings > 0) {
      return <TrendingDown className="w-5 h-5 text-yellow-500" />;
    }
    return <CheckCircle className="w-5 h-5 text-green-500" />;
  };

  return (
    <Card className="bg-white border-2 shadow-lg hover:shadow-xl transition-shadow duration-200 motion-safe:animate-fadeIn">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">
            Optimization Report
          </CardTitle>
          <Badge variant="outline" className="text-sm px-3 py-1">
            Total Potential Savings: {totalSavings.toFixed(2)} kWh
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                Total Consumption
              </h3>
              <p className="text-2xl font-bold">
                {totalConsumption.toFixed(2)} kWh
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                Optimization Potential
              </h3>
              <p className="text-2xl font-bold text-green-600">
                {((totalSavings / totalConsumption) * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {report.map((item) => (
              <div
                key={item.dispozitivId}
                className="py-4 flex items-start justify-between"
              >
                <div className="flex items-start space-x-3">
                  {getStatusIcon(item.economii)}
                  <div>
                    <h4 className="font-medium">{item.dispozitivId}</h4>
                    <p className="text-sm text-gray-600">{item.recomandare}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.consum_kWh} kWh</p>
                  {item.economii > 0 && (
                    <p className="text-sm text-green-600">
                      Potential saving: {item.economii} kWh
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
