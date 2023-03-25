<template>
<div class="div">
  <img src="./img/bg_awan.png" class="bg-minimap" />
  <div class="wrapper">
    <div class="gold-box fade-in">
      <img src="./img/long_cloud.png" style="width: 100%" />
    </div>
    <div class="green-box">
      <div class="card-deck w3-animate-bottom">
        <div class="row align-items-stretch" style="width: 100%">
          <div class="card">
            <router-link to="/infografis">
              <div class="pulau">
                <img
                  src="./img/text_info.png"
                  class="card-text-min text pulau_text"
                  alt="..."
                />
                <img
                  src="./img/info.png"
                  class="card-img-top island text-pulau"
                  alt="..."
                />
              </div>
            </router-link>
          </div>

          <div class="card">
            <router-link to="/acara">
              <div class="pulau">
                <img
                  src="./img/text_acara.png"
                  class="card-text-min text pulau_text"
                  alt="..."
                />
                <img
                  src="./img/acara.png"
                  class="card-img-top island_2"
                  alt="..."
                />
              </div>
            </router-link>
          </div>

          <div class="card">
            <div class="pulau">
              <a href="https://virtual.unpad.ac.id/" target="_blank">
                <!-- <router-link to="/soon"> -->
                <img
                  src="./img/text_pakuan.png"
                  class="card-img-top card-text-min text pulau_text"
                  alt="..."
                />
                <img
                  src="./img/pakuan.png"
                  class="card-img-top island"
                  alt="..."
                />
                <!-- </router-link> -->
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="green-box-2 fade-in">
      <img src="./img/long_cloud_3.png" style="width: 100%" />
    </div>
    <div class="green-box-4">
      <img src="./img/long_cloud_3.png" style="width: 100%" />
    </div>
    <div class="gold-box-2">
      <div class="card-deck w3-animate-bottom">
        <div class="row align-items-stretch" style="width: 100%">
          <div class="card">
            <router-link to="/penugasan">
              <div class="pulau">
                <img
                  src="./img/text_penugasan.png"
                  class="card-img-top card-text-min text pulau_text"
                  alt="..."
                />
                <img
                  src="./img/penugasan.png"
                  class="card-img-top island"
                  alt="..."
                />
              </div>
            </router-link>
          </div>

          <div class="card">
            <router-link to="/">
              <div class="pulau">
                <img
                  src="./img/text_homepage.png"
                  class="card-img-top card-text-min text pulau_text"
                  alt="..."
                />
                <img
                  src="./img/home.png"
                  class="card-img-top island_2"
                  alt="..."
                />
              </div>
            </router-link>
          </div>

          <div class="card">
            <div class="pulau">
              <a href="https://prabumerch.com/home" target="_blank">
                <img
                  src="./img/text_merch.png"
                  class="card-img-top card-text-min text pulau_text"
                  alt="..."
                />
                <img
                  src="./img/merch.png"
                  class="card-img-top island"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <footer class="text-center text-lg-start text-muted pt-5 mt-5 footer_prabu">
      <!-- Copyright -->
      <div class="text-center copyright p-4">
        <img src="../assets/img/logoprabu.png" width="72" height="72" />
        <h5 class="footer_prabu">Prabu 2021</h5>
        © 2021 Copyright:
        <span class="text-reset fw-bold">Prabu 2021 made by webapps</span>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</div>

</template>

<script>
import "../assets/info.css";
export default {
  mounted: function () {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.to("#bg", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 1.5,
      });
      gsap.to("#man", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 0.5,
      });
      gsap.to("#mountain_left", {
        scrollTrigger: {
          scrub: 1,
        },
        x: -500,
      });
      gsap.to("#mountain_right", {
        scrollTrigger: {
          scrub: 1,
        },
        x: 500,
      });
      gsap.to("#cloud_1", {
        scrollTrigger: {
          scrub: 1,
        },
        x: 200,
      });
      gsap.to("#cloud_2", {
        scrollTrigger: {
          scrub: 1,
        },
        x: -200,
      });
      gsap.to("#text", {
        scrollTrigger: {
          scrub: 1,
        },
        y: 500,
      });
    },
  },
};
</script>
<style>
.footer_prabu{
  font-size: 2rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
}
.copyright{
  font-size: 1rem;
}
.fade-in {
  animation: fadeIn ease 10s;
  -webkit-animation: fadeIn ease 10s;
  -moz-animation: fadeIn ease 10s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (orientation: landscape) {
}
</style>
