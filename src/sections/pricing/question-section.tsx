import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2Icon } from "lucide-react";

const plans = [
  {
    channel: "Web Channels",
    StarterPlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    GrowthPlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    EnterprisePlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
  },
  {
    channel: "Chat Channels",
    StarterPlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    GrowthPlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    EnterprisePlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
  },
  {
    channel: "Phone Channels",
    StarterPlan: "-",
    GrowthPlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    EnterprisePlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
  },
  {
    channel: "SMS Channels",
    StarterPlan: "-",
    GrowthPlan: (
      <CheckCircle2Icon className="text-secondary-foreground mx-auto" />
    ),
    EnterprisePlan: "-",
  },
  {
    channel: "Analytic Type",
    StarterPlan: "Basic Analytics",
    GrowthPlan: "Full Analytics Suite",
    EnterprisePlan: "Advanced Analytics",
  },
  {
    channel: "Reports Type",
    StarterPlan: "Standard Customization",
    GrowthPlan: "Priority Support",
    EnterprisePlan: "Custom Reports",
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
          {plans.map((channel) => (
            <TableRow
              key={channel.channel}
              className="text-center text-primary-foreground"
            >
              <TableCell className="font-semibold text-[18px]">
                {channel.channel}
              </TableCell>
              <TableCell className="text-primary-foreground text-[18px]">
                {channel.StarterPlan}
              </TableCell>
              <TableCell className="text-primary-foreground text-[18px]">
                {channel.EnterprisePlan}
              </TableCell>
              <TableCell className="text-primary-foreground text-[18px]">
                {channel.GrowthPlan}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
