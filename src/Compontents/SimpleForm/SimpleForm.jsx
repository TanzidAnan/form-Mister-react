import React from 'react';

const SimpleForm = () => {
    const hendleSubmit =(e) =>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(4545454)
    }
    return (
        <div className='w-6/12 mx-auto '>
            <form className='bg-slate-300 p-32' onSubmit={hendleSubmit}>
            <input className='py-3 text-slate-50' type="text" name="name" id="" placeholder='Enter Text'/>
            <br />
            <input className='bg-orange-500 mt-3 p-2 rounded-md' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;