import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";
import AnimatedBeam from "@/components/animata/background/animated-beam";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}
async function deleteTodo(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
}
export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="relative min-h-screen w-full">
      {/* Full animated background */}
      <AnimatedBeam className="absolute inset-0 h-full w-full" children={undefined} />

      {/* Foreground UI */}
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <header className="flex justify-between items-center p-6 border-b border-white/20 backdrop-blur-lg shadow-lg">
          <h1 className="text-4xl font-extrabold tracking-wide flex items-center gap-2">
            📝 <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">My Todo List</span>
          </h1>
          <Link
            href="/new"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 
                       text-white font-semibold hover:scale-105 active:scale-95
                       transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            + New Task
          </Link>
        </header>

        <main className="p-6 max-w-3xl mx-auto w-full">
          {todos.length === 0 ? (
            <p className="text-slate-300 text-center mt-16 text-xl italic">
              🎉 All caught up! Time to chill 🚀
            </p>
          ) : (
            <ul className="mt-8 space-y-4">
              {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}
