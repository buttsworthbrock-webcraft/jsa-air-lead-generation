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

    // Service area locations
    const locations = [
      { name: 'Newcastle', coords: [-32.9283, 151.7817] as [number, number], main: true },
      { name: 'Lake Macquarie', coords: [-33.0833, 151.5833] as [number, number], main: false },
      { name: 'Maitland', coords: [-32.7333, 151.5500] as [number, number], main: false },
      { name: 'Cessnock', coords: [-32.8333, 151.3500] as [number, number], main: false },
      { name: 'Port Stephens', coords: [-32.7167, 152.1167] as [number, number], main: false },
    ];

    // Add markers
    locations.forEach(location => {
      const marker = L.marker(location.coords, { 
        icon: createMarkerIcon(location.main) 
      }).addTo(map.current!);
      
      marker.bindPopup(`
        <div style="text-align: center; padding: 8px; min-width: 120px;">
          <strong style="font-size: 15px; color: #1f2937;">${location.name}</strong>
          ${location.main ? '<br><span style="color: #16a34a; font-size: 12px; font-weight: 500;">Main Service Hub</span>' : ''}
        </div>
      `, { className: 'custom-popup' });
    });

    // Service area polygon (approximate bounds)
    const serviceAreaBounds: [number, number][] = [
      [-32.5, 151.2],
      [-32.5, 152.25],
      [-33.25, 152.25],
      [-33.25, 151.2],
    ];

    L.polygon(serviceAreaBounds, {
      color: '#16a34a',
      weight: 2,
      fillColor: '#22c55e',
      fillOpacity: 0.12,
      dashArray: '10, 6',
    }).addTo(map.current);

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
