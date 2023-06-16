import React from "react";

import HeaderComponent from "@/src/components/layout/Header";
import FooterComponent from "@/src/components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <HeaderComponent></HeaderComponent>
                <main>
                    { children }
                </main>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default Layout;