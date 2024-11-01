
import './App.css'
// import HookForm from './Compontents/HookForm/HookForm'
import ReusableForm from './Compontents/ReusableForm/ReusableForm'
// import RefForm from './Compontents/RefForm/RefForm'
// import StateFullForm from './Compontents/StateFullForm/StateFullForm'
// import SimpleForm from './Compontents/SimpleForm/SimpleForm'
// import SimpleForm from './Compontents/SimpleForm/SimpleForm's

function App() {


  const hendleSingUpSubmit = e => {
    e.preventDefault()
  }

  const hendleUpdetSubmit = e => {
    e.preventDefault();
  }


  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'sign up'} hendleSubmit={hendleSingUpSubmit}></ReusableForm>
      <ReusableForm formTitle={'profile Updete'} submitBtnText='Updete' hendleSubmit={hendleUpdetSubmit}></ReusableForm>
    </>
  )
}

export default App
