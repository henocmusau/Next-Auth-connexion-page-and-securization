'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton() {
    return (
        <button
            className='logoutBtn mt-4 self-end'
            onClick={() => signOut()}
        >
            Sign out
        </button>
    )
}
