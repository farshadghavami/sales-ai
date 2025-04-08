import { Metadata } from "next";
import { SalesTable } from "@/components/dashboard/sales-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sales | Sales Management System",
  description: "Manage your sales records",
};

function SalesTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>
      <div className="rounded-md border">
        <div className="h-10 border-b px-4">
          <Skeleton className="h-6 w-full" />
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center border-b px-4 py-4">
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Sales</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Sale
        </Button>
      </div>
      <Suspense fallback={<SalesTableSkeleton />}>
        <SalesTable />
      </Suspense>
    </div>
  );
} 