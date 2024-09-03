import Link from "next/link";
import { linkStyle, disabledLinkStyle } from "./style";
import { PaginationProps, TASKS_PER_PAGE } from "./types";

export default function Pagination({ pageNumber, totalTasks }: PaginationProps) {
  const totalPages = Math.ceil(totalTasks / TASKS_PER_PAGE);
  const hasPrevious = pageNumber > 1;
  const hasNext = pageNumber < totalPages;

  return (
    <section className="flex justify-between items-center">
      <Link
        href={`?pageNumber=${pageNumber > 1 ? pageNumber - 1 : 1}`}
        className={`${!hasPrevious ? disabledLinkStyle : linkStyle}`}
        aria-disabled={!hasPrevious}
      >
        Previous
      </Link>
      <span className="text-gray-700">
        Page {pageNumber} of {totalPages}
      </span>
      <Link
        href={`?pageNumber=${pageNumber < totalPages ? pageNumber + 1 : totalPages}`}
        className={`${!hasNext ? disabledLinkStyle : linkStyle}`}
        aria-disabled={!hasNext}
      >
        Next
      </Link>
    </section>
  );
}
