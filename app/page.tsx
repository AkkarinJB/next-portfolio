import Link from "next/link";
import { PersonalInfo } from "@/lib/data";
export default function Page(){
    return (
        <div>
            <main className="p-8">
                <h1 className="text-3xl font-bold">Welcome to my Site!</h1>
                <p className="mt-4">My name is {PersonalInfo.fullName} | {PersonalInfo.position}</p>
            </main>
        </div>
    )
}