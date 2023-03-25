<template>
  <div>
    <Footer />
    <div class="container">
      <h2 class="title-live mt-5">Live Streaming</h2>
      <div class="row">
        <div
          class="col-lg-3 col-sm-12 col-md-12 mb-2"
          v-for="vid of videos"
          :key="vid._id"
        >
          <!-- :to="{ name: 'DetailAcara', params: { id: vid.uuid } }" -->
          <router-link class="detailAcara" :to="'/acara/' + vid._id">
            <div class="embed-responsive embed-responsive-16by9">
              <!--  v-bind:src="vid.image"
                class="card-img-top img-live-card"
                alt="..." -->
              <img
                v-bind:src="vid.picture"
                class="card-img-top img-top-live img-fluid"
                style="width: 100%"
                alt="..."
              />
              <!-- <img
              v-else
                src="./img/live.png"
                class="card-img-top img-fluid"
                alt="..."
              /> -->
              <div class="p-3">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-3 col-sm-3"
                    id="avatar_live"
                  ></div>
                  <div class="col-lg-9 col-md-9 col-sm-9">
                    <h5 class="card-title title_live">
                      {{ vid.name }}
                    </h5>
                    <p class="card-text desc_live">
                      {{ vid.description }}
                    </p>
                    <p class="card-text" v-if="vid.is_live == ''">
                      <small class="text-muted label_video">{{
                        vid.is_live
                      }}</small>
                      <small class="text-muted"></small>
                      <small class="text-muted"
                        ><i class="fa fa-circle"></i>
                        {{ moment(vid.createdAt).fromNow() }}
                      </small>
                    </p>
                    <p class="card-text" v-else>
                      <small class="text-muted label_video">{{
                        vid.is_live
                      }}</small>
                      <small class="label_live">LIVE SEKARANG</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Acara",
  data() {
    return {
      moment: moment,
      label: "Live",
      videos: [],
    };
  },
  methods: {
    getLive() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/resource/livestream`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.videos = res.data;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    checkLoggedInForPenugasan() {
      // if (!localStorage.token) {
      //   this.$router.push({
      //     name: "NotLogin",
      //   });
      // }
    },
  },
  mounted() {
    this.getLive();
    this.checkLoggedInForPenugasan();
  },
};
</script>

<style>
.img-top-live {
  max-width: 800px;
  object-fit: cover;
}
.card-text {
  margin: 5px;
}
.label_live {
  border: 2px solid #ff6d55;
  padding: 3px;
  border-radius: 2px;
}
small.label_live {
  color: #ff6d55;
  font-weight: 600;
}
.label_video {
  display: none;
}
#avatar_live {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-image: url("./img/logoprabu.png");
  background-size: cover;
  background-position: center;
}
.title_live {
  color: rgb(49, 48, 48);
  font-weight: 600;
}

.detailAcara {
  text-decoration: none;
  color: rgb(49, 48, 48);
}
.detailAcara:hover {
  color: rgb(49, 48, 48);
}
.title-live {
  font-size: 3.5rem;
  color: rgb(49, 48, 48);
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin: 110px 0px 70px 0px;
}
.container_acara {
  background: url("../img/live.png") no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
.card-live {
  background-color: white;
}

p.desc_live {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.8rem;
}
h5.title_live {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
}
</style>
