"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { StatusBtnProps } from "./types";
import { updateStatus } from "@/app/api/tasks";
import { Check, TrendingDown } from "lucide-react";

export default function StatusButton({ taskId, currentStatus }: StatusBtnProps) {
  const router = useRouter();

  const toggleStatus = async (taskId: string, currentStatus: boolean) => {
    await updateStatus(taskId, !currentStatus);
    console.log(`Task: ${taskId} and Status: ${currentStatus}`)
    router.refresh();
  };

  return (
    <Button
      className={`w-max md:w-[130px] tracking-wider ${currentStatus ? "bg-green-600" : "bg-blue-700"} ${currentStatus ? "hover:bg-green-700" : "hover:bg-blue-800"} text-white rounded-full md:rounded-[10px] text-[12px] md:text-[12.5px] py-1 px-2`}
      size="sm"
      onClick={()=>toggleStatus(taskId, currentStatus)}
    >
      <>
        <h2 className="hidden md:inline">{currentStatus ? "Completed" : "Uncompleted"}</h2>
        {currentStatus ? <Check className="md:ml-2 w-4 h-4" /> : <TrendingDown className="md:ml-2 w-4 h-4" />}
      </>
    </Button>
  );
}
