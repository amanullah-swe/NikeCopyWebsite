import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constant'
import { bigShoe1 } from '../assets/images'
import ShoeCart from '../components/ShoeCart'
import { useState } from 'react'
function Hero() {
    const [bigShoeImg, setBigshoeImg] = useState(bigShoe1);
    console.log(shoes);
    return (
        <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container' >
            <div className=' relative xl:w-2/5 flex flex-col justify-center items-start w-full max-zl:padding-x pt-28'>
                <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
                <h1 className='mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[1]'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                    <br />
                    <span className=' text-coral-red inline-block mt-3'>Nike </span> Shoes
                </h1>
                <p className=' text-slate-gray font-montserrat mt-6 mb-14 text-lg leading-8 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                <Button lable={'Show now'} iconURL={arrowRight} />
                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat) => (<div key={stat.label}>
                        <p className='text-4xl font-palanqui font-bold'>{stat.value}</p>
                        <p className='text-slate-gray font-montserrate leading-7'>{stat.label}</p>
                    </div>))}
                </div>
            </div>

            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img src={bigShoeImg} alt="shoe image" width={610} height={500} className=' object-contain relative z-10' />
                <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((image) => (<div>
                        <ShoeCart
                            imgURL={image}
                            changeBigShoeImage={(shoe) => setBigshoeImg(shoe)}
                            bigShoeImg={bigShoeImg} />
                    </div>))}
                </div>
            </div>
        </section>
    )
}

export default Hero