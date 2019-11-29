<template>
  <div class="exp-card-main">
    <img
      :class="placeLeft == 'true' ? 'left' : none"
      :src="experienceImage"
      alt="ExperiencesPhoto"
    />
    <div class="exp-card-text-panel">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeLeft: Boolean,
    title: String,
    text: String,
    experienceImage: String
  }
};
</script>

<style scoped>
.exp-card-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 0 1rem 3rem 1rem;
}
.exp-card-text-panel {
  padding: 0 3rem;

  display: grid;
  grid-gap: 5rem;
  align-content: center;
  justify-items: center;
}

.left {
  order: 1;
}
img {
  width: 85rem;
  height: 50rem;
  object-fit: cover;
}

p {
  font-size: 2rem;
  color: #524439;
  text-align: center;
}

h2 {
  font-size: 4rem;
  color: #524439;
  letter-spacing: 0.2rem;
}

@media only screen and (max-width: 2000px) {
  img {
    width: 75rem;
    height: 45rem;
  }
}

@media only screen and (max-width: 1500px) {
  img {
    width: 65rem;
    height: 40rem;
  }
}

@media only screen and (max-width: 830px) {
  .exp-card-main {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  .exp-card-text-panel {
    grid-gap: 2rem;
    background-color: rgba(255, 255, 255, 0.9);
    width: 85%;
    transform: translateY(-35%);
  }
  img {
    width: 100%;
  }

  .left {
    order: 0;
  }
}
@media only screen and (max-width: 500px) {
  h2 {
    font-size: 3.5rem;
    margin-top: 1.5rem;
  }
}
</style>
