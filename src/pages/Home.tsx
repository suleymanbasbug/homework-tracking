import React from "react";
import SignInButton from "../components/SignInButton";
import ButtonGroup from "@mui/material/ButtonGroup";
export default function Home() {
  return (
    <ButtonGroup variant="contained" sx={{marginTop:"10rem"}}>
      <SignInButton text="Teacher Sign In" userType={1} /> 
      <SignInButton text="Student Sign In" userType={2} />
      <SignInButton text="Admin Sign In" userType={3} />
    </ButtonGroup>
  );
}
