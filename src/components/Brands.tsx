const brands = [
  { name: "Mitsubishi Electric", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Mitsubishi-1-e1755908545601.png" },
  { name: "ActronAir", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Action-Air-1.webp" },
  { name: "Daikin", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/DAIKIN_Logo_rgb.webp" },
  { name: "Hisense", logo: "https://jsaairconditioning.com.au/wp-content/uploads/2025/08/Hisense_logo_PNG_6-1024x576-1.webp" },
];

const Brands = () => {
  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Authorised dealers for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-7 md:h-9 w-auto object-contain"
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
