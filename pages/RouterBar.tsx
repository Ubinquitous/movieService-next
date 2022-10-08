import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const RouterBar = () => {
    const router = useRouter();


    return (
        <nav>
            <Link href='/'>
                <a style={{ color: router.pathname === '/' ? "red" : "" }}>Home</a>
            </Link>
            <br />
            <Link href='/about'>
                <a style={{ color: router.pathname === '/about' ? "red" : "" }}>About</a>
            </Link>
        </nav>
    );
};

export default RouterBar;