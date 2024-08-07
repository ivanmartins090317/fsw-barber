
import Image from "next/image";


import { SearchIcon } from "lucide-react"
import { Header } from "./_components/Header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"




const Home = () =>{
  return (
    <div>
      <Header/>
      <div className="p-5">
        <div >
            <h2 className="text-xl font-bold">Olá Ivan,</h2>
            <p>Terça-feira, 6 de Agosto.</p>
        </div>

        <div className="mt-6 flex justify-between gap-2">
          <Input placeholder="Buscar..."/>
          <Button>
            <SearchIcon />
          </Button>
        </div>
       <div className="mt-6 relative h-[150px] w-full">
        <Image 
         src="/Banner FSW-barber.png" 
         alt="Banner FSW Barber"
         fill
         className="rounded-xl object-cover"
         />
       </div>
       </div>


    </div>

  )
}

export default Home
