import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

// Mock data for demonstration
const stats = [
  {
    title: "Total Revenue",
    value: "$52,250",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "New Customers",
    value: "124",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Total Sales",
    value: "432",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
  },
];

export function AnalyticsStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === "up";
        const TrendIcon = isPositive ? ArrowUp : ArrowDown;

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={`inline-flex items-center ${
                    isPositive
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  <TrendIcon className="mr-1 h-3 w-3" />
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
} 