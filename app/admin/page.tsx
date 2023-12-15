import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
export default function AdminPage() {
    return (
        <section className='flex flex-col items-center justify-center h-full text-left'>
            <h1 className='text-3xl'>Very Secret Page with Nuclear codes</h1>
            <p className='my-6 text-red-400'>Code : CFF8563G7Bcs6sdZ8S455xd</p>

            <Link
                href='/'
                className='linkBtn mt-4'
            >
                Go back to Home Page
            </Link>

            <LogoutButton />
        </section>
    )
}
