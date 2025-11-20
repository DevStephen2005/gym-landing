import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  mobile: z.string().trim().min(10, "Please enter a valid mobile number").max(15, "Mobile number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  goal: z.string().trim().min(10, "Please describe your fitness goal (min 10 characters)").max(500, "Goal description is too long"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    goal: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        goal: formData.goal,
      };

      await emailjs.send(
        'service_5zpjmmq',
        'template_f00lj4p',
        templateParams,
        'eca_Lx9WHdjW0wQqV'
      );
      
      toast({
        title: "Booking request sent!",
        description: "We'll contact you within 24 hours to schedule your free trial.",
      });
      
      // Reset form
      setFormData({ name: "", mobile: "", email: "", goal: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Book Your Free Trial
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your fitness journey? Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile" className="text-sm font-medium text-foreground">
              Mobile Number *
            </label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+1234567890"
              className={errors.mobile ? "border-destructive" : ""}
            />
            {errors.mobile && (
              <p className="text-sm text-destructive">{errors.mobile}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="goal" className="text-sm font-medium text-foreground">
              Your Fitness Goal *
            </label>
            <Textarea
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="Tell us about your fitness goals, current fitness level, and what you want to achieve..."
              rows={6}
              className={errors.goal ? "border-destructive" : ""}
            />
            {errors.goal && (
              <p className="text-sm text-destructive">{errors.goal}</p>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Book Free Trial"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
