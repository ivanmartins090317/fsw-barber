import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react";


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
       {/* rating */}
          <Badge className="absolute top-2 ml-2 space-x-1" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary"/>
          <p className="text-sm text-semibold">5.0</p>
          </Badge>
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