import { getTasks } from "./api/tasks";
import { SearchProps, TaskType } from "@/components/types";
import Header from "@/components/header";
import AddTask from "@/components/addBtn";
import TasksTable from "@/components/tasksTable";

export default async function Home({ searchParams }: SearchProps) {
  const pageNumber = Number(searchParams.pageNumber) || 1;
  const query = searchParams.query?.toLowerCase() || "";
  const totalTasks: TaskType[] | any = await getTasks();

  const tasks = totalTasks.filter((task: any) =>
    task.title.toLowerCase().includes(query)
  );

  return (
    <>
      <Header searchItem={query} />
      <section className="flex flex-col gap-10 px-4 sm:px-10 bg-purple-100 h-[92vh] lg:h-screen xl:h-[92vh] py-6 md:py-10">
       <AddTask/>
       <TasksTable tasks={tasks} pageNumber={pageNumber}/>
      </section>
    </>
  );
}
