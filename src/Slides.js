import React from "react";


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
                <h5>Welcome</h5>
                <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="slide2 carousel-item">
                <div class="carousel-caption">
                <h5>How I made this website</h5>
                <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="slide3 carousel-item">
                
                <div class="carousel-caption">
                    <div>
                    <h1>hellow world</h1>
                </div>
                <h5>i look forward to work with you</h5>
                <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div class="slide4 carousel-item">
                
                <div class="carousel-caption">
                    <div>
                    <h1>hellow world</h1>
                </div>
                <h5>i look forward to work with you</h5>
                <p>Some representative placeholder content for the third slide.</p>
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
