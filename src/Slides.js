import React from "react";
import WebsiteInfo from './websiteInfo';
function Slides() {


    return(
        <header className="slideShow">

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
            <div class="slide1 carousel-item active">
                
                <div class="carousel-caption">
                <h1>Welcome</h1>
                <p>This is my personal portfolio website</p>
                </div>
            </div>
            <div class="slide2 carousel-item">
                 <div className="websiteinfo-div">
                
                    <WebsiteInfo/>
                </div>
                <div class="carousel-caption">

               
                    <h1>The building blocks</h1>
                </div>
            </div>
            <div class="slide3 carousel-item">
                    <a href="#">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                            width="450px" height="450px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                            <g>
                                <g>
                                    <g>
                                        <path fill="#e2f10a" d="M204.192,62.194c14.147-20.472,29.339-41.613,50.963-54.72c21.323,12.782,36.366,33.547,50.311,53.656
                                            c32.847,49.754,52.929,109.515,48.878,169.578c10.615,8.898,21.537,17.441,31.994,26.521
                                            c15.011,13.797,22.02,35.319,18.406,55.327c-5.036,25.275-9.876,50.607-15.206,75.813c-2.963,12.968-20.508,18.905-30.823,10.62
                                            c-17.121-14.291-33.816-29.108-50.932-43.417c-12.95,12.462-30.153,20.772-48.214,21.773
                                            c-20.791,1.466-41.375-7.156-56.448-21.242c-12.28,9.401-23.666,20.686-35.664,30.755c-5.799,4.66-10.621,10.784-17.484,13.966
                                            c-10.64,4.565-24.342-2.248-26.747-13.685c-5.479-24.642-11.203-49.24-16.52-73.92c-4.321-20.878,3.332-43.61,19.419-57.607
                                            c9.313-7.822,18.756-15.487,28.243-23.096c2.643-1.39,1.315-4.596,1.465-6.951C153.005,167.614,172.8,110.333,204.192,62.194z
                                            M220.995,138.526c-12.424,15.994-10.921,40.768,3.488,55.052c15.255,16.809,44.15,17.422,60.106,1.29
                                            c12.317-11.253,16.482-30.146,10.603-45.671c-5.387-14.967-19.809-26.195-35.671-27.591
                                            C244.873,119.92,229.706,126.659,220.995,138.526z"/>
                                        </g>
                                        <path fill="#e2f10a" d="M198.263,407.819c-0.213-7.266,8.83-12.262,14.942-8.417c25.87,13.32,58.027,13.314,83.896-0.007
                                c5.937-3.645,14.736,0.733,14.955,7.803c0.087,15.432,0.105,30.88,0.024,46.317c0.119,7.533-9.832,12.337-15.681,7.626
                                c-4.452-3.926-8.467-8.341-12.75-12.461c-6.776,13.201-13.163,26.602-19.995,39.772c-3.281,6.275-13.533,6.318-16.877,0.105
                                c-6.87-13.195-13.213-26.676-20.121-39.858c-4.221,4.157-8.248,8.548-12.694,12.468c-5.824,4.734-15.756-0.162-15.675-7.647
                                C198.163,438.291,198.244,423.055,198.263,407.819z"/>
                                </g>
                                <circle fill="#e2f10a" cx="254.831" cy="164.509" r="20.812"/>
                            </g>
                        </svg>

                        <span class="link-text ">projects</span>
                    </a>
                
                <div class="carousel-caption">
                    <div>
                    <h1>Checkout my projects website</h1>
                    <h5>all my published projects in one place</h5>
                </div>
                </div>
            </div>
            <div class="slide4 carousel-item">
                
                <div class="carousel-caption">
                    <div>
                    <h1>Feel free to contact me</h1>
                    <h5>follow my instagram or copy my email in the navbar</h5>
                </div>
                
                </div>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        
        </header>
    );
}

export default Slides;
