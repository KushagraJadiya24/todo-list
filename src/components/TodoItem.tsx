"use client";

import { useRouter } from "next/navigation";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const router = useRouter();

  return (
    <li
      className="flex items-center justify-between px-4 py-3 rounded-xl
                 bg-white/10 backdrop-blur-md shadow-md border border-white/20
                 transition hover:bg-white/20"
    >
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="checkbox"
          className="peer cursor-pointer w-5 h-5 accent-indigo-500"
          defaultChecked={complete}
          onChange={async (e) => {
            await toggleTodo(id, e.target.checked);
            router.refresh(); // refresh after toggle
          }}
        />

        <label
          htmlFor={id}
          className="cursor-pointer text-lg font-medium text-white transition
                     peer-checked:line-through peer-checked:text-slate-400"
        >
          {title}
        </label>
      </div>

      {/* Delete button */}
      <button
        onClick={async () => {
          await deleteTodo(id);
          router.refresh(); // refresh after delete
        }}
        className="ml-3 text-red-400 hover:text-red-500 transition-colors"
      >
        ❌
      </button>
    </li>
  );
}
