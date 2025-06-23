import Image from "next/image"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

const riderSteps = [
  "Download the Eco Verde app and create your account",
  "Browse available bikes and scooters near your location",
  "Select a vehicle and unlock it with a tap",
  "Enjoy your ride and pay only for the time you use",
  "Park responsibly and end your rental in the app",
]

const ownerSteps = [
  "Sign up for a business account and complete verification",
  "Add your bikes or scooters to your inventory with photos and details",
  "Set your rental rates and availability schedule",
  "Track your vehicles and manage bookings through the dashboard",
  "Receive secure payments and grow your rental business",
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Simple for Everyone</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to rent a vehicle or list your own fleet, our platform makes it easy.
          </p>
        </div>

        <Tabs defaultValue="riders" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 text-green-800">
            <TabsTrigger value="riders">For Riders</TabsTrigger>
            <TabsTrigger value="owners">For Vehicle Owners</TabsTrigger>
          </TabsList>
          <TabsContent value="riders" className="border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/scooter_rider.JPG"
                  alt="Rider App Interface"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div>
                <ol className="space-y-6">
                  {riderSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 font-medium">
                        {index + 1}
                      </div>
                      <div className="text-gray-600">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="owners" className="border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <ol className="space-y-6">
                  {ownerSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 font-medium">
                        {index + 1}
                      </div>
                      <div className="text-gray-600">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/bike_owner.JPG"
                  alt="Owner Dashboard"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
