<script>
//Styling for the image carousel
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/sea-green';
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0,0);
        },
        gotoHome(){
            this.scrollToTop();
            this.$router.push('/')
        },
    },
    components: { //For splides to function properly if I plan on putting custom arrows, paginations, etc.
    Splide,
    SplideSlide,
    SplideTrack
    }
}
</script>

<template>
    <main>
        <div class="heading-container">
            <h1 style="font-family: Retro Computer; color:greenyellow">Portfolio</h1>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
        <div class="container-description" style="text-align: left;">
            <article>
                <h1 style="font-family: Retro Computer; color:greenyellow">2024</h1>
                <img class="givemore_logo" src="/src/assets/images/Portfolio_images/GiveMore_Logo.png">
                <h2 class="container-description-header">Capstone - GiveMore</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Back in college, I've worked with a group for capstone. 
                        Long story short, it's a website called GiveMore. A donation platform and record-keeping system for charities.
                        It's made with the following, NextJS, React, TypeScript, Tailwind CSS, and Node.js. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        You can check out the website here:
                    </p>
                    <br>
                    <p style="font-family: Eight Bit Dragon; color: greenyellow; font-style: italic; text-decoration: underline;"> 
                        <a href="https://isproj2.vercel.app/" target="_blank">GiveMore - Give to each other to make the world better.</a>
                    </p>
                </div>
            <br>
            <h2 class="container-description-header">What I've done in my group's Capstone</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        What I mainly did on the website was the Statistics part, 
                        where I’d translate the data on our database to a visually appealing graph to make it easier for the user to interpret.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The data here is obtained from our database and is then displayed here.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Also all of this was possible thanks to ReCharts, the library I used to create these charts containing data from out database. Check their stuff out in the link below:
                    </p>
                    <br>
                    <p style="font-family: Eight Bit Dragon; color: greenyellow; font-style: italic; text-decoration: underline;"> 
                        <a href="https://recharts.org/en-US/" target="_blank">ReCharts</a>
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Here's some screenshots of said statistics displaying their respective data:
                    </p>
                    <br>
                </div>
                <Splide :hasTrack="false" :options="{ rewind: true, autoplay: true, interval: number = 6000, pauseOnFocus: true, pauseOnHover: true }">
                    <SplideTrack>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics1.jpg" alt="statistics1">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics2.jpg" alt="statistics2">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics3.jpg" alt="statistics3">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics4.jpg" alt="statistics4">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics5.jpg" alt="statistics5">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics6.jpg" alt="statistics6">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics7.jpg" alt="statistics7">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics8.jpg" alt="statistics8">
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/src/assets/images/Portfolio_images/statistics9.jpg" alt="statistics9">
                        </SplideSlide>
                    </SplideTrack>  
                    <div class="splide__arrows">
                        <div class="splide_arrows_container">
                            <button class="splide__arrow splide__arrow--prev">
                                <img src="/src/assets/images/imagecarousel_leftarrow.png" style="margin-right: 1.5rem;">
                                <img class="splidearrow_topimage" src="/src/assets/images/imagecarousel_leftarrow_hover.png" style="margin-right: 1.5rem;">
                            </button>
                            <button class="splide__arrow splide__arrow--next">
                                <img src="/src/assets/images/imagecarousel_rightarrow.png" style="margin-left: 1.5rem;">
                                <img class="splidearrow_topimage" src="/src/assets/images/imagecarousel_rightarrow_hover.png" style="margin-left: 1.5rem;">
                            </button>
                        </div>
                    </div>
                    </Splide>
            </article>
        </div>
        <div class="container-description" style="text-align: left;">
            <article> 
                <h1 style="font-family: Retro Computer; color:greenyellow">2021</h1>
                <h2 class="container-description-header">Previous Final Project - Making a Game</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Generic Space Shooter was a project made around my 2nd term in 1st year college. 
                        We needed to make a game with the use of an IDE like Visual Studio 2019, which uses the C<span style="font-family: Smallest Pixel-7; font-size: 20px;">#</span> programming language.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The project itself was called Object-Oriented Programming (OOP).                      
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        The gameplay was pretty straightforward. You got 3 lives, use WASD to move, and the spacebar to shoot. 
                        Then a simple scoring system as a mechanic to keep track of how long you've survived.
                    </p>
                    <br>
                    <p class="container-description-text">
                        You can check it out here:
                    </p>
                    <br>
                </div>
                <div style="text-align: center;">
                    <iframe class="itch_io_link" frameborder="0" src="https://itch.io/embed/5036004?linkback=true&amp;border_width=0&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=61ff75&amp;border_color=333333" width="600" height="165"></iframe>
                </div>
                <div class="genericspaceshooterimages" style="width: 85%; margin-left: auto; margin-right: auto;">
                    <Splide :hasTrack="false" :options="{ rewind: true, perPage: 2, autoplay: true, interval: number = 4000, pauseOnFocus: true, pauseOnHover: true }">
                        <SplideTrack>
                            <SplideSlide>
                                <img src="/src/assets/images/Portfolio_images/GenericSpaceShooter (IMG-1).png" alt="generic_space_shooter_image_1">
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/src/assets/images/Portfolio_images/GenericSpaceShooter (IMG-3).png" alt="generic_space_shooter_image_3">
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/src/assets/images/Portfolio_images/GenericSpaceShooter (IMG-4).png" alt="generic_space_shooter_image_4">
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/src/assets/images/Portfolio_images/GenericSpaceShooter (IMG-5).png " alt="generic_space_shooter_image_5">
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/src/assets/images/Portfolio_images/GenericSpaceShooter (GIF-1).gif " alt="generic_space_shooter_gif_1">
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/src/assets/images/Portfolio_images/GenericSpaceShooter (GIF-2).gif " alt="generic_space_shooter_gif_2">
                            </SplideSlide>
                        </SplideTrack>
                        <div class="splide__arrows">
                            <div class="splide_arrows_container">
                                <button class="splide__arrow splide__arrow--prev">
                                    <img src="/src/assets/images/imagecarousel_leftarrow.png" style="margin-right: 1.5rem;">
                                    <img class="splidearrow_topimage" src="/src/assets/images/imagecarousel_leftarrow_hover.png" style="margin-right: 1.5rem;">
                                </button>
                                <button class="splide__arrow splide__arrow--next">
                                    <img src="/src/assets/images/imagecarousel_rightarrow.png" style="margin-left: 1.5rem;">
                                    <img class="splidearrow_topimage" src="/src/assets/images/imagecarousel_rightarrow_hover.png" style="margin-left: 1.5rem;">
                                </button>
                            </div>
                        </div>
                    </Splide>
                </div>
            </article>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
    </main>
</template>