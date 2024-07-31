import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '', rePassword: '' };


export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            setError("Passwords does not match!");
            return;
        }

        try {
            await register(email, password)
            navigate('/');
        } catch (err) {
            setError(err.message)
            // console.error(err.message);
        }
    };

    const {
        values, 
        changeHandler, 
        submitHandler
    } = useForm(initialValues, registerHandler)

    return (
        <div className="loginRegisterWrapper">

            <main className="loginRegister-main">
                <div className="registerLoginContainer">

                    <div className="registerLoginWrapper">
                        <form action="" onSubmit={submitHandler}>
                            <h1 className="registerLoginTitle">Register </h1>
                            <div className="input-box">
                                <input 
                                type="text" 
                                placeholder="Email" 
                                name="email"
                                value={values.email}
                                onChange={changeHandler}
                                required />
                                <i className="fa-solid fa-user"></i>
                            </div>

                            {/* <!-- <div className="input-box">
                    <input type="text" placeholder="Email" required>
                    <i className="fa-solid fa-envelope"></i>
                </div> --> */}

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

                            <div className="input-box">
                                <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                name="rePassword"
                                value={values.rePassword}
                                onChange={changeHandler}
                                required />
                                <i className="fa-solid fa-key"></i>
                            </div>

                            {/* <!-- <div className="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot password</a>
                </div> --> */}

                            {error && (
                                <p className="field">
                                    <span>{error}</span>
                                </p>

                            )}

                            <button type="submit" className="btn">Register</button>

                            <div className="register-login-link">
                                <p>Alredy have an acount <a href="#">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}