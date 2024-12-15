export function SmartWorkplaces() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Smart Workplaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-48 h-48">
                <div className={`absolute inset-0 rounded-full ${feature.bgColor} opacity-20`} />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative w-full h-full object-contain p-8"
                />
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Collaborate",
    description: "Enhances Innovation, Efficiency & Synergy",
    image: "/placeholder.svg",
    bgColor: "bg-blue-500"
  },
  {
    title: "Communicate",
    description: "Facilitates Clarity, Alignment & Productivity",
    image: "/placeholder.svg",
    bgColor: "bg-pink-500"
  },
  {
    title: "Engage",
    description: "Boosts Morale, Loyalty & Productivity",
    image: "/placeholder.svg",
    bgColor: "bg-yellow-500"
  }
]

