"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Cog, Box, Wrench, Shield } from "lucide-react";
import { useInView } from "@/hooks/use-inview";

export default function ForgePage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const heroSection = useInView();
  const categoriesSection = useInView();
  const imagesSection = useInView();
  const profileCardSection = useInView();

  const categoryContent = {
    "custom-brackets": {
      title: "Custom Brackets",
      role: "Precision Engineering Specialist",
      description:
        "Our custom brackets are engineered for exact specifications, providing reliable mounting solutions for complex assemblies. Each bracket undergoes rigorous quality testing to ensure perfect fit and long-lasting durability in demanding applications.",
      details:
        'We specialize in aluminum and steel brackets with tolerances as tight as ±0.001". Our advanced 5-axis machining centers can handle complex geometries while maintaining exceptional surface finishes. Perfect for aerospace, automotive, and industrial applications.',
    },
    "steel-adapters": {
      title: "Steel Adapters",
      role: "Materials Engineering Expert",
      description:
        "High-strength steel adapters designed to bridge compatibility gaps between different systems. Our adapters are precision-machined from premium steel alloys, ensuring maximum strength and corrosion resistance for critical applications.",
      details:
        "Using 4140 and 316 stainless steel, our adapters feature advanced heat treatment processes for optimal mechanical properties. Each piece is inspected with CMM technology to guarantee dimensional accuracy and structural integrity.",
    },
    "motor-mounts": {
      title: "Motor Mounts",
      role: "Vibration Control Specialist",
      description:
        "Engineered motor mounts that provide stable, vibration-dampened mounting for motors and engines. Our designs minimize noise transmission while maximizing structural integrity and ease of installation.",
      details:
        "Custom-designed for specific motor configurations, our mounts incorporate advanced damping materials and precision-machined interfaces. Suitable for electric motors, servo drives, and high-performance automotive applications.",
    },
    enclosures: {
      title: "Enclosures",
      role: "Protection Systems Engineer",
      description:
        "Robust enclosures that protect sensitive equipment from environmental hazards while maintaining optimal thermal management. Each enclosure is custom-designed for your specific protection requirements.",
      details:
        "Our enclosures feature IP65+ ratings with integrated cooling solutions and EMI shielding. Manufactured from aluminum and stainless steel with precision-sealed joints for maximum environmental protection.",
    },
  };

  const defaultContent = {
    title: "Ayrton Senna",
    role: "CEO & Senior Partner at Forge",
    description:
      "At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That's why we built a fully streamlined platform that turns your CAD files into production-ready parts—delivered in as fast as one day. Whether you're prototyping or scaling, we remove the friction from manufacturing so you can focus on building what matters.",
    details:
      "We operate high-performance CNC machines backed by in-house automation and a trusted network of suppliers. From one-off prototypes to small production runs, our system is built to deliver precise, high-quality parts with speed. You can also reserve your own dedicated CNC machine through our RM (Reserved Machines) offering—your own production line, without the overhead.",
  };

  const currentContent = selectedCategory
    ? categoryContent[selectedCategory as keyof typeof categoryContent]
    : hoveredCategory
    ? categoryContent[hoveredCategory as keyof typeof categoryContent]
    : defaultContent;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Badge */}
            <div
              ref={heroSection.ref}
              className={`inline-block transform transition-all duration-700 ${
                heroSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button variant="secondary" size="sm" className="rounded-full">
                ✦ About
              </Button>
            </div>

            {/* Headline */}
            <div
              className={`space-y-4 transform transition-all duration-700 delay-100 ${
                heroSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold font-serif leading-tight">
                Revolutionizing
                <br />
                Manufacturing with
                <br />
                Speed and <span className="italic text-primary">Precision</span>
              </h1>
            </div>

            {/* Categories */}
            <div
              ref={categoriesSection.ref}
              className={`space-y-4 transform transition-all duration-700 delay-150 ${
                categoriesSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {[
                { id: "custom-brackets", label: "Custom Brackets", icon: Cog },
                { id: "steel-adapters", label: "Steel Adapters", icon: Box },
                { id: "motor-mounts", label: "Motor Mounts", icon: Wrench },
                { id: "enclosures", label: "Enclosures", icon: Shield },
              ].map(({ id, label, icon: Icon }, idx) => (
                <div
                  key={id}
                  className={`flex items-center gap-4 group cursor-pointer transform transition-all duration-300 hover:translate-x-2 hover:scale-105 p-3 rounded-lg hover:bg-card/50 ${
                    selectedCategory === id
                      ? "bg-card/70 translate-x-2 scale-105"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredCategory(id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => setSelectedCategory(id)}
                >
                  <span
                    className={`text-muted-foreground text-sm group-hover:text-primary transition-colors ${
                      selectedCategory === id ? "text-primary" : ""
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <Icon
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      selectedCategory === id ? "rotate-12" : ""
                    }`}
                  />
                  <span
                    className={`text-lg group-hover:text-primary transition-colors font-medium ${
                      selectedCategory === id ? "text-primary" : ""
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Product Images */}
            <div
              ref={imagesSection.ref}
              className={`grid grid-cols-3 gap-4 mt-12 transform transition-all duration-700 delay-200 ${
                imagesSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {["/image1.jpg", "/image2.jpg", "/image3.jpg"].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square bg-card rounded-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Product ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Profile Card */}
          <div
            ref={profileCardSection.ref}
            className={`transform transition-all duration-700 delay-300 ${
              profileCardSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {currentContent.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentContent.role}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>{currentContent.description}</p>
                <p>{currentContent.details}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                  EVERY DETAIL MATTERS — WE CRAFT EACH PART WITH CARE, ACCURACY,
                  AND A FINISH THAT FEELS JUST RIGHT.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
