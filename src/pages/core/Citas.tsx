import React from 'react'
import { Cita } from '../../components/cards/Cita'
import { BannerCita } from '../../components/banners/BannerCita'

export const Citas = () => {
  return (
    <main>
        <BannerCita />
        <h2 className='text-center text-3xl text-gray-800 font-bold'>Historico de citas</h2>
        <section className='container mx-auto grid grid-cols-3 py-3 gap-8 mt-8'>
            <Cita />
            <Cita />
            <Cita />
            <Cita />
            <Cita />
            <Cita />
            <Cita />
        </section>
    </main>
  )
}
