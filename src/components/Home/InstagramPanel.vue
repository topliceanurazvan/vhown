<template>
  <div class="insta-panel-main">
    <div class="insta-panel-text">
      <h3>Follow us on</h3>
      <a href="https://www.instagram.com/viewhouse.dubova/">
        <img src="/images/instagram.png" alt="Instagram" />
      </a>
    </div>
    <div class="insta-panel-photos">
      <img v-for="image in insta_photos" :key="image" :src="image.src" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insta_photos: [
        { src: "/images/instagram/insta-1.jpg" },
        { src: "/images/instagram/insta-2.jpg" },
        { src: "/images/instagram/insta-5.jpg" },
        { src: "/images/instagram/insta-6.jpg" },
        { src: "/images/instagram/insta-3.jpg" },
        { src: "/images/instagram/insta-4.jpg" }
      ]
    };
  }
};
</script>

<style scoped>
h3 {
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 300;
  color: #524439;
}

.insta-panel-main {
  margin: 5rem 0;
}

.insta-panel-text {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
}

.insta-panel-text img {
  width: 18rem;
}

.insta-panel-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  padding: 0 1rem;
}

.insta-panel-photos img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}

@media only screen and (max-width: 1350px) {
  .insta-panel-main {
    margin-top: 20rem;
  }
  .insta-panel-photos {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
}
@media only screen and (max-width: 510px) {
  .insta-panel-photos {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }

  .insta-panel-main {
    margin-top: 23rem;
  }
}
</style>
