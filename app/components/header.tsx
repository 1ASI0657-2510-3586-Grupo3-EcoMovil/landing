import Link from "next/link"
import { Button } from "../components/ui/button"
import { Bike } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Image
            src="/images/verde-ruta-logo.png"
            alt="Verde Ruta Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          /> */}
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-green-600 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#download" className="hidden sm:block">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Download App
            </Button>
          </Link>
          <Link href="#pricing">
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

