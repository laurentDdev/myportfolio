import React from 'react';
import PageContainer from "@/components/page-container";
import HeaderNavigation from "@/components/header-navigation";
import ResponsiveHeader from "@/components/responsive-header";

const Header = () => {
    return (
        <header className={"p-8"}>
            <PageContainer>
                <div className={"hidden sm:flex items-center justify-end w-full"}>
                    <HeaderNavigation/>
                </div>
                <div className={"flex sm:hidden items-center justify-end w-full"}>
                    <ResponsiveHeader/>
                </div>
            </PageContainer>
        </header>
    );
};

export default Header;
