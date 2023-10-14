import './globals.css'
import type { Metadata } from 'next'
import {Footer, Navbar} from '@/components'


export const metadata: Metadata = {
  title: 'Cars Learning Next',
  description: 'App generated with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'> 
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
