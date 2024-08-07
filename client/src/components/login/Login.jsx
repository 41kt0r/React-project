import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '' };

export default function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const login = useLogin();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6 && !/\s/.test(password);
    };

    const loginHandler = async ({ email, password }) => {
        if (!email || !password) {
            setErrorMessage("All fields are required");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email address");
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain no spaces");
            return;
        }

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler
    );

    return (
        <div className="loginRegisterWrapper">
            <main className="loginRegister-main">
                <div className="registerLoginContainer">
                    <div className="registerLoginWrapper">
                        <form action="" onSubmit={submitHandler}>
                            <h1 className="registerLoginTitle">Login</h1>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="Email"
                                    required />
                                <i className="fa-solid fa-user"></i>
                            </div>

                            <div className="input-box">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    required />
                                <i className="fa-solid fa-key"></i>
                            </div>

                            {errorMessage && (
                                <p className="field">
                                    <span>{errorMessage}</span>
                                </p>
                            )}

                            <button type="submit" className="btn">Login</button>

                            <div className="register-login-link">
                                <p>Don't have an account? <Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
