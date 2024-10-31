import React from 'react';

const SimpleForm = () => {
    
    return (
        <div className='w-6/12 mx-auto '>
            <form className='bg-slate-300 p-32'>
            <input className='py-3 text-slate-50' type="text" name="" id="" placeholder='Enter Text'/>
            <br />
            <input className='bg-orange-500 mt-3 p-2 rounded-md' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;