<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

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
            <h1 style="font-family: Retro Computer; color:greenyellow; text-align: center;">Achievements
                <br>
                <p style="font-family: Smallest Pixel-7; font-size: 1rem; color:greenyellow; text-align: center;">
                    (Some of these may not have the corresponding image due to them having more sensitive/confidential info.)
                </p>
            </h1>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
        <div class="container-description" style="text-align: left">
            <article> 
                <h1 style="font-family: Retro Computer; color:greenyellow">2026</h1>
                <h2 class="container-description-header">Cisco Networking Academy - Certificates of Completion</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Thanks to Tech4ED DTC Central Luzon (DICT Region 3) giving people full access to Cisco Academy courses on 
                        Cybersecurity free for 4 months (August 10, 2026 - December 15, 2026).
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        I decided to select a few courses from there and here's the certificates of completion for them:
                    </p>
                    <Splide :hasTrack="false" :options="{ rewind: true, autoplay: true, interval: number = 4000, pauseOnFocus: true, pauseOnHover: true }">
                        <SplideTrack>
                            <SplideSlide>
                                <img src="/src/assets/images/Achievements_images/CiscoNetworkingAcademy_IntroductiontoCybersecurity_Certificate_LimRyan.png" alt="ciscocert1">
                            </SplideSlide>
                        </SplideTrack>
                        <div class="splide__arrows">
                            <div class="splide_arrows_container">
                                <button class="splide__arrow splide__arrow--prev">
                                    <img src="/src/assets/images/imagecarousel_leftarrow.png" style="margin-right: 1rem;">
                                    <img class="splidearrow_topimage" src="/src/assets/images/imagecarousel_leftarrow_hover.png" style="margin-right: 1rem;">
                                </button>
                                <button class="splide__arrow splide__arrow--next">
                                    <img src="/src/assets/images/imagecarousel_rightarrow.png" style="margin-left: 1rem;">
                                    <img class="splidearrow_topimage" src="/src/assets/images/imagecarousel_rightarrow_hover.png" style="margin-left: 1rem;">
                                </button>
                            </div>
                        </div>
                    </Splide>
                </div>
            </article>
        </div>
        <div class="container-description" style="text-align: left">
            <article> 
                <h1 style="font-family: Retro Computer; color:greenyellow">2024</h1>
                <h2 class="container-description-header">College - Graduation Diploma</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        I graduated from De La Salle College of Saint Benilde (DLS-CSB) in July of 2024 receiving my diploma and degree in
                        Bachelor of Science in Information Systems (BS-IS).
                    </p>
                    <br>
                    <p class="container-description-text" style="font-style: italic; color: yellow;"> 
                        Couldn't show it here since its a bit condfidential and mainly only shown to recruiters/employers directly.
                    </p>
                </div>
                <br> 
                <h2 class="container-description-header">College - Honorable Mention and Best Capstone</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        After attending an Awarding of Honors event at my college, I received multiple awards. One being related to my GPA (General Point Average) and the other
                        for my group having the best capstone.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Here's proof for the awards I received below:
                    </p>
                    <br>
                    <img class="img-center" style="width: 100%;" src="/src/assets/images/Achievements_images/SMIT_Honors_LimRyan.png">
                </div>
                <h2 class="container-description-header">On the Job Training - Certificate of Completion</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        After completing a total of 444 hours of On the Job Training at Doña Alejandra Incorporated,
                        I received the certificate of completion shown below:
                    </p>
                    <br>
                    <img class="img-center" style="width: 100%;" src="/src/assets/images/Achievements_images/OJT_certificate.jpg">
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