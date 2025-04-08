"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, UserCheck, Users } from "lucide-react";

// Mock data for demonstration
const metrics = [
  {
    title: "Sales Target Progress",
    description: "Progress towards monthly goal",
    value: 78,
    target: 100,
    progress: 78,
    icon: Target,
    trend: "+12% from last month",
  },
  {
    title: "Customer Retention",
    description: "Returning customers this month",
    value: 92,
    target: 100,
    progress: 92,
    icon: UserCheck,
    trend: "+5% from last month",
  },
  {
    title: "Lead Conversion",
    description: "Leads converted to sales",
    value: 45,
    target: 100,
    progress: 45,
    icon: Users,
    trend: "-3% from last month",
  },
];

export function SalesMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const isPositive = metric.trend.startsWith("+");

        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">
                  {metric.value}%
                </div>
                <div className="text-sm text-muted-foreground">
                  of {metric.target}%
                </div>
              </div>
              <CardDescription className="mt-1">
                {metric.description}
              </CardDescription>
              <Progress
                value={metric.progress}
                className="mt-3"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                <span
                  className={`font-medium ${
                    isPositive
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {metric.trend}
                </span>
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
} 