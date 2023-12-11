import Icon from '../Icon/Icon'
import React from 'react'

export default function TodoItem({ content, completed }) {
    return (
        <li className='todo-item'>
            <div className="todo-container">
                <div className="check-content">
                    <input type="checkbox" checked={completed} />
                    <h3 className={`${completed ? "line-through" : ""}`}>{content}</h3>
                </div>
                <div className="action-container">
                    <button type="button">
                        <Icon name='TrashIcon' width={20} height={20} />
                    </button>
                </div>
            </div>
        </li>
    )
}
