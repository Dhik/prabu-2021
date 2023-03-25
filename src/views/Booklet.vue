<template>
  <div v-if="!close" ref="alertBooklet" @click="close_alert">
    <BookletAlert
      v-if="$route.params.message"
      :message="$route.params.message"
    />
  </div>
  <div class="container-booklet">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-5 mt-5 btn-booklet bg-info">
          <i class="fa fa-chevron-left"></i>
          <router-link to="/penugasan" class="router-penugasan">
            Penugasan
          </router-link>
        </div>
      </div>
    </div>
    <div class="title-page">CAKRAWALA <br> (Catatan Kreasi Mahasiswa Pemula)</div>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4">
          <router-link to="/booklet/swot" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan">SWOT</div>
        </div>
        <div class="col-md-4">
            <router-link to="/booklet/life" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan">Life Plan</div>
        </div>
        <div class="col-md-4">
           <router-link to="/booklet/tri-dharma" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan tri">Tri Dharma Perguruan Tinggi</div>
        </div>
        <div class="col-md-4">
           <router-link to="/booklet/visi-misi" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan">Visi Misi</div>
        </div>
        <div class="col-md-4">
         <router-link to="/booklet/sejarah" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan">Timeline Sejarah</div>
        </div>
        <div class="col-md-4">
          <router-link to="/booklet/filosofi" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan">Filosofi Logo</div>
        </div>
        <div class="col-md-12">
         <router-link to="/booklet/respect" class="dot-router"
            ><div class="dot"
          /></router-link>
          <div class="title-penugasan">Respect</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookletAlert from "../components/BookletAlert.vue";
export default {
  data() {
    return {
      close: false,
    };
  },
  components: { BookletAlert },
   mounted(){
      this.checkLoggedInForPenugasan();
  },
  methods: {
    close_alert() {
      this.close = true;
    },
     checkLoggedInForPenugasan() {
      if (!localStorage.token) {
        this.$router.push({
          name: "NotLogin",
        });
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;700&display=swap");
@font-face {
  font-family: Brudge;
  src: url("../assets/Font/Brudge Regular.otf") format("truetype");
}
.container-booklet {
   background: url(./img/test.png) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
.tri {
  font-size: 34px;
}

.dot-router {
  cursor: auto;
}

.bklt-alert.closeAlert {
  display: none;
}

.title-page {
  font-size: 3.5rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin: 110px 0px 70px 0px;
}
.title-penugasan {
  font-size: 2.5rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
}
.dot {
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  margin: auto;
}
.dot:hover {
  background-color: #4b4141;
  cursor: pointer;
}
.row.new-line {
  margin-top: 40px;
}
.bg-info {
  background-color: #7aa6d7 !important;
  font-weight: 500;
}
@media only screen and (max-width: 800px) {
  .row.new-line {
    margin-top: 0px;
  }
}
</style>
