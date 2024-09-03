"use client";
import { TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { deleteTask } from "@/app/api/tasks";
import { useRouter } from "next/navigation";

export default function DeletBtn({ taskId }: { taskId: string }) {
  const router = useRouter();
  
  const deleteData = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      router.refresh();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <Button
      className="bg-red-600 hover:bg-red-700 text-white tracking-wider rounded-full md:rounded-[10px] text-[12px] md:text-[12.5px] py-1 px-2"
      size="sm"
      onClick={() => {deleteData(taskId); router.refresh()}}
    >
      <><h2 className="hidden md:inline">Delete</h2> <TrashIcon className="md:ml-2 w-4 h-4" /></>
    </Button>
  );
}
