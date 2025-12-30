export default function Logo({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="200"
        y="210"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="115"
        fontWeight="700"
        fill={color}
        textAnchor="middle"
        letterSpacing="-4"
      >
        JSA
      </text>
      <text
        x="200"
        y="248"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="300"
        fill={color}
        textAnchor="middle"
        letterSpacing="10"
      >
        AIRCONDITIONING
      </text>
      <text
        x="200"
        y="268"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="300"
        fill={color}
        textAnchor="middle"
        letterSpacing="10"
      >
        & REFRIGERATION
      </text>
    </svg>
  );
}
