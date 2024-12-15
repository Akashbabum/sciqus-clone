import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CustomerPortal() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Customer Portal: The Account Management Solution
            </h2>
            <p className="text-xl text-gray-600">
              Handling existing customers becomes super easy with this Account Management Solution. Serve, Retain and Grow your customers to achieve additional revenues by delighting them with a transparent platform that empowers them.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" className="bg-purple-700 hover:bg-purple-800 text-white">
                Watch Now
              </Button>
              <Button variant="outline" className="text-purple-700 border-purple-700 hover:bg-purple-100">
                Explore Customer Portal
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Customer Portal Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

