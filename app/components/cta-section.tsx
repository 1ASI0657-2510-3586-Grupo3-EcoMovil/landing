import { Button } from "../components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Mobility?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join Eco Verde today and be part of the sustainable transportation revolution. Whether you're looking to
            rent or list vehicles, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                className="bg-green-600 hover:bg-green-700 h-12 px-8"
                onClick={() => window.open("https://dev.dm5piayuhlgrr.amplifyapp.com", "_blank")}
            >
              Get Started Now
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 h-12 px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
