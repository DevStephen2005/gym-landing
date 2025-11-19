import { Card, CardContent } from "@/components/ui/card";
import { User, TrendingDown, MonitorPlay } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your fitness goals. Get personalized workout plans and nutrition guidance.",
    },
    {
      icon: TrendingDown,
      title: "Weight Loss Program",
      description: "Comprehensive weight loss program combining cardio, strength training, and dietary advice to help you shed pounds safely.",
    },
    {
      icon: MonitorPlay,
      title: "Online Coaching",
      description: "Train from anywhere with our virtual coaching. Get workout plans, video tutorials, and live check-ins with expert trainers.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional fitness services designed to help you reach your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
