import { Fade } from 'react-reveal';
import '../css/join.css'


function Join() {
    return (
        <Fade bottom>
            <section id='join' className='flex flex-col join_cont m-auto my-32'>

                <div className='flex flex-col justify-center items-center join_info'>
                    <h3 className='text-white font-bold text-4xl capitalize text-center'>recieve the<br />best fruits</h3>
                    <p className='first-letter:capitalize text-center text-gray-200 my-5'>get up to date with the latest fruit harvests<br />and information from us.</p>
                    <div className='flex flex-row bg-white py-3 px-4 rounded-full subsribe_cont'>
                        <input type='email' required placeholder='Your Email' className='outline-0 w-72 px-2' />
                        <button className='capitalize font-bold bg-green-600 text-white py-5 px-7 rounded-full'>subscribe now</button>
                    </div>

                </div>

            </section>
        </Fade>
    )
}

export default Join;