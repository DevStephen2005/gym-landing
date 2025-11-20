import { Card } from "@/components/ui/card";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";
import transformation4 from "@/assets/transformation-4.jpg";

const TransformationGallery = () => {
  const transformations = [
    {
      name: "John's Journey",
      duration: "6 months",
      result: "Lost 30kg",
      image: transformation1,
    },
    {
      name: "Sarah's Success",
      duration: "4 months",
      result: "Gained 8kg muscle",
      image: transformation2,
    },
    {
      name: "Mike's Transformation",
      duration: "8 months",
      result: "Lost 25kg",
      image: transformation3,
    },
    {
      name: "Emily's Progress",
      duration: "5 months",
      result: "Body recomposition",
      image: transformation4,
    },
  ];

  return (
    <section id="transformations" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Transformation Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real people. See how our members have transformed their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((transformation, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border hover:shadow-lg transition-all group"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={transformation.image} 
                  alt={`${transformation.name} - ${transformation.result}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-4">
                  <h3 className="font-bold text-primary-foreground mb-1">{transformation.name}</h3>
                  <div className="flex justify-between text-xs text-primary-foreground/80">
                    <span>{transformation.duration}</span>
                    <span className="font-semibold text-accent">{transformation.result}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            * Individual results may vary. Photos show real client transformations with proper training and nutrition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
