import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
}

export function Card({ children }: CardProps) {
    return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
        {children}
    </div>
    )
}