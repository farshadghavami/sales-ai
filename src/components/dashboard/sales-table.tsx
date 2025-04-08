"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Search } from "lucide-react";
import { useState } from "react";

// Mock data for demonstration
const sales = [
  {
    id: "1",
    customer: "Alex Morgan",
    email: "alex.morgan@example.com",
    company: "Tech Corp",
    amount: 12500,
    status: "Completed",
    date: "2023-06-15",
    salesRep: "John Doe",
    avatar: "/avatars/01.png",
  },
  {
    id: "2",
    customer: "Sarah Lee",
    email: "sarah.lee@example.com",
    company: "Design Co",
    amount: 8750,
    status: "Pending",
    date: "2023-06-14",
    salesRep: "Jane Smith",
    avatar: "/avatars/02.png",
  },
  {
    id: "3",
    customer: "Michael Ross",
    email: "michael.ross@example.com",
    company: "Finance Inc",
    amount: 15000,
    status: "Completed",
    date: "2023-06-13",
    salesRep: "John Doe",
    avatar: "/avatars/03.png",
  },
  {
    id: "4",
    customer: "Emily Johnson",
    email: "emily.johnson@example.com",
    company: "Marketing Pro",
    amount: 6200,
    status: "Refunded",
    date: "2023-06-12",
    salesRep: "Jane Smith",
    avatar: "/avatars/04.png",
  },
  {
    id: "5",
    customer: "David Wilson",
    email: "david.wilson@example.com",
    company: "Consulting LLC",
    amount: 9800,
    status: "Completed",
    date: "2023-06-11",
    salesRep: "John Doe",
    avatar: "/avatars/05.png",
  },
];

export function SalesTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSales = sales.filter(
    (sale) =>
      sale.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search sales..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Sales Rep</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={sale.avatar} alt={sale.customer} />
                      <AvatarFallback>
                        {sale.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{sale.customer}</div>
                      <div className="text-sm text-muted-foreground">
                        {sale.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{sale.company}</TableCell>
                <TableCell className="font-medium">
                  {formatCurrency(sale.amount)}
                </TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      sale.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : sale.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {sale.status}
                  </div>
                </TableCell>
                <TableCell>{formatDate(sale.date)}</TableCell>
                <TableCell>{sale.salesRep}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                      >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit sale</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete sale
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 