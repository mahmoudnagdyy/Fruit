import { Bounce } from 'react-reveal';
import '../css/about.css'

import aboutImg from '../imgs/about-fruits.png'


function About() {
    return (
        <section id="about" className="bg-white flex flex-row flex-wrap w-full justify-evenly items-center pt-32">

            <Bounce left duration={2000}>
                <img className='aboutImg' src={aboutImg} />
            </Bounce>


            <Bounce bottom duration={2000}>
                <div className='flex flex-col'>

                    <h2 className='capitalize text-5xl about_head'>we provide<br /> healthy fruits</h2>
                    <p className='first-letter:capitalize text-gray-500 mt-5 about_p'>The fruits come to us from the best harvests,<br />
                        planted with the care required to obtain the best<br />
                        quality fruit, enjoying its flavors and taking care of<br />
                        your health.</p>

                    <a className='mt-12 capitalize font-bold bg-green-600 text-white py-4 px-7 hover:scale-110 duration-300 rounded-full w-fit about_a' href=''>know more</a>

                </div>
            </Bounce>


        </section>
    )
}

export default About;