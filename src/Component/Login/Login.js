import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../Feature/Slice/Auth";
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth, goggleProvider } from "../Firebase/Setup";
import { signInWithPopup } from "firebase/auth";
export function Login() {
  const navigate = useNavigate();
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, goggleProvider);
      auth.currentUser?.email && navigate("/");
    } catch (err) {}
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-slate-600">
      <Card className="w-96 text-black card">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center bg-black  card-header"
        >
          <Typography variant="h3" color="white">
            Log in
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input size="lg" type="text" name="name" placeholder="Name" />
          <Input
            size="lg"
            type="password"
            name="password"
            placeholder="Password"
          />

          <div>
            {" "}
            <Link to={"/sing"}>
              <Button variant="gradient" fullWidth className="bg-orange-500">
                Continue With Mail
              </Button>
            </Link>
          </div>
          <div>
            {" "}
            <Button
              variant="gradient"
              fullWidth
              className="bg-orange-500"
              onClick={loginWithGoogle}
            >
              Continue With Goggle
            </Button>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth className="bg-orange-500">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link>
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
