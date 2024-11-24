import React from 'react'

export const HeaderLanding = () => {
  return (
    <header className='mx-28 mt-6'>
        <div className='flex justify-between bg-stone-50 shadow-lg rounded-2xl py-5 px-10'>
            <h1 className='text-xl flex items-center font-medium text-gray-600'>Clínica Veterinaria - <span className='ml-3 font-bold text-3xl text-amber-400'>Salud Animalaria</span></h1>
            <nav>
                <ul className='flex gap-10'>
                    <li>
                        <a className='bg-amber-100 py-2 px-4 rounded-xl text-sm font-medium hover:shadow-amber-800 shadow-md transition-all duration-300' href="sign-in">Iniciar sesión</a>
                    </li>
                    <li>
                        <a className='bg-amber-100 py-2 px-4 rounded-xl text-sm font-medium hover:shadow-amber-800 shadow-md transition-all duration-300' href="sign-up">Registrarse</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
