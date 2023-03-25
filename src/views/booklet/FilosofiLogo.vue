<template>
  <Spinner v-if="isLoading" />
  <div v-else class="Filosofi">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitFilosofi" />
    <div class="container-booklet">
      <div class="container title-container-booklet filosofi-crossword">
        <div class="title-booklet respect mb-4">Filosofi Logo</div>
        <div class="filosofi-container">
          <div class="crossword d-flex justify-content-center">
            <table class="filosofi-table">
              <!-- row 1 -->
              <tr>
                <td></td>
                <td>
                  <div class="question-number">1.</div>
                  <input
                    data-index="0"
                    ref="input-0"
                    @input="focusNextOncePopulated($event, 1)"
                    type="text"
                    v-model="soal1[0]"
                  />
                </td>
                <td>
                  <input
                    data-index="1"
                    ref="input-1"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal1[1]"
                  />
                </td>
                <td>
                  <input
                    data-index="2"
                    ref="input-2"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal1[2]"
                  />
                </td>
                <td>
                  <input
                    data-index="3"
                    ref="input-3"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal1[3]"
                  />
                </td>
                <td>
                  <div class="question-number">2.</div>
                  <input
                    data-index="4"
                    ref="input-4"
                    maxlength="1"
                    type="text"
                    v-model="soal1[4]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 2 -->
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="1"
                    ref="input-down-1"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal2[1]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 3 -->
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div class="question-number">3.</div>
                  <input
                    data-index="8"
                    ref="input-down-8"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal3[0]"
                  />
                </td>
                <td></td>
                <td>
                  <input
                    data-index="2"
                    ref="input-down-2"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal2[2]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 4 -->
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="9"
                    ref="input-down-9"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal3[1]"
                  />
                </td>
                <td></td>
                <td>
                  <input
                    data-index="3"
                    ref="input-down-3"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal2[3]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 5 -->
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="10"
                    ref="input-down-10"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal3[2]"
                  />
                </td>
                <td></td>
                <td>
                  <input
                    data-index="4"
                    ref="input-down-4"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal2[4]"
                  />
                </td>
                <td></td>
                <td>
                  <div class="question-number">4.</div>
                  <input
                    data-index="12"
                    ref="input-down-12"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal4[0]"
                  />
                </td>
                <td></td>
                <td></td>
                <td>
                  <div class="question-number">5.</div>
                  <input
                    data-index="17"
                    ref="input-down-17"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal5[0]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 6 -->
              <tr>
                <td>
                  <div class="question-number">6.</div>
                  <input
                    data-index="5"
                    ref="input-5"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal6[0]"
                  />
                </td>
                <td>
                  <input
                    data-index="6"
                    ref="input-6"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal6Across[1]"
                  />
                </td>
                <td>
                  <input
                    data-index="7"
                    ref="input-7"
                    @input="focusSpecialCase($event, 1, 11)"
                    maxlength="1"
                    type="text"
                    v-model="soal6Across[2]"
                  />
                </td>
                <td>
                  <input
                    data-index="8"
                    ref="input-down-11"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal3[3]"
                  />
                </td>
                <td>
                  <input
                    data-index="9"
                    ref="input-9"
                    maxlength="1"
                    type="text"
                    @input="focusSpecialCase($event, 1, 5)"
                    v-model="soal6Across[4]"
                  />
                </td>
                <td>
                  <input
                    data-index="5"
                    ref="input-down-5"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal2[5]"
                  />
                </td>
                <td></td>
                <td>
                  <input
                    data-index="13"
                    ref="input-down-13"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal4[1]"
                  />
                </td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="18"
                    ref="input-down-18"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal5[1]"
                  />
                </td>
                <td></td>
                <td>
                  <div class="question-number">7.</div>
                  <input
                    data-index="21"
                    ref="input-down-21"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal7[0]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 7 -->
              <tr>
                <td>
                  <input
                    data-index="26"
                    ref="input-down-26"
                    @input="focusNextDown($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal6[1]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="6"
                    ref="input-down-6"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal2[6]"
                  />
                </td>
                <td></td>
                <td>
                  <input
                    data-index="14"
                    ref="input-down-14"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal4[2]"
                  />
                </td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="19"
                    ref="input-down-19"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal5[2]"
                  />
                </td>
                <td></td>
                <td>
                  <input
                    data-index="22"
                    ref="input-down-22"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal7[1]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 8 -->
              <tr>
                <td>
                  <input
                    data-index="27"
                    ref="input-down-27"
                    @input="focusNextDown($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal6[2]"
                  />
                </td>
                <td></td>
                <td></td>
                <td>
                  <div class="question-number">8.</div>
                  <input
                    data-index="11"
                    ref="input-11"
                    @input="focusNextOncePopulated($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal8Across[0]"
                  />
                </td>
                <td>
                  <input
                    data-index="12"
                    ref="input-12"
                    @input="focusSpecialCase($event, 1, 7)"
                    maxlength="1"
                    type="text"
                    v-model="soal8Across[1]"
                  />
                </td>
                <td>
                  <input
                    data-index="10"
                    ref="input-down-7"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal2[7]"
                  />
                </td>
                <td>
                  <input
                    data-index="11"
                    ref="input-11"
                    maxlength="1"
                    type="text"
                    @input="focusSpecialCase($event, 1, 15)"
                    v-model="soal8Across[3]"
                  />
                </td>
                <td>
                  <input
                    data-index="15"
                    ref="input-down-15"
                    cek="cek"
                    maxlength="1"
                    type="text"
                    data-index-number="11"
                    @input="
                      !soal8Across[3]
                        ? focusNextDown($event, 1)
                        : focusSpecialHorizontal($event, 1, 13)
                    "
                    v-model="soal4[3]"
                  />
                </td>
                <td>
                  <input
                    data-index="13"
                    ref="input-13"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal8Across[5]"
                  />
                </td>
                <td>
                  <input
                    data-index="14"
                    ref="input-14"
                    maxlength="1"
                    type="text"
                    @input="focusSpecialCase($event, 1, 20)"
                    v-model="soal8Across[6]"
                  />
                </td>
                <td>
                  <input
                    data-index="20"
                    ref="input-down-20"
                    maxlength="1"
                    type="text"
                    @input="focusSpecialHorizontal($event, 1, 15)"
                    v-model="soal5[3]"
                  />
                </td>
                <td>
                  <input
                    data-index="15"
                    ref="input-15"
                    maxlength="1"
                    type="text"
                    @input="focusSpecialCase($event, 1, 23)"
                    v-model="soal8Across[8]"
                  />
                </td>
                <td>
                  <input
                    data-index="23"
                    ref="input-down-23"
                    maxlength="1"
                    type="text"
                    @input="
                      !soal8Across[8]
                        ? focusNextDown($event, 1)
                        : focusSpecialHorizontal($event, 1, 16)
                    "
                    v-model="soal7[2]"
                  />
                </td>
                <td>
                  <input
                    data-index="16"
                    ref="input-16"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal8Across[10]"
                  />
                </td>
                <td>
                  <input
                    data-index="17"
                    ref="input-17"
                    maxlength="1"
                    type="text"
                    v-model="soal8Across[11]"
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 9 -->
              <tr>
                <td>
                  <input
                    data-index="28"
                    ref="input-down-28"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal6[3]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="16"
                    ref="input-down-16"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal4[4]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input
                    data-index="24"
                    ref="input-down-24"
                    maxlength="1"
                    type="text"
                    @input="focusNextDown($event, 1)"
                    v-model="soal7[3]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <!-- row 10 -->
              <tr>
                <td>
                  <input
                    data-index="29"
                    ref="input-down-29"
                    @input="focusNextDown($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal6[4]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="number-9">9.</td>
                <td>
                  <input
                    data-index="25"
                    ref="input-down-25"
                    maxlength="1"
                    type="text"
                    v-model="soal7[4]"
                  />
                </td>
                <td>
                  <input
                    data-index="18"
                    ref="input-18"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal9Accross[1]"
                  />
                </td>
                <td>
                  <input
                    data-index="19"
                    ref="input-19"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal9Accross[2]"
                  />
                </td>
                <td>
                  <input
                    data-index="20"
                    ref="input-20"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal9Accross[3]"
                  />
                </td>
                <td>
                  <input
                    data-index="21"
                    ref="input-21"
                    maxlength="1"
                    type="text"
                    @input="focusNextOncePopulated($event, 1)"
                    v-model="soal9Accross[4]"
                  />
                </td>
                <!-- row 11 -->
              </tr>

              <tr>
                <td>
                  <input
                    data-index="30"
                    ref="input-down-30"
                    @input="focusNextDown($event, 1)"
                    maxlength="1"
                    type="text"
                    v-model="soal6[5]"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div class="row mx-4">
            <div class="col-12 col-md-6">
              <div class="title-cross"><b> Mendatar</b></div>
              <div class="d-flex justify-content-center">
                <img
                  class="img-filosofi"
                  src="../../assets/img/soal-mendatar.jpg"
                  alt="gambar logo"
                />
              </div>
              <p>
                9. Warna yang melambangkan keteguhan, kekuatan, dan ketabahan
                hati
              </p>
            </div>
            <div class="col-12 col-md-6 mb-4">
              <div class="title-cross"><b> Menurun</b></div>
              <p>
                2. Melambangkan asas negara yang menjadi pedoman bagi segala
                usaha serta kegiatan universitas demi kepentingan negara dan
                bangsa.
              </p>
              <p>
                3. Melambangkan kemasyarakatan, sama halnya dengan roda
                senantiasa bergerak berputar dalam proses perubahan dan yang
                menjadi corak Universitas Padjadjaran
              </p>
              <p>4. Warna dengan arti kebersihan</p>
              <p>5. Melambangkan suluh penerangan yang membawa cahaya.</p>
              <p>6. Warna dasar pada logo unpad.</p>
              <p>7. Warna yang mengandung arti kesucian serta kejujuran.</p>
            </div>
          </div>
        </div>
        <div>
          <input
            class="filosofi-input"
            type="text"
            name="mendatar-1"
            v-model="answer1"
          />
          <input
            class="filosofi-input"
            type="text"
            name="menurun-2"
            v-model="answer2"
          />
          <input
            class="filosofi-input"
            type="text"
            name="mendatar-1"
            v-model="answer3"
          />
          <input
            class="filosofi-input"
            type="text"
            name="menurun-2"
            v-model="answer4"
          />
          <input
            class="filosofi-input"
            type="text"
            name="menurun-2"
            v-model="answer5"
          />
          <input
            class="filosofi-input"
            type="text"
            name="mendatar-1"
            v-model="answer6datar"
          />
          <input
            class="filosofi-input"
            type="text"
            name="menurun-2"
            v-model="answer6turun"
          />
          <input
            class="filosofi-input"
            type="text"
            name="mendatar-1"
            v-model="answer7"
          />
          <input
            class="filosofi-input"
            type="text"
            name="menurun-2"
            v-model="answer8"
          />
          <input
            class="filosofi-input"
            type="text"
            name="menurun-2"
            v-model="answer9"
          />

          <div class="d-flex justify-content-end my-5">
            <router-link class="router-penugasan" to="/booklet">
              <button class="btn btn-booklet-back">Kembali</button>
            </router-link>
            <button @click="toggleModal" class="btn btn-booklet-kirim">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rotate">
    <h1>Please Rotate Your Device...</h1>
    <p>Please Rotate Your Device...</p>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../../components/Spinner.vue";
import Confirm from "../../components/Confirm.vue";
export default {
  data() {
    return {
      soal1: [],
      soal2: [],
      soal3: [],
      soal4: [],
      soal5: [],
      soal6: [],
      soal6Across: [],
      soal7: [],
      soal8Across: [],
      soal9Accross: [],
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6datar: "",
      answer6turun: "",
      answer7: "",
      answer8: "",
      answer9: "",
      grade: "",
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
    toggleModal() {
      this.showModal = !this.showModal;
    },
    focusNextOncePopulated(event, max) {
      if (event.target.value.length === max) {
        const nextElement =
          this.$refs?.[`input-${Number(event.target.dataset.index) + 1}`];
        if (nextElement) nextElement.focus();
      }
    },
    focusNextDown(event, max) {
      if (event.target.value.length === max) {
        const nextElement =
          this.$refs?.[`input-down-${Number(event.target.dataset.index) + 1}`];
        if (nextElement) nextElement.focus();
      }
    },
    focusSpecialCase(event, max, loc) {
      if (event.target.value.length === max) {
        const nextElement = this.$refs?.[`input-down-${loc}`];
        if (nextElement) nextElement.focus();
      }
    },
    focusSpecialHorizontal(event, max, loc) {
      if (event.target.value.length === max) {
        const nextElement = this.$refs?.[`input-${loc}`];
        if (nextElement) nextElement.focus();
      }
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
          const grade = res.data.booklet.filosofi_logo;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: {
                message: "Anda telah mengerjakan booklet Filosofi Logo",
              },
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
    submitFilosofi() {
      const token = localStorage.getItem("token");
      if (this.answer8.length < 11) {
        Swal.fire({
          icon: "Error",
          title: "Input Tidak Lengkap",
        });
      } else {
        axios({
          method: "post",
          url: `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/v1/assessment/booklet/filosofi-logo`,
          data: {
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3,
            answer4: this.answer4,
            answer5: this.answer5,
            answer6datar: this.answer6datar,
            answer6turun: this.answer6turun,
            answer7: this.answer7,
            answer8: this.answer8,
            answer9: this.answer9,
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
              params: { message: "Submit Filosofi - Logo berhasil!" },
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
              params: { message: "Submit Filosofi - Logo Gagal!" },
            });
          });
      }
    },
  },
  mounted() {
    this.getUserGrade();
  },
  updated() {
    this.soal2[0] = this.soal1[4];
    this.soal6Across[0] = this.soal6[0];
    this.soal6Across[3] = this.soal3[3];
    this.soal6Across[5] = this.soal2[5];
    this.soal8Across[2] = this.soal2[7];
    this.soal8Across[4] = this.soal4[3];
    this.soal8Across[7] = this.soal5[3];
    this.soal8Across[9] = this.soal7[2];
    this.soal9Accross[0] = this.soal7[4];

    this.answer1 = this.soal1.join("");
    this.answer2 = this.soal2.join("");
    this.answer3 = this.soal3.join("");
    this.answer4 = this.soal4.join("");
    this.answer5 = this.soal5.join("");
    this.answer6datar = this.soal6Across.join("");
    this.answer6turun = this.soal6.join("");
    this.answer7 = this.soal7.join("");
    this.answer8 = this.soal8Across.join("");
    this.answer9 = this.soal9Accross.join("");
  },
};
</script>

<style scoped>
table td {
  width: 50px;
  height: 50px;
  text-align: center;
}

table input {
  width: 100%;
  height: 100%;
  text-align: center !important;
}

table {
  margin: 40px;
}

th td {
  padding: 0px;
}

.question-number {
  text-align: left !important;
  margin-top: -21px;
  padding-left: 5px;
  font-size: 14px;
}

.img-filosofi {
  height: 75%;
  width: 75%;
  margin: 20px 0px;
  border-radius: 8px;
}

.title-cross {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
}

.filosofi {
  font-size: 46px;
  margin-top: 120px;
}

.filosofi-container {
  background-color: #f6ede4;
}

.filosofi-input {
  display: none;
}

.number-9 {
  text-align: right !important;
  padding-right: 5px;
  padding-bottom: 30px;
  font-size: 14px;
}

.rotate {
  display: none;
}

@media screen and (orientation: portrait) {
  .container.title-container-booklet.filosofi-crossword {
    display: none;
  }
  .rotate {
    display: block;
    animation: slide_up 1s ease;
  }
  .rotate h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45vh;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: 700;
  }
  .rotate p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -45vh;
    font-family: "Montserrat", sans-serif;
    font-size: 1.8rem;
    font-weight: 200;
  }
}
</style>
