import UseInputState from "../../Hooks/UseInputState";


const HookForm = () => {
    const [name,hendleNameChange]= UseInputState('tanzid')
    const hendleSubmit =e =>{
        e.preventDefault()
        console.log('tanzd',name)
    }
    return (
        <div>
            <div className='w-6/12 mx-auto '>
                <form className='bg-slate-300 p-32' onSubmit={hendleSubmit}>
                    <input value={name} onChange={hendleNameChange} className='py-3 text-slate-50' type="text" name="name" id="" placeholder='Enter Text' />
                    <br />
                    <input className='py-3 text-slate-50 mt-2' type="text" name="email" id="" placeholder='Enter Text' />
                    <br />
                    <input className='py-3 text-slate-50 mt-2' type="password" name="password" id="" placeholder='Enter Text' />
                    <br />
                    <input className='bg-orange-500 mt-3 p-2 rounded-md' type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default HookForm;