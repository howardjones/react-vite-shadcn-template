import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>Primary</Button>
<Button variant={"secondary"}>Secondary</Button>
<Button variant={"outline"}>Outline</Button>
<Button className="items-center gap-2">
 <Mail className="w-5 h-5" />
 Submit
</Button>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
