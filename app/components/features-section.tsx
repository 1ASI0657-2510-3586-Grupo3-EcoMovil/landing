import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { MapPin, CreditCard, Clock, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: <MapPin className="h-10 w-10 text-green-600" />,
    title: "Location Tracking",
    description: "Find available vehicles near you with real-time location tracking and availability status.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-green-600" />,
    title: "Secure Payments",
    description: "Pay-per-use with secure payment processing and transparent pricing with no hidden fees.",
  },
  {
    icon: <Clock className="h-10 w-10 text-green-600" />,
    title: "Flexible Rentals",
    description: "Rent by the minute, hour, or day. Complete flexibility to suit your needs.",
  },
  {
    icon: <Zap className="h-10 w-10 text-green-600" />,
    title: "Quick Booking",
    description: "Book a vehicle in seconds with our streamlined app interface and instant confirmations.",
  },
  {
    icon: <Shield className="h-10 w-10 text-green-600" />,
    title: "Insurance Coverage",
    description: "All rentals include basic insurance coverage for peace of mind while riding.",
  },
  {
    icon: <Users className="h-10 w-10 text-green-600" />,
    title: "Owner Dashboard",
    description: "Manage your fleet, track earnings, and optimize your rental business all in one place.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Why Choose Verde Ruta?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to rent or list bikes and scooters with powerful features designed for both
            riders and vehicle owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-green-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
