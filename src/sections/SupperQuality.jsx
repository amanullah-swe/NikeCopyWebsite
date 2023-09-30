import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constant";

function SupperQuality() {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
            <div className="w-[50%] max-md:w-full flex flex-col">
                <div className="flex flex-col justify-start items-start">
                    <h1 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
                        We Provide You <span className=' text-coral-red inline-block'>Super </span> <br />
                        <span className=' text-coral-red inline-block'>Quality </span> Shoes
                    </h1>
                    <p className=' mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                    <p className=" mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
                    <div className="w-full mt-11">
                        <Button lable={'View detail'} iconURL={''} />
                    </div>
                </div>
            </ div>
            <div className="bg-contain w-[50%] max-md:w-full flex justify-center items-center">
                <img
                    src={shoe8}
                    alt='product detail'
                    width={570}
                    height={522}
                    className='object-contain'
                />
            </div>
        </section>
    )
}

export default SupperQuality;