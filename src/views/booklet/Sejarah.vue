<template>
  <Spinner v-if="isLoading" />
  <div v-else class="Sejarah">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitSejarah" />
    <div class="container-booklet">
      <div class="container title-container-booklet">
        <div class="row my-5">
          <div class="col-12">
            <div class="title-booklet">Sejarah Universitas Padjadjaran</div>
          </div>
        </div>
        <div class="row sejarah-container">
          <div class="content-sejarah">
            Sebagai mahasiswa Universitas Padjadjaran, apakah Pramuda sudah
            cukup mengetahui sejarah unpad? Untuk mengukur pengetahuan Pramuda
            mengenai sejarah unpad, isilah nomor-nomor pada bagan berikut dengan
            isian singkat!
          </div>
        </div>
        <div>
          <div class="row mb-4">
            <div class="col-12 col-md-3">
              <div class="text-center"><b>Pilih Jawaban</b></div>
              <div
                class="d-flex flex-column pilihan-container align-items-center"
              >
                <div
                  class="pilihan-card"
                  v-on:click="setValue('7 September 1982', 10)"
                  :class="{ clicked: isClicked == 10 }"
                >
                  7 September 1982
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('PP No. 37 Tahun 1957', 2)"
                  :class="{ clicked: isClicked == 2 }"
                >
                  PP No. 37 Tahun 1957
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('11 September 1957', 1)"
                  :class="{ clicked: isClicked == 1 }"
                >
                  11 September 1957
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('Hukum dan Pengetahuan Masyarakat', 3)"
                  :class="{ clicked: isClicked == 3 }"
                >
                  Hukum dan Pengetahuan Masyarakat
                </div>

                <div
                  class="pilihan-card"
                  v-on:click="setValue('Keguruan dan Ilmu Pendidikan', 5)"
                  :class="{ clicked: isClicked == 5 }"
                >
                  Keguruan dan Ilmu Pendidikan
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('Ekonomi', 4)"
                  :class="{ clicked: isClicked == 4 }"
                >
                  Ekonomi
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('Kedokteran', 6)"
                  :class="{ clicked: isClicked == 6 }"
                >
                  Kedokteran
                </div>

                <div
                  class="pilihan-card"
                  v-on:click="setValue('1958-1963', 8)"
                  :class="{ clicked: isClicked == 8 }"
                >
                  1958-1963
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('2005-2007', 9)"
                  :class="{ clicked: isClicked == 9 }"
                >
                  2005-2007
                </div>

                <div
                  class="pilihan-card"
                  v-on:click="setValue('Program Pascasarjana', 11)"
                  :class="{ clicked: isClicked == 11 }"
                >
                  Program Pascasarjana
                </div>
                <div
                  class="pilihan-card"
                  v-on:click="setValue('Mr. Iwa Koesoemasoemantri', 7)"
                  :class="{ clicked: isClicked == 7 }"
                >
                  Mr. Iwa Koesoemasoemantri
                </div>
              </div>
            </div>
            <div class="col-12 col-md-9">
              <div class="soal-container">
                <div class="soal-card text-center">1957</div>
                <div class="soal-card">
                  Universitas Padjadjaran didirikan pada tanggal
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer1"
                    readonly="readonly"
                    @click="getValue(0)"
                    :value="answer[0]"
                  />
                  (1), dengan pengukuhan pada tanggal 18 September 1957
                  berdasarkan
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer2"
                    readonly="readonly"
                    @click="getValue(1)"
                    :value="answer[1]"
                  />
                  (2) (LN RI NO.9 tahun 1957). Nama "Padjadjaran" berasal dari
                  nama Kerajaan Sunda, yaiyu dipimpin oleh Prabu Siliwangi.
                </div>
                <div class="soal-card">
                  Pada saat berdirinya, Unpad terdiri dari 4 fakultas: Fakultas
                  <input
                    class="input-sejarah ans3"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(2)"
                    :value="answer[2]"
                  />
                  (3), Fakultas
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(3)"
                    :value="answer[3]"
                  />
                  (4), Fakultas
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(4)"
                    :value="answer[4]"
                  />
                  (5), Fakultas
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(5)"
                    :value="answer[5]"
                  />
                  (6).
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(6)"
                    :value="answer[6]"
                  />
                  (7) diangkat menjadi Presiden Unpad pada tanggal 6 November
                  1957 berdasarkan SK Presiden RI No. 14/M/1957
                </div>
                <div class="soal-card text-center">
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(7)"
                    :value="answer[7]"
                  />
                  (8)
                </div>
                <div class="soal-card">
                  Dalam kurun waktu ini, Unpad menambah 8 fakultas, yaitu
                  Fakultas Sosial Politik, Fakultas Matematika & ilmu
                  Pengetahuan Alam, Fakultas Sastra, Fakultas Pertanian,
                  Fakultas Kedokteran Gigi, Fakultas Publisitik, Fakultas
                  Psikologi, dan Fakultas Peternakan.
                </div>
                <div class="soal-card text-center">
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(8)"
                    :value="answer[8]"
                  />
                  (9)
                </div>
                <div class="soal-card">
                  Unpad membuka 3 fakultas Ilmu Keperawatan, Fakultas Perikanan
                  & ilmu Kelautan, dan Fakultas Teknologi Industri Pertanian.
                  Selama 2 tahun kemudianm Unpad meningkatan status 2 jurusan di
                  FMIPA, yaitu Jurusan Farmasi menjadi Fakultas serta Jurusan
                  Geologi menjadi Fakultas Teknik Geologi.
                </div>
                <div class="soal-card text-center">1982</div>
                <div class="soal-card">
                  Unpad membuka Fakultas Pascasarjana pada tanggal
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(9)"
                    :value="answer[9]"
                  />
                  (10) yang menyelenggarakan pendidikan jenjang S2 (Program
                  Magister) dan S3 (program Doktor) yang pada pekembangannya
                  berganti nama menjadi
                  <input
                    class="input-sejarah"
                    type="text"
                    name="answer3"
                    readonly="readonly"
                    @click="getValue(10)"
                    :value="answer[10]"
                  />
                  (11).
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-3">
            <router-link class="router-penugasan" to="/booklet">
              <button type="submit" value="kirim" class="btn btn-booklet-back">
                Kembali
              </button>
            </router-link>
            <button @click="toggleModal" class="btn btn-booklet-kirim">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../../components/Spinner.vue";
import Confirm from "../../components/Confirm.vue";
export default {
  data() {
    return {
      temp: "",
      answer: [],
      isClicked: "",
      grade: false,
      isLoading: true,
      showModal: false,
    };
  },
  components: {
    Spinner,
    Confirm,
  },
  methods: {
    toggleConfirm() {
      this.showModal = !this.showModal;
    },
    setValue(value, idx) {
      this.temp = value;
      this.isClicked = idx;
      console.log(this.isClicked);
    },
    getValue(index) {
      this.answer[index] = this.temp;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    submitSejarah() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/booklet/sejarah-unpad`,
        data: {
          answer1: this.answer[0].toLowerCase(),
          answer2: this.answer[1].toLowerCase(),
          answer3: this.answer[2].toLowerCase(),
          answer4: this.answer[3].toLowerCase(),
          answer5: this.answer[4].toLowerCase(),
          answer6: this.answer[5].toLowerCase(),
          answer7: this.answer[6].toLowerCase(),
          answer8: this.answer[7].toLowerCase(),
          answer9: this.answer[8].toLowerCase(),
          answer10: this.answer[9].toLowerCase(),
          answer11: this.answer[10].toLowerCase(),
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Sejarah berhasil!" },
          });
        })
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Sejarah berhasil!" },
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch((error) => {
          console.error("There was an error!", error);
          this.$router.push({
            name: "Booklet",
            params: { message: "Error submit Sejarah, mohon ulangi" },
          });
        });
    },
    getUserGrade() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/assessment/user/me`,
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          const grade = res.data.booklet.sejarah_unpad;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: { message: "Anda telah mengerjakan booklet Sejarah!" },
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          this.$router.push({
            name: "Booklet",
            params: { message: "Terjadi masalah saat mengambil data" },
          });
          Swal.fire({
            icon: "error",
            title: "Terjadi masalah saat mengambil data, silahkan coba lagi",
          });
        });
    },
  },
  mounted() {
    this.getUserGrade();
  },
};
</script>

<style>
.sejarah-container {
  background-color: white;
  margin: 40px 40px;
  box-shadow: 3px 3px 5px;
  border-radius: 8px;
}

.content-sejarah {
  padding: 30px 80px;
  text-align: justify;
}

.btn-booklet-kirim {
  background-color: #2e602f;
  color: white;
  padding: 5px 50px;
}

.btn-booklet-back {
  background-color: white;
  border: 1px solid black;
  padding: 5px 50px;
  margin-right: 30px;
}

.pilihan-container {
  text-align: center;
}

.soal-container {
  padding: 0px 40px;
}

.pilihan-card {
  background-color: #f6ede4;
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px 0px;
}

.pilihan-card.clicked {
  background-color: #fff586;
}

.soal-card {
  background-color: #f6ede4;
  padding: 15px 30px;
  border-radius: 8px;
  margin: 20px 0px;
  text-align: justify;
  line-height: 2;
}

.input-sejarah {
  width: 30%;
  border: none;
  border-bottom: 0.5px solid black;
  background-color: transparent;
  cursor: pointer;
  padding: 0px 5px;
}
</style>
