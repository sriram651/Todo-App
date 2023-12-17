import React from "react"

export default function EmptyState({ emptyStateMessage }) {
    return (
        <div className="empty-state">
            <div className="empty-state-container">
                <h2>
                    {emptyStateMessage}
                </h2>
            </div>
        </div>
    )
}
