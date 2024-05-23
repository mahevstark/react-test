import "./styles.css";

// Instructions for Candidate:
// 1. Add an input field to accept an email.
// 2. Add a button that passes the input value to the parent component.
// 3. In the parent component, add logic to send the value to a backend with a POST request to
// the following url https://webhook.site/bfa6fbfd-f0a5-4945-acb2-55e48976858c
const EmailForm = () => {
  return <div>Email form</div>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EmailForm />
    </div>
  );
}
