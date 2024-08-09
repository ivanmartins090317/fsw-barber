
import Image from "next/image";


import {SearchIcon } from "lucide-react"
import { Header } from "./_components/Header"
import { Button} from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import { BarbershopItem } from "./_components/barbershop-item";
import { quicksearchOptions } from "./_contants/quickSearch";
import { BookingItem } from "./_components/booking-item";


const  Home = async () =>{
  // conexão banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershop = await db.barbershop.findMany({
    orderBy:{
      name:"desc",
    },
  })

  return (
    <div>
      <Header/>
      <div className="p-5">
        <div >
            <h2 className="text-xl font-bold">Olá Ivan,</h2>
            <p>Terça-feira, 6 de Agosto.</p>
        </div>
       {/* Input search */}
        <div className="mt-6 flex justify-between gap-2">
          <Input placeholder="Buscar..."/>
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Busca Rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {
          quicksearchOptions.map(options =>(
            <Button key={options.title} className="gap-2" variant="secondary">
              <Image src={options.imageUrl} alt={options.title} width={16} height={16}/>
              {options.title}
            </Button>
          ))
        }
        </div>
        {/* Banner */}
       <div className="mt-6 relative h-[150px] w-full">
        <Image 
         src="/Banner FSW-barber.png" 
         alt="Banner FSW Barber"
         fill
         className="rounded-xl object-cover"
         />
       </div>
       {/* Agendamento */}
       <BookingItem/>
        {/* Barbershop Recomendad item */}
        <h2 className="mt-6 mb-3 text-xs uppercase text-gray-400">Recomendados</h2>
         <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
            {
              popularBarbershop.map(barbershop =>(
                <BarbershopItem key={barbershop.id} barbershop={barbershop}/>

              ))
            }
       
      </div>

       {/* Barbershop Popular item */}
        <h2 className="mt-6 mb-3 text-xs uppercase text-gray-400">Popular</h2>
         <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
            {
              barbershops.map(barbershop =>(
                <BarbershopItem key={barbershop.id} barbershop={barbershop}/>

              ))
            }
       
          </div>
       </div>
       <footer>
          <Card className="rounded-none">
            <CardContent className="p-3 px-6">
              <p className="text-xs text-gray-400">© 2023 Copyright <span className="font-bold">FSW Barber</span></p>
            </CardContent>
          </Card>
       </footer>
      
     

    </div>

  )
}

export default Home
