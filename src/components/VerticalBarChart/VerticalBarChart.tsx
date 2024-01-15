import { useTheme } from "@mui/material";
import { useEffect, useId, useMemo, useRef, useState } from "react";

const brownscale: Array<string> = [
  "#73140C",
  "#852411",
  "#923F00",
  "#A26100",
  "#AA7605",
  "#AB8838",
  "#B4974E",
  "#BDA666",
  "#C7B67E",
  "#D1C498",
  "#E0D2B5",
  "#E6E0CA",
  "#F2EDE1",
  "#F2EDE1",
  "#F7F4ED",
];

export type VerticalBarChartData = {
  id: string;
  name: string;
  value: number;
};

export type VerticalBarChartProps = {
  data: Array<VerticalBarChartData>;
  selectedId?: string;
};

const THICK_WIDTH = 100;
const PADDING = 16;

const Bar = ({
  data,
  height,
  x,
  y,
  color,
  factor,
  index,
  componentId,
  selected,
}: {
  data: VerticalBarChartData;
  height: number;
  x: number;
  y: number;
  color: string;
  factor: number;
  index: number;
  componentId: string;
  selected?: boolean;
}) => {
  const theme = useTheme();
  const width = data.value * factor;
  const yMid = height * 0.5;
  return (
    <g>
      {selected && (
        <rect
          x={0}
          y={y}
          width={width}
          height={height}
          fill={theme.palette.input.backgroundDisabled}
          clipPath={`url(#round-corner${componentId}-${index})`}
        />
      )}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        clipPath={`url(#round-corner${componentId}-${index})`}
      />

      <text textAnchor="start" x={0} y={0} dy={yMid + 4} fill="#000">
        <tspan
          fontFamily="inter, sans-serif!important"
          fontSize={12}
          x={16}
          fill="#666461"
        >
          {data?.name}
        </tspan>
      </text>
      <text textAnchor="start" x={0} y={0} dy={yMid + 20} fill="#000">
        <tspan
          fontFamily="inter, sans-serif!important"
          fontSize={12}
          fontWeight={600}
          x={16}
          fill="#666461"
        >
          {data.value}
        </tspan>
      </text>
    </g>
  );
};

const VerticalBarChart = ({ data, selectedId }: VerticalBarChartProps) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const componentId = useId();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setDimensions({
        height: event[0].contentBoxSize[0].blockSize,
        width: event[0].contentBoxSize[0].inlineSize,
      });
    });

    if (containerRef?.current) resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef?.current) resizeObserver.unobserve(containerRef.current);
    };
  }, [containerRef?.current]);

  const factor = useMemo(
    () =>
      (dimensions.width - THICK_WIDTH) /
      Math.max(...data.map((item) => item.value)),
    [data, dimensions]
  );
  const barHeight = useMemo(() => {
    const totalPadding = (data.length - 1) * PADDING;
    return (dimensions.width * 2 - totalPadding) / data.length;
  }, [data, dimensions]);

  return (
    <div ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.width * 2}`}
        width={dimensions.width}
        height="100%"
      >
        <defs>
          {data.map((d, index) => (
            <clipPath id={`round-corner${componentId}-${index}`}>
              <rect
                x={0}
                y={PADDING / 2}
                width={d.value * factor + THICK_WIDTH}
                height={barHeight}
                rx={barHeight / 2}
              />
            </clipPath>
          ))}
        </defs>
        {data.map((item, index) => (
          <g
            key={item.id}
            transform={`translate(0, ${index * (barHeight + PADDING)})`}
          >
            <Bar
              data={item}
              height={barHeight}
              x={THICK_WIDTH}
              y={PADDING / 2}
              factor={factor}
              color={
                selectedId !== undefined && selectedId !== item.id
                  ? "#E5E3E0"
                  : brownscale[index % brownscale.length]
              }
              selected={selectedId === item.id}
              index={index}
              componentId={componentId}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default VerticalBarChart;
