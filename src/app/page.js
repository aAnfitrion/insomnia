import NavBar from './NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
			<NavBar/>
      <div className='grid 2xl:grid-cols-4 xl:grid-cols-5 py-12 relative '>  
        <div className='xl:col-start-3 2xl:col-start-2 xl:col-span-1 2xl:col-span-2 flex place-content-center'>
          <Image src='/logo.png' width={512} height={512} alt='Logo de Insomnia' quality={100} />
        </div>
        <div className='xl:col-start-2 2xl:col-start-2 xl:col-span-3 2xl:col-span-2 text-stone-100 text-center'>
          <h1 className='xl:text-5xl 2xl:text-7xl xl:leading-relaxed 2xl:leading-tight'>Insomnia</h1>
          <p className='xl:text-xl 2xl:text-3xl'>Esta es la página oficial del servidor de Discord Insomnia.</p>
        </div>
      </div>
    </>
  )
}
