import React from 'react'
import { BannerCita } from '../../components/banners/BannerCita'
import { Mascota } from '../../components/cards/Mascota'

export const Mascotas = () => {
  return (
    <main>
        <BannerCita paginaActual={'Mascotas'}/>
        <h2 className='text-center text-3xl text-gray-800 font-bold'>Mascotas 🐶</h2>
        <section className='container mx-auto grid grid-cols-3 py-3 gap-8 mt-8'>
            <Mascota />
            <Mascota />
            <Mascota />
            <Mascota />
            <Mascota />
            <Mascota />
            <Mascota />
        </section>
    </main>
  )
}
