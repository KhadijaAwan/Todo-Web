import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TaskProps, TASKS_PER_PAGE, TaskType } from "./types";
import DeletBtn from "@/components/deleteBtn";
import StatusButton from "@/components/statusBtn";
import Pagination from "./pagination";

export default function TasksTable({tasks, pageNumber}: TaskProps) {
  const startIndex = (pageNumber - 1) * TASKS_PER_PAGE;
  const endIndex = startIndex + TASKS_PER_PAGE;
  const currentTasks = tasks.slice(startIndex, endIndex);

  return (
    <section className="w-[100%] md:w-[700px] lg:w-[800px] mx-auto">
      <Table className="bg-gray-50 mb-6 rounded-[10px]">
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentTasks.map((taskData: TaskType, index: number) => (
            <TableRow key={taskData.id}>
              <TableCell className="text-[12.5px] md:text-sm">{startIndex + index + 1}</TableCell>
              <TableCell className="text-[12.5px] md:text-sm">{taskData.title}</TableCell>
              <TableCell>
                <StatusButton
                  taskId={taskData.id}
                  currentStatus={taskData.status}
                />
              </TableCell>
              <TableCell>
                <DeletBtn taskId={taskData.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {tasks.length} {tasks.length > 1 ? "items" : "item"}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Pagination pageNumber={pageNumber} totalTasks={tasks.length} />
    </section>
  );
}
