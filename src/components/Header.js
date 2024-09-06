import { useState } from 'react';
import '../css/header.css';

import logoImg from '../imgs/logo.png'

import { PiListBold } from "react-icons/pi";
import { RiCloseLargeLine } from "react-icons/ri";

function Header() {

    const logo = <h1 className="flex flex-row capitalize font-bold logo text-xl cursor-default">
        <img src={logoImg} className='w-5 mr-2' />
        fruit
    </h1>


    const [headerState, setHeaderState] = useState(0);

    const [listState, setListState] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setHeaderState(1);
        }
        else {
            setHeaderState(0);
        }
    })


    return (
        <header className={headerState == 1 ? 'flex flex-row w-full h-24 justify-around items-center bg-white fixed top-0 left-0 z-50 header_shadow duration-500' : 'flex flex-row w-full h-24 justify-around items-center bg-white fixed top-0 left-0 z-50 duration-500'}>
            {logo}

            <div className='flex flex-row header_links'>

                <a className='capitalize font-semibold mr-16 hover:text-lime-600 duration-300' href='#'>home</a>
                <a className='capitalize font-semibold mr-16 hover:text-lime-600 duration-300' href='#about'>about us</a>
                <a className='capitalize font-semibold mr-16 hover:text-lime-600 duration-300' href='#popular'>popular</a>
                <a className='capitalize font-semibold mr-16 hover:text-lime-600 duration-300' href='#join'>join us</a>

            </div>


            <button className='text-3xl list_icon' onClick={() => setListState(!listState)}>
                {
                    listState ? <RiCloseLargeLine /> : <PiListBold />
                }
            </button>
            <div className={listState ? 'flex flex-col bg-white links_list fixed list_show w-full pb-4 border-b-4 border-lime-600 duration-500' : 'flex flex-col bg-white links_list fixed w-full pb-4 list_hide duration-500'}>

                <a className='capitalize font-semibold py-4 hover:bg-lime-600 hover:text-white duration-300 text-center' href='#'>home</a>
                <a className='capitalize font-semibold py-4 hover:bg-lime-600 hover:text-white duration-300 text-center' href='#about'>about us</a>
                <a className='capitalize font-semibold py-4 hover:bg-lime-600 hover:text-white duration-300 text-center' href='#popular'>popular</a>
                <a className='capitalize font-semibold py-4 hover:bg-lime-600 hover:text-white duration-300 text-center' href='#join'>join us</a>

            </div>



        </header >
    )
}

export default Header;