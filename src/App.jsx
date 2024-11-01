
import { data } from 'autoprefixer'
import './App.css'
// import HookForm from './Compontents/HookForm/HookForm'
import ReusableForm from './Compontents/ReusableForm/ReusableForm'
// import RefForm from './Compontents/RefForm/RefForm'
// import StateFullForm from './Compontents/StateFullForm/StateFullForm'
// import SimpleForm from './Compontents/SimpleForm/SimpleForm'
// import SimpleForm from './Compontents/SimpleForm/SimpleForm's

function App() {


  const hendleSingUpSubmit = data => {
    console.log('sing up ',data)
  }

  const hendleUpdetSubmit = data => {
    console.log('updet data',data)
  }


  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'sign up'} hendleSubmit={hendleSingUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Plice sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'profile Updete'} submitBtnText='Updete' hendleSubmit={hendleUpdetSubmit}>
        <div>
          <h1>Updete Profile</h1>
          <p></p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
