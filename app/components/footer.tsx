import Link from "next/link"
import { Button } from "../components/ui/button"
import { Bike } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bike className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold text-green-400">Eco Verde</span>
            </div>
            <p className="text-gray-400 mb-4">Transforming urban mobility with sustainable transportation solutions.</p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <Link key={social} href={`#${social}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="sr-only">{social}</span>
                    {/* Icon placeholder */}
                    <div className="h-5 w-5"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Help Center", "Safety Center", "Community Guidelines", "Terms of Service", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Eco Verde. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
