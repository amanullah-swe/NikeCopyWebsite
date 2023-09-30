import React from 'react'
import { offer } from '../assets/images';

function SpecialOffer() {
    return (
        <div className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1'>
                <img src={offer}
                    alt=""
                    className='object-contain w-full' />
            </div>
            <div className='flex flex-1 flex-col'>
                <h2 className='text-4xl font-palanquin font-bold'> <span className=' text-coral-red'> Special</span> Offer</h2>
                <p className=' text-slate-gray text-lg leading-normal mt-4'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className='text-slate-gray text-lg leading-normal mt-4'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            </div>
        </div>
    )
}

export default SpecialOffer;