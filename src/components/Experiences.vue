<template>
  <div class="experiences-main">
    <h1>Discover things to do in Dubova</h1>
    <p>
      There are numerous activities to be done while you are here! You can
      kickstart your morning with a delightful view on top of M. Almajului, so
      take your hiking outfit with you.In the afternoon, a boat ride is
      recommended. The impressive rock sculpture of the last king of Dacia,
      Decebalus is within reach. Afterwards you can visit two caves Ponicova and
      Veterani. End your day with some cocktails or even clubbing right next to
      our place. You can party at 20 meters away from home or just enjoy our
      comfy beds and cable TV.
    </p>
    <ExpCard
      placeLeft="false"
      experienceImage="/images/experiences/decebal.jpg"
      title="Sightseeing"
      text="Once on the territory of Dacia and afterwards the land of Roman Empire, there are multiple historical rich things to see around Dubova. Decebal's stone sculpture, 2 caves and Tabula Traiana, a memorial plaque made for the late roman emperor Traian."
    ></ExpCard>
    <ExpCard
      placeLeft="true"
      experienceImage="/images/experiences/yachting.jpg"
      title="Boat rides"
      text="Danube's Big Boilers are a mixture of legendary and beauty. It cannot be a trip to Dubova without enjoying this kind of attraction without a boat ride. Passing through the narrow banks of the river will make you understand why people feel like the water is boiling."
    ></ExpCard>
    <ExpCard
      placeLeft="false"
      experienceImage="/images/experiences/hiking.jpg"
      title="Hiking"
      text="Put your blood in motion in order to have one of the most breathtaking views in this area. Apart from the health benefits, this 2 hours hike will provide some extraordinary photographic opportunites."
    ></ExpCard>
    <ExpCard
      placeLeft="true"
      experienceImage="/images/experiences/cave.jpg"
      title="Ponicova Cave"
      text="Ponicova Cave is the largest cave in the Danube Gorge. Its galleries total 1,660 m crossing Ciucaru Mare and exiting the Danube. It is accessible from the land or from the Danube by boat. At the entrance to the Ponicova cave, the creek of the same name creates short and wild keys and a natural bridge about 25 m long and 6-8 m high."
    ></ExpCard>
  </div>
</template>

<script>
import ExpCard from "./Experiences/ExpCard";

export default {
  components: { ExpCard }
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

p {
  color: #524439;
  text-align: center;
  font-size: 2rem;
  font-family: "Old Standard TT", serif;
  margin: 0 3rem 8rem 3rem;
}

@media only screen and (max-width: 1150px) {
  h1 {
    margin-top: 20rem;
  }
}
</style>
