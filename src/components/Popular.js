import { Bounce } from 'react-reveal'
import '../css/popular.css'

import pop1 from '../imgs/popular-1.png'
import pop2 from '../imgs/popular-2.png'
import pop3 from '../imgs/popular-3.png'
import pop4 from '../imgs/popular-4.png'
import pop5 from '../imgs/popular-5.png'
import pop6 from '../imgs/popular-6.png'


import { IoMdAdd } from "react-icons/io";

function Popular() {
    return (
        <section id='popular' className="flex flex-col justify-center items-center pt-32">

            <Bounce>
                <h1 className="capitalize font-bold text-4xl text-center">popular fruits</h1>
            </Bounce>

            <div className="flex flex-row flex-wrap w-full justify-evenly items-center fruits_cont">

                <Bounce bottom duration={1500}>
                    <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 pop_card mt-24">

                        <img className='w-40 duration-300' src={pop1} />
                        <h3 className='text-center capitalize mt-3 text-2xl'>apple</h3>
                        <p className='capitalize text-gray-500 text-center'>organic fruit</p>

                        <div className='flex flex-row w-full justify-between items-center mt-8'>
                            <p className='font-bold text-lg'>$4.00</p>
                            <a className='text-white bg-green-600 p-3 rounded-full text-xl' href=''><IoMdAdd /></a>
                        </div>

                    </div>
                </Bounce>


                <Bounce bottom duration={1500}>
                    <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 pop_card mt-24">

                        <img className='w-40 duration-300' src={pop2} />
                        <h3 className='text-center capitalize mt-3 text-2xl'>watermelon</h3>
                        <p className='capitalize text-gray-500 text-center'>organic fruit</p>

                        <div className='flex flex-row w-full justify-between items-center mt-8'>
                            <p className='font-bold text-lg'>$7.00</p>
                            <a className='text-white bg-green-600 p-3 rounded-full text-xl' href=''><IoMdAdd /></a>
                        </div>

                    </div>
                </Bounce>


                <Bounce bottom duration={1500}>
                    <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 pop_card mt-24">

                        <img className='w-40 duration-300' src={pop3} />
                        <h3 className='text-center capitalize mt-3 text-2xl'>pineapple</h3>
                        <p className='capitalize text-gray-500 text-center'>organic fruit</p>

                        <div className='flex flex-row w-full justify-between items-center mt-8'>
                            <p className='font-bold text-lg'>$5.00</p>
                            <a className='text-white bg-green-600 p-3 rounded-full text-xl' href=''><IoMdAdd /></a>
                        </div>

                    </div>
                </Bounce>


                <Bounce bottom duration={1500}>
                    <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 pop_card mt-24">

                        <img className='w-40 duration-300' src={pop4} />
                        <h3 className='text-center capitalize mt-3 text-2xl'>banana</h3>
                        <p className='capitalize text-gray-500 text-center'>organic fruit</p>

                        <div className='flex flex-row w-full justify-between items-center mt-8'>
                            <p className='font-bold text-lg'>$3.00</p>
                            <a className='text-white bg-green-600 p-3 rounded-full text-xl' href=''><IoMdAdd /></a>
                        </div>

                    </div>
                </Bounce>


                <Bounce bottom duration={1500}>
                    <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 pop_card mt-24">

                        <img className='w-40 duration-300' src={pop5} />
                        <h3 className='text-center capitalize mt-3 text-2xl'>strewberry</h3>
                        <p className='capitalize text-gray-500 text-center'>organic fruit</p>

                        <div className='flex flex-row w-full justify-between items-center mt-8'>
                            <p className='font-bold text-lg'>$8.00</p>
                            <a className='text-white bg-green-600 p-3 rounded-full text-xl' href=''><IoMdAdd /></a>
                        </div>

                    </div>
                </Bounce>



                <Bounce bottom duration={1500}>
                    <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 pop_card mt-24">

                        <img className='w-40 duration-300' src={pop6} />
                        <h3 className='text-center capitalize mt-3 text-2xl'>mango</h3>
                        <p className='capitalize text-gray-500 text-center'>organic fruit</p>

                        <div className='flex flex-row w-full justify-between items-center mt-8'>
                            <p className='font-bold text-lg'>$7.00</p>
                            <a className='text-white bg-green-600 p-3 rounded-full text-xl' href=''><IoMdAdd /></a>
                        </div>

                    </div>
                </Bounce>


            </div>

        </section>
    )
}

export default Popular;