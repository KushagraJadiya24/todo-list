import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import AnimatedBeam from "@/components/animata/background/animated-beam";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.toString();
  if (!title || title.trim().length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({
    data: { title, complete: false },
  });

  redirect("/");
}

export default function New() {
  return (
    <AnimatedBeam className="min-h-screen">
      {/* 👇 This wrapper fixes centering */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-slate-700">
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold tracking-wide">✨ Add New Todo</h1>
            <p className="text-slate-400 text-sm">Stay productive & organized</p>
          </header>

          <form action={createTodo} className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Enter your task..."
              className="border border-slate-600 bg-slate-900/80 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
            />

            <div className="flex gap-3 justify-end">
              <Link
                href=".."
                className="px-4 py-2 rounded-lg border border-slate-500 text-slate-300 hover:bg-slate-700 transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:opacity-90 transition shadow-md"
              >
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedBeam>
  );
}
