
const ReusableForm = ({formTitle,hendleSubmit, submitBtnText ='Submit'}) => {
    // const hendleSubmit =e =>{
    //     e.preventDefault()
    // }
    return (
        <div>
            <div className='w-6/12 mx-auto '>
            <h1>{formTitle}</h1>
                <form className='bg-slate-300 p-32' onSubmit={hendleSubmit}>
                    <input className='py-3 text-slate-50' type="text" name="name" id="" placeholder='Enter Text' />
                    <br />
                    <input className='py-3 text-slate-50 mt-2' type="text" name="email" id="" placeholder='Enter Text' />
                    <br />
                    <input className='py-3 text-slate-50 mt-2' type="text" name="number" id="" placeholder='Enter Text' />
                    <br />
                    <input className='bg-orange-500 mt-3 p-2 rounded-md' type="submit" value={submitBtnText} />
                </form>
            </div>
        </div>
    );
};

export default ReusableForm;