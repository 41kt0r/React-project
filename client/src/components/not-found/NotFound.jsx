import { Link } from "react-router-dom";
// import styles from 'style.module.css'

export default function NotFound() {
    return (
        <>
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Oops!</h1>
                            <h2>404 - The Page can't be found</h2>
                        </div>
                        <Link to="/">Go TO Homepage</Link>
                    </div>
                </div>
            
        </>


    );
}