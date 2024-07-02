import Link from 'next/link'
import React from 'react'
import ClientLink from './ClientLink';

interface LinkProps {
    path: string;
    text: string;
}

const links: LinkProps[] = [
    { path: '/', text: 'Home' },
    { path: '/pagina2', text: 'Pagina 2' },
    { path: '/pagina3', text: 'Pagina 3' },
    { path: '/pagina4', text: 'Pagina 4' },
    { path: '/pagina5', text: 'Pagina 5' },
]


export const NavBar = () => {

    return (
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 inner">
                <Link href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Primer Proyecto</Link><br />
                <span className="text-xs text-grey-dark">Bienvenidos a nuestro sitio</span>
            </div>
            <div className="sm:mb-0 self-center">
                {links.map((item: LinkProps) => {
                    return (
                        <ClientLink path={item.path} text={item.text} />
                    )
                })}
            </div>
        </nav>
    )
}
