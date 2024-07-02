'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    path: string,
    text: string,
}

const ClientLink = ({ path, text }: Props) => {

    const pathName = usePathname();
    return (
        <Link className={`text-md no-underline ${pathName === path ? 'text-red-700' : 'text-black'} hover:text-blue-dark ml-2 px-1`} href={path}>{text}</Link>
    )
}

export default ClientLink