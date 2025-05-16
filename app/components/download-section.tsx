import Image from "next/image"
import { Button } from "../components/ui/button"
import { Smartphone } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="bg-green-600 py-16 md:py-24 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the Verde Ruta App</h2>
            <p className="text-green-100 mb-8 text-lg">
              Get started today and join thousands of users who are already enjoying the benefits of shared mobility.
              Our app is available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="bg-white text-green-600 hover:bg-green-50 border-white h-14 px-6">
                <Smartphone className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button variant="outline" className="bg-white text-green-600 hover:bg-green-50 border-white h-14 px-6">
                <Smartphone className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute top-0 right-0 w-3/4 h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Verde Ruta App Screenshot 1"
                width={300}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/4 h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Verde Ruta App Screenshot 2"
                width={300}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}