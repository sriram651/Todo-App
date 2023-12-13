import React, { useState } from 'react'

import Icon from '../Icon/Icon'

export default function AddTodo() {
    const [todoDesc, setTodoDesc] = useState("");

    function addNewTodo(e) {
        e.preventDefault();
        let allTodos = JSON.parse(localStorage.getItem("todoList"));
        const newTodo = {
            content: todoDesc,
            completed: false,
        };

        allTodos.push(newTodo);
        localStorage.setItem("todoList", JSON.stringify(allTodos));
    }

    return (
        <section className='add-todo'>
            <div className="add-todo-container">
                <form onSubmit={addNewTodo}>
                    <input
                        type="text"
                        name="todo"
                        placeholder="Add your Todo Item here..."
                        value={todoDesc}
                        onChange={(e) => setTodoDesc(e.target.value)}
                    />
                    <button type="submit">
                        <Icon name="PlusIcon" width={20} height={20} />
                        Add Todo
                    </button>
                </form>
            </div>
        </section>
    )
}
