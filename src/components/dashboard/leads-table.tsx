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
const leads = [
  {
    id: "1",
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    company: "Tech Corp",
    status: "New",
    source: "Website",
    assignedTo: "John Doe",
    avatar: "/avatars/01.png",
  },
  {
    id: "2",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    company: "Design Co",
    status: "Contacted",
    source: "Referral",
    assignedTo: "Jane Smith",
    avatar: "/avatars/02.png",
  },
  {
    id: "3",
    name: "Michael Ross",
    email: "michael.ross@example.com",
    company: "Finance Inc",
    status: "Qualified",
    source: "LinkedIn",
    assignedTo: "John Doe",
    avatar: "/avatars/03.png",
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    company: "Marketing Pro",
    status: "Proposal",
    source: "Conference",
    assignedTo: "Jane Smith",
    avatar: "/avatars/04.png",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    company: "Consulting LLC",
    status: "Negotiation",
    source: "Cold Call",
    assignedTo: "John Doe",
    avatar: "/avatars/05.png",
  },
];

export function LeadsTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads..."
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
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={lead.avatar} alt={lead.name} />
                      <AvatarFallback>
                        {lead.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {lead.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      lead.status === "New"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : lead.status === "Contacted"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : lead.status === "Qualified"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : lead.status === "Proposal"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                        : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                    }`}
                  >
                    {lead.status}
                  </div>
                </TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>{lead.assignedTo}</TableCell>
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
                      <DropdownMenuItem>Edit lead</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete lead
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