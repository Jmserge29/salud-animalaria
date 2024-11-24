import React from 'react'

export const Masonry = () => {
  return (
<div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-12 gap-6">
    <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://cdn-3.expansion.mx/dims4/default/5f4fb66/2147483647/strip/true/crop/724x483+0+0/resize/1200x801!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F6d%2Fa3d0b9864c02ac9012d14c2885c1%2Fistock-1489457497.jpg" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-2 px-4 md:text-xl">
            Veterinarios de alta calidad
          </div>
        </div>
      </a>
    </div>

    <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
      <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://www.provet.cloud/hubfs/Veterinarian_hugs_dog.jpg" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl ">
            Amor y cuidado
          </div>
        </div>
      </a>
    </div>

    <div className="col-span-12 md:col-span-4">
      <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://animalscenter.com/blog/wp-content/uploads/2019/03/urgencias-veterinarias-24-horas.jpg" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl ">
            Cuidado las 24 Horas
          </div>
        </div>
      </a>
    </div>

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://okvet.co/wp-content/uploads/2024/05/como-montar-una-veterinaria.jpg" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl ">
            Análisis y estudios
          </div>
        </div>
      </a>
    </div>

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <a className="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://guau.com.co/cdn/shop/files/veterinarioadomicilio_436x436.jpg?v=1699595668" alt="Masonry Cards Image"/>
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl ">
            Somos tu mejor opción
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
  )
}
