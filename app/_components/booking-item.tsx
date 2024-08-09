import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const BookingItem = () =>{
  return (
    <>
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
    </>
  )

}

export { BookingItem }