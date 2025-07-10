import {Button} from "@/app/components/ui/button";


export function JoinPageSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-green-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800">Join EcoMovil</h2>
                    <p className="text-gray-600 ">Register with your email and get early access to EcoMovil.</p>

                    <div className="flex flex-col gap-3 items-center justify-center">

                       <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500 w-72"
                        />
                        <Button className="bg-green-600 hover:bg-green-700 w-64">Register</Button>

                    </div>

                </div>
            </div>
        </section>
    )
}
