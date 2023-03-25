<template>
  <Navbar />
  <div class="container_acara">
    <!-- <div class="container-acara"> -->

    <!-- <Iklan
      v-if="modalTrigger.timedTrigger"
      :popupTrigger="() => popupTrigger('timedTrigger')"
    >
    </Iklan> -->
    <div>
      <div class="container_body">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-lg-7 livestream mt-lg-5 video">
            <div class="ratio ratio-16x9">
              <iframe
                v-bind:src="videos.url"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="container_title">
              <div class="row title-live-vid">
                <div class="col-lg-12 col-sm-12 col-md-12 mt-4 mb-4">
                  <h6 class="title_vid">{{ videos.name }}</h6>
                  <div class="d-flex">
                    <div class="drowdown" @click="showDesc = !showDesc">
                      <p class="small" v-if="showDesc == false">
                        Tampilkan Lebih Banyak
                      </p>
                      <p class="small" v-else>Tampilkan Lebih Sedikit</p>
                    </div>
                    <!-- <p class="small">{{ moment(videos.createdAt).fromNow() }}</p> -->
                    <p class="card-text" v-if="videos.is_live == ''">
                      <small class="text-muted label_video">{{
                        videos.is_live
                      }}</small>
                      <small class="text-muted"></small>
                      <small class="small">
                        <i class="fa fa-circle"></i>
                        {{ moment(videos.createdAt).fromNow() }}</small
                      >
                    </p>
                    <p class="card-text" v-else>
                      <small class="text-muted label_video">{{
                        videos.is_live
                      }}</small>
                      <small class="label_live">LIVE SEKARANG</small>
                    </p>
                  </div>

                  <hr />
                  <transition name="slide-fade" mode="out-in">
                    <div class="row d-flex" v-if="showDesc">
                      <div
                        class="col-lg-2 col-md-2 col-sm-2 avatar"
                        id="avatar_live"
                      ></div>
                      <div class="col-lg-9 col-md-9 col-sm-9">
                        <p class="small">{{ videos.description }}</p>
                        <!-- <p class="smallsosmed">{{ showLive.social1 }}</p>
                        <p class="smallsosmed">{{ showLive.social2 }}</p>
                        <p class="smallsosmed">{{ showLive.social3 }}</p>
                        <p class="smallsosmed">{{ showLive.social4 }}</p> -->
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-12 col-sm-12 col-lg-4 livestream mt-md-2 mt-sm-2 chat"
          >
            <div class="row mb-md-5 mb-sm-5">
              <div class="col-lg">
                <span class="btn btn_chat" @click="showChat = !showChat">
                  <div v-if="showChat == true">Disable Chat</div>
                  <div v-else>Disable Iklan</div>
                </span>
              </div>
            </div>
            <transition name="slide-fade" mode="out-in">
              <div class="ratio ratio-1x1 mt-md-2 mt-sm-2" v-if="showChat">
                <iframe v-bind:src="videos.chat" frameborder="0"></iframe>
              </div>
              <div class="ratio ratio-16x9 mt-md-2 mt-sm-2" v-else>
                <video muted loop autoplay controls>
                  <source :src="iklan" type="video/mp4" >
                </video>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- Sponsor -->

      <div class="container_footer">
          <div class="sponsor">Sponsor</div>
           <div class="row justify-content-between">
          <div class="col-lg">
               <img class="gambar-sponsor p-3" src="./img/line.jpg" alt="" />
                <img class="gambar-sponsor p-3" src="./img/frisian.png" alt="" />
                <img class="gambar-sponsor p-3" src="./img/logo_byu.png" alt="" />
              <!-- <img class="gambar-sponsor" src="./img/logo_Lion.jpg" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="testing">
        <div class="bg_awan">
          <img src="./img/long_cloud.png" />
        </div>
      </div>
    </div>
  </div>
  <div class="rotate">
    <h1 class="text-center">Please Rotate Your Device...</h1>
    <p class="text-center">Please Rotate Your Device...</p>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/navbar.vue";
import Iklan from "../components/iklan.vue";
import moment from "moment";
// import { ref } from "@vue/reactivity";
export default {
  name: "DetailAcara",
  components: { Navbar, Iklan },

  // setup() {
  //   const modalTrigger = ref({
  //     timedTrigger: false,
  //   });
  //   const popupTrigger = (trigger) => {
  //     modalTrigger.value[trigger] = !modalTrigger.value[trigger];
  //   };
  //   setTimeout(() => {
  //     modalTrigger.value.timedTrigger = true;
  //   }, 1000);

  //   return {
  //     Iklan,
  //     modalTrigger,
  //     popupTrigger,
  //   };
  // },

  data() {
    return {
      showChat: false,
      showDesc: false,
      videos: {
        chat: "",
      },
      iklan: ("../video.mp4"),
      moment: moment,
      // {
      //   id: 1,
      //   uuid: "prabu-001",
      //   title: "Gladi RR",
      //   desc: `Gladi RR`,
      //   social1: "Email: humas@unpad.ac.id",
      //   social2: "Website: www.unpad.ac.id",
      //   social3: "www.facebook.com/unpad",
      //   social4: "www.twitter.com/unpad",
      //   time: "2021-08-22",
      //   image: "../assets/live.png",
      //   streaming:"4BVMm6IdPlE",
      //   chat: "4BVMm6IdPlE",
      // },
    };
  },
  methods: {
    getLive() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url:
          `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/resource/livestream/` +
          this.$route.params.id,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.videos = res.data;
          const url = res.data.url;
          this.videos.url = `https://www.youtube-nocookie.com/embed/${url}?enablejsapi=1&origin=https%3A%2F%2Ftip.tm&widgetid=1&modestbranding=1&cc_load_policy=1&autoplay=1`;
          this.videos.chat = `https://www.youtube.com/live_chat?v=${url}&embed_domain=prabu.unpad.ac.id&wmode=transparent`;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    this.getLive();
  },
};
</script>

<style scoped>
@import "../assets/acara.css";
@import "../assets/nav.css";

 @media screen and (max-width: 820px) { 
        .gambar-sponsor{
            max-width: 150px;
            max-height: 150px;
    }
    
}
 @media screen and (max-width: 750px) { 
        .gambar-sponsor{
            max-width: 120px;
            max-height: 120px;
    }
    
}
</style>
