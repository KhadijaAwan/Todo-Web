export type TaskType = {
  id: string;
  title: string;
  status: boolean;
};

export type StatusBtnProps = {
  taskId: string;
  currentStatus: boolean;
};

export interface SearchProps {
  searchParams: {
    query?: string;
    pageNumber?: "1" | string;
  };
}

export interface PaginationProps {
  pageNumber: number;
  totalTasks: number;
}

export interface TaskProps {
  tasks: TaskType[];
  pageNumber: number;
}

export const TASKS_PER_PAGE = 4;
