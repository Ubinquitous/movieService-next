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

            <style jsx>{`
                nav {
                    background-color: green;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                a {
                    font-size: 60px;
                    margin: 10px 0px 10px 0px;
                    font-weight: 800;

                }
            `}</style>
        </nav>
    );
};

export default RouterBar;