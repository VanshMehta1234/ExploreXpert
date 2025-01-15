import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    background: 'linear-gradient(to bottom right, #161616, #2c3e50)'
  }}>
    <SignIn routing="path" path="/sign-in" />
  </div>
);

export default SignInPage; 