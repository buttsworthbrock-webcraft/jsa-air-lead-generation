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
    path: "M320 100 L380 85 L430 95 L445 135 L430 180 L375 195 L320 175 L305 140 Z",
    labelX: 370,
    labelY: 140,
  },
  {
    id: "lake-macquarie",
    name: "Lake Macquarie",
    path: "M300 175 L375 195 L430 180 L460 230 L450 310 L385 345 L305 320 L265 260 L270 200 Z",
    labelX: 365,
    labelY: 265,
  },
  {
    id: "maitland",
    name: "Maitland",
    path: "M180 70 L260 55 L320 100 L305 140 L320 175 L270 200 L200 180 L165 145 L155 110 Z",
    labelX: 235,
    labelY: 125,
  },
  {
    id: "cessnock",
    name: "Cessnock",
    path: "M90 130 L155 110 L165 145 L200 180 L270 200 L265 260 L305 320 L235 355 L135 330 L85 265 L70 195 Z",
    labelX: 180,
    labelY: 245,
  },
  {
    id: "port-stephens",
    name: "Port Stephens",
    path: "M430 95 L500 70 L550 85 L565 140 L540 185 L475 200 L445 135 Z",
    labelX: 495,
    labelY: 135,
  },
];

const ServiceAreaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${
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

        {/* Map Container - Apple Maps Style */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f5f3f0] rounded-2xl p-4 md:p-6 shadow-lg border border-black/5 overflow-hidden">
            <div className="relative rounded-xl overflow-hidden">
              <svg
                viewBox="0 0 620 420"
                className="w-full h-auto"
                role="img"
                aria-label="Interactive map of Newcastle and Hunter Region service areas"
              >
                {/* Map Background - Light terrain */}
                <defs>
                  <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8e4df" />
                    <stop offset="50%" stopColor="#f0ece7" />
                    <stop offset="100%" stopColor="#e5e1dc" />
                  </linearGradient>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a8d4e6" />
                    <stop offset="100%" stopColor="#7fc4db" />
                  </linearGradient>
                  <linearGradient id="lakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9dd1e5" />
                    <stop offset="100%" stopColor="#78c0d6" />
                  </linearGradient>
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
                  </filter>
                </defs>
                
                {/* Base map background */}
                <rect x="0" y="0" width="620" height="420" fill="url(#mapBg)" rx="12" />

                {/* Ocean/water area - right side */}
                <path
                  d="M445 135 Q500 100 570 80 L620 70 L620 420 L520 420 Q495 370 465 320 Q445 270 450 230 L445 135 Z"
                  fill="url(#oceanGradient)"
                />
                
                {/* Lake Macquarie water body */}
                <ellipse
                  cx="385"
                  cy="275"
                  rx="35"
                  ry="50"
                  fill="url(#lakeGradient)"
                  opacity="0.9"
                />

                {/* Small decorative lakes/rivers */}
                <path
                  d="M160 180 Q175 190 170 210 Q160 220 145 210 Q140 195 160 180"
                  fill="#9dd1e5"
                  opacity="0.6"
                />

                {/* Regions */}
                {regions.map((region, index) => {
                  const isHovered = hoveredRegion === region.id;
                  const isNewcastle = region.id === "newcastle";

                  // Apple Maps style colors
                  const baseColor = "#d4d0c8";
                  const hoverColor = "#4ade80";
                  const strokeColor = isHovered ? "#22c55e" : "#a8a49c";

                  return (
                    <g key={region.id}>
                      {/* Region shape with Apple Maps styling */}
                      <path
                        d={region.path}
                        className="cursor-pointer transition-all duration-300"
                        fill={isHovered ? hoverColor : baseColor}
                        stroke={strokeColor}
                        strokeWidth={isHovered ? "2" : "1"}
                        filter={isHovered ? "url(#softShadow)" : undefined}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isHovered ? "scale(1.01)" : "scale(1)",
                          transformOrigin: `${region.labelX}px ${region.labelY}px`,
                          transition: `opacity 0.5s ease-out ${index * 0.1}s, fill 0.2s, stroke 0.2s, transform 0.2s`,
                        }}
                        onMouseEnter={() => setHoveredRegion(region.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${region.name} - We service this area`}
                        onFocus={() => setHoveredRegion(region.id)}
                        onBlur={() => setHoveredRegion(null)}
                      />

                      {/* Region label - Apple Maps style */}
                      <text
                        x={region.labelX}
                        y={region.labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="pointer-events-none select-none"
                        fill={isHovered ? "#166534" : "#525048"}
                        fontSize="13"
                        fontWeight="600"
                        fontFamily="system-ui, -apple-system, sans-serif"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transition: `opacity 0.5s ease-out ${index * 0.1 + 0.2}s, fill 0.2s`,
                        }}
                      >
                        {region.name}
                      </text>

                      {/* Newcastle hub indicator - subtle red pin style */}
                      {isNewcastle && (
                        <g style={{
                          opacity: isVisible ? 1 : 0,
                          transition: 'opacity 0.5s ease-out 0.5s',
                        }}>
                          {/* Pin shadow */}
                          <ellipse
                            cx={region.labelX}
                            cy={region.labelY + 28}
                            rx="6"
                            ry="2"
                            fill="#000"
                            opacity="0.15"
                          />
                          {/* Pin body */}
                          <path
                            d={`M${region.labelX} ${region.labelY + 25} 
                               c-8 0 -12 -6 -12 -12 
                               c0 -8 12 -16 12 -16 
                               c0 0 12 8 12 16 
                               c0 6 -4 12 -12 12`}
                            fill="#ef4444"
                            stroke="#dc2626"
                            strokeWidth="1"
                          />
                          {/* Pin inner circle */}
                          <circle
                            cx={region.labelX}
                            cy={region.labelY + 10}
                            r="4"
                            fill="#fff"
                          />
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Decorative road lines */}
                <path
                  d="M150 100 Q200 130 240 125 Q300 115 350 140 Q400 165 450 150"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  opacity="0.7"
                />
                <path
                  d="M100 200 Q150 230 200 220 Q260 200 320 230 Q380 260 420 240"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Compass - Apple style */}
                <g transform="translate(45, 380)">
                  <circle r="18" fill="#fff" stroke="#d1d5db" strokeWidth="1" />
                  <path
                    d="M0 -12 L3 -4 L0 -6 L-3 -4 Z"
                    fill="#ef4444"
                  />
                  <path
                    d="M0 12 L3 4 L0 6 L-3 4 Z"
                    fill="#9ca3af"
                  />
                  <text
                    y="-5"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#374151"
                    fontSize="8"
                    fontWeight="600"
                  >
                    N
                  </text>
                </g>

                {/* Scale indicator */}
                <g transform="translate(520, 395)">
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#6b7280" strokeWidth="1" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="#6b7280" strokeWidth="1" />
                  <line x1="60" y1="-4" x2="60" y2="4" stroke="#6b7280" strokeWidth="1" />
                  <text
                    x="30"
                    y="12"
                    textAnchor="middle"
                    fill="#6b7280"
                    fontSize="9"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    ~20 km
                  </text>
                </g>
              </svg>

              {/* Floating tooltip - Apple style */}
              {hoveredRegion && (
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl px-4 py-3 z-10 animate-fade-in border border-black/5">
                  <p className="font-semibold text-gray-900 text-base">
                    {regions.find((r) => r.id === hoveredRegion)?.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-green-600 text-sm mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>We service this area</span>
                  </div>
                </div>
              )}
            </div>

            {/* Legend - minimal Apple style */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-[#d4d0c8] border border-[#a8a49c]" aria-hidden="true" />
                <span>Service Area</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-green-400 border border-green-500" aria-hidden="true" />
                <span>Hover to explore</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-4 rounded-t-full bg-red-500" aria-hidden="true" />
                <span>Headquarters</span>
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
