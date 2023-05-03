"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import { Tool } from "@/app/tools/components/tool";

export function ToolDetail({
  tool,
}: {
  tool: {
    tool_name: string;
    manufacturer: string;
    model: string;
    barcode: string;
  };
}) {
  const router = useRouter();
  const handleClose = () => {
    router.replace("/tools");
  };
  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tool Details</DialogTitle>
        </DialogHeader>
        <Tool tool={tool} />
        <DialogFooter>
          <button onClick={handleClose}>Close</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
