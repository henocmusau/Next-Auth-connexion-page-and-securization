import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './components/LogoutButton'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-3xl'>HOME PAGE</h1>
      <p className=' mt-9'>
        Need to access to the very secret page with nuclear codes, click to the button below.
      </p>
      <Link
        className='linkBtn mt-6'
        href={'/admin'}
      >
        Access
      </Link>
      <LogoutButton />
    </section>
  )
}
