import '../css/eat.css'

import enjoy1 from '../imgs/enjoy-1.png'
import enjoy2 from '../imgs/enjoy-2.png'
import enjoy3 from '../imgs/enjoy-3.png'

import { Fade } from 'react-reveal';

function Eat() {
    return (
        <section className="bg-white flex flex-row flex-wrap w-full justify-evenly pt-32">

            <Fade left>
                <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 eat_card">

                    <img className='w-32 duration-300' src={enjoy1} />
                    <h3 className='text-center capitalize mt-3 text-2xl'>healthy</h3>
                    <p className='capitalize text-gray-500 text-center'>tropical fruit</p>

                </div>
            </Fade>


            <Fade bottom>
                <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 eat_card">

                    <img className='w-32 duration-300' src={enjoy2} />
                    <h3 className='text-center capitalize mt-3 text-2xl'>delicious</h3>
                    <p className='capitalize text-gray-500 text-center'>field fruit</p>

                </div>
            </Fade>

            <Fade top>
                <div className="flex flex-col bg-gray-200 p-16 rounded-xl mb-8 eat_card">

                    <img className='w-32 duration-300' src={enjoy3} />
                    <h3 className='text-center capitalize mt-3 text-2xl'>organic</h3>
                    <p className='capitalize text-gray-500 text-center'>tropical fruit</p>

                </div>
            </Fade>


        </section >
    )
}

export default Eat;