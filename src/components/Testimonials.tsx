import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Rodriguez",
      result: "Lost 28kg in 7 months",
      content: "FitPro Gym changed my life! The trainers are incredibly supportive and the personalized program helped me lose weight safely. I've never felt better!",
      avatar: "JR",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      result: "Gained confidence & strength",
      content: "Best decision I ever made! The community here is amazing and the trainers really care about your progress. I'm stronger than I've ever been.",
      avatar: "LT",
      rating: 5,
    },
    {
      name: "David Chen",
      result: "Transformed in 6 months",
      content: "The online coaching option is perfect for my busy schedule. I can train at home and still get expert guidance. Results speak for themselves!",
      avatar: "DC",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our members who have achieved incredible results with FitPro Gym.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Quote className="text-primary/30" size={32} />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-foreground italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
