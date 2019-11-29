<template>
  <div class="navbar">
    <router-link to="/" class="navbar-logo">
      <img src="/images/logo2.png" alt="Logo"
    /></router-link>
    <div class="navbar-links">
      <router-link to="/" exact active-class="hover-color">Home</router-link>
      <router-link to="/experiences" exact active-class="hover-color"
        >Experiences</router-link
      >
      <router-link to="/gallery" exact active-class="hover-color"
        >Gallery</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 16%;
  background-color: #524439;
  padding-top: 5rem;

  display: grid;
  grid-template-rows: min-content 13rem;
  grid-row-gap: 10rem;
  justify-items: center;
}

.navbar-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 10rem;
}

.navbar-logo::after {
  display: none;
}

a {
  color: #b9a89b;
  font-size: 2.5rem;
  font-family: "Old Standard TT", serif;
  letter-spacing: 0.2rem;
}

a:after {
  display: block;
  content: "";
  border-bottom: solid 1px rgb(126, 122, 118);
  transform: scaleX(0);
  transition: all 0.4s ease-in-out;
}

.hover-color {
  color: white;
}

a:hover:after {
  transform: scaleX(1);
}

@media only screen and (max-width: 1150px) {
  .navbar {
    height: 13rem;
    width: 100%;
    grid-template-columns: 1fr 32rem;
    grid-template-rows: 1fr;
    justify-items: start;
    align-items: center;
    padding: 0 1rem;
  }
  .navbar-links {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    grid-column-gap: 2rem;
  }
  a {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 350px) {
  a {
    font-size: 1.7rem;
  }
  img {
    width: 8rem;
  }
}
</style>
