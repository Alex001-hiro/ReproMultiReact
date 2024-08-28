import React from 'react'


const Cabecera = () => {
    return (
        <div className='z-50 h-[50px] flex items-center justify-between pr-5 pl-4 bg-[#121212] sticky top-0 border-black'>
            <div className='flex items-center gap-1'>
                <img src="Logo_pri.svg" alt="logo" className='h-[45px]'/>
                <span className='text-[20px] font-[700]'>SOUNDLY</span>
            </div>
            <div className='flex items-center gap-2'>
                <img src='assets/login.jpg' alt="Logo" className='rounded-full h-[30px]'/>
                <div className='flex flex-col text-[12px] font-[600]'>
                    <span>Juan Albert</span>
                    <span>Lopes Aliaga</span>
                </div>
            </div>
        </div>
    )
}

export default Cabecera
