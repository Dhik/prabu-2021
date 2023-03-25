<template>
  <div class="modal-backdrop-penugasan">
    <div
      class="modal-quiz-container justify-content-center"
      @click.self="closeModal"
    >
      <div class="container-fluid quiz-content">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6 text-center penugasan-img">
            <img
            class="pranata"
              v-if="title == 'Pranata (Pramuda Mengenal Tata Krama Sunda)'"
              src="../views/img/pranata.png"
              alt="gambar logo"
            />
            <img
              class="cakrawala"
              v-if="title == 'Cakrawala (Catatan Kreasi Mahasiswa Pemula)'"
              src="../views/img/Booklet2.png"
              alt="gambar logo"
            />
            <!-- <img v-if="title == 'Assesment'" src="" alt="gambar " /> -->
          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <div class="title-penugasan desc">{{ title }}</div>
            <div class="overview">
              <h3 class="mb-2"><b>Overview</b></h3>
              <p>
                <b v-for="value in overview" :key="value.no">
                  {{ value.no }}.
                  {{ value.desc }}
                  <br />
                  <br />
                </b>
              </p>
            </div>
            <div class="d-flex my-4 mx-2 justify-content-evenly">
              <button class="btn btn btn-mulai" @click="closeModal">
                Kembali
              </button>
              <!-- <router-link class="router-penugasan" to="/quiz"> -->
                <button disabled="true"
                  v-if="title == 'Pranata (Pramuda Mengenal Tata Krama Sunda)'"
                  class="btn btn-kembali"
                >
                  Mulai Quiz
                </button>
              <!-- </router-link> -->
              <router-link class="router-penugasan" to="/soon"><!--/assessment -->
                <button v-if="title == 'Assesment'" class="btn btn-kembali">
                  Mulai Quiz
                </button>
              </router-link>
              <!-- <router-link class="router-penugasan" to="/booklet"> /booklet -->
                <button disabled="true"
                  v-if="title == 'Cakrawala (Catatan Kreasi Mahasiswa Pemula)'"
                  class="btn btn-kembali"
                >
                  Mulai Akses
                </button>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalQuiz",
  props: ["title", "overview"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop-penugasan {
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
}
.modal-quiz-container {
  align-items: center;
  height: auto;
  padding: 40px 0px;
  max-height: 100%;
  z-index: 999;
  overflow-x: auto;
}
.penugasan-img {
  text-align: center;
  justify-content: center;
}
.penugasan-img img {
  height: 90vh;
  width: auto;
  padding: 20px 10px;
}
.penugasan-img .cakrawala {
  height: 100vh;
  width: auto;
}
.penugasan-img .pranata{
  height: 100vh;
  width: auto;
}
.quiz-content {
  background-color: white;
  height: 80%;
  width: 80%;
}
.title-penugasan.desc {
  font-size: 40px;
  margin-top: 70px;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
}
.btn-kembali {
  margin-right: 10px;
  width: 150px;
  min-width: 100px;
  padding: 8px 10px;
  color: white;
  background-color: #2e602f;
}
.btn-mulai {
  width: 150px;
  min-width: 100px;
  padding: 8px 10px;
  color: white;
  background-color: #fc8c86;
}
.overview {
  padding: 0px 40px;
  margin-top: 8vh;
  margin-bottom: 25vh;
}

@media only screen and (max-width: 1040px) {
  .penugasan-img img {
    height: 40vh;
  }
}

/* @media only screen and (min-width: 1510px) {
  .penugasan-img img {
    height: 90vh;
  }
} */
</style>
