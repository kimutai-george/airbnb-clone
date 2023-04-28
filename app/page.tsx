import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import  Navbar  from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import EmptyState from './components/EmptyState'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const isEmpty = true

  if(!isEmpty)
  {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <Container>
        <div className='
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        '>
          <div>My Listings</div>
        </div>
      </Container>
    </ClientOnly>
  )
}
