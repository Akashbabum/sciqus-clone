import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Employee Portal</a></li>
              <li><a href="#" className="hover:text-purple-300">Customer Portal</a></li>
              <li><a href="#" className="hover:text-purple-300">Vendor Portal</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Manufacturing</a></li>
              <li><a href="#" className="hover:text-purple-300">IT/ITES</a></li>
              <li><a href="#" className="hover:text-purple-300">Retail</a></li>
              <li><a href="#" className="hover:text-purple-300">Fashion</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Blogs</a></li>
              <li><a href="#" className="hover:text-purple-300">Book A Demo</a></li>
              <li><a href="#" className="hover:text-purple-300">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">About Us</a></li>
              <li><a href="#" className="hover:text-purple-300">Join Us</a></li>
              <li><a href="#" className="hover:text-purple-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Sciqus Infotech Private Limited. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-purple-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-purple-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-purple-300"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

