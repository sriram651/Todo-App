import React, { useState } from "react"

import Icon from "../Icon/Icon"
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function TodoItem({ index, todo, handleDelete }) {
    const [checked, setChecked] = useState(todo.completed);
    const { getItem, setItem } = useLocalStorage("todoList");

    function modifyChecked() {
        setChecked(!checked);
        let allTodos = getItem();
        allTodos[index] = {
            ...allTodos[index],
            completed: !allTodos[index].completed,
        }
        setItem(allTodos);
    }

    return (
        <li className="todo-item">
            <div className="todo-container">
                <div className="check-content" onClick={modifyChecked}>
                    <input type="checkbox" checked={checked} onChange={modifyChecked} />
                    <h3 className={`${checked ? "line-through" : ""}`}>{todo.content}</h3>
                </div>
                <div className="action-container">
                    <button type="button" onClick={() => handleDelete(todo)}>
                        <Icon name="TrashIcon" width={20} height={20} />
                    </button>
                </div>
            </div>
        </li>
    )
}
