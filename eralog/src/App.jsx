import viteLogo from '/vite.svg'
import './App.css'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
function App() {

  return (
    <>
    <ScrollProgress />

      <Hero />
      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
       
            <Button>Click me</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
            <ModeToggle />

    </>
  )
}

export default App
