import Image from "next/image"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex flex-col gap-4 md:w-1/2">
            <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100">Eco-Friendly Transportation</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-green-800">
              Rent & Share <span className="text-green-600">Bikes & Scooters</span> Anywhere
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              The all-in-one platform that connects vehicle owners with riders. Rent out your fleet or find the perfect
              ride in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="https://main.d1g4w7d8qx9yb6.amplifyapp.com/login" passHref>
                <Button className="bg-green-600 hover:bg-green-700 h-12 px-6 cursor-pointer">
                  Start Renting Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 h-12 px-6">
                List Your Vehicles
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-xs font-medium text-green-800"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-green-600">4,000+</span> active users in your area
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-full md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/bike_and_scooter_hero.JPG"
                alt="Eco Verde App"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
