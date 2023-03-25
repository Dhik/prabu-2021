<template>
  <div id="peta">
    <div id="logo_wrapper" class="penugasan-bg">
      <img src="./img/map_penugasan/bg_map.png" style="width: 100%; height: 100%; position: absolute;" />
      <img src="./img/map_penugasan/angklung.png"/>
      <div class="img_sn">
        <img src="./img/map_penugasan/senandika_4.png" class="senandika_img" id="move_3"/>
      </div>
      <div class="img_sn">
        <img src="./img/map_penugasan/senandika_2.png" class="senandika_img" id="move_3_2"/>
      </div>
      <div class="img_sn">
        <img src="./img/map_penugasan/senandika_3.png" class="senandika_img" id=""/>
      </div>
      <div class="img_sn">
        <img src="./img/map_penugasan/senandika_1.png" class="senandika_img" id="move_1"/>
      </div>


      <div class="img_nr">
        <img src="./img/map_penugasan/nuraga_1.png" class="nuraga_img" id="move_4_3"/>
      </div>
      <div class="img_nr">
        <img src="./img/map_penugasan/nuraga_2.png" class="nuraga_img" id="move_4_2"/>
      </div>
      <div class="img_nr">
        <img src="./img/map_penugasan/nuraga_3.png" class="nuraga_img" id="move_4"/>
      </div>

      <div class="img_pr">
        <img src="./img/map_penugasan/pranata_2.png" class="pranata_img" id="move_2_2"/>
      </div>
      <div class="img_pr">
        <img src="./img/map_penugasan/pranata_3.png" class="pranata_img" id="move_2_3"/>
      </div>
      <div class="img_pr">
        <img src="./img/map_penugasan/pranata_1.png" class="pranata_img" id="move_2"/>
      </div>

      <div class="img_ck">
        <img src="./img/map_penugasan/cakrawala_1.png" class="cakrawala_img"/>
      </div>
      <div class="img_ck">
        <img src="./img/map_penugasan/cakrawala_2.png" class="cakrawala_img" id="move_5"/>
      </div>
      <div class="img_ck">
        <img src="./img/map_penugasan/cakrawala_3.png" class="cakrawala_img" />
      </div>

      <div class="img_ase">
        <img src="./img/map_penugasan/assessment.png" class="assessment_img" id="move_1"/>
      </div>
      {{ $route.params.title }}
      <div class="title_1">Penugasan</div>
      <div class="point_1">
        <div class="dot" @click="toggleModalQuiz2"></div>
      </div>
      <div class="text_1">
        <div class="title-penugasan">Assesment</div>
      </div>

      <div class="point_2">
        <div class="dot" @click="toggleModalQuiz"></div>
      </div>
      <div class="text_2">
        <div class="title-penugasan">Pranata <br /></div>
      </div>
      <div class="text_2_p hide_2">
        <div class="sub-penugasan">Pramuda Mengenal Tata Krama Sunda <br /></div>
      </div>

      <div class="point_3">
        <div class="dot" @click="toggleModalBooklet"></div>
      </div>
      <div class="text_3">
        <div class="title-penugasan">Cakrawala <br /></div>
      </div>
      <div class="text_3_p hide_3">
        <div class="sub-penugasan">Catatan Kreasi Mahasiswa Pemula <br /></div>
      </div>

      <div class="point_4">
        <div class="dot" @click="toggleModalEssay"></div>
      </div>
      <div class="text_4">
        <div class="title-penugasan">Senandika <br /></div>
      </div>
      <div class="text_4_p hide_4">
        <div class="sub-penugasan">Selembar Wacana Kritis Dari Pramuda <br /></div>
      </div>


      <div class="point_5">
        <div class="dot" @click="toggleModalSubmit"></div>
      </div>
      <div class="text_5">
        <div class="title-penugasan">Nuraga <br /></div>
      </div>
      <div class="text_5_p hide_5">
        <div class="sub-penugasan">Nurani Pramuda Menjaga <br /></div>
      </div>

      <div v-if="showModalSubmit == true">
        <ModalSubmit
          title="Nuraga (Nurani Pramuda Menjaga)"
          @close="toggleModalSubmit"
        />
      </div>
      <div v-if="showModalEssay">
        <ModalSubmit
          title="Senandika (Selembar Wacana Kritis Dari Pramuda)"
          @close="toggleModalEssay == true"
        />
      </div>
      <div v-if="showModalQuiz">
        <ModalQuiz
          title="Pranata (Pramuda Mengenal Tata Krama Sunda)"
          :overview="quizOverview"
          @close="toggleModalQuiz"
        />
      </div>
      <div v-if="showModalQuiz2">
        <ModalQuiz
          title="Assesment"
          :overview="quizOverview2"
          @close="toggleModalQuiz2"
        />
      </div>
      <div v-if="showModalBooklet">
        <ModalQuiz
          title="Cakrawala (Catatan Kreasi Mahasiswa Pemula)"
          :overview="bookletOverview"
          @close="toggleModalBooklet"
        />
      </div>
    </div>
  </div>
  <div
    id="warning-mess"
    style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <div class="content">
      <h4 style="font-size: 30px">
        this page is only viewable in landscape mode
      </h4>
    </div>
  </div>
</template>

<script>
import ModalQuiz from "../components/ModalQuiz.vue";
import ModalSubmit from "../components/ModalSubmit.vue";
import "../assets/pen.css";

export default {
  components: {
    ModalQuiz,
    ModalSubmit,
  },
  data() {
    return {
      quizOverview2: [
        {
          no: 1,
          desc: "Terdapat 20 soal pilihan ganda yang terintegrasi dengan seluruh konten yang dibawakan di Prabu 2021",
        },
        {
          no: 2,
          desc: "waktu pengerjaan selama 20 menit",
        },
        {
          no: 3,
          desc: "setiap 1 soal salah bernilai 0, setiap 1 soal memiliki bobot 5",
        },
      ],
      quizOverview: [
        {
          no: 1,
          desc: "Terdapat 30 butir soal pilihan ganda yang diintegrasikan dengan materi yang berupa infografis pada website Prabu serta LINE Webtoon",
        },
        {
          no: 2,
          desc: "Waktu pengerjaan soal selama 30 menit",
        },
        {
          no: 3,
          desc: "setiap 1 soal salah bernilai 0, setiap 1 soal memiliki bobot nilai 3,33",
        },
      ],
      bookletOverview: [
        {
          no: 1,
          desc: "Terdapat beberapa penugasan baru",
        },
        {
          no: 2,
          desc: "Penugasan terdiri dari Analisis Swot, Life Plan, Tri Dharma Perguruan Tinggi, Visi dan Misi Unpad, Filosofi Logo Unpad, Sejarah Unpad, Respect, ",
        },
      ],
      showModalQuiz: false,
      showModalQuiz2: false,
      showModalBooklet: false,
      showModalSubmit: false,
      showModalEssay: false,
    };
  },
  methods: {
    toggleModalQuiz2() {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Penugasan telah ditutup",
            showConfirmButton: true,
          });
      // this.showModalQuiz2 = !this.showModalQuiz2;
    },
    toggleModalQuiz() {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Penugasan telah ditutup",
            showConfirmButton: true,
          });
      // this.showModalQuiz = !this.showModalQuiz;
    },
    toggleModalBooklet() {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Penugasan telah ditutup",
            showConfirmButton: true,
          });
      // this.showModalBooklet = !this.showModalBooklet;
    },
    toggleModalSubmit() {
      Swal.fire({
            position: "center",
            icon: "warning",
            title: "Penugasan telah ditutup",
            showConfirmButton: true,
          });
      // this.showModalSubmit = !this.showModalSubmit;
    },
    toggleModalEssay() {
      Swal.fire({
            position: "center",
            icon: "warning",
            title: "Penugasan telah ditutup",
            showConfirmButton: true,
          });
      // this.showModalEssay = !this.showModalEssay;
    },
    checkQuizStorage() {
      if (localStorage.quiz) {
        this.$router.push({
          name: "Quiz",
        });
      }
    },
    checkLoggedInForPenugasan() {
      if (!localStorage.token) {
        this.$router.push({
          name: "NotLogin",
        });
      }
    },
  },
  mounted() {
    this.checkLoggedInForPenugasan();
    this.checkQuizStorage();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;700&display=swap");

@font-face {
  font-family: Brudge;
  src: url("../assets/Font/Brudge Regular.otf") format("truetype");
}

.base_penugasan {
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;
}

.senandika_img {
  position: relative; 
  width: 480px; 
  height: 380px;
}
.nuraga_img {
  position: relative; 
  width: 370px; 
  height: 320px;
}
.pranata_img {
  position: relative; 
  width: 320px; 
  height: 270px;
}
.cakrawala_img {
  position: relative; 
  width: 600px; 
  height: 460px;
}

.assessment_img {
  position: relative; 
  width: 1000px; 
  height: 860px;
}
.title-page {
  font-size: 5rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin: 110px 0px 70px 0px;
  position: absolute;
  z-index: 100;
}

.title-penugasan {
  font-size: 2rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
  width: 300px;
}
.sub-penugasan {
  font-size: 24px;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
  width: 300px;
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
#warning-mess {
  display: none;
}

@media only screen and (orientation: portrait) {
  #wrapper {
    display: none;
  }

  #peta {
    display: none;
  }

  #warning-mess {
    display: block;
    color: white;
  }
}

/* BLINKING EYES EFFECT LOGO */
@keyframes blink {
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

#logo_wrapper {
  margin: 0 auto;
  overflow: hidden;
  width: 1333px;
  position: relative;
}

a {
  text-decoration: none;
}

.point_1 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 107px;
  left: 950px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  z-index: 6;
}

.point_2 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 280px;
  left: 730px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  z-index: 6;
}

.point_3 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 500px;
  left: 640px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  z-index: 6;
}

.point_4 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 600px;
  z-index: 10;
  left: 150px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.point_5 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  z-index: 10;
  top: 850px;
  left: 320px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.text_1 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 135px;
  left: 840px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all .2s ease-in-out;
}

.text_2 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 270px;
  left: 740px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all .2s ease-in-out;
}

.text_3 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 520px;
  left: 630px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all .2s ease-in-out;
}

.text_4 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 580px;
  left: 150px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all .2s ease-in-out;
}

.text_5 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 850px;
  left: 320px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all .2s ease-in-out;
}

.title_1 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 250px;
  left: 220px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  z-index: 0;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  font-size: 4.5rem;
}

.img_sn {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 440px;
  left: -50px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}
.img_nr {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 730px;
  left: 170px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.img_pr {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 160px;
  left: 620px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 4;
}
.img_ck {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 345px;
  left: 380px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}
.img_ase {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: -345px;
  left: 520px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

img#move_1 {
  transform-origin: bottom;
  animation-name: move_1;
  animation-duration: 2s;
  animation-iteration-count: 10000;
}

@keyframes move_1 {
  0% {
    transform: translate(5px)
  }

  50% {
    transform: translate(-5px)
  }

  100% {
    transform: translate(5px)
  }
}

img#move_2 {
  transform-origin: center;
  animation-name: move_2;
  animation-duration: 0.8s;
  animation-iteration-count: 10000;
}

@keyframes move_2 {
  0% {
    transform: rotate(3deg) translate(5px);
  }

  50% {
    transform: rotate(-3deg) translate(-5px);
  }

  100% {
    transform: rotate(3deg) translate(5px);
  }
}

img#move_2_2 {
  transform-origin: center;
  animation-name: move_2_2;
  animation-duration: 0.9s;
  animation-iteration-count: 10000;
}

@keyframes move_2_2 {
  0% {
    transform: rotate(-3deg);
  }

  50% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(-3deg);
  }
}

img#move_2_3 {
  transform-origin: center;
  animation-name: move_2_3;
  animation-duration: 1s;
  animation-iteration-count: 10000;
}

@keyframes move_2_3 {
  0% {
    transform: rotate(-3deg) translate(5px);
  }

  50% {
    transform: rotate(3deg) translate(-5px);
  }

  100% {
    transform: rotate(-3deg) translate(5px);
  }
}

img#move_3 {
  transform-origin: center;
  animation-name: move_3;
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
}

@keyframes move_3 {
  0% {
    transform: rotate(1deg);
  }

  50% {
    transform: rotate(-1deg);
  }

  100% {
    transform: rotate(1deg);
  }
}
img#move_3_2 {
  transform-origin: center;
  animation-name: move_3_2;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}

@keyframes move_3_2 {
  0% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(-3deg);
  }

  100% {
    transform: rotate(3deg);
  }
}

img#move_4 {
  transform-origin: center;
  animation-name: move_4;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes move_4 {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(30px);
  }

  100% {
    transform: translateY(0px);
  }
}
img#move_4_2 {
  transform-origin: center;
  animation-name: move_4_2;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes move_4_2 {
  0% {
    transform: translateY(30px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(30px);
  }
}

img#move_4_3 {
  transform-origin: center;
  animation-name: move_4_3;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes move_4_3 {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0px);
  }
}

img#move_5 {
  transform-origin: center;
  animation-name: move_5;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes move_5 {
  0% {
    transform: translate(0px);
  }

  50% {
    transform: translate(10px);
  }

  100% {
    transform: translate(0px);
  }
}

.text_2_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 310px;
  left: 840px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 30px;
  color: red;
  z-index: 5;
}
.text_3_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 570px;
  left: 630px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.text_4_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 620px;
  left: 200px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.text_5_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 900px;
  left: 380px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.hide_2 {
  display: none;
}
.hide_3 {
  display: none;
}
.hide_4 {
  display: none;
}
.hide_5 {
  display: none;
}    
.text_1:hover{
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_2:hover + .hide_2 {
  display: block;
  animation: animatebottom 1s;
}
.text_2:hover{
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_3:hover + .hide_3 {
  display: block;
  animation: animatebottom 1s;
}
.text_3:hover{
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_4:hover + .hide_4 {
  display: block;
  animation: animatebottom 1s;
}
.text_4:hover{
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_5:hover + .hide_5 {
  display: block;
  animation: animatebottom 1s;
}
.text_5:hover{
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
