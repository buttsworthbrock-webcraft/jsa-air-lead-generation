import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin } from "lucide-react";

const ServiceAreaMap = () => {
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

        {/* Map Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f0ebe3] rounded-2xl p-4 md:p-6 shadow-xl border border-black/5 overflow-hidden">
            <div className="relative rounded-xl overflow-hidden">
              <svg
                viewBox="0 0 700 480"
                className="w-full h-auto"
                role="img"
                aria-label="Map of Newcastle and Hunter Region service areas"
              >
                <defs>
                  {/* Ocean gradient */}
                  <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                  {/* Land gradient */}
                  <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef9c3" />
                    <stop offset="30%" stopColor="#ecfccb" />
                    <stop offset="70%" stopColor="#dcfce7" />
                    <stop offset="100%" stopColor="#d1fae5" />
                  </linearGradient>
                  {/* Service area fill */}
                  <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="0.35" />
                  </linearGradient>
                  {/* Water body */}
                  <linearGradient id="lakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  {/* Pattern for parks/green areas */}
                  <pattern id="parkPattern" patternUnits="userSpaceOnUse" width="8" height="8">
                    <circle cx="2" cy="2" r="1" fill="#86efac" opacity="0.5" />
                    <circle cx="6" cy="6" r="1" fill="#86efac" opacity="0.5" />
                  </pattern>
                </defs>

                {/* Ocean background - full right side */}
                <rect x="0" y="0" width="700" height="480" fill="url(#oceanGrad)" rx="12" />

                {/* Main landmass */}
                <path
                  d="M0 0 L0 480 L450 480 
                     Q480 450 490 400 
                     Q510 340 530 280 
                     Q550 220 540 160 
                     Q530 100 490 60 
                     Q450 20 400 10 
                     L0 0 Z"
                  fill="url(#landGrad)"
                />

                {/* Coastal detail/beaches */}
                <path
                  d="M490 60 Q510 80 520 110 Q535 150 540 160"
                  fill="none"
                  stroke="#fef3c7"
                  strokeWidth="6"
                  opacity="0.8"
                />
                <path
                  d="M530 280 Q545 300 550 330 Q555 360 530 400"
                  fill="none"
                  stroke="#fef3c7"
                  strokeWidth="5"
                  opacity="0.7"
                />

                {/* Hunter River */}
                <path
                  d="M0 140 Q80 145 150 130 Q220 115 280 125 Q340 135 390 120 Q430 108 480 115 Q510 120 535 140"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                {/* River tributaries */}
                <path
                  d="M200 130 Q190 170 175 200 Q160 230 140 260"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M300 125 Q290 160 270 190"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                {/* Lake Macquarie */}
                <ellipse
                  cx="420"
                  cy="300"
                  rx="50"
                  ry="80"
                  fill="url(#lakeGrad)"
                />
                {/* Lake detail */}
                <ellipse
                  cx="415"
                  cy="290"
                  rx="35"
                  ry="55"
                  fill="#22d3ee"
                  opacity="0.5"
                />

                {/* Green park areas */}
                <ellipse cx="100" cy="320" rx="40" ry="30" fill="url(#parkPattern)" opacity="0.6" />
                <ellipse cx="200" cy="380" rx="35" ry="25" fill="url(#parkPattern)" opacity="0.5" />
                <ellipse cx="320" cy="420" rx="45" ry="30" fill="url(#parkPattern)" opacity="0.5" />

                {/* Service Area Boundary */}
                <path
                  d="M40 80 
                     Q120 50 220 55 
                     Q320 60 420 80 
                     Q480 100 510 150 
                     Q535 200 530 280 
                     Q525 360 490 420 
                     Q450 470 350 470 
                     Q250 470 150 450 
                     Q80 430 50 380 
                     Q30 330 35 260 
                     Q30 180 40 80 Z"
                  fill="url(#serviceGrad)"
                  stroke="#16a34a"
                  strokeWidth="3"
                  strokeDasharray="12 6"
                  opacity="0.9"
                />

                {/* Major roads */}
                <g stroke="#f5f5f4" strokeWidth="4" strokeLinecap="round" opacity="0.9">
                  {/* Pacific Highway */}
                  <path d="M300 0 Q320 80 340 150 Q360 220 380 280 Q400 340 420 400 Q440 450 450 480" />
                  {/* New England Highway */}
                  <path d="M0 200 Q100 180 180 160 Q260 140 340 150" />
                  {/* Hunter Expressway */}
                  <path d="M80 100 Q150 120 200 140 Q250 155 300 150" />
                </g>
                {/* Road outlines */}
                <g stroke="#d4d4d4" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6">
                  <path d="M300 0 Q320 80 340 150 Q360 220 380 280 Q400 340 420 400 Q440 450 450 480" />
                  <path d="M0 200 Q100 180 180 160 Q260 140 340 150" />
                  <path d="M80 100 Q150 120 200 140 Q250 155 300 150" />
                </g>

                {/* City/Town markers */}
                {/* Newcastle - main hub */}
                <g transform="translate(450, 160)">
                  <circle r="12" fill="#ef4444" stroke="#fff" strokeWidth="3" />
                  <circle r="5" fill="#fff" />
                  <text x="20" y="5" fill="#1f2937" fontSize="16" fontWeight="700" fontFamily="system-ui">Newcastle</text>
                </g>

                {/* Lake Macquarie */}
                <g transform="translate(380, 380)">
                  <circle r="8" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                  <text x="15" y="4" fill="#374151" fontSize="13" fontWeight="600" fontFamily="system-ui">Lake Macquarie</text>
                </g>

                {/* Maitland */}
                <g transform="translate(280, 120)">
                  <circle r="8" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                  <text x="15" y="4" fill="#374151" fontSize="13" fontWeight="600" fontFamily="system-ui">Maitland</text>
                </g>

                {/* Cessnock */}
                <g transform="translate(160, 220)">
                  <circle r="7" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                  <text x="12" y="4" fill="#374151" fontSize="12" fontWeight="600" fontFamily="system-ui">Cessnock</text>
                </g>

                {/* Port Stephens */}
                <g transform="translate(500, 90)">
                  <circle r="7" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                  <text x="-75" y="4" fill="#374151" fontSize="12" fontWeight="600" fontFamily="system-ui">Port Stephens</text>
                </g>

                {/* Compass */}
                <g transform="translate(640, 440)">
                  <circle r="22" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
                  <polygon points="0,-15 4,-5 0,-8 -4,-5" fill="#ef4444" />
                  <polygon points="0,15 4,5 0,8 -4,5" fill="#9ca3af" />
                  <text y="-6" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">N</text>
                </g>

                {/* Scale bar */}
                <g transform="translate(40, 450)">
                  <rect x="0" y="0" width="80" height="8" fill="#fff" stroke="#d1d5db" strokeWidth="1" rx="2" />
                  <rect x="0" y="0" width="40" height="8" fill="#374151" rx="2" />
                  <text x="40" y="22" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="system-ui">20 km</text>
                </g>

                {/* Legend */}
                <g transform="translate(40, 30)">
                  <rect x="-10" y="-10" width="140" height="70" fill="#fff" fillOpacity="0.95" rx="8" stroke="#e5e7eb" />
                  <circle cx="8" cy="10" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                  <text x="22" y="14" fill="#374151" fontSize="11" fontFamily="system-ui">Headquarters</text>
                  <circle cx="8" cy="32" r="5" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                  <text x="22" y="36" fill="#374151" fontSize="11" fontFamily="system-ui">Service Areas</text>
                  <line x1="2" y1="52" x2="14" y2="52" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="22" y="56" fill="#374151" fontSize="11" fontFamily="system-ui">Coverage Zone</text>
                </g>
              </svg>
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
