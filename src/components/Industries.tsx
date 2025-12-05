import { Card } from "./ui/card";
import { ShoppingCart, DollarSign, GraduationCap, Heart, Activity } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industries = [
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Build scalable online marketplaces, shopping platforms, and retail solutions",
    solutions: [
      "Multi-vendor marketplaces",
      "B2B/B2C e-commerce platforms",
      "Inventory management systems",
      "Payment gateway integrations",
      "Order fulfillment automation"
    ],
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    icon: DollarSign,
    title: "Fintech",
    description: "Secure, compliant financial technology solutions for modern banking",
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Cryptocurrency exchanges",
      "Robo-advisory platforms",
      "Fraud detection systems"
    ],
    image: "https://images.unsplash.com/photo-1726137065566-153debe32a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Innovative educational platforms that enhance learning experiences",
    solutions: [
      "Learning management systems",
      "Virtual classroom platforms",
      "Student information systems",
      "E-learning content delivery",
      "Assessment and grading tools"
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare solutions for better patient outcomes",
    solutions: [
      "Telemedicine platforms",
      "Electronic health records",
      "Patient management systems",
      "Medical imaging solutions",
      "Healthcare analytics"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    icon: Activity,
    title: "Fitness",
    description: "Engage users with fitness tracking, training, and wellness apps",
    solutions: [
      "Fitness tracking apps",
      "Workout planning platforms",
      "Nutrition and meal planning",
      "Wearable device integration",
      "Virtual training sessions"
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

export function Industries() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Industries We Serve</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver specialized software solutions across diverse industries, combining technical expertise with deep domain knowledge
          </p>
        </div>

        <div className="space-y-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card key={index} className="overflow-hidden border-slate-200">
                <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${!isEven ? 'md:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <IconComponent className="h-8 w-8 text-slate-900" />
                      </div>
                      <h3 className="text-3xl">{industry.title}</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6">{industry.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-lg mb-3">Our Solutions:</h4>
                      {industry.solutions.map((solution, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-2">
                          <span className="text-slate-400 mt-1">•</span>
                          <span className="text-slate-700">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative h-64 md:h-auto ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
