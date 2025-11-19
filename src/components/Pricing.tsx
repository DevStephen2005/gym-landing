import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Gym access (6am-10pm)",
        "Basic equipment access",
        "Locker room facilities",
        "2 group classes per week",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$89",
      period: "/month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "24/7 gym access",
        "All equipment access",
        "Unlimited group classes",
        "Free guest passes (2/month)",
        "Nutrition consultation",
        "Personal training (1 session/month)",
        "Mobile app + meal plans",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$149",
      period: "/month",
      description: "Ultimate package for maximum results",
      features: [
        "Everything in Standard",
        "Personal training (4 sessions/month)",
        "Customized workout plans",
        "Body composition analysis",
        "Priority class booking",
        "Spa & sauna access",
        "Free supplements",
        "Online coaching access",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Membership Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your fitness goals. All plans include access to our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border hover:shadow-lg transition-all ${
                plan.popular ? "border-primary shadow-md md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center space-y-4 pt-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
