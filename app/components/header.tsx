import Link from "next/link"
import { Button } from "../components/ui/button"
import { Bike } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900">
      <div className="container flex h-16 items-center justify-end  mx-auto">
        <div className="flex items-center gap-2">
          {/* <Image
            src="/images/verde-ruta-logo.png"
            alt="Verde Ruta Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          /> */}
        </div>
        <nav className="hidden md:flex gap-6 mr-5">
          <Link href="#features" className=" text-white text-sm font-medium hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-white text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-white text-sm font-medium hover:text-green-600 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-white text-sm font-medium hover:text-green-600 transition-colors">
            Mission
          </Link>
          <Link href="#about" className="text-white text-sm font-medium hover:text-green-600 transition-colors">
            About the team
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#download" className="hidden sm:block">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Download App
            </Button>
          </Link>
          <Link href="#pricing">
            <Button className="bg-green-600 hover:bg-green-700">Start your ride</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

