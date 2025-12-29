const brands = [
  { name: "Mitsubishi Electric", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Mitsubishi-1-e1755908545601.png" },
  { name: "ActronAir", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Action-Air-1.webp" },
  { name: "Daikin", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/DAIKIN_Logo_rgb.webp" },
  { name: "Hisense", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Hisense_logo_PNG_6-1024x576-1.webp" },
];

const Brands = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-muted-foreground font-medium text-sm uppercase tracking-wider">
            Trusted Brands We Install & Service
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
