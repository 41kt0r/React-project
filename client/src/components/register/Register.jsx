export default function Register() {
   return (
    <div className="loginRegisterWrapper">

    <main className="loginRegister-main">
        <div className="registerLoginContainer">

            <div className="registerLoginWrapper">
                <form action="">
                    <h1 className="registerLoginTitle">Register </h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className="fa-solid fa-user"></i>
                    </div>

                    {/* <!-- <div className="input-box">
                    <input type="text" placeholder="Email" required>
                    <i className="fa-solid fa-envelope"></i>
                </div> --> */}

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className="fa-solid fa-key"></i>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <i className="fa-solid fa-key"></i>
                    </div>

                    {/* <!-- <div className="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot password</a>
                </div> --> */}

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