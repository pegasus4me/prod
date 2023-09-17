import React from 'react';

const Container = ({children, title}) => {
    
    return (
        <div className='border rounded-md max-w-[80%] m-auto mt-12'>
        <p className='font-medium p-1'>{title}</p> 
            {children}
        </div>
    );
}

export default Container;
