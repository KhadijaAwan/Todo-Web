"use client";
import { useState } from "react";
import { addTask } from "@/app/api/tasks";
import { inputStyle, linkStyle } from "@/components/style";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const router = useRouter();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === "") return;

    await addTask({
      id: Math.random().toString(36).substr(2, 9),
      title,
      status: false,
    });
    router.refresh();
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <Input
        className={`${inputStyle}`}
        placeholder="Enter Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" className={`${linkStyle} ml-2`}>
        Add Task
      </Button>
    </form>
  );
}
