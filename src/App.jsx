import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMultistepForm } from './useMultistepForm'
import UserForm from './UserForm'
import AddressForm from './AddressForm'
import AccountForm from './AccountForm'

function App() {

  const {steps, currentStepIndex, step, back, next} = useMultistepForm([
    <UserForm/>, <AddressForm/>, <AccountForm/>
  ]);

  function submit(event) {
    event.preventDefault();
    next();
    
  }

  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Arial",
      maxWidth: "max-content",
    }}>
      <form onSubmit={submit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex+1}/{steps.length}
        </div>
        {step}
        <div 
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end",
        }}>
          {currentStepIndex+1> 1 &&<button type='button' onClick={back}>
            Prev
          </button>}
          <button>
            {currentStepIndex == steps.length-1? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
      
      
    </div>
  )
}

export default App
