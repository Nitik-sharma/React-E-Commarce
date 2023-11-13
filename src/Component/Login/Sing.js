import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import "./Singin.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Setup";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          navigate("/");
        }
      } else {
        setError("Please verify your email before signing in.");
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  const signInWithMail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // No need to call onAuthStateChanged here; the observer in useEffect handles it
      alert("Sign In successful!");
    } catch (error) {
      setError(error.message);
    }
  };

  const signUpAndSendVerification = async () => {
    try {
      const person = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = person.user;
      if (user) {
        await sendEmailVerification(user);
        alert("Sign Up successful! Please check your email for verification.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-sky-400">
      <Card className="w-96 card-container">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center bg-gray-500 "
        >
          <Typography variant="h3" color="white" className="heading">
            Sign in with mail
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            placeholder="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        {error && (
          <Typography
            variant="small"
            color="red"
            className="text-center mt-2 text-red-400 text-1xl"
          >
            {error}
          </Typography>
        )}
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            className="bg-sky-700"
            onClick={signUpAndSendVerification}
          >
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link to={"/login"}>
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Sign;
