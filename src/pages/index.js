"use client";

import { useEffect, useState } from "react";

import AddTodo from "@/components/AddTodo/AddTodo";
import Head from "next/head";
import TodoItem from "@/components/TodoItem/TodoItem";
import { todoListItems } from "@/constants/todoMock";

export default function Home() {
  const [todoList, setTodoList] = useState(todoListItems);

  function deleteItem(item) {
    // console.log("deleteItem", item);
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todoList'));
    if (Boolean(todos) && todos.length > 0) {
      setTodoList(todos);
    } else {
      localStorage.setItem('todoList', JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home | Todo App</title>
      </Head>
      <section className="todo-page w-full p-4 md:px-0 flex flex-col items-center justify-start gap-4 md:gap-8">
        <AddTodo />
        <ul className="todo-list w-full flex flex-col items-center justify-start gap-4">
          <h1 className="text-2xl font-bold w-full text-left">Your Todo&apos;s</h1>
          {todoList?.map((todo, index) => (
            <TodoItem key={index} todo={todo} handleDelete={deleteItem} />
          ))}
        </ul>
      </section>
    </>
  )
}
