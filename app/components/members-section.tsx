import Image from "next/image"

import { Badge } from "../components/ui/badge"

export function MembersSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Members</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">About the Members</h2>
                    <p className="text-gray-600 ">Meet the team information behind our website’s development .</p>
                    <div className="flex items-center -space-x-4">
                        <div className="flex items-center space-x-4 text-gray-600 ">
                            <div className="flex flex-col items-center gap-2">
                                <Image
                                    src="/members/alexander.png"
                                    alt="Alexander"
                                    width={96}
                                    height={96}
                                    className="rounded-full border-2 border-white shadow"
                                />
                                <p>Alexander</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <Image
                                    src="/members/david_gallo.png"
                                    alt="David Gallo"
                                    width={96}
                                    height={96}
                                    className="rounded-full border-2 border-white shadow"
                                />
                                <p>David G.</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <Image
                                    src="/members/david_rodriguez.png"
                                    alt="David Rodriguez"
                                    width={96}
                                    height={96}
                                    className="rounded-full border-2 border-white shadow"
                                />
                                <p>David R.</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <Image
                                    src="/members/lorenzo.png"
                                    alt="Lorenzo"
                                    width={96}
                                    height={96}
                                    className="rounded-full border-2 border-white shadow"
                                />
                                <p>Lorenzo</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <Image
                                    src="/members/piero.png"
                                    alt="Piero"
                                    width={96}
                                    height={96}
                                    className="rounded-full border-2 border-white shadow"
                                />
                                <p>Piero</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
