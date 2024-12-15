import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProductShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore The Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex space-x-4">
                  <Button variant="default">Watch Now</Button>
                  <Button variant="outline">Explore {product.exploreText}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const products = [
  {
    title: "Employee Portal",
    description: "Engage your employees to be more productive and aligned with your organisation.",
    image: "/placeholder.svg",
    exploreText: "Employee Intranet"
  },
  {
    title: "Customer Portal",
    description: "Handling existing customers become super easy with this Account Management Solution.",
    image: "/placeholder.svg",
    exploreText: "Customer Portal"
  },
  {
    title: "Vendor Portal",
    description: "Streamline your procurement process and engage your vendors to be more productive.",
    image: "/placeholder.svg",
    exploreText: "Vendor Portal"
  }
]

