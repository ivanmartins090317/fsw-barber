
import Image from "next/image";


import {SearchIcon } from "lucide-react"
import { Header } from "./_components/Header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma";
import { BarbershopItem } from "./_components/barbershop-item";




const  Home = async () =>{
  // conexão banco de dados
  const barbershops = await db.barbershop.findMany({})
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
       <h2 className="mt-6 mb-3 text-xs uppercase text-gray-400">Agendamento</h2>
       <Card className="">
         <CardContent className="flex items-center justify-between">
          {/* Badge */}
          <div className="flex flex-col py-5 gap-2" >
            <div className="flex flex-col">
              <Badge className="w-fit mb-2">Confirmado</Badge>
              <h2 className="text-font-semibold">Corte de Cabelo</h2>
            </div>

            {/* Avatar */}
            <div className="flex gap-2 items-center">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
                alt="avatar barbearia"/>
              </Avatar>
              <p className="text-sm">FSW Barber</p>
            </div>
            {/* Horario */}
          </div>
            <div className="flex flex-col justify-center items-center border-l-2 border-solid pl-5 " >
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">07</p>
              <small className="text-sm">10:00</small>
            </div>
         </CardContent>
       </Card>
        {/* Barber shop item */}
        <h2 className="mt-6 mb-3 text-xs uppercase text-gray-400">Recomendados</h2>
         <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
            {
              barbershops.map(barbershop =>(
                <BarbershopItem key={barbershop.id} barbershop={barbershop}/>

              ))
            }
       
      </div>
       </div>
      

     

    </div>

  )
}

export default Home
