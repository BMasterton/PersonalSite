import React from 'react';
import "../Home.css";

const Home = () => {
    return (
        <div className="container">
            <div className="holderOfBrao d-flex flex-column align-items-center text-center">
                <h1>Welcome Home</h1>
                
                <div id="carouselExampleIndicators" className="carousel slide Img-Size" data-bs-ride="carousel" style={{ width: '100%', maxWidth: '800px' }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/gull.webp" className="d-block w-100 img-fluid Img-Size" alt="/gull.webp"></img>
                        </div>
                        <div className="carousel-item ">
                            <img src="/dog.jpg" className="d-block w-100 img-fluid Img-Size" alt="/dog.jpg"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/Masterton_Braonain.jpg" className="d-block w-100 img-fluid Img-Size" alt="/cat.jpg"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button> 
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="Braonain Description short m-2">
                    <p><b>Who is Brao?</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus porta finibus. Nunc semper molestie tortor rhoncus mollis. Fusce iaculis sed velit ac auctor. Vivamus bibendum varius eros in lobortis. Quisque molestie vel ligula in tincidunt. Aenean eu est molestie, mattis odio a, volutpat enim. Phasellus suscipit condimentum purus in sollicitudin. Vivamus sollicitudin vulputate massa. Praesent maximus sit amet lorem nec mattis. Mauris aliquet mi diam, non consequat felis facilisis et. In maximus tellus nisi, sed dignissim felis eleifend at. Quisque ornare est ut tellus auctor, venenatis dignissim velit faucibus. Vivamus nisl elit, mattis vitae elit id, molestie pretium elit. Aliquam vel gravida diam.</p>
                </div>
            </div>
        
            <div className="WhoSection">
                <p>This is going to be about who Braonain is.</p>
                <p>This is going to be about what Braonain has achieved, maybe like education and proficiencies. Have pictures of dean's list achievements and awards. It might be cool to have a little bar graph to show skills in certain hard and soft skills here too.</p>
            </div>
            <div className="SkillsChart">
                <p>Put skills chart here.</p>
            </div>

            <div className="links-to-things">
                <p>Please follow the links below if you wish to see some more in-depth projects.</p>
                <p>For things I can't show like AWS stuff, add pictures, or for Tetris add pictures. You can also add Ocean Networks Canada things but just blur out info so it's not obvious.</p>
                <p>Link to GitHub repos:</p>
                <ul>
                    <li><a href="url">Repo Link - Web Dev Page with backend</a></li>
                    <li><a href="url">Repo Link - Apple iOS Game</a></li>
                    <li><a href="url">Repo Link - Apple iOS other stuff</a></li>
                    <li><a href="url">Repo Link - Python Game</a></li>
                    <li><a href="url">Repo Link - C++ Tetris</a></li>
                    <li><a href="url">Repo Link - Jump Land</a></li>
                    <li><a href="url">Repo Link - Contract View</a></li>
                    <li><a href="url">Repo Link - AWS stuff</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
