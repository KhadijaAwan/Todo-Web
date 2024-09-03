import { TaskType } from "@/components/types";
import { NextResponse } from "next/server";

const apiUrl="https://false-full-palladium.glitch.me/tasks";

export const getTasks = async () => {
    try {
      let totalTasks = await fetch(apiUrl, {cache: "no-store"});
      totalTasks = await totalTasks.json();
      return totalTasks;
    } catch (error) {
      return NextResponse.json(error, { status: 400 });
    }
  };
  
  export const addTask = async (payload: TaskType) => {
    try {
      let response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(payload),
      });
      const newTask = await response.json();
      return NextResponse.json(newTask, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 400 });
    }
  };

  export const deleteTask = async (taskId: string) => {
    try {
      let response = await fetch(`${apiUrl}/${taskId}`, {
        method: "DELETE",
      });
      return NextResponse.json({message: "Task Deleted Successfully!"}, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 400 });
    }
  };

  export const updateStatus = async (taskId: string, currentStatus: boolean) => {
    try {
      let response = await fetch(`${apiUrl}/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ status: currentStatus }),
      });
      return NextResponse.json({message: "Task Updated Successfully!"}, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 400 });
    }
  };