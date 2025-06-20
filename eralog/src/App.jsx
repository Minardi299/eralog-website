import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Hero } from "@/components/hero";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Bento} from "@/components/bento"
import { Footer } from '@/components/footer';
import logo from "/logo.svg";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <img src={logo} alt="" />
          <span className="font-bold sm:inline-block">
            Eralog
          </span>
        </a>
        <ModeToggle />
      </div>
    </header>
  );
};
function App() {

  return (
    <>
      <Navbar />
      <ScrollProgress /> 
      <Hero />
      
      <Bento/>
     

      <Footer/>

    </>
  )
}

export default App
