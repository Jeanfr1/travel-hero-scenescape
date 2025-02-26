
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 p-8">
            <Icons.logo className="h-6 w-6 text-primary" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-gray-600 hover:text-primary">Início</a>
            <a href="#about" className="text-gray-600 hover:text-primary">Sobre</a>
            <a href="#destinations" className="text-gray-600 hover:text-primary">Destinos</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contato</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://www.instagram.com/alaisviaja?igsh=MXRzeTNiOGhuNnprOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/laispedrodepuiz/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input 
                  id="email" 
                  placeholder="Digite seu email" 
                  type="email" 
                  className="rounded-full" 
                />
              </div>
              <Button type="submit" className="rounded-full bg-primary hover:bg-primary-dark">
                Inscrever-se
              </Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 TravelHostels. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
