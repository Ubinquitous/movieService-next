import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const SEO = ({ children }: PropsWithChildren) => {
    return (
        <Head>
            <title>{children} | Next Movies</title>
        </Head>
    );
};

export default SEO;