import Image from "next/image"
import { Badge } from "../components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Eco Móvil, we're committed to transforming urban mobility by making sustainable transportation
              accessible to everyone. Our platform connects vehicle owners with riders, creating a sharing economy that
              reduces traffic congestion and carbon emissions.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2023, we've already helped thousands of people find convenient, affordable, and eco-friendly
              transportation options in cities across the country. Our team is passionate about creating a greener
              future and building communities around sustainable mobility.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-green-600">15K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">5K+</div>
                <p className="text-gray-600">Vehicles Listed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">25+</div>
                <p className="text-gray-600">Cities Covered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">100K+</div>
                <p className="text-gray-600">Rides Completed</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/eco-movil-logo.png"
                alt="Eco Móvil Logo"
                width={300}
                height={300}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 rounded-lg p-6 shadow-lg max-w-xs">
              <p className="text-white italic">
                "Our vision is to create cities where shared mobility is the norm, not the exception."
              </p>
              <p className="text-green-100 mt-2 font-medium">— Jane Doe, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
