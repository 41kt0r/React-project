export default function Login() {
   return (
    <div className="loginRegisterWrapper">

    <main className="loginRegister-main">
        <div className="registerLoginContainer">
            <div className="registerLoginWrapper">
                <form action="">
                    <h1 className="registerLoginTitle">Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
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