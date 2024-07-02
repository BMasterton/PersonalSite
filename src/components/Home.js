const Home = () => {
    return (
        <div className="container m-0">
        <div className="holderOfBrao" class="">
            <h1>Welcome Home</h1>
            
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" className="carosel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/gull.webp" class="d-block w-100" alt="/gull.webp"></img>
                    </div>
                    <div class="carousel-item">
                    <img src="/dog.jpg" class="d-block w-100" alt="/dog.jpg"></img>
                    </div>
                    <div class="carousel-item">
                    <img src="/cat.jpg" class="d-block w-100" alt="/cat.jpg"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>

            {/* <div className="PortfolioPicture">
                <img src="/gull.webp" class="rounded img-fluid float-start" alt="./public/letter-b.png"></img>
            </div> */}
            <div className="Braonain Description short" class="m-2">
                <p><b>Who is Brao?</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus porta finibus. Nunc semper molestie tortor rhoncus mollis. Fusce iaculis sed velit ac auctor. Vivamus bibendum varius eros in lobortis. Quisque molestie vel ligula in tincidunt. Aenean eu est molestie, mattis odio a, volutpat enim. Phasellus suscipit condimentum purus in sollicitudin. Vivamus sollicitudin vulputate massa. Praesent maximus sit amet lorem nec mattis. Mauris aliquet mi diam, non consequat felis facilisis et. In maximus tellus nisi, sed dignissim felis eleifend at. Quisque ornare est ut tellus auctor, venenatis dignissim velit faucibus. Vivamus nisl elit, mattis vitae elit id, molestie pretium elit. Aliquam vel gravida diam.</p>
            </div>
        </div>
      
            {/* This div is going to be for introduction to who braonain is and what this portfolio is about */}
            <div className="WhoSection">
                <p>this is going to be about who braonain is </p>
                <p>This is going to be about what braonain has achieved, maybe like education and proficiencies, have pictures of deans list shit and awards 
                Maybe cool to have a little bar graph to show skills in certain hard and soft skills here too  </p>
            </div>
            <div className="SkillsChart">
                <p> put skills chart here </p>
            </div>


            <div className="links to things">
                <p> please follow the links below if you wish to see some more indepth projects</p>
                <p> for things i cant show like AWS stuff add pictures, or for tetris add pictures 
                You can also add ocean networks canada things but just blur out info so its not obvious
                </p>

                <p>link to github repos </p>
                    <ul>
                        <li><a href="url">Repo Link - Web Dev Page with backend</a> </li>
                        <li><a href="url">Repo Link - Apple IOS Game</a> </li>
                        <li><a href="url">Repo Link - Apple IOS other stuff</a> </li>
                        <li><a href="url">Repo Link - Python Game </a> </li>
                        <li><a href="url">Repo Link - C++ tetris</a> </li>
                        <li><a href="url">Repo Link - Jump Land </a> </li>
                        <li><a href="url">Repo Link - Contract View</a> </li>
                        <li><a href="url">Repo Link - AWS stuff</a> </li>
                    </ul>
            </div>
            <div>


            </div>


        </div>
        
       
    
    );
  };
  
  export default Home;