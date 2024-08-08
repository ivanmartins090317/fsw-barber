import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image";
import { Button } from "./ui/button";


interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({barbershop} : BarbershopItemProps) =>{
  return (
    <Card className="min-w-[159px]">
      <CardContent className="p-2">
        {/* Imagem */}
        <div className="relative h-[159px] w-full mb-3">
        <Image 
          alt={barbershop.name} 
          fill
          src={barbershop.imageUrl}
          className="object-cover rounded-xl"
         />
        </div>
        {/* texto com nome e endereço */}
        <div className="p-0">
          <h3 className="truncate text-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full ">Reservar</Button>
        </div>
      </CardContent>
    </Card>
  )
}


export { BarbershopItem }