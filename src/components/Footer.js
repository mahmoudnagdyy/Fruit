import logoImg from '../imgs/logo.png'

import '../css/footer.css'


import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <footer className="bg-white flex flex-col footer_cont">

            <div className='flex flex-row flex-wrap w-full justify-around'>


                <div className='flex flex-col mb-10'>
                    <h1 className="flex flex-row capitalize font-bold logo text-xl cursor-default">
                        <img src={logoImg} className='w-5 mr-2' />
                        fruit
                    </h1>

                    <p className='first-letter:capitalize text-gray-500 mt-6'>eat healthy, choose<br />the best fruits.</p>
                </div>


                <div className='flex flex-col mb-10 '>
                    <h2 className='capitalize font-bold text-xl mb-4'>company</h2>

                    <a className='uppercase text-gray-500 mt-4 hover:text-black duration-300' href=''>faqs</a>
                    <a className='capitalize text-gray-500 mt-4 hover:text-black duration-300' href=''>about us</a>
                    <a className='capitalize text-gray-500 mt-4 hover:text-black duration-300' href=''>contact us</a>

                </div>


                <div className='flex flex-col mb-10'>
                    <h2 className='capitalize font-bold text-xl mb-4'>news</h2>

                    <a className='capitalize text-gray-500 mt-4 hover:text-black duration-300' href=''>features</a>
                    <a className='capitalize text-gray-500 mt-4 hover:text-black duration-300' href=''>testimonial</a>
                    <a className='capitalize text-gray-500 mt-4 hover:text-black duration-300' href=''>videos</a>

                </div>

                <div className='flex flex-col'>
                    <h2 className='capitalize font-bold text-xl mb-4'>social media</h2>

                    <div className='flex flex-row'>
                        <a className='capitalize text-gray-500 text-3xl mt-4 mr-5 hover:text-black duration-300' href=''><CiFacebook /></a>
                        <a className='capitalize text-gray-500 text-3xl mt-4 mr-5 hover:text-black duration-300' href=''><FaInstagram /></a>
                        <a className='capitalize text-gray-500 text-3xl mt-4 hover:text-black duration-300' href=''><FaYoutube /></a>
                    </div>

                </div>

            </div>

            <p className='text-center py-10'>Developed and powered by Mahmoud Nagdy</p>


        </footer>
    )
}

export default Footer;