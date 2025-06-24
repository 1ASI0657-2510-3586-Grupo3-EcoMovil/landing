import { Card } from "@radix-ui/themes"
import { CardContent } from "./ui/card"
import { Badge } from "lucide-react"

const teamMembers = [
  {
    name: "Alexander Cantoral",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Gallo",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Rodriguez",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Piero Miranda",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Lorenzo Navarro",
    image: "/placeholder.svg?height=200&width=200",

  },
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the People Behind Verde Ruta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts is dedicated to revolutionizing urban transportation and creating a more
            sustainable future for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}