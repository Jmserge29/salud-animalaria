import React from 'react'
import { FooterLanding } from '../../components/footers/FooterLanding'
import { HeaderLanding } from '../../components/navegation/HeaderLanding'
import { Mascota } from '../../components/cards/Mascota'
import { Cita } from '../../components/cards/Cita'
import { Masonry } from '../../components/masonry/Masonry'

export const Veterinaria = () => {
  return (
    <>
        <HeaderLanding />
        <main className='pt-2 items-center flex flex-col justify-center'>
            <section className='w-full'>
                <img className='w-full' src="https://img.freepik.com/fotos-premium/animales-domesticos-lindos-divertidos-como-perros-gatos-saltando-corriendo-jugando-felices-juntos-campo-natural-cubierto-hierba-al-aire-libre_73523-11367.jpg" alt="Fondo" />
            </section>
            <Masonry />
        </main>
        <FooterLanding />
    </>
  )
}
