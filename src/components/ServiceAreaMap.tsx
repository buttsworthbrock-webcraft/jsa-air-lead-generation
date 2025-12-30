import { useEffect, useRef } from 'react';
import { MapPin } from "lucide-react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map centered on Newcastle/Hunter Region
    map.current = L.map(mapContainer.current, {
      center: [-32.9283, 151.7817],
      zoom: 10,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    // CartoDB Voyager - clean Apple Maps-like style (free, no API key)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map.current);

    // Custom marker icon
    const createMarkerIcon = (isMain: boolean) => L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: ${isMain ? '36px' : '28px'};
          height: ${isMain ? '36px' : '28px'};
          background: ${isMain ? '#ef4444' : '#3b82f6'};
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 3px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: ${isMain ? '10px' : '8px'};
            height: ${isMain ? '10px' : '8px'};
            background: white;
            border-radius: 50%;
            transform: rotate(45deg);
          "></div>
        </div>
      `,
      iconSize: [isMain ? 36 : 28, isMain ? 36 : 28],
      iconAnchor: [isMain ? 18 : 14, isMain ? 36 : 28],
    });

    // Single connected service area polygon covering all regions
    const serviceAreaBoundary: [number, number][] = [
      // Start from Cessnock (west)
      [-32.75, 151.20],
      [-32.95, 151.25],
      [-33.00, 151.35],
      // Down to Lake Macquarie (south)
      [-33.15, 151.50],
      [-33.20, 151.65],
      [-33.10, 151.78],
      // East along coast
      [-32.98, 151.82],
      [-32.92, 151.80],
      // Newcastle (east)
      [-32.88, 151.82],
      [-32.82, 151.78],
      // Up to Port Stephens (northeast)
      [-32.75, 151.85],
      [-32.65, 152.00],
      [-32.55, 152.15],
      [-32.70, 152.22],
      [-32.82, 152.10],
      // Back west through Maitland
      [-32.78, 151.90],
      [-32.72, 151.75],
      [-32.62, 151.60],
      [-32.58, 151.50],
      // Maitland area
      [-32.65, 151.40],
      [-32.70, 151.30],
      // Back to Cessnock
      [-32.75, 151.20],
    ];

    // Add the main service boundary polygon
    L.polygon(serviceAreaBoundary, {
      color: '#3b82f6',
      weight: 3,
      fillColor: '#3b82f6',
      fillOpacity: 0.15,
      dashArray: '8, 4',
    }).addTo(map.current!);

    // Service area markers
    const serviceAreas = [
      { name: 'Newcastle', lat: -32.9283, lng: 151.7817, main: true },
      { name: 'Lake Macquarie', lat: -33.09, lng: 151.55, main: false },
      { name: 'Maitland', lat: -32.73, lng: 151.55, main: false },
      { name: 'Cessnock', lat: -32.83, lng: 151.35, main: false },
      { name: 'Port Stephens', lat: -32.72, lng: 152.06, main: false },
    ];

    // Add markers for each service area
    serviceAreas.forEach(area => {
      const marker = L.marker([area.lat, area.lng], { 
        icon: createMarkerIcon(area.main) 
      }).addTo(map.current!);
      
      marker.bindPopup(`
        <div style="text-align: center; padding: 8px; min-width: 120px;">
          <strong style="font-size: 15px; color: #1f2937;">${area.name}</strong>
          ${area.main ? '<br><span style="color: #16a34a; font-size: 12px; font-weight: 500;">Main Service Hub</span>' : ''}
        </div>
      `, { className: 'custom-popup' });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <section id="service-area" className="py-16 md:py-24 bg-muted/30" aria-labelledby="service-area-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Service Coverage
          </div>
          <h2 id="service-area-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Areas We Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proudly serving Newcastle and the Greater Hunter Region with professional air conditioning services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div 
            ref={mapContainer} 
            className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-xl overflow-hidden border border-border"
            style={{ zIndex: 0 }}
          />
          
          {/* Service areas list */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Newcastle', 'Lake Macquarie', 'Maitland', 'Cessnock', 'Port Stephens'].map((area) => (
              <div 
                key={area}
                className="bg-card rounded-xl p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
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
