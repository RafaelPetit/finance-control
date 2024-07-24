import { Card } from "./card"

interface TrackingCardsProps {
    fieldName: string
    amount?: number
}

export function TrackingCards({ fieldName, amount = 0.00 }: TrackingCardsProps) {
    return(
    <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-gray-600">{ fieldName }</h2>
        <p className="text-2xl font-bold text-gray-600">R$ {amount}</p>
    </div>
    )
}