import { Button } from "@/components/ui/button"

export function AISection() {
  return (
    <section className="relative overflow-hidden bg-purple-950 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Artificial Intelligence For Account Management
            </h2>
            <p className="text-lg text-purple-200">
              Strengthen Your Account Management With AI
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Watch Now
              </Button>
              <Button variant="default" className="bg-white text-purple-900 hover:bg-purple-100">
                Book A Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-20 blur-3xl" />
            <img
              src="/placeholder.svg"
              alt="AI Visualization"
              className="relative w-full h-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/50 pointer-events-none" />
    </section>
  )
}

