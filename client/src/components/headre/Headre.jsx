export default function Header() {
   return (
    <header>
    <nav class="navigation">

        <ul class="nav-bar">
            <li class="logo"><a href="_home.html"><img src="../../images/mainLogo.png" alt="logo"/></a></li>

            <input type="checkbox" id="check"/>
            <span class="menu">
                <div class="navigation-div">
                    <li><a href="_catalog.html">Catalog</a></li>
                </div>
                <div class="navigation-div guest">
                    <li><a href="_login.html">Login</a></li>
                    <li><a href="_register.html">Register</a></li>
                </div>
                <div class="navigation-div user">
                    <li><a href="_add.html">Add set</a></li>
                    <li><a href="#">Logout</a></li>
                </div>
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </ul>
    </nav>
</header>
   );
}