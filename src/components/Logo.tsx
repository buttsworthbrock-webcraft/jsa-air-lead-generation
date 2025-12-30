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
        d="M 125 20 A 55 55 0 0 1 170 65"
        stroke={primaryColor}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Bottom left arc */}
      <path
        d="M 30 55 A 55 55 0 0 0 75 100"
        stroke={primaryColor}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* JSA Text */}
      <text
        x="100"
        y="62"
        textAnchor="middle"
        fill={primaryColor}
        fontFamily="'Josefin Sans', sans-serif"
        fontSize="48"
        fontWeight="300"
        letterSpacing="2"
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
