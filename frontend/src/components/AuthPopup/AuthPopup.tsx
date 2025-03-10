import React from "react";
import "./AuthPopup.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const AuthPopup = () => {
  const [showSignup, setShowSignup] = React.useState<boolean>(false);
  const handleLogin = () => {};
  const handleSignup = () => {};
  return (
    <div className="popup">
      {showSignup ? (
        <div className="authform">
          <div className="left">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="right">
            <h1>Signup to become a freak</h1>
            <form action="">
              <Input
                color="warning"
                placeholder="Email"
                size="lg"
                variant="outlined"
              />
              <Input
                color="warning"
                placeholder="Password"
                size="lg"
                variant="outlined"
                type="password"
              />
              <div className="form_input_leftright">
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="
                  Age"
                />
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="
                  Weight"
                />
              </div>
              <Select color="warning" placeholder="Gender">
                <Option value="male">Male</Option>
                <Option value="female">female</Option>
                <Option value="other">Other</Option>
              </Select>
              <br />
              <label htmlFor="">Height</label>
              <div className="form_input_leftright">
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="
                  Ft"
                />
                <Input
                  color="warning"
                  size="lg"
                  variant="outlined"
                  type="number"
                  placeholder="
                  In"
                />
              </div>

              <button
                onClick={() => {
                  handleSignup();
                }}
              >
                Signup
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setShowSignup(false);
                }}
              >
                Login{" "}
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="authform">
          <div className="left">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="right">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Login to become a freak</h1>
            <form action="">
              <Input
                color="warning"
                placeholder="Email"
                size="lg"
                variant="outlined"
              />
              <Input
                color="warning"
                placeholder="Password"
                size="lg"
                variant="outlined"
                type="password"
              />
              <button
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setShowSignup(true);
                }}
              >
                Signup{" "}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPopup;
