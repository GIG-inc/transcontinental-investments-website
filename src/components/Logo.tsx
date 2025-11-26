const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      width="700" 
      height="250" 
      viewBox="0 0 700 250" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Transcontinental Investments - Precious Metals Trading and Mineral Investment"
    >
      <style>
        {`
          .title {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 48px;
            letter-spacing: 2px;
          }
          .subtitle {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 300;
            font-size: 28px;
            letter-spacing: 10px;
          }
          .line {
            stroke: black;
            stroke-width: 3;
          }
        `}
      </style>

      {/* Centered Title */}
      <text x="50%" y="45%" textAnchor="middle" className="title">
        TRANSCONTINENTAL
      </text>

      {/* Horizontal Divider Line */}
      <line x1="100" y1="55%" x2="600" y2="55%" className="line" />

      {/* Subtitle */}
      <text x="50%" y="72%" textAnchor="middle" className="subtitle">
        INVESTMENTS
      </text>
    </svg>
  );
};

export default Logo;
