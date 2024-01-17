import React from "react";

import Header from "@/src/components/layout/fragment/Header";
import Footer from "@/src/components/layout/fragment/Footer";
import {LayoutDiv, MainDiv} from "@/src/styles/layoutStyle";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <LayoutDiv>
            <Header/>
                <MainDiv>
                    { children }
                </MainDiv>
            <Footer/>
        </LayoutDiv>
    )
}

export default Layout;