import viteLogo from '/vite.svg'
import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Bento} from "@/components/bento"
import { Footer } from '@/components/footer';
function App() {

  return (
    <>
    <ScrollProgress />

      <Hero />
      
       
            <Button>Click me</Button>
      <Bento/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

            <ModeToggle />
      <Footer/>

    </>
  )
}

export default App
