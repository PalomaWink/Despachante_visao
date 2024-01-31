// Images e estilos
import logoDetran from '../../public/logoDetran.png'

// Components
import Contato from '../app/contato/page'
import Image from 'next/image'
import Sobre from '../app/sobre/page'
import Servicos from '../app/servicos/page'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <div className="relative h-screen bg-main-image bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="absolute top-0 left-0 p-4 z-20">
            <Image src={logoDetran} alt='Logo do Detran' className="w-full h-auto sm:w-2/3 sm:h-auto md:w-3/4 md:h-auto lg:w-3/4 lg:h-auto xl:w-3/4 xl:h-auto xs-custom:w-20 xs-custom:h-auto"/>
          </div>
          <div className="text-center">
            <h1 className="text-laranja-claro text-7xl mt-4 shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl xs-custom:text-3xl">DESPACHANTE VISÃO</h1>
            <p className="text-gray-400 text-2xl mt-4 sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl xs-custom:text-lg">Sua melhor opção em serviços de despachante</p>
          </div>
        </div>
      </div>
      <Sobre />
      <Servicos />
      <Contato />
    </main>
  )
}
