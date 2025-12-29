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
    path: "M180 120 L220 100 L260 110 L270 140 L250 170 L210 175 L175 155 Z",
    labelX: 220,
    labelY: 140,
  },
  {
    id: "lake-macquarie",
    name: "Lake Macquarie",
    path: "M175 155 L210 175 L250 170 L270 200 L260 250 L220 270 L170 250 L150 200 Z",
    labelX: 210,
    labelY: 215,
  },
  {
    id: "maitland",
    name: "Maitland",
    path: "M120 80 L180 70 L220 100 L180 120 L175 155 L150 200 L100 180 L90 130 Z",
    labelX: 145,
    labelY: 130,
  },
  {
    id: "cessnock",
    name: "Cessnock",
    path: "M50 150 L90 130 L100 180 L150 200 L170 250 L130 280 L70 260 L40 210 Z",
    labelX: 100,
    labelY: 210,
  },
  {
    id: "port-stephens",
    name: "Port Stephens",
    path: "M260 110 L310 90 L350 100 L360 140 L340 180 L300 190 L270 140 Z",
    labelX: 310,
    labelY: 140,
  },
];

const ServiceAreaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<SVGElement>, region: Region) => {
    const svg = e.currentTarget.closest("svg");
    if (svg) {
      const rect = svg.getBoundingClientRect();
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 60,
      });
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-secondary/30 transition-all duration-700 ${
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg p-6 md:p-10 border border-border/50">
            <div className="relative">
              <svg
                viewBox="0 0 400 320"
                className="w-full h-auto"
                role="img"
                aria-label="Interactive map of Newcastle and Hunter Region service areas"
              >
                {/* Background water/coast effect */}
                <defs>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ocean/background */}
                <rect
                  x="0"
                  y="0"
                  width="400"
                  height="320"
                  fill="url(#oceanGradient)"
                  rx="12"
                />

                {/* Coastline decoration */}
                <path
                  d="M270 140 Q300 120 350 100 Q380 90 400 85 L400 320 L360 320 Q340 280 300 250 Q270 220 270 200 Z"
                  fill="hsl(var(--accent))"
                  fillOpacity="0.15"
                />

                {/* Regions */}
                {regions.map((region, index) => (
                  <g key={region.id}>
                    <path
                      d={region.path}
                      className={`cursor-pointer transition-all duration-300 ${
                        hoveredRegion === region.id
                          ? "fill-accent stroke-accent"
                          : "fill-primary stroke-primary-foreground/20"
                      }`}
                      strokeWidth="2"
                      style={{
                        transform: hoveredRegion === region.id ? "scale(1.02)" : "scale(1)",
                        transformOrigin: `${region.labelX}px ${region.labelY}px`,
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity 0.5s ease-out ${index * 0.1}s, fill 0.3s, transform 0.3s`,
                      }}
                      onMouseEnter={() => setHoveredRegion(region.id)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      onMouseMove={(e) => handleMouseMove(e, region)}
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
                      className={`text-xs font-medium pointer-events-none transition-all duration-300 ${
                        hoveredRegion === region.id
                          ? "fill-accent-foreground"
                          : "fill-primary-foreground"
                      }`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity 0.5s ease-out ${index * 0.1 + 0.2}s`,
                      }}
                    >
                      {region.name}
                    </text>
                  </g>
                ))}

                {/* Newcastle pulsing dot (primary hub) */}
                <g className="pointer-events-none">
                  <circle
                    cx="220"
                    cy="140"
                    r="8"
                    className="fill-cta animate-pulse"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "opacity 0.5s ease-out 0.5s",
                    }}
                  />
                  <circle
                    cx="220"
                    cy="140"
                    r="4"
                    className="fill-cta-foreground"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "opacity 0.5s ease-out 0.6s",
                    }}
                  />
                  {/* Pulse rings */}
                  <circle
                    cx="220"
                    cy="140"
                    r="12"
                    fill="none"
                    stroke="hsl(var(--cta))"
                    strokeWidth="2"
                    opacity="0.5"
                    className="animate-ping"
                    style={{
                      animationDuration: "2s",
                    }}
                  />
                </g>
              </svg>

              {/* Tooltip */}
              {hoveredRegion && (
                <div
                  className="absolute pointer-events-none bg-card border border-border shadow-lg rounded-lg px-4 py-3 z-10 transition-opacity duration-200"
                  style={{
                    left: tooltipPosition.x,
                    top: tooltipPosition.y,
                    transform: "translateX(-50%)",
                  }}
                >
                  <p className="font-semibold text-foreground text-sm">
                    {regions.find((r) => r.id === hoveredRegion)?.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-accent text-xs mt-1">
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>We Service This Area</span>
                  </div>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">Service Area</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-accent" aria-hidden="true" />
                <span className="text-muted-foreground">Hover to Explore</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-cta animate-pulse" aria-hidden="true" />
                <span className="text-muted-foreground">Primary Hub</span>
              </div>
            </div>
          </div>

          {/* CTA below map */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your area? Contact us – we may still be able to help!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold hover:bg-cta/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
