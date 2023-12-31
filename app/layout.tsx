import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ToasterProvider from './Providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jewerly-Proyect',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <Navbar currentUser={currentUser}/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
