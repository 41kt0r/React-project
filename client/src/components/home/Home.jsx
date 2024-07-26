export default function Home() {
    return (
        <div className="homeWrapper">
            <main className="home-main">
                <div className="introduction">
                    <div className="introduction-heading">
                        <h1 className="introduction-title">Oasis - Your Gateway to Relaxation
                        </h1>
                    </div>
                </div>
                <div className="carList">
                    <div className="card">
                        <img src="../../images/imagForHome.jpg" alt="" />
                    </div>
                    <div className="card">
                        <img src="../../images/imagForHome2.jpg" alt="" />
                    </div>
                    <div className="card">
                        <img src="../../images/imagForHome3.jpg"
                            alt="" />
                    </div>
                    <div className="card">
                        <img src="../../images/imagForHome4.jpg" alt="" />
                    </div>
                    <div className="card">
                        <img src="../../images/imagForHome5.jpg" alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
}