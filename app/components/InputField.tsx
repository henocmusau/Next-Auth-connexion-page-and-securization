'use client'
import React from 'react'

type Props = {
    type?: 'text' | 'password'
    name: string
    label: string
    value: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({ handleChange, value, type, name, label }: Props) {
    return (
        <input
            type={type || 'text'}
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
            id={name}
            placeholder={label}
            className='inputField'
            autoComplete='off'
        />
    )
}
