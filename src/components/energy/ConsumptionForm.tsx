import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ConsumptionFormProps {
  onSubmit?: (data: { kWh: string; cost: string; device: string }) => void;
}

export default function ConsumptionForm({
  onSubmit = () => {},
}: ConsumptionFormProps) {
  const [formData, setFormData] = React.useState({
    kWh: "",
    cost: "",
    device: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardHeader>
        <CardTitle>Energy Consumption Input</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 h-[400px] flex flex-col justify-between"
        >
          <div className="space-y-2">
            <Label htmlFor="kWh">Energy Consumption (kWh)</Label>
            <Input
              id="kWh"
              type="number"
              placeholder="Enter kWh"
              value={formData.kWh}
              onChange={(e) =>
                setFormData({ ...formData, kWh: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cost">Cost</Label>
            <Input
              id="cost"
              type="number"
              placeholder="Enter cost"
              value={formData.cost}
              onChange={(e) =>
                setFormData({ ...formData, cost: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="device">Device</Label>
            <Select
              value={formData.device}
              onValueChange={(value) =>
                setFormData({ ...formData, device: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select device" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="refrigerator">Refrigerator</SelectItem>
                <SelectItem value="washing-machine">Washing Machine</SelectItem>
                <SelectItem value="dishwasher">Dishwasher</SelectItem>
                <SelectItem value="air-conditioner">Air Conditioner</SelectItem>
                <SelectItem value="water-heater">Water Heater</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
