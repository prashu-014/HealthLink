import Navigation from '@/app/components/navbar/Navigation'
import React from 'react'

const ReceptionistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen w-full  border grid grid-cols-8 border-none'>
        <section className='col-span-2 my-4'>
            <Navigation />
        </section>
        <section className='col-span-6 my-4 '>
            <div className='bg-white h-full rounded-3xl p-2'>
            {children} 
            </div>
        </section>
    </main>
  )
}

export default ReceptionistLayout