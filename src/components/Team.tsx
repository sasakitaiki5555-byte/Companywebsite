import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Github, Twitter } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjI3NjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjI3NjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjI3NjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjI3NjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl mb-1">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
