'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { signIn } from "next-auth/react"

import InputField from './InputField'
import SubmitButton from './SubmitButton'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const searchParams = useSearchParams()
    const search = searchParams.get('error')

    useEffect(() => {
        if (search) setError(search)
    }, [searchParams])

    const router = useRouter()

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (!e.target || !target.value) return
        return setUsername(target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (!e.target || !target.value) return
        return setPassword(target.value)
    }

    const handleConnect = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        console.log('credentials', username, password)

        await signIn('credentials', {
            //   redirect: false,
            username,
            password,
        })
            .then((response) => {
                console.log(response);
                router.replace('/admin');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleConnect} className='flex flex-col gap-y-3 w-full md:w-[400px]'>
            <h1 className='text-3xl mb-4'>Sign In</h1>
            {
                error.length > 0 ? <p className='rounded-xl p-2 bg-red-600/10 mb-2'>Wrong credentials !<br /> Please, enter a username and password to sign in.</p> : null
            }

            <InputField value={username} handleChange={handleUsernameChange} name='username' label='Username' />
            <InputField value={password} handleChange={handlePasswordChange} type='password' name='username' label='Password' />

            <SubmitButton />
        </form>
    )
}
