import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DeviceCardProps {
  dispozitivId: string;
  consum_kWh: number;
  state: "ON" | "OFF";
  recommendation?: string;
}

export default function DeviceCard({
  dispozitivId,
  consum_kWh,
  state,
  recommendation,
}: DeviceCardProps) {
  const isHighConsumption = consum_kWh > 5;

  return (
    <Card className="w-[300px] bg-white">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Device {dispozitivId}
          <Badge variant={state === "ON" ? "default" : "secondary"}>
            {state}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span>Consumption:</span>
          <span
            className={isHighConsumption ? "text-red-500" : "text-green-500"}
          >
            {consum_kWh} kWh
          </span>
        </div>
        {recommendation && (
          <p className="text-sm text-muted-foreground">{recommendation}</p>
        )}
      </CardContent>
    </Card>
  );
}
