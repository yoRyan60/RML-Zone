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
            <h1 style="font-family: Retro Computer; color:greenyellow">404 Not Found</h1>
        </div>
        <div class="back-button-container">
            <button @click="gotoHome" style="all: unset;">
                <article class="home-text" style="width: 350px;">
                    <p class="extra-text" style="text-align: center;"> << Back to the homepage</p>
                </article>
            </button>
        </div>
        <div class="container-description" style="text-align: center;">
            <article>
                <img class="img-center" src="/src/assets/images/stopicon.png">
                <p class="container-description-text" style="font-size: 20px;">
                    Seems like whatever you're trying to find doesn't exist here.
                    Anyhow you can either stick around or return to where you were prior to this.
                </p>
            </article>
        </div>
    </main>
</template>