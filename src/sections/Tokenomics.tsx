interface TokenomicsItem {
  name: string;
  percentage: number;
  color: string;
}

const Tokenomics = () => {
  const tokenDistribution: TokenomicsItem[] = [
    { name: "Liquidity", percentage: 85, color: "#00FF00" },
    { name: "Marketing", percentage: 10, color: "#A510D6" },
    { name: "Team", percentage: 5, color: "#FFF200" },
  ];

  // Calculate the start and end angles for each segment with gaps
  const calculateCircleSegments = (items: TokenomicsItem[]) => {
    let currentAngle = 0;
    // Gap size in degrees (2-3% of a full circle)
    const gapSize = 360 * 0.03;

    return items.map((item) => {
      // Add half the gap to the start angle
      const startAngle = currentAngle + gapSize / 2;

      // Calculate how much of the circle this item takes up (including the full gap)
      const itemArcSize = (item.percentage / 100) * 360;

      // Update the current angle for the next item
      currentAngle += itemArcSize;

      // Subtract half the gap from the end angle
      const endAngle = currentAngle - gapSize / 2;

      return {
        ...item,
        startAngle,
        endAngle,
      };
    });
  };

  const segments = calculateCircleSegments(tokenDistribution);

  // Function to convert angle to coordinates on a circle
  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  // Function to create an SVG arc path
  const createArcPath = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  // Position settings for labels based on segment
  const getLabelPositions = (segment: any) => {
    const { name } = segment;

    switch (name) {
      case "Liquidity":
        return {
          nameRadius: 85,
          percentRadius: 85,
          nameDy: -20,
          percentDy: 20,
          dotRadius: 70,
          dotSize: 4,
        };
      case "Marketing":
        return {
          nameRadius: 85,
          percentRadius: 85,
          nameDy: -20,
          percentDy: 20,
          dotRadius: 70,
          dotSize: 4,
        };
      case "Team":
        return {
          nameRadius: 85,
          percentRadius: 85,
          nameDy: -20,
          percentDy: 20,
          dotRadius: 70,
          dotSize: 4,
        };
      default:
        return {
          nameRadius: 85,
          percentRadius: 85,
          nameDy: -20,
          percentDy: 20,
          dotRadius: 70,
          dotSize: 4,
        };
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Tokenomics</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our token distribution is designed to ensure long-term stability and
            growth.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="relative w-full max-w-md">
            {/* SVG Pie Chart */}
            <svg viewBox="0 0 400 400" className="w-full">
              {/* Dark background circle */}
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="transparent"
                stroke="#1D2235"
                strokeWidth="30"
              />

              {/* Segments with gaps */}
              {segments.map((segment, index) => {
                const arcPath = createArcPath(
                  200,
                  200,
                  150,
                  segment.startAngle,
                  segment.endAngle
                );
                return (
                  <path
                    key={index}
                    d={arcPath}
                    fill="transparent"
                    stroke={segment.color}
                    strokeWidth="30"
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Center circle for dark background */}
              <circle cx="200" cy="200" r="120" fill="#1D2235" />

              {/* Labels inside chart with better spacing */}
              {segments.map((segment, index) => {
                const midAngle = (segment.startAngle + segment.endAngle) / 2;
                const positions = getLabelPositions(segment);

                // Calculate positions for name and percentage separately
                const namePoint = polarToCartesian(
                  200,
                  200,
                  positions.nameRadius,
                  midAngle
                );
                const percentPoint = polarToCartesian(
                  200,
                  200,
                  positions.percentRadius,
                  midAngle
                );
                const dotPosition = polarToCartesian(
                  200,
                  200,
                  positions.dotRadius,
                  midAngle
                );

                return (
                  <g key={`label-${index}`}>
                    <circle
                      cx={dotPosition.x}
                      cy={dotPosition.y}
                      r={positions.dotSize}
                      fill={segment.color}
                    />

                    {/* Name label */}
                    <text
                      x={namePoint.x}
                      y={namePoint.y + positions.nameDy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="500"
                    >
                      {segment.name}
                    </text>

                    {/* Percentage label */}
                    <text
                      x={percentPoint.x}
                      y={percentPoint.y + positions.percentDy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="500"
                    >
                      {segment.percentage}%
                    </text>
                  </g>
                );
              })}

              {/* Add connecting lines between label and arc for better visibility */}
              {segments.map((segment, index) => {
                const midAngle = (segment.startAngle + segment.endAngle) / 2;
                const arcPoint = polarToCartesian(200, 200, 150, midAngle);
                const dotPosition = polarToCartesian(200, 200, 70, midAngle);

                // Only draw connecting lines for Marketing (since it's the smallest segment)
                if (segment.name === "Marketing") {
                  return (
                    <line
                      key={`line-${index}`}
                      x1={arcPoint.x}
                      y1={arcPoint.y}
                      x2={dotPosition.x}
                      y2={dotPosition.y}
                      stroke={segment.color}
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  );
                }
                return null;
              })}
            </svg>
          </div>

          <div className="w-full max-w-md">
            <div className="bg-HowItWorks-Cards-Background border border-HowTo-Cards-border rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Token Allocation
              </h3>

              <div className="space-y-6">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-4"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">
                          {item.name}
                        </span>
                        <span className="text-white font-medium">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: item.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-300">
                  Our token distribution prioritizes liquidity to ensure market
                  stability, while allocating appropriate percentages for
                  marketing initiatives and team development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
