<script>
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0,0);
        },
        gotoMyProfile(){
            this.scrollToTop();
            this.$router.push('/MyProfile')
        },
        gotoAbout(){
            this.scrollToTop();
            this.$router.push('/About')
        },
        gotoPortfolio(){
            this.scrollToTop();
            this.$router.push('/Portfolio')
        },
        gotoWorkExperience(){
            this.scrollToTop();
            this.$router.push('/WorkExperience')
        },
        gotoMiscellaneous(){
            this.scrollToTop();
            this.$router.push('/Miscellaneous')
        },
        gotoAchievements(){
            this.scrollToTop();
            this.$router.push('/Achievements')
        },
    },  
}
</script>

<template>
    <header style="text-align: center; padding-top: 50px;">
        <div class="container">
            <p class="typewritter-effect" style="font-family: Eight Bit Dragon; color: white;">Hello there. It's me, Ryan.</p>
        </div>
        <div class="home-container-description">
            <p style="font-family: Smallest Pixel-7; color: greenyellow;">Take a look around my website by clicking on the corresponding options.</p>
        </div>
    </header>
    <main class="grid-container" style="font-family: Retro Computer; color: white;">
        <button @click="gotoMyProfile" style="all: unset;">
            <article class="home-text myprofile_pixel_icon">
                <h1><span class="selector">>> </span> My Profile</h1>
                    <p class="extra-text">This is where I give a brief background of myself. Which also includes hobbies and interests.</p>
            </article>
        </button>
        <button @click="gotoPortfolio" style="all: unset;">
            <article class="home-text portfolio_pixel_icon">
                <h1><span class="selector">>> </span> Portfolio</h1>
                    <p class="extra-text">Stuff I've made either on my own or with a group of people.</p>
            </article>
        </button>
        <button @click="gotoWorkExperience" style="all: unset;">
            <article class="home-text workexperience_pixel_icon">
                <h1><span class="selector">>> </span> Work Experience</h1>
                    <p class="extra-text">Recent work experiences like my OJT can be viewed here.</p>
            </article>
        </button>
        <article @click="gotoAchievements" class="home-text achievements_pixel_icon">
            <h1><span class="selector">>> </span> Achievements</h1>
                <p class="extra-text">Contains various recent awards/certificates I've received. Notably completion certificates, honors, etc.</p>
        </article>
        <button @click="gotoMiscellaneous" style="all: unset;">
            <article class="home-text miscellaneous_pixel_icon">
                <h1><span class="selector">>> </span> Miscellaneous</h1>
                    <p class="extra-text">Random stuff/Info dump where I either have some tips or advice on varous things or simply just things I want to mention here.</p>
            </article>
        </button>
        <button @click="gotoAbout" style="all: unset;">
            <article class="home-text about-and-updates_pixel_icon">
                <h1><span class="selector">>> </span> About/Updates</h1>
                    <p class="extra-text">Here you'll see general info and updates on this website.</p>
            </article>
        </button>
        <!--This last option is supposedly centered in the grid, putting a button tag around it removes that centering which I can't prevent atm.-->
    </main>
</template>