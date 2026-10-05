<script>
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
}
</script>

<template>
    <main>
        <div class="heading-container">
            <h1 style="font-family: Retro Computer; color:greenyellow">About</h1>
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
                <img class="img-left" src="/src/assets/images/About_and_Updates_images/info_pixel_icon.png">
                <h2 class="container-description-header">Regarding this website</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        The name of the website being RML Digital Portfolio, the "RML" part is based on my name; Ryan Matthew Lim.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        This website contains information about my school life, work experiences like OJT, and achievements that I'd like to show you.
                        I'll even add more as I go on in my eventual career.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Images/Icons by Freepik, Flaticons & Google Images, credits to them. There's also various ones made by me with the help of Aesprite. Website was made with basic HTML and CSS. As well as Vue.js and Splide.
                    </p>
                    <br>
                    <p class="container-description-text" style="font-style: italic;"> 
                        <span style="color: greenyellow">Trivia: </span> The first iteration of this website was made with 
                        <span style="color: greenyellow;"><a href="https://sites.google.com/benilde.edu.ph/rml-digitalportfolio/home" target="_blank">Google Sites.</a></span>
                        (So uh the link doesn't work anymore, sorry about that.)
                    </p>
                </div>
            </article>
        </div>
        <div class="heading-container">
            <h1 style="font-family: Retro Computer; color:greenyellow">Updates</h1>
        </div>
        <div class="container-description" style="text-align: left; display: block;">
            <article>
                <div style="text-align: center;">
                    <img class="img-center" src="/src/assets/images/About_and_Updates_images/updates_pixel_icon.png">
                </div>
                <h2 class="container-description-header">10/3/2026</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Changed some fonts to make it a bit more pleasing to read certain walls of text.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Changed logo and fonts for the navbar. Also added "Portfolio" to the navbar options.
                    </p> 
                    <br>
                    <p class="container-description-text"> 
                        Realized that my old google sites version of this portfolio is no longer working therefore I'm a bit
                        sad about it.
                    </p>
                    <br>
                </div>
                <h2 class="container-description-header">10/1/2026</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        Fixed the missing main menu icons on the homepage buttons after 4 attempts (yes I was counting).
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Finished most of the major UI changes to the website. Will soon add more images under achievements soon.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Added this update log section, I may add new logs here if necessary. 
                    </p>
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