"use client";

import { useEffect, useState } from "react";

import AddTodo from "@/components/AddTodo/AddTodo";
import EmptyState from "@/components/EmptyState/EmptyState";
import Head from "next/head";
import TodoItem from "@/components/TodoItem/TodoItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const { getItem, setItem } = useLocalStorage("todoList");

  function deleteItem(item) {
    let newList = todoList;
    newList.splice(todoList.indexOf(item), 1);
    setItem(newList);
    onModifyTodo(newList);
  }

  function onModifyTodo(newList) {
    setTodoList([...newList]);
  }

  useEffect(() => {
    const todos = getItem();
    if (Boolean(todos) && todos.length > 0) {
      setTodoList(todos);
    } else {
      setItem([]);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home | Todo App</title>
      </Head>
      <section className="todo-page w-full p-4 xl:px-0 flex flex-col items-center justify-start gap-4 md:gap-8">
        <AddTodo onModifyTodo={onModifyTodo}/>
        <ul className="todo-list w-full flex flex-col items-center justify-start gap-4">
          <h1 className="text-3xl font-bold w-full text-left">Your Todo&apos;s</h1>
          {todoList?.length !== 0 ? (
            todoList?.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} handleDelete={deleteItem} />
          ))) : (
            <EmptyState emptyStateMessage="There are no tasks on your to-do list. Let's get started by adding a new one!"/>
          )}
        </ul>
      </section>
    </>
  )
}
