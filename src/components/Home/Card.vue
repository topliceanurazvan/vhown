<template>
  <div class="card" :style="{ backgroundImage: 'url(' + imageLink + ')' }">
    <div
      v-if="placeRight"
      class="text-panel"
      :class="placeRight == 'true' ? 'right' : 'left'"
    >
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <router-link :to="routerLink">Explore</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeRight: Boolean,
    title: String,
    text: String,
    imageLink: String,
    routerLink: String
  }
};
</script>

<style scoped>
.card {
  position: relative;
  height: 42rem;
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
}
.text-panel {
  position: absolute;
  top: 12.5%;
  height: 75%;
  width: 30%;
  background-color: #fff;
  padding: 5rem 2rem;
  box-shadow: 6px 7px 6px -3px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
}
.right {
  right: 7.5%;
}

.left {
  left: 7.5%;
}

a {
  color: #524439;
  font-size: 2rem;
  display: inline-block;
  transition: transform 0.2s, color 0.4s;
  cursor: pointer;
}

a:hover {
  color: #b9a89b;
  transform: scale(1.05);
}

a:after {
  display: block;
  content: "";
  border-bottom: solid 2px #524439;
  transition: all 0.5s;
}

a:hover:after {
  border-bottom: solid 2px #b9a89b;
}

p {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #b9a89b;
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.3rem;
  text-align: center;
  color: #524439;
  margin-bottom: 2rem;
}

@media only screen and (max-width: 1350px) {
  .text-panel {
    position: absolute;
    top: 88%;
    width: 85%;
    height: 55%;
    padding: 2rem;
    box-shadow: none;
  }
  .card {
    margin-bottom: 15rem;
  }
  p {
    margin-bottom: 2rem;
  }
}
@media only screen and (max-width: 650px) {
  .card {
    margin-bottom: 20rem;
  }
}

@media only screen and (max-width: 400px) {
  .card {
    margin-bottom: 24rem;
  }
}
</style>
