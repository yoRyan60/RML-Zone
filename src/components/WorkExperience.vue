<script>
export default {
    methods:{
        scrollToTop(){
            window.scrollTo(0,0);
        },
        gotoHome(){
            this.scrollToTop();
            this.$router.push('/')
        },
    }
}
</script>

<template>
    <main>
        <div class="heading-container">
            <h1 style="font-family: Retro Computer; color:greenyellow">Work Experience</h1>
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
                <br>
                <div style="justify-self: center;">
                    <img style="width: 350px; justify-self: center;" src="/src/assets/images/WorkExperience_images/dona_alejandra_inc_logo.jpg">
                </div> 
                <br>
                <h2 class="container-description-header">On the Job Training (OJT)</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        During my last year in college I have applied for internship (OJT) for a company called Doña Alejandra Incorporated. 
                        The position I'm in was Quality Assurance Intern (QA), and my job was to perform tests on a system via the use of a test plan.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Go check them out here:
                    </p>
                    <br>
                    <p style="font-family: Eight Bit Dragon; color: orange; font-size: 14px; font-style: italic; text-decoration: underline;"> 
                        <a href="https://dai.global-intelligent-solutions.com/" target="_blank">Doña Alejandra Incorporated </a>
                    </p>
                </div>
                <br>
                <h2 class="container-description-header">Tasks Done during OJT</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                       I mainly did things that a QA would typically do, 
                       like filling out test cases by following the steps provided and testing out 
                       the software and see if things are working as they should and 
                       performing things like regression testing as well. 
                    </p>
                    <br>
                    <p class="container-description-text"> 
                       You can find the certificate of completion in 
                       <span style="color: greenyellow; font-style: italic; text-decoration: underline;">
                        <a href="/Achievements">Achievements</a></span>.
                    </p>
                </div>
            </article>
        </div>
        <div class="container-description" style="text-align: left;">
            <article>
                <h1 style="font-family: Retro Computer; color:greenyellow">2019</h1>
                <br>
                <div style="justify-self: center;">
                    <img style="width: 250px; justify-self: center;" src="/src/assets/images/WorkExperience_images/flhong_architechs_and_associates_logo.png">
                </div> 
                <br>
                <h2 class="container-description-header">Work Immersion (WI)</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                        In fourth year high school (Senior High School) thanks to a friend of mine I was able to apply for work immersion at F.L. Hong Architechs & Associates where
                        I took the job of that of an encoder for labels on blueprints.
                    </p>
                    <br>
                    <p class="container-description-text"> 
                        Go check them out here:
                    </p>
                    <br>
                    <p style="font-family: Eight Bit Dragon; color: aqua; font-size: 14px; font-style: italic; text-decoration: underline;"> 
                        <a href="https://www.facebook.com/flhong.aa/" target="_blank">F.L. Hong Architechs & Associates </a>
                    </p>
                </div>
                <br>
                <h2 class="container-description-header">Tasks Done during WI</h2>
                <div class="text-wrapper">
                    <p class="container-description-text"> 
                       It was primarily me listing down the old labels for me to type later in powerpoint and eventually
                       printing them and cutting them down to size to replace the older labels on the blueprints stored in pipes.
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