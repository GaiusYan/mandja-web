import React from 'react'

interface ProtectedLayoutProps {
    children : React.ReactNode,
}


const ProtectedLayout  = ({children}: ProtectedLayoutProps) => {
  return (
    <>
        <div className='pt-19'>
            {children}
        </div>
    </>
  )
}

export default ProtectedLayout;
