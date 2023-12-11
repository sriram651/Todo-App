"use client";

import Head from "next/head";
import TodoItem from "@/components/TodoItem/TodoItem";
import { todoList } from "@/constants/todoMock";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Todo App</title>
      </Head>
      <ul className="todo-list w-full flex flex-col items-center justify-start gap-4">
        {todoList?.map((todo, index) =>(
          <TodoItem key={index} completed={todo.completed} content={todo.content} />
        ))}
      </ul>
    </>
  )
}
