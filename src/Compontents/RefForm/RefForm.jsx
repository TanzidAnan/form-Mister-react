import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const passwordRef=useRef(null);

    useEffect(() =>{
        nameRef.current.focus()
    },[])

    const hendleSubmit =e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <div className='w-6/12 mx-auto '>
                <form className='bg-slate-300 p-32' onSubmit={hendleSubmit}>
                    <input ref={nameRef} className='py-3 text-slate-50' type="text" name="name" id="" placeholder='Enter Text' />
                    <br />
                    <input ref={emailRef} defaultValue={'tanzid@gmail.com'} className='py-3 text-slate-50 mt-2' type="text" name="email" id="" placeholder='Enter Text' />
                    <br />
                    <input ref={passwordRef} className='py-3 text-slate-50 mt-2' type="password" name="number" id="" placeholder='Enter Text' />
                    <br />
                    <input className='bg-orange-500 mt-3 p-2 rounded-md' type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default RefForm;