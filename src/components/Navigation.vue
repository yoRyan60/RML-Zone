<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="nav" style="font-family: Eight Bit Dragon; font-size: 20px; color: black;">
    <ul>
        <RouterLink to="/">
        <div class="RML-Digital-Portfolio_logo_container">
          <img src="/src/assets/images/RML-Zone_Website_Logo.png" alt="Logo">
          <img class="topimage" src="/src/assets/images/RML-Zone_Website_Logo_Inverted.png" alt="Logo2">
        </div>
        </RouterLink>
        <p>RML Zone<span></span></p>
        <!--<RouterLink to="/"><li>[Home]</li></RouterLink>-->
        <RouterLink to="/Portfolio"><li>[Portfolio]</li></RouterLink>
        <RouterLink to="/Contact"><li>[Contact]</li></RouterLink>
        <RouterLink to="/About"><li>[About]</li></RouterLink>
    </ul>
  </nav>
</template>