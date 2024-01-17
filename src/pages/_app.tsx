import type {AppProps} from "next/app";

import {QueryClient, QueryClientProvider} from "react-query";

import Layout from "@/src/components/layout/Layout";
import "@/src/styles/global.css";
import {NextPage} from "next";

interface MyAppProps extends AppProps {
    component: NextPage;
}

const App = (props: MyAppProps) => {
    const  { Component, pageProps } = props;

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });

    console.log('My App');

    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
}

export default App;