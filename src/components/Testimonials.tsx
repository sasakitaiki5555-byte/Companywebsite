import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    company: "TechCorp Inc.",
    role: "CEO",
    content: "Working with this team has been transformative for our business. They delivered a solution that exceeded our expectations in both quality and timeline.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    company: "InnovateLabs",
    role: "Product Manager",
    content: "Their technical expertise and communication throughout the project were outstanding. They truly understand modern software development.",
    rating: 5,
  },
  {
    name: "James Brown",
    company: "StartupXYZ",
    role: "Founder",
    content: "From ideation to deployment, they were with us every step of the way. The final product has helped us scale rapidly.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Client Testimonials</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">{testimonial.content}</p>
              <div>
                <div className="text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
