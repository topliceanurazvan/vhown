<template>
  <div class="footer">
    <div class="footer-container">
      <div class="informations">
        <div class="left">
          <h3>Connect with View House</h3>
          <div class="social">
            <a href="https://www.facebook.com/View-House-Dubova-112370203472221/">
              <i class="fab fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/viewhouse.dubova/">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <img src="/images/logo2.png" alt="logo" />
        <div class="right">
          <a href="https://www.google.com/maps?cid=666918874257346132">
            <i class="fas fa-map-marker-alt"></i>Soseaua principala , Numarul DN57, Dubova, Romania 227170
          </a>
          <div>
            <a href="tel:+40759869711">
              <i class="fas fa-phone"></i>+40 759 869 711 /
            </a>
            <a href="mailto:viewhouse.info@gmail.com">
              <i class="fas fa-envelope"></i>viewhouse.info@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>© VIEW HOUSE DUBOVA. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  background-color: #2e2921;
  border-right: 2px solid #b9a89b;

  display: grid;
  grid-template-rows: repeat(2, min-content);
}

.footer-container {
  max-width: 170rem;
  margin: 0 auto;
}

hr {
  border: 1px solid white;
  width: 100%;
  margin-bottom: 0;
}

.footer-copyright {
  background-color: #37322e;
  width: 100%;
  margin: 0;
  text-align: center;
  padding: 1.3rem;
  font-size: 1.5rem;
}

.footer-logo {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 3rem;
  align-items: center;
}

.informations {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 10rem;
  justify-items: center;
  align-items: center;
  padding: 2rem 0;
  font-size: 1.5rem;
}

img {
  position: relative;
  z-index: 200;
  width: 8rem;
}

h3 {
  font-weight: 300;
  font-family: "Old Standard TT", serif;
  font-size: 1.8rem;
}

.left {
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 1rem;
  align-content: center;
  justify-items: center;
}

.right {
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
}

a,
h2,
p,
h3,
.fas {
  color: white;
}

a {
  font-family: "Old Standard TT", serif;
  display: inline-block;
}

.right a:after {
  display: block;
  content: "";
  border-bottom: solid 1px white;
  width: 0;
  transition: all 0.5s;
}
.right a:hover:after {
  width: 100%;
}

.social {
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-column-gap: 1rem;
}

.fab {
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.5s;
  color: white;
}

.fas {
  margin-right: 1rem;
}

.fa-envelope {
  margin: 0 1rem 0 0.5rem;
}

.fa-instagram:hover {
  color: transparent;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
}

.fa-facebook-square:hover {
  color: #3b5998;
}

p {
  margin: 0;
  color: white;
  font-size: 1.3rem;
}

@media only screen and (max-width: 775px) {
  .informations {
    display: grid;
    grid-template-columns: max-content;
    grid-row-gap: 2rem;
  }
  .left {
    grid-row-gap: 1rem;
  }
  .right {
    grid-row-gap: 1rem;
  }
}
</style>