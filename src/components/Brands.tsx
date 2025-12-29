const brands = [
  { name: "Mitsubishi Electric", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Mitsubishi-1-e1755908545601.png" },
  { name: "ActronAir", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Action-Air-1.webp" },
  { name: "Daikin", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/DAIKIN_Logo_rgb.webp" },
  { name: "Hisense", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Hisense_logo_PNG_6-1024x576-1.webp" },
];

const Brands = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-10 sm:p-14">
          <div className="text-center mb-10">
            <p className="text-muted-foreground font-medium">
              Authorised installers for Australia's leading brands
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
