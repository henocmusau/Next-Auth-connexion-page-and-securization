// 'use client'
// import { useSession } from "next-auth/react"
import React, { useState } from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth/next"

import { authOptions } from '@/lib/auth'
import LoginForm from '../components/LoginForm'

export default async function Login() {

    // const { data: session } = useSession()

    const session = await getServerSession(authOptions)

    if (session?.user) redirect('/admin')

    return (
        <section className='flex flex-col items-center justify-center h-full text-left'>
            <LoginForm />
        </section>
    )
}
