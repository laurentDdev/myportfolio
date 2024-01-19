import React from 'react';
import PageContainer from "@/components/page-container";
import SocialNetwork from "@/components/social-network";

const Footer = () => {
    return (
        <footer className={"p-8"}>
            <PageContainer>
                <div className={"flex items-center justify-between w-full"}>
                    <p>&copy; copyright 2024-2025</p>
                    <SocialNetwork/>
                </div>

            </PageContainer>
        </footer>
    );
};

export default Footer;
