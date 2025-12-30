export default function Logo({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text
        x="0"
        y="85"
        fontFamily="'Oktah Neue', Arial, Helvetica, sans-serif"
        fontSize="100"
        fontWeight="700"
        fill={color}
        letterSpacing="-2"
      >
        JSA
      </text>
      <text
        x="230"
        y="55"
        fontFamily="'Oktah Neue', Arial, Helvetica, sans-serif"
        fontSize="32"
        fontWeight="300"
        fill={color}
        letterSpacing="4"
      >
        AIRCONDITIONING
      </text>
      <text
        x="230"
        y="85"
        fontFamily="'Oktah Neue', Arial, Helvetica, sans-serif"
        fontSize="32"
        fontWeight="300"
        fill={color}
        letterSpacing="4"
      >
        & REFRIGERATION
      </text>
    </svg>
  );
}
