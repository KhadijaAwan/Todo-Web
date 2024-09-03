"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchStyle } from "./style";
import { Input } from "./ui/input";

interface HeaderProps {
  searchItem: string;
}

export default function Header({ searchItem }: HeaderProps) {
  const [search, setSearch] = useState(searchItem);
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    router.push(`/?query=${query}`);
  };

  return (
    <div className="w-[100%] px-4 md:px-6 py-2 flex justify-between items-center h-[58px] bg-purple-800">
      <h1 className="text-white tracking-wider text-[13px] md:text-sm">Todo App</h1>
      <Input
        className={`${searchStyle} my-2`}
        placeholder="Search Here"
        value={search}
        onChange={handleSearchChange}
      />
      <h2 className="text-white tracking-wider text-[13px] md:text-sm">More Tasks</h2>
    </div>
  );
}
