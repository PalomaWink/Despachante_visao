
//componentes
import Image from "next/image"
import { servicos } from "../data/servicos"

export default function Servicos() {
  return (
    <div id="servicos" className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold my-8">Serviços</h1>
      <div className="grid md:grid-cols-3 gap-6 place-items-center ">
        {
          servicos.map((servico) => (
            <div key={servico.id} className="w-60 h-40 p-5 rounded-full shadow-md shadow-laranja-claro hover:shadow-lg hover:shadow-laranja-forte transition-shadow flex flex-col items-center justify-center">
              <Image src={servico.img} alt={servico.name} width={100} height={100}/>
              <p className="text-sm mt-3 break-words text-center">{servico.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}