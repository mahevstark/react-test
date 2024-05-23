import { useState } from "react";
import "./styles.css";

// Instructions for Candidate:
// 1. Add an input field to accept an email.
// 2. Add a button that passes the input value to the parent component.
// 3. In the parent component, add logic to send the value to a backend with a POST request to
// the following url https://webhook.site/bfa6fbfd-f0a5-4945-acb2-55e48976858c
const url = "https://webhook.site/bfa6fbfd-f0a5-4945-acb2-55e48976858c"
const EmailForm = (props:{sendEmail:(email:string)=>void}) => {
  const [email, setEmail] = useState("")
  const passValueToParent = ()=>{

    console.log("debug point 1")

    if(email.length<3){
      alert("Invalid Email")
    }
    console.log("debug point 2")

    props.sendEmail(email)
  }
  return <div>

    <div>
      <input
      type="email"
      name="email"
      placeholder="E-Mail"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />

      <div>

        <button type="button" onClick={passValueToParent}>Submit Email</button>
      </div>
    </div>
    <div></div>
  </div>;
};

export default function App() {

  const [submitting, setSubmitting] = useState(false)


  const sendEmail = (email:string)=>{

    setSubmitting(true)
    fetch(url, {
      headers:{
        "Content-Type":"application/json",
        
      },
      method:"POST",
      body:JSON.stringify({email})
    })
    .then((res)=>res.json())
    .then((response)=>{

      setSubmitting(false)


    }).catch((e)=>{
      setSubmitting(false)
      console.log(e)
    })
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EmailForm
      sendEmail={sendEmail}
      />

      {submitting && <span>Submitting...</span>}
    </div>
  );
}
