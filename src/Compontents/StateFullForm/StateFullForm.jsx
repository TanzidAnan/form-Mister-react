import { useState } from "react";

const StateFullForm = () => {
    const [name,setName] =useState('tanzid anan')
    const [email,setEmai] =useState(null)
    const [password,setPassword] =useState(null);
    const [error,setError] =useState('')
    const hendleNameChange =e =>{
        setName(e.target.value)
    }
    const hendleSubmit = e => {
        e.preventDefault();

        if(password.length <6){
            setError('password most be 6 carcket')
        }
        else{
            setError('')
            console.log(email,password,name)
        }

        

    }

    const hendleEmailChange =(e) =>{
        // console.log(e.target.value);
        setEmai(e.target.value)

    }
    const hendlePasswordchange = e =>{
        setPassword(e.target.value)

    }
    return (
        <div className="w-6/12 mx-auto">
            <form className='bg-slate-300 p-32' onSubmit={hendleSubmit}>
                <input
                onChange={hendleNameChange}
                value={name}
                className='py-3 text-slate-50' type="text" name="name" id="" placeholder='Enter Text' />
                <br />
                <input 
                onChange={hendleEmailChange}
                className='py-3 text-slate-50 mt-2' type="text" name="email" id="" placeholder='Enter Text' />
                <br />
                <input
                onChange={hendlePasswordchange}
                className='py-3 text-slate-50 mt-2' type="password" name="password" id="" placeholder='Enter Text' required />
                <br />
                <input className='bg-orange-500 mt-3 p-2 rounded-md' type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;