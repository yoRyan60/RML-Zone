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
            <h1 style="font-family: Retro Computer; color:greenyellow">Contact Me</h1>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
        <div class="container-description" style="text-align: center; display: block;">
            <article> 
                <div style="text-align: center;">
                    <img class="img-center" src="/src/assets/images/contact_pixel_icon.png">
                </div>
                <h2 class="container-description-header">Contact Details</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        You may contact me through the following:
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Email: <span style="color: greenyellow;">yoryan60<span style="font-family: Modern DOS; font-size: 1.6rem;">@</span>gmail.com</span>
                    </p>
                </div>
            </article>
        </div>
    </main>
</template>