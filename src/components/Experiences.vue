<template>
  <div class="experiences-main">
    <h1>Discover things to do in Dubova</h1>
    <p>
      Wild Coast Lodge redefines “safari” as a holistic wilderness experience.
      We are blessed with diverse habitat, ecology and scenery across the five
      sectors of the Yala National Park Complex and Bundala National Park which
      is a Ramsar Wetland. We aspire to showcase the entire spectrum of nature –
      while leopards play a leading role in our theatre of the wild, they are
      not the only actor on our stage – from our geology, botanical diversity,
      critters, mammals, birds and reptiles. But that’s just part of the story.
      Steeped in the jungles of our surrounding national parks are remnants of
      civilisations past, and ancient jungle monasteries, archaeological sites
      and places of worship that date back to mythical eras of the gods.
    </p>
    <ExpCard
      placeLeft="false"
      experienceImage="/images/experiences/decebal.jpg"
      title="Sightseeing"
      text="Kataragama is a temple complex dedicated to Buddhist guardian deity “Kataragama deviyo” and Hindu War God Kathirkamam. It is one of the few religious sites in Sri Lanka that is venerated by Buddhists, Hindus, Muslims and the Vedda people."
    ></ExpCard>
    <ExpCard
      placeLeft="true"
      experienceImage="/images/experiences/yachting.jpg"
      title="Yachting"
      text="Kataragama is a temple complex dedicated to Buddhist guardian deity “Kataragama deviyo” and Hindu War God Kathirkamam. It is one of the few religious sites in Sri Lanka that is venerated by Buddhists, Hindus, Muslims and the Vedda people."
    ></ExpCard>
    <ExpCard
      placeLeft="false"
      experienceImage="/images/experiences/hiking1.jpg"
      title="Hiking"
      text="Taking the art of wilderness dining to a new level, our high-tea experience in the jungle is truly special. Our team will pick a beautiful spot near a river, by a waterhole or with a scenic vista."
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
