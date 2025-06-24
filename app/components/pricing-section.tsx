import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { CheckCircle } from "lucide-react"

const riderPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for occasional riders",
    features: [
      "Standard rental rates",
      "Basic rider insurance",
      "24/7 customer support",
      "Map view of available vehicles",
    ],
  },
  {
    name: "Premium",
    price: "$9.99/month",
    description: "For regular commuters",
    features: [
      "10% discount on all rentals",
      "Priority vehicle access",
      "Enhanced insurance coverage",
      "Reserve vehicles up to 1 hour in advance",
      "No unlock fees",
    ],
    popular: true,
  },
  {
    name: "Unlimited",
    price: "$29.99/month",
    description: "For daily riders",
    features: [
      "Unlimited 30-minute rides",
      "20% discount on longer rides",
      "Premium insurance coverage",
      "Reserve vehicles up to 24 hours in advance",
      "Exclusive access to premium vehicles",
      "Free delivery within 1 mile",
    ],
  },
]

const ownerPlans = [
  {
    name: "Starter",
    price: "$19.99/month",
    description: "For small fleets up to 5 vehicles",
    features: [
      "List up to 5 vehicles",
      "Basic analytics dashboard",
      "Standard commission rate (15%)",
      "Email support",
      "Basic insurance coverage",
    ],
  },
  {
    name: "Business",
    price: "$49.99/month",
    description: "For growing fleets up to 20 vehicles",
    features: [
      "List up to 20 vehicles",
      "Advanced analytics and reporting",
      "Reduced commission rate (12%)",
      "Priority email & phone support",
      "Enhanced insurance options",
      "Fleet management tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99/month",
    description: "For large fleets with unlimited vehicles",
    features: [
      "Unlimited vehicle listings",
      "Comprehensive analytics suite",
      "Lowest commission rate (10%)",
      "Dedicated account manager",
      "Premium insurance package",
      "API access for integration",
      "Custom branding options",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Subscription Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Whether you are a casual rider or a business owner with a large
            fleet.
          </p>
        </div>

        <Tabs defaultValue="riders-plans" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 text-green-800">
            <TabsTrigger value="riders-plans">For Riders</TabsTrigger>
            <TabsTrigger value="owners-plans">For Vehicle Owners</TabsTrigger>
          </TabsList>
          <TabsContent value="riders-plans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {riderPlans.map((plan, index) => (
                <Card key={index} className={`border ${plan.popular ? "border-green-600 shadow-lg" : "shadow-md"}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-green-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-600">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-green-800">{plan.price}</span>
                      {plan.price !== "Free" && <span className="text-gray-500 ml-1">/month</span>}
                    </div>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-800 hover:bg-gray-900"}`}
                    >
                      Choose Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="owners-plans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ownerPlans.map((plan, index) => (
                <Card key={index} className={`border ${plan.popular ? "border-green-600 shadow-lg" : "shadow-md"}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-green-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-600 ">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-green-800">{plan.price}</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-800 hover:bg-gray-900"}`}
                    >
                      Choose Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
