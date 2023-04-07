import { useState } from "react";
import Alert from "../components/Alert";
import clientAxios from "../config/clientAxios";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


interface AlertState {
  msg: string;
  error: boolean;
}

const Login = () => {
  // States
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // TODO: MOVE ALERT TO OWN CONTEXT
  const [alert, setAlert] = useState<AlertState>({
    msg: "",
    error: false,
  });

  const navigate = useNavigate();

  const { auth, setAuth, loading } = useAuth();
  console.log(auth)



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Inputs Validations
    if ([email, password].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      // Authenticate user
      const { data } = await clientAxios.post("/login", { email, password });
      setAlert({ msg: "", error: false });

      // Save token in local storage
      localStorage.setItem("token", data.token);
      setAuth(data);
      // navigate('/dashboard')
    } catch (error) {
      console.error(error);
    }
    
  };



  const { msg } = alert;

  return (
    <>
      {msg ? <Alert alert={alert} /> : null}
      <form
        className="my-10 bg-white shadow rounded-lg px-10 py-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <input
            type="email"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="my-5">
          <input
            type="password"
            className="w-full mt-3 p-3 border rounded bg-gray-50"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-black w-2/5 mb-5 py-3 md:justify-center p-5 md:flex text-white rounded-md font-bold hover:cursor-pointer container mx-auto"
        />
      </form>
    </>
  );
};

export default Login;
