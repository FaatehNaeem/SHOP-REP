import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2Icon } from "lucide-react";

const invoices = [
  {
    invoice: "Web Channels",
    paymentStatus: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    totalAmount: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    paymentMethod: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
  },
  {
    invoice: "Chat Channels",
    paymentStatus: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    totalAmount: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    paymentMethod: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
  },
  {
    invoice: "Phone Channels",
    paymentStatus: "-",
    totalAmount: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    paymentMethod: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
  },
  {
    invoice: "SMS Channels",
    paymentStatus: "-",
    totalAmount: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    paymentMethod: "-",
  },
  {
    invoice: "Analytic Type",
    paymentStatus: "Basic Analytics",
    totalAmount: "Full Analytics Suite",
    paymentMethod: "Advanced Analytics",
  },
  {
    invoice: "Reports Type",
    paymentStatus: "Standard Customization",
    totalAmount: "Priority Support",
    paymentMethod: "Custom Reports",
  },
];

export default function QuestionSection() {
    return (
      <div className="w-screen flex-col items-center justify-center h-[500px] mt-2">
        <div className="w-[780px] mx-auto pt-12">
          <h1 className="text-[40px] text-center font-semibold">
            Have questions about our plans? Here are some common inquiries
          </h1>
        </div>
        <Table className="mx-auto w-[90%] max-w-[1240px] text-primary-foreground mt-12">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="text-center text-primary-foreground font-semibold text-[20px]">
                Starter Plan
              </TableHead>
              <TableHead className="text-center text-primary-foreground font-semibold text-[20px]">
                Growth Plan
              </TableHead>
              <TableHead className="text-center text-primary-foreground font-semibold text-[20px]">
                Enterprise Plan
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.invoice}
                className="text-center text-primary-foreground"
              >
                <TableCell className="font-semibold text-[18px]">
                  {invoice.invoice}
                </TableCell>
                <TableCell className="text-primary-foreground text-[18px]">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className="text-primary-foreground text-[18px]">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className="text-primary-foreground text-[18px]">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
}
