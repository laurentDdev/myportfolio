import React from 'react';
import PageContainer from "@/components/page-container";
import HeaderNavigation from "@/components/header-navigation";

const Header = () => {
    return (
        <header className={"p-8"}>
            <PageContainer>
                <div className={"flex items-center justify-end w-full"}>
                    <HeaderNavigation/>
                </div>
            </PageContainer>
        </header>
    );
};

export default Header;
