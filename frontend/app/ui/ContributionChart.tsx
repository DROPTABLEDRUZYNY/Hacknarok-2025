'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContributionChartProps {
  data: {
    date: string;
    count: number;
  }[];
}

export default function ContributionChart({ data }: ContributionChartProps) {
  const months = 12; // Full year
  const weeks = months * 4;
  const days = weeks * 7;
  const today = new Date();
  
  // Generate data for the last year if not provided
  const contributionData = data || Array.from({ length: days }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - (days - 1 - i));
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 10) // Increased range for more variation
    };
  });

  const getColor = (count: number) => {
    if (count === 0) return 'bg-muted';
    if (count <= 1) return 'bg-green-100';
    if (count <= 3) return 'bg-green-200';
    if (count <= 5) return 'bg-green-300';
    if (count <= 7) return 'bg-green-400';
    if (count <= 9) return 'bg-green-500';
    return 'bg-green-600';
  };

  const getTooltipText = (count: number, date: string) => {
    if (count === 0) return `No contributions on ${date}`;
    return `${count} contribution${count === 1 ? '' : 's'} on ${date}`;
  };

  // Group data by weeks
  const weeksData = Array.from({ length: weeks }, (_, weekIndex) => {
    const weekStart = weekIndex * 7;
    return contributionData.slice(weekStart, weekStart + 7);
  });

  // Get month names for labels
  const monthLabels = Array.from({ length: months }, (_, i) => {
    const date = new Date(today);
    date.setMonth(date.getMonth() - (months - 1 - i));
    return date.toLocaleString('default', { month: 'short' });
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          {/* Week day labels */}
          <div className="flex flex-col gap-1 mr-2">
            {['Mon', 'Wed', 'Fri', 'Sun'].map((day) => (
              <div key={day} className="h-3 text-xs text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div className="flex gap-1">
            {weeksData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={cn(
                      "w-3 h-3 rounded-sm",
                      getColor(day.count),
                      "hover:scale-125 transition-transform cursor-help"
                    )}
                    title={getTooltipText(day.count, day.date)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Month labels */}
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          {monthLabels.map((month, i) => (
            <span key={i}>{month}</span>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-4 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-muted" />
            <div className="w-3 h-3 rounded-sm bg-green-100" />
            <div className="w-3 h-3 rounded-sm bg-green-200" />
            <div className="w-3 h-3 rounded-sm bg-green-300" />
            <div className="w-3 h-3 rounded-sm bg-green-400" />
            <div className="w-3 h-3 rounded-sm bg-green-500" />
            <div className="w-3 h-3 rounded-sm bg-green-600" />
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
} 