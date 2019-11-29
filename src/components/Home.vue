<template>
  <div class="home">
    <Header></Header>
    <div class="home-description" id="home-description">
      <h3>OUR PLACE</h3>
      <p>
        Reward yourself with a breath of fresh air, breathtaking views and
        excellent accomodation.
      </p>
    </div>
    <Card
      routerLink="/gallery"
      placeRight="false"
      title="Gallery"
      text="Enjoy your stay in our freshly decorated rooms. Private balcony, sparkling clean bathroom, toiletries all at your service.
You can sunbathe or just enjoy the alluring scenary and sound of the river from our wood deck. "
      imageLink="images/gallery/gallery-2.jpg"
    ></Card>
    <Card
      routerLink="/experiences"
      placeRight="true"
      title="Experiences"
      text="There are plenty of things to do while you're away. Hiking, sightseeing, yachting, clubbing are all activities close to our place.
 Decebal's stone sculpture, two awesome caves and an ancient bridge can all be seen while enjoying the feeling of the largest river in Europe by boat ride."
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
