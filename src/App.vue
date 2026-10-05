<script setup>
import Navigation from './components/Navigation.vue';
</script>

<script>
    var currentYear = Document.write = new Date().getFullYear()
</script>


<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <Navigation/>
  <div class="footer-container">
    <main>
      <RouterView/>
    </main>
    <footer style="font-family: Smallest Pixel-7; font-size: 1.1rem;">
        Copyright © {{ currentYear }} RML. All rights reserved. All third party content belongs to their respective owners.
        <br>
        <a href="https://github.com/yoRyan60" target="_blank">
          <div class="footer-link-container">
            <img src="/src/assets/images/GitHub_logo.png" class="footer-link-GitHub"> 
            <img src="/src/assets/images/GitHub_logo_hover.png" class="footer-link-GitHub footer-link_topimage"> 
          </div>
        </a> 
    </footer>
  </div>
</template>
