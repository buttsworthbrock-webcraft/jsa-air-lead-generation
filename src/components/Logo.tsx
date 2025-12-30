interface LogoProps {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
}

const Logo = ({ className = "", showTagline = true, inverted = false }: LogoProps) => {
  const primaryColor = inverted ? "currentColor" : "currentColor";
  
  return (
    <svg 
      viewBox="0 0 200 120" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JSA Airconditioning & Refrigeration"
    >
      {/* Top right arc */}
      <path
        d="M 140 15 A 70 70 0 0 1 175 75"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Bottom left arc */}
      <path
        d="M 25 45 A 70 70 0 0 0 60 105"
        stroke={primaryColor}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* JSA Text */}
      <text
        x="100"
        y="62"
        textAnchor="middle"
        fill={primaryColor}
        fontFamily="'Bodoni Moda', Didot, 'Times New Roman', serif"
        fontSize="46"
        fontWeight="400"
        letterSpacing="6"
      >
        JSA
      </text>
      
      {/* Tagline */}
      {showTagline && (
        <>
          <text
            x="100"
            y="82"
            textAnchor="middle"
            fill={primaryColor}
            fontFamily="system-ui, sans-serif"
            fontSize="9"
            letterSpacing="3"
            opacity="0.8"
          >
            AIRCONDITIONING
          </text>
          <text
            x="100"
            y="94"
            textAnchor="middle"
            fill={primaryColor}
            fontFamily="system-ui, sans-serif"
            fontSize="9"
            letterSpacing="3"
            opacity="0.8"
          >
            & REFRIGERATION
          </text>
        </>
      )}
    </svg>
  );
};

export default Logo;
