import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '', rePassword: '' };

export default function Register() {
    const [errorMessage, setErrorMessage] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6 && !/\s/.test(password);
    };

    const registerHandler = async ({ email, password, rePassword }) => {
        if (!email || !password || !rePassword) {
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

        if (password !== rePassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className="loginRegisterWrapper">
            <main className="loginRegister-main">
                <div className="registerLoginContainer">
                    <div className="registerLoginWrapper">
                        <form action="" onSubmit={submitHandler}>
                            <h1 className="registerLoginTitle">Register</h1>
                            <div className="input-box">
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    autoComplete="email"
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
                                    autoComplete="password"
                                    required />
                                <i className="fa-solid fa-key"></i>
                            </div>

                            <div className="input-box">
                                <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    name="rePassword"
                                    value={values.rePassword}
                                    onChange={changeHandler}
                                    autoComplete="password"
                                    required />
                                <i className="fa-solid fa-key"></i>
                            </div>

                            {errorMessage && (
                                <p className="field">
                                    <span>{errorMessage}</span>
                                </p>
                            )}

                            <button type="submit" className="btn">Register</button>

                            <div className="register-login-link">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
