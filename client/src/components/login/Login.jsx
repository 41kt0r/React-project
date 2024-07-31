import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '' };


export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }

    }
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
                                    placeholder="Username"
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

                            {/* <!-- <div className="remember-forgot">
                        <label><input type="checkbox">Remember me</label>
                        <a href="#">Forgot password</a>
                    </div> --> */}

                            <button type="submit" className="btn">Login</button>

                            <div className="register-login-link">
                                <p>Don't have an acount <a href="#">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}