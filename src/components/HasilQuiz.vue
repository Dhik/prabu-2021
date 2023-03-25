<template>
<div class="container-quiz">
  <div class="text-center title-page hasil">Selamat Telah Mengerjakan Quiz</div>
  <div class="d-flex align-items-center flex-column">
    <div class="d-flex flex-row hasil-parameter">
      <div class="me-3 pt-2">Jumlah Soal</div>
      <div v-if="assessment" class="nilai-hasil jumlah">20</div>
      <div v-else class="nilai-hasil jumlah">30</div>
    </div>
    <div class="d-flex flex-row hasil-parameter">
      <div class="me-4 pt-2">Soal Benar</div>
      <div class="nilai-hasil benar">{{ correct }}</div>
    </div>
    <div class="d-flex flex-row hasil-parameter">
      <div class="me-4 pt-2">Soal Salah</div>
      <div class="nilai-hasil salah">{{ incorrect }}</div>
    </div>
    <div class="accuracy px-5 py-2">{{ grade }}% Accuracy</div>
    <div><b>Klaim Badge</b></div>
    <div class="mb-5" v-if="badge == null">Tidak dapat mengklaim badge</div>
    <div class="mb-5" v-if="badge">
      <img :src="badge.name.image" :alt="badge.name.name" />
    </div>
    <button class="btn btn-mulai mb-4" @click="backToPenugasan">Kembali</button>
  </div>
  </div>
</template>

<script>
export default {
  props: ["badge", "correct", "incorrect", "grade", "assessment"],
  methods: {
    backToPenugasan() {
      this.$router.push({
        name: "Penugasan",
        params: { message: "Anda telah mengerjakan Quiz Pranata!" },
      });
    },
  },
};
</script>

<style>
.hasil {
  margin: 30px 0px;
  font-size: 52px;
}

.hasil-parameter {
  margin: 20px 0px;
  font-size: 18px;
  font-weight: bold;
}

.nilai-hasil {
  color: white;
  border-radius: 50px;
  font-size: 18px;
  text-align: center;
  padding: 5px 13px;
}

.nilai-hasil.jumlah {
  background-color: #6fc8ee;
}

.nilai-hasil.benar {
  background-color: #3b928c;
}

.nilai-hasil.salah {
  background-color: #da4542;
}

.accuracy {
  background-color: #3b928c;
  color: white;
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
