import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
            More Efficient & <br />
            Productive Ecosystem
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-purple-100 md:text-xl">
            Transform your business with our innovative solutions. Streamline operations, enhance collaboration, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Button size="lg" variant="default" className="bg-white text-purple-900 hover:bg-purple-50">
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Book A Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-purple-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}

