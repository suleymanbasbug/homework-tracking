import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setAuthUser} from "../store/actions/authUser"
import { IAuthUser} from "../types/authUser.type"
import Toaster from "../components/Toaster";

type Props = {
  userType: number;
};

const SignIn: React.FC<Props> = ({ userType }): JSX.Element => {
  const [userTypeName, setUserTypeName] = React.useState<string>("");
  const [logined, setLogined] = React.useState<boolean>(false);
  const [failedMessage, setFailedMessage] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setPassword("123");
    switch (userType) {
      case 1:
        setUserTypeName("teacher");
        setEmail("sibelyildiz@g.com");
        break;
      case 2:
        setEmail("suleymanbasbug@hotmail.com");
        setUserTypeName("student");
        break;
      case 3:
        setEmail("admin@admin.com");
        setUserTypeName("admin");
        break;
      default:
        break;
    }
  }, [userType]);

  const changeUserTypeNameForAxios = (userTypeName: any): string => {
    return [...userTypeName].reduce((acc, curr, index) => {
      if (index === userTypeName.length - 1) {
        return `${acc}${curr}s.json`;
      }
      return acc + curr;
    }, "");
  };

  const getUserData = async (): Promise<void> => {
    return await axios.get(changeUserTypeNameForAxios(userTypeName));
  };

  const checkUser = (users:Array<any>, email:any, password:any):Array<IAuthUser> => {
    return users.filter((user: { email: any; password: any; }) => user.email == email && user.password == password);
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    getUserData().then(({ data }: any) => {
      if(data && email && password) {
        const user = checkUser(Object.values(data), email, password);
        if(user.length > 0) {
          const authUser = user[0];
          authUser.userType = userType;
          dispatch(setAuthUser(authUser));
          localStorage.setItem("authUser", JSON.stringify(authUser));
          setTimeout(()=> {
          navigate(`/${userTypeName}`);
          },300)
        }else{
          setFailedMessage("Email or password is incorrect");
          setLogined(true);
        };
      }else{
        setLogined(true);
        setFailedMessage("Missing email or password or dont have any user");
      }
    });
    setLogined(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {logined && <Toaster message={failedMessage} type="error"/>}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {` ${userTypeName} Sign in`}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
