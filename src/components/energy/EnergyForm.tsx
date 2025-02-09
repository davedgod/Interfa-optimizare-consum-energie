import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface EnergyFormData {
  consum_kWh: number;
  cost: number;
  dispozitivId: string;
}

export default function EnergyForm() {
  const [formData, setFormData] = useState<EnergyFormData>({
    consum_kWh: 0,
    cost: 0,
    dispozitivId: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call
    console.log("Submitting:", formData);
  };

  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle>Energy Consumption Input</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label>Device ID</label>
            <Input
              type="text"
              value={formData.dispozitivId}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  dispozitivId: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label>Consumption (kWh)</label>
            <Input
              type="number"
              min="0"
              value={formData.consum_kWh}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  consum_kWh: parseFloat(e.target.value),
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label>Cost</label>
            <Input
              type="number"
              min="0"
              value={formData.cost}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  cost: parseFloat(e.target.value),
                }))
              }
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
