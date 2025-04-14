import React, { useEffect } from "react";
import { signUp, signIn } from "../utils/database.jsx"; // adjust path as needed

export default function SetupDummyUser() {
  useEffect(() => {
    async function createUser() {
      const signUpResult = await signUp("demoUser", "password123");
      const signInResult = await signIn("demoUser", "password123");
      console.log("SignUp:", signUpResult);
      console.log("SignIn:", signInResult);
    }

    createUser();
  }, []);

  return null; // this component just runs logic
}
