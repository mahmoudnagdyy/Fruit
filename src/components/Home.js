import '../css/home.css'

import homeImg from '../imgs/home-fruits.png'


function Home() {
    return (
        <section className="flex flex-row flex-wrap w-full justify-evenly items-center home">

            <div className="flex flex-col  animate__animated animate__fadeInUp">

                <h1 className="capitalize font-bold enjoy text-7xl">enjoy the<br /> best fresh <br /> fruits</h1>
                <p className='first-letter:capitalize text-gray-500 mt-5 home_p'>enjoy the best organic fruits harvested with the<br /> best possible quality, obtaining unique and<br /> delicious flavors.</p>

                <a className='mt-10 home_link capitalize font-bold bg-green-600 text-white py-4 px-7 hover:scale-110 duration-300 rounded-full w-fit' href=''>order fruit now</a>
            </div>

            <img src={homeImg} className='homeImg animate__animated animate__zoomIn' />

        </section>
    )
}

export default Home;