import React from 'react';

const PageContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={"mx-auto w-full h-full max-w-[85%]"}>
            {children}
        </div>
    );
};

export default PageContainer;
