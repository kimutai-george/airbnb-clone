'use client'

import React from "react"

interface EmptyStateProps {
    title ?: string
    subtitle ?: string
    showReset ?: boolean
}
const EmptyState: React.FC<EmptyStateProps> = ({
    title="No exact matches",
    subtitle,
    showReset
}) => {
 return (
    <div>Heere</div>
 )
}

export default EmptyState