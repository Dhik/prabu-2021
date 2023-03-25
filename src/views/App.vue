<template>
  <div class="title-page">Penugasan</div>
  <div class="container text-center">
    <div class="row">
      <div class="col-md-4">
        <div class="dot" @click="toggleModalSubmit"></div>
        <div class="title-penugasan">Nuraga <br> (Nurani Pramuda Menjaga)</div>
      </div>
    </div>
  </div>
  <div v-if="showModalSubmit">
    <ModalSubmit title="Nuraga (Nurani Pramuda Menjaga)" @close="toggleModalSubmit" />
  </div>
</template>

<script>
import ModalSubmit from "../components/PopInfo.vue";

export default {
  components: {
    ModalSubmit,
  },
  data() {
    return {
      showModalSubmit: false,
    };
  },
  methods: {
    toggleModalSubmit() {
      this.showModalSubmit = !this.showModalSubmit;
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

.title-page {
  font-size: 5rem;
  text-align: center;
  color: #7aa6d7;
  text-shadow: 2px 2px 0 rgb(0, 0, 0);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin: 110px 0px 70px 0px;
}

.title-penugasan {
  font-size: 2.5rem;
  text-align: center;
  color: #fcf590;
  text-shadow: 2px 2px 0 rgb(50, 187, 162);
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

@media only screen and (max-width: 800px) {
  .row.new-line {
    margin-top: 0px;
  }
}
</style>
