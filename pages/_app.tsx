import React from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Component {...pageProps} />
            <span>Hellod</span>
        </div>
    );
};

export default App;