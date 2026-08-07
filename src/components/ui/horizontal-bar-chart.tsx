import {
  Bar,
  BarChart,
  BarSeries,
  Gridline,
  GridlineSeries,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearYAxis,
  LinearYAxisTickLabel,
  LinearYAxisTickSeries,
} from "reaviz";

export interface HorizontalBarChartDatum {
  key: string;
  data: number;
}

interface HorizontalBarChartProps {
  title?: string;
  data: HorizontalBarChartDatum[];
  colors?: string[];
  height?: number;
  className?: string;
}

const defaultColors = ["#3B82F6", "#22C55E", "#14B8A6", "#8B5CF6", "#F59E0B", "#94A3B8"];

function HorizontalBarChart({
  title,
  data,
  colors = defaultColors,
  height = 220,
  className,
}: HorizontalBarChartProps) {
  const validatedData = data.map((item) => ({
    ...item,
    data: typeof item.data === "number" && !Number.isNaN(item.data) ? item.data : 0,
  }));

  return (
    <div className={className}>
      {title ? (
        <h4 className="mb-3 text-sm font-semibold text-slate-800">{title}</h4>
      ) : null}
      <div className="w-full" style={{ height }}>
        <BarChart
          id="channel-volume-horizontal-chart"
          height={height}
          data={validatedData}
          yAxis={
            <LinearYAxis
              type="category"
              tickSeries={
                <LinearYAxisTickSeries
                  label={
                    <LinearYAxisTickLabel
                      format={(text: string) =>
                        text.length > 14 ? `${text.slice(0, 14)}…` : text
                      }
                      fill="#64748B"
                    />
                  }
                />
              }
            />
          }
          xAxis={
            <LinearXAxis
              type="value"
              axisLine={null}
              tickSeries={
                <LinearXAxisTickSeries label={null} line={null} tickSize={8} />
              }
            />
          }
          series={
            <BarSeries
              layout="horizontal"
              bar={
                <Bar
                  glow={{
                    blur: 12,
                    opacity: 0.25,
                  }}
                  gradient={null}
                />
              }
              colorScheme={colors}
              padding={0.22}
            />
          }
          gridlines={
            <GridlineSeries line={<Gridline strokeColor="#CBD5E175" />} />
          }
        />
      </div>
    </div>
  );
}

export default HorizontalBarChart;
