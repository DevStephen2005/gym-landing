import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { z } from "zod";

const bmiSchema = z.object({
  height: z.number().min(100, "Height must be at least 100cm").max(250, "Height must be less than 250cm"),
  weight: z.number().min(20, "Weight must be at least 20kg").max(300, "Weight must be less than 300kg"),
});

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    setError("");
    
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    try {
      const validated = bmiSchema.parse({ height: heightNum, weight: weightNum });
      
      // BMI = weight (kg) / (height (m))^2
      const heightInMeters = validated.height / 100;
      const calculatedBMI = validated.weight / (heightInMeters * heightInMeters);
      
      setBmi(parseFloat(calculatedBMI.toFixed(1)));
      
      // Determine category
      if (calculatedBMI < 18.5) {
        setCategory("Underweight");
      } else if (calculatedBMI < 25) {
        setCategory("Normal Weight");
      } else if (calculatedBMI < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
      setBmi(null);
      setCategory("");
    }
  };

  const getCategoryColor = () => {
    if (category === "Normal Weight") return "text-green-500";
    if (category === "Underweight") return "text-yellow-500";
    if (category === "Overweight") return "text-orange-500";
    if (category === "Obese") return "text-red-500";
    return "";
  };

  return (
    <section id="bmi" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            BMI Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your Body Mass Index to understand your fitness level and set realistic goals.
          </p>
        </div>

        <Card className="border-border shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Calculator className="text-primary" size={32} />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="height" className="text-foreground">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-foreground">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-foreground"
                />
              </div>
            </div>

            {error && (
              <div className="text-destructive text-sm text-center p-2 bg-destructive/10 rounded">
                {error}
              </div>
            )}

            <Button 
              onClick={calculateBMI} 
              className="w-full"
              disabled={!height || !weight}
            >
              Calculate BMI
            </Button>

            {bmi !== null && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg text-center space-y-3">
                <p className="text-sm text-muted-foreground">Your BMI is</p>
                <p className="text-5xl font-bold text-primary">{bmi}</p>
                <p className={`text-xl font-semibold ${getCategoryColor()}`}>
                  {category}
                </p>
                <div className="pt-4 text-sm text-muted-foreground space-y-1">
                  <p>BMI Categories:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                    <div className="text-yellow-500">Underweight: &lt; 18.5</div>
                    <div className="text-green-500">Normal: 18.5 - 24.9</div>
                    <div className="text-orange-500">Overweight: 25 - 29.9</div>
                    <div className="text-red-500">Obese: ≥ 30</div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BMICalculator;
