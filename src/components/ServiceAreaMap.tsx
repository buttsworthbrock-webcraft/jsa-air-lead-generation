import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin, CheckCircle } from "lucide-react";

interface Region {
  id: string;
  name: string;
  path: string;
  labelX: number;
  labelY: number;
}

const regions: Region[] = [
  {
    id: "newcastle",
    name: "Newcastle",
    path: "M280 80 L340 60 L400 75 L420 120 L400 170 L340 185 L280 160 L270 120 Z",
    labelX: 345,
    labelY: 125,
  },
  {
    id: "lake-macquarie",
    name: "Lake Macquarie",
    path: "M280 160 L340 185 L400 170 L430 220 L420 300 L350 340 L270 310 L240 250 L250 190 Z",
    labelX: 340,
    labelY: 255,
  },
  {
    id: "maitland",
    name: "Maitland",
    path: "M150 50 L230 35 L280 80 L270 120 L280 160 L250 190 L180 170 L140 130 L130 90 Z",
    labelX: 200,
    labelY: 110,
  },
  {
    id: "cessnock",
    name: "Cessnock",
    path: "M60 120 L130 90 L140 130 L180 170 L250 190 L240 250 L270 310 L200 350 L100 320 L50 250 L40 180 Z",
    labelX: 150,
    labelY: 230,
  },
  {
    id: "port-stephens",
    name: "Port Stephens",
    path: "M400 75 L480 50 L540 70 L560 130 L530 180 L460 190 L420 120 Z",
    labelX: 480,
    labelY: 120,
  },
];

const ServiceAreaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-labelledby="service-area-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Service Coverage
          </div>
          <h2
            id="service-area-heading"
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Areas We Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proudly serving Newcastle and the Greater Hunter Region with
            professional air conditioning services.
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary/5 rounded-3xl p-6 md:p-10 border-2 border-primary/20">
            <div className="relative">
              <svg
                viewBox="0 0 600 400"
                className="w-full h-auto"
                role="img"
                aria-label="Interactive map of Newcastle and Hunter Region service areas"
              >
                {/* Background */}
                <rect
                  x="0"
                  y="0"
                  width="600"
                  height="400"
                  fill="hsl(var(--secondary))"
                  rx="16"
                />

                {/* Decorative coastline */}
                <path
                  d="M420 120 Q500 80 560 70 L600 60 L600 400 L500 400 Q480 350 450 300 Q430 250 430 220 Z"
                  fill="hsl(var(--accent))"
                  fillOpacity="0.2"
                />

                {/* Grid lines for visual interest */}
                {[100, 200, 300, 400, 500].map((x) => (
                  <line
                    key={`v-${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="400"
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />
                ))}
                {[100, 200, 300].map((y) => (
                  <line
                    key={`h-${y}`}
                    x1="0"
                    y1={y}
                    x2="600"
                    y2={y}
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />
                ))}

                {/* Regions */}
                {regions.map((region, index) => {
                  const isHovered = hoveredRegion === region.id;
                  const isNewcastle = region.id === "newcastle";

                  return (
                    <g key={region.id}>
                      {/* Shadow/glow effect */}
                      {isHovered && (
                        <path
                          d={region.path}
                          fill="hsl(var(--accent))"
                          fillOpacity="0.3"
                          style={{
                            transform: "translate(4px, 4px)",
                            filter: "blur(8px)",
                          }}
                        />
                      )}

                      {/* Main region shape */}
                      <path
                        d={region.path}
                        className="cursor-pointer"
                        fill={isHovered ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                        stroke={isHovered ? "hsl(var(--accent))" : "hsl(var(--primary-foreground))"}
                        strokeWidth={isHovered ? "3" : "2"}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isHovered ? "scale(1.02)" : "scale(1)",
                          transformOrigin: `${region.labelX}px ${region.labelY}px`,
                          transition: `opacity 0.5s ease-out ${index * 0.1}s, fill 0.3s, stroke 0.3s, transform 0.3s, stroke-width 0.3s`,
                        }}
                        onMouseEnter={() => setHoveredRegion(region.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${region.name} - We service this area`}
                        onFocus={() => setHoveredRegion(region.id)}
                        onBlur={() => setHoveredRegion(null)}
                      />

                      {/* Region label */}
                      <text
                        x={region.labelX}
                        y={region.labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="pointer-events-none font-semibold"
                        fill={isHovered ? "hsl(var(--accent-foreground))" : "hsl(var(--primary-foreground))"}
                        fontSize="14"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transition: `opacity 0.5s ease-out ${index * 0.1 + 0.2}s`,
                        }}
                      >
                        {region.name}
                      </text>

                      {/* Newcastle hub indicator */}
                      {isNewcastle && (
                        <>
                          {/* Outer pulse ring */}
                          <circle
                            cx={region.labelX}
                            cy={region.labelY + 25}
                            r="18"
                            fill="none"
                            stroke="hsl(var(--cta))"
                            strokeWidth="2"
                            className="animate-ping"
                            style={{
                              opacity: isVisible ? 0.5 : 0,
                              animationDuration: "2s",
                              transition: `opacity 0.5s ease-out 0.5s`,
                            }}
                          />
                          {/* Primary hub dot */}
                          <circle
                            cx={region.labelX}
                            cy={region.labelY + 25}
                            r="10"
                            fill="hsl(var(--cta))"
                            className="animate-pulse"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transition: `opacity 0.5s ease-out 0.5s`,
                            }}
                          />
                          <circle
                            cx={region.labelX}
                            cy={region.labelY + 25}
                            r="5"
                            fill="hsl(var(--cta-foreground))"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transition: `opacity 0.5s ease-out 0.6s`,
                            }}
                          />
                        </>
                      )}
                    </g>
                  );
                })}

                {/* Compass indicator */}
                <g transform="translate(50, 350)">
                  <circle r="20" fill="hsl(var(--primary))" fillOpacity="0.8" />
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="hsl(var(--primary-foreground))"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    N
                  </text>
                  <path
                    d="M0 -25 L5 -15 L0 -18 L-5 -15 Z"
                    fill="hsl(var(--cta))"
                  />
                </g>
              </svg>

              {/* Floating tooltip */}
              {hoveredRegion && (
                <div className="absolute top-4 right-4 bg-card border-2 border-accent shadow-xl rounded-xl px-5 py-4 z-10 animate-fade-in">
                  <p className="font-bold text-foreground text-lg">
                    {regions.find((r) => r.id === hoveredRegion)?.name}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm mt-1">
                    <CheckCircle className="w-4 h-4" aria-hidden="true" />
                    <span>We Service This Area</span>
                  </div>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-primary border-2 border-primary-foreground/20" aria-hidden="true" />
                <span className="text-foreground font-medium">Service Area</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-accent" aria-hidden="true" />
                <span className="text-foreground font-medium">Hover to Explore</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-cta animate-pulse" aria-hidden="true" />
                <span className="text-foreground font-medium">Primary Hub</span>
              </div>
            </div>
          </div>

          {/* CTA below map */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4 text-lg">
              Don't see your area? Contact us – we may still be able to help!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cta/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 shadow-lg"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
