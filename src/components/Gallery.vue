<template>
  <div class="gallery-main">
    <h1>Gallery</h1>
    <p>One magical Tea Island. Three extraordinary resorts from tea fields to clifftop beach & safari lodge.</p>
    <div class="gallery-photos">
      <img v-for="image in gallery_images" :src="image.src" alt :key="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery_images: [
        { src: "/images/gallery/gallery-1.jpg" },
        { src: "/images/gallery/gallery-12.jpg" },
        { src: "/images/gallery/gallery-2.jpg" },
        { src: "/images/gallery/gallery-3.jpg" },
        { src: "/images/gallery/gallery-6.jpg" },
        { src: "/images/gallery/gallery-9.jpg" },
        { src: "/images/gallery/gallery-5.jpg" },
        { src: "/images/gallery/gallery-10.jpg" },
        { src: "/images/gallery/gallery-8.jpg" },
        { src: "/images/gallery/gallery-11.jpg" },
        { src: "/images/gallery/gallery-7.jpg" },
        { src: "/images/gallery/gallery-4.jpg" }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 5.5rem;
  letter-spacing: 0.2rem;
  font-weight: 300;
  margin: 5rem 0 3rem 0;
  color: #524439;
}

.gallery-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
  grid-gap: 0.1rem;

  margin-bottom: 0.1rem;
}
img {
  height: 50rem;
  width: 100%;
  object-fit: cover;
}

p {
  color: #524439;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Old Standard TT", serif;
  margin-bottom: 3rem;
}

@media only screen and (max-width: 1150px) {
  h1 {
    margin-top: 22rem;
  }
}
</style>