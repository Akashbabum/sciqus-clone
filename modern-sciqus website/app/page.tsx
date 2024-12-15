import { Button } from "@/components/ui/button"
import { NavigationMenu } from "./components/navigation-menu"
import { Hero } from "./components/hero"
import { ProductShowcase } from "./components/product-showcase"
import { SmartWorkplaces } from "./components/smart-workplaces"
import { CustomerPortal } from "./components/customer-portal"
import { AISection } from "./components/ai-section"
import { Footer } from "./components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-purple-700">SCIQUS</span>
            </a>
            <NavigationMenu />
          </div>
          <Button variant="default" className="bg-purple-700 hover:bg-purple-800">
            Book A Demo
          </Button>
        </div>
      </header>

      <main className="flex flex-col">
        <Hero />
        <ProductShowcase />
        <SmartWorkplaces />
        <CustomerPortal />
        <AISection />
      </main>

      <Footer />
    </div>
  )
}

