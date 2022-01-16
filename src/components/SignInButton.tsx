import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
type Props = {
  text: string;
  userType: number;
};

const SignInButton: React.FC<Props> = ({ text, userType }): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (userType: number): void => {
    switch (userType) {
      case 1:
        navigate("teacher/login");
        break;
      case 2:
        navigate("student/login");
        break;
      case 3:
        navigate("/admin/login");
        break;
      default:
        break;
    }
  };
  return (
    <Button variant="contained" onClick={() => handleClick(userType)}>
      {text}
    </Button>
  );
};

export default SignInButton;
