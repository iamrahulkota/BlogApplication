import React ,{ useId } from 'react'

const Input = React.forwardRef((
    { label,
    type = "text",
    className = "",
    ...props
    },ref)=>{

    const id = useId()

    return (
        
        <>
            <div className='w-full'>
                {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
                <input type={type} className={`${className} px-3 py-2 w-full bg-white text-black border outline-none`} ref={ref}/>
            </div>
        </>
    )
})
    
export default Input