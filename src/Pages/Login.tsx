import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../store/authReducer/action";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Dispatch } from "redux";
import { LoginUser } from "../Constants";
import { AppDispatch, RootState } from "../store/store";
import { getLogin } from "../store/authReducer/authSlice";

const initial: LoginUser = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState<LoginUser>(initial);
  const a = useSelector<RootState>((store)=>store.authReducer)

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    // console.log(e.currentTarget.value)
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getLogin(input));
  };
  return (
    <DIV>
      <div className="box">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className="formData">
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
          <button>Login</button>
          <p>
            Don't have account{" "}
            <Link to="/signup">
              <span style={{ color: "red" }}>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  width: 100%;
  .box {
    width: 400px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
  .formData {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  input {
    padding: 5px;
  }
  button {
    padding: 5px;
    border-radius: 10px;
    background-color: #47bd47;
    color: aliceblue;
    font-size: 20px;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: red;
  }
  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid grey;
  }
`;

export default Login;
