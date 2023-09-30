function Button({ lable, iconURL, fullWidth }) {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4  ${fullWidth && 'w-full'} border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red`}>
            {lable}
            {iconURL && <img src={iconURL} alt="button log" className="ml-2 rounded-full w-5 h-5 " />}
        </button>
    )
}

export default Button;