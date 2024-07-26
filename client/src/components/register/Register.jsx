export default function Register() {
   return (
    <div class="loginRegisterWrapper">

    <main class="loginRegister-main">
        <div class="registerLoginContainer">

            <div class="registerLoginWrapper">
                <form action="">
                    <h1 class="registerLoginTitle">Register </h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username" required />
                        <i class="fa-solid fa-user"></i>
                    </div>

                    {/* <!-- <div class="input-box">
                    <input type="text" placeholder="Email" required>
                    <i class="fa-solid fa-envelope"></i>
                </div> --> */}

                    <div class="input-box">
                        <input type="password" placeholder="Password" required />
                        <i class="fa-solid fa-key"></i>
                    </div>

                    <div class="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <i class="fa-solid fa-key"></i>
                    </div>

                    {/* <!-- <div class="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot password</a>
                </div> --> */}

                    <button type="submit" class="btn">Register</button>

                    <div class="register-login-link">
                        <p>Alredy have an acount <a href="#">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
   );
}