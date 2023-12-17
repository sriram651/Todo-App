import React, { useState } from "react"

import Icon from "../Icon/Icon"
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function AddTodo({ onModifyTodo }) {
    const [todoDesc, setTodoDesc] = useState("");
    const { getItem, setItem } = useLocalStorage("todoList");

    function addNewTodo(e) {
        e.preventDefault();
        let allTodos = getItem();
        const newTodo = {
            content: todoDesc,
            completed: false,
        };

        allTodos = [newTodo, ...allTodos];
        onModifyTodo(allTodos);
        setItem(allTodos);
        setTodoDesc("");
    }

    return (
        <section className="add-todo">
            <div className="add-todo-container">
                <form onSubmit={addNewTodo}>
                    <input
                        type="text"
                        name="todo"
                        placeholder="Add your Todo Item here..."
                        value={todoDesc}
                        onChange={(e) => setTodoDesc(e.target.value)}
                    />
                    <button type="submit" disabled={todoDesc === ""}>
                        <Icon name="PlusIcon" width={20} height={20} />
                        Add Todo
                    </button>
                </form>
            </div>
        </section>
    )
}
