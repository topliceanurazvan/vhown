<template>
  <div class="home">
    <Header></Header>
    <div class="home-description" id="home-description">
      <h3>OUR PENSION</h3>
      <p>One magical Tea Island. Three extraordinary resorts from tea fields to clifftop beach & safari lodge.</p>
    </div>
    <Card
      routerLink="/gallery"
      placeRight="false"
      title="Gallery"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus metus, convallis in dapibus non, aliquam eu libero. Donec viverra sodales diam eu porta. Sed ligula metus, vulputate eu placerat sit amet, dapibus id lectus. Sed ex nisl, lacinia non ante sit amet, gravida interdum felis. Duis non erat et ipsum accumsan dictum. In posuere."
      imageLink="images/gallery/gallery-2.jpg"
    ></Card>
    <Card
      routerLink="/experiences"
      placeRight="true"
      title="Experiences"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus metus, convallis in dapibus non, aliquam eu libero. Donec viverra sodales diam eu porta. Sed ligula metus, vulputate eu placerat sit amet, dapibus id lectus. Sed ex nisl, lacinia non ante sit amet, gravida interdum felis. Duis non erat et ipsum accumsan dictum. In posuere."
      imageLink="images/hiking.jpg"
    ></Card>
    <InstagramPanel></InstagramPanel>
  </div>
</template>

<script scoped>
import Header from "./Home/Header";
import Card from "./Home/Card";
import InstagramPanel from "./Home/InstagramPanel";

export default {
  components: { Header, Card, InstagramPanel }
};
</script> 

<style scoped>
.home-description {
  height: 20rem;
  padding: 6rem;
}

h3 {
  color: #524439;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
p {
  color: #524439;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Old Standard TT", serif;
}

@media only screen and (max-width: 500px) {
  .home-description {
    height: 28rem;
  }
}
</style>