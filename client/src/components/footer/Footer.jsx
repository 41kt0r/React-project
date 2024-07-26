export default function Footer() {
   return (
    <footer className="footer__container">
    <div>
        <p className="footer__paragraph">&copy Viktor Andonov</p>
        <p className="footer__paragraph">2024</p>
    </div>

    <ul className="social__list">
        <a href="">
            <li className="list__item"><i className="fa-brands fa-square-instagram"></i></li>
        </a>
        <a href="">
            <li className="list__item"><i className="fa-brands fa-facebook"></i></li>
        </a>
        <a href="">
            <li className="list__item"><i className="fa-brands fa-youtube"></i></li>
        </a>
        <a href="">
            <li className="list__item"><i className="fa-brands fa-discord"></i></li>
        </a>
        <a href="">
            <li className="list__item"><i className="fa-brands fa-twitter"></i></li>
        </a>
    </ul>
</footer>
   );
}