import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
    const router = useRouter();

    return (
        <nav>
            <picture>
                <img src='/vercel.svg' alt='Logo' />
            </picture>
            <div>
                <Link href='/'>
                    <a className={router.pathname === "/" ? "active" : "notActive"}>Home</a>
                </Link>
                <Link href='/about'>
                    <a className={router.pathname === "/about" ? "active" : "notActive"}>About</a>
                </Link>
            </div>

            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 20px 20px -20px,
                    rgba(0, 0, 0, 0.3) 0px 10px 20px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                    text-decoration: none;
                }
                .active {
                    color: tomato;
                }
                .notActive {
                    color: black;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
};

export default Header;