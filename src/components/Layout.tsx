import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface LayoutProps{
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (

    <div className="flex flex-row justify-start">
        <Sidebar /> 
        
        <div className="flex-1 p-2">  
            {children}
        </div>
       
        </div>
    
  );
};

export default Layout