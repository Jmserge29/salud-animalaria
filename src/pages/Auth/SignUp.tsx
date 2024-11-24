import React from 'react'

export const SignUp = () => {
  return (
    <>
        <a className='absolute top-8 left-6 font-medium text-sm font-serif' href="/">Volver al Inicio ⬅️</a>
        <main className='flex mx-auto container w-full justify-center items-center h-screen'>
            <div className="mt-7 bg-white shadow-2xl border border-gray-200 rounded-xl px-6">
    <div className="p-4 sm:p-7">
        <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 ">Registro</h1>
        <p className="mt-2 text-sm text-gray-600">
            Ya estás registrado?
            <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium ml-2" href="/sign-in">
            Inicia sesión aquí
            </a>
        </p>
        </div>

        <div className="mt-5">
        <form>
            <div className="grid gap-y-4">
            <div>
                <label className="block text-sm mb-2 ">Email</label>
                <div className="relative">
                <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " required aria-describedby="email-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>

            <div>
                <div className="flex justify-between items-center">
                <label className="block text-sm mb-2 ">Password</label>
                </div>
                <div className="relative">
                <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 bg-indigo-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error"/>
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
            </div>

            <button type="submit" className="w-full py-3 mt-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Registrarse</button>
            </div>
        </form>
        </div>
    </div>
    </div>
        </main>
    </>
  )
}
