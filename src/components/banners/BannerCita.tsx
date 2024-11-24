import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../modals/LayoutModal'

export const BannerCita = ({paginaActual} : {paginaActual?: string}) => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenMascota, setIsModalOpenMascota] = useState(false);


    const openModalMascota = () => setIsModalOpenMascota(true);
    const closeModalMascota = () => setIsModalOpenMascota(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500 mb-10">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-start">
        <p className="text-xs text-white/80 uppercase tracking-wider">
          Bienvenido al módulo de citas
        </p>
        <p className="mt-1 text-white font-medium">
          Aquí podrás encontrar la información e historial de tus citas programadas.
        </p>
      </div>

      <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center gap-2">
        <button onClick={ paginaActual === 'Mascotas' ? openModalMascota : openModal} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          {paginaActual === 'Mascotas' ? 'Agregar Mascota' : 'Agendar Cita'}
        </button>
        
        <button onClick={() => paginaActual === 'Mascotas' ? navigate('/citas') : navigate('/mascotas')} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          {paginaActual === 'Mascotas' ? 'Ver Citas' : 'Visitar Mascotas'}
        </button>
        <button onClick={() => navigate('/')} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          {'Salir'}
        </button>
      </div>
    </div>
  </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal} title="Agendar Cita">
        <section className='flex-col flex gap-y-8 mt-4'>
            <div>
                <label className="block text-sm mb-2 ">Fecha Cita</label>
                <div className="relative">
                <input type="date" id="date" name="date" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="date-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2 ">Hora Ingreso</label>
                <div className="relative">
                <input type="time" id="time" name="time" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="email-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2 ">motivo</label>
                <div className="relative">
                <textarea rows={7} id="text" name="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="text-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-indigo-500 font-medium text-sm text-white px-3 py-2 rounded-xl'>Finalizar</button>
            </div>
        </section>
    </Modal>
    <Modal isOpen={isModalOpenMascota} onClose={closeModalMascota} title="Agregar Mascota">
        <section className='flex-col flex gap-y-8 mt-4'>
            <div>
                <label className="block text-sm mb-2 ">Nombre Mascota</label>
                <div className="relative">
                <input type="text" id="nombre-mascota" name="nombre-mascota" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="nombre-mascota-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2 ">Especie</label>
                <div className="relative">
                <input type="text" id="especie-mascota" name="especie-mascota" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="especie-mascota-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2 ">Raza</label>
                <div className="relative">
                <input type="text" id="raza-mascota" name="raza-mascota" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="raza-mascota-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2 ">Género</label>
                <div className="relative">
                <input type="text" id="genero-mascota" name="genero-mascota" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="genero-mascota-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2 ">Género</label>
                <div className="relative">
                <input type="number" id="edad-mascota" name="edad-mascota" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="edad-mascota-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <button className='bg-indigo-500 font-medium text-sm text-white px-3 py-2 rounded-xl'>Finalizar</button>
            </div>
        </section>
    </Modal>
    </>
  )
}
