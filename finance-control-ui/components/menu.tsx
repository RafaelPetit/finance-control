import { HomeIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Menu(){
    return (
        <div className="w-16 bg-white shadow-md flex flex-col items-center py-4">
            <Link href="/dashboard">
            <HomeIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 mb-4" />
            </Link>
            <Link href="/income">
            <PlusIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 mb-4" />
            </Link>
            <Link href="/expense">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 mb-4" />
            </Link>
        </div>
    )
}