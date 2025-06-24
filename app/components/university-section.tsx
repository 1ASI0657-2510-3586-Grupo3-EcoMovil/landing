import Image from "next/image"
import { Badge } from "../components/ui/badge"
import {Button} from "@/app/components/ui/button";

export function UniversitySection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-green-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">University</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Are you a college student?</h2>
                        <p className="text-gray-600 mb-6">
                            You can sign up as a university student and have the unlimited plan <span className="font-bold">for free!</span>  Just enter the name of your university and your official email address and you will enjoy full access at no cost
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 h-12 px-8">Get Started As College Student</Button>
                    </div>
                    <div className="relative">
                        <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/university.jpg"
                                alt="Eco Móvil Logo"
                                width={700}
                                height={300}
                                className="object-cover rounded-lg shadow-lg mx-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
