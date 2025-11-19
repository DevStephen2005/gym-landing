import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions that streamline workflows and boost productivity.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your business with enterprise-grade security measures and ensure full compliance with industry standards.",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Scale your business with data-driven strategies and expert guidance tailored to your unique market position.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your business needs and exceed expectations.
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
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
