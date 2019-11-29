<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="app-grid">
      <div></div>
      <div class="app-right">
        <router-view></router-view>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/base/Footer";
import Navbar from "./components/base/Navbar";

export default {
  name: "app",
  components: { Footer, Navbar }
};
</script>

<style>
.app-grid {
  display: grid;
  grid-template-columns: 16% 1fr;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

a {
  text-decoration: none !important;
}

h1,
h2,
h3 {
  font-family: "Heebo", sans-serif;
}

p {
  font-family: "Old Standard TT", serif;
}

@media only screen and (max-width: 950px) {
  html {
    font-size: 50%;
  }
}
@media only screen and (min-width: 1700px) {
  html {
    font-size: 75%;
  }
}

@media only screen and (max-width: 1150px) {
  .app-grid {
    grid-template-columns: 0rem 1fr;
  }
}

@keyframes scrollAnim {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>
