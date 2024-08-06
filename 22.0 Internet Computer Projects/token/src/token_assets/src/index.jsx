import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';


const init = async () => { 
  ReactDOM.render(<App />, document.getElementById("root"));

  //Activate the code below if you already have an account on internet Identity:
    //https://identity.ic0.app/#authorize
  
  //  const authClient = await AuthClient.create();
  // if(await authClient.isAuthenticated()){
  //   handleAuthenticated(authClient)
  // } else {
  //   await authClient.login({
  //     identityPrvider: "https://identity.ic0.app/#authorize",
  //     onSuccess: () => {
  //       ReactDOM.render(<App />, document.getElementById("root"));
  //     }
  //   });
  // }
}

async function handleAuthenticated(authClient) {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal);
  ReactDOM.render(<App loggedInPrincipal={userPrincipal} />, document.getElementById("root"));
}

init();


