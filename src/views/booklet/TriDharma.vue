<template>
  <Spinner v-if="isLoading" />
  <div v-else class="Tri Dhar">
    <Confirm
      v-if="showModal"
      @close="toggleConfirm"
      @submit="submitTriDharma"
    />
    <div class="container-booklet">
      <div class="container-fluid title-container-booklet tri-dharma-container">
        <div class="row my-5">
          <div class="col-12">
            <div class="title-booklet respect">Tri Dharma Perguruan Tinggi</div>
          </div>
        </div>
        <div class="main-form-tri">
          <div class="row tri-dharma-head">
            <div class="col-12 col-md-6">
              <div class="title-tri py-2 text-center">
                Tri Dharma Perguruan Tinggi
              </div>
            </div>
            <div class="col-6 col-md-3">
              <router-link class="router-penugasan" to="/booklet">
                <button type="submit" value="kirim" class="btn btn-tri-dharma">
                  Kembali
                </button>
              </router-link>
            </div>
            <div class="col-6 col-md-3">
              <button @click="toggleModal" class="btn btn-tri-dharma">
                Kirim
              </button>
            </div>
          </div>
          <div class="row tri-dharma-option">
            <div class="col-3 col-lg-4 option-card-continer d-flex flex-column">
              <div class="mx-4">
                <b
                  >Klik dan tahan lalu geser untuk memindahkan jawaban dibawah
                  ini.</b
                >
              </div>
              <div class="d-flex justify-content-center">
                <draggable
                  :list="option"
                  :group="{ name: 'tridharma', pull: 'clone', put: false }"
                  :sort="false"
                >
                  <div
                    @dragstart="startDrag($event)"
                    class="option-frame"
                    v-for="element in option"
                    :key="element.id"
                    :id="element.id"
                  >
                    {{ element.id }}
                  </div>
                </draggable>
              </div>
              <div class="row mx-2">
                <div class="my-3">
                  <b>Dibawah ini adalah penjelasan dari poin diatas</b>
                </div>
                <p>1. Pengembangan diri melalui ide dan inspirasi.</p>
                <p>2. Sumber informasi dan data.</p>
                <p>
                  3. Permasalahan di masyarakat yang menjadi sumber inspirasi
                  sebagai dasar penelitian.
                </p>
                <p>4. Pengaplikasian untuk mensejahterakan masyarakat.</p>
                <p>
                  5. Meningkatkan kepedulian dan kepribadian humanis untuk
                  mengembangkan dan memperkuat potensi serta daya bangsa.
                </p>
                <p>
                  6. Pengabdian kepada masyarakat sesuai dengan bidang
                  pendidikan.
                </p>
              </div>
            </div>
            <div class="col-8 col-lg-8 mt-5 px-4">
              <div class="d-flex justify-content-between flex-row">
                <div class="poin-tri-dharma1">Pendidikan</div>
                <div class="d-flex flex-column">
                  <div class="d-flex flex-row align-items-center">
                    <div class="container-answer-tri">
                      <draggable
                        class="frame-answer"
                        :group="{ name: 'tridharma', put: true, pull: false }"
                        @change="addTriDharma($event, 0)"
                        v-model="triDharma"
                      >
                        <div v-if="optionNumber[0]">{{ optionNumber[0] }}</div>
                        <div v-else>...</div>
                      </draggable>
                      <input
                        class="input-tri"
                        type="text"
                        name="poin1"
                        :value="optionNumber[0]"
                      />
                    </div>
                    <div class="triangle">
                      <div class="triangle-right"></div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div class="triangle">
                      <div class="triangle-left"></div>
                    </div>
                    <div class="container-answer-tri">
                      <draggable
                        class="frame-answer"
                        :group="{ name: 'tridharma', put: true, pull: false }"
                        @change="addTriDharma($event, 1)"
                        v-model="triDharma"
                      >
                        <div v-if="optionNumber[1]">{{ optionNumber[1] }}</div>
                        <div v-else>...</div>
                      </draggable>
                      <input
                        class="input-tri"
                        type="text"
                        name="poin2"
                        :value="optionNumber[1]"
                      />
                    </div>
                  </div>
                </div>
                <div class="poin-tri-dharma2">Penelitian</div>
              </div>
              <div class="d-flex justify-content-around mt-5">
                <div class="d-flex flex-column row-right">
                  <div class="d-flex flex-row align-items-center">
                    <div class="triangle">
                      <div class="triangle-left"></div>
                    </div>
                    <div class="container-answer-tri">
                      <draggable
                        class="frame-answer"
                        :group="{ name: 'tridharma', put: true, pull: false }"
                        @change="addTriDharma($event, 4)"
                        v-model="triDharma"
                      >
                        <div v-if="optionNumber[4]">{{ optionNumber[4] }}</div>
                        <div v-else>...</div>
                      </draggable>
                      <input
                        class="input-tri"
                        type="text"
                        name="poin3"
                        :value="optionNumber[4]"
                      />
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div class="container-answer-tri">
                      <draggable
                        class="frame-answer"
                        :group="{ name: 'tridharma', put: true, pull: false }"
                        @change="addTriDharma($event, 5)"
                        v-model="triDharma"
                      >
                        <div v-if="optionNumber[5]">{{ optionNumber[5] }}</div>
                        <div v-else>...</div>
                      </draggable>
                      <input
                        class="input-tri"
                        type="text"
                        name="poin4"
                        :value="optionNumber[5]"
                      />
                    </div>
                    <div class="triangle">
                      <div class="triangle-right"></div>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column row-left">
                  <div class="d-flex flex-row align-items-center">
                    <div class="container-answer-tri">
                      <draggable
                        class="frame-answer"
                        :group="{ name: 'tridharma', put: true, pull: false }"
                        @change="addTriDharma($event, 3)"
                        v-model="triDharma"
                      >
                        <div v-if="optionNumber[3]" class="text-rotate">
                          {{ optionNumber[3] }}
                        </div>
                        <div v-else>...</div>
                      </draggable>
                      <input
                        class="input-tri"
                        type="text"
                        name="poin5"
                        :value="optionNumber[3]"
                      />
                    </div>
                    <div class="triangle">
                      <div class="triangle-right"></div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div class="triangle">
                      <div class="triangle-left"></div>
                    </div>
                    <div class="container-answer-tri">
                      <draggable
                        class="frame-answer"
                        :group="{ name: 'tridharma', put: true, pull: false }"
                        @change="addTriDharma($event, 2)"
                        v-model="triDharma"
                      >
                        <div v-if="optionNumber[2]" class="text-rotate">
                          {{ optionNumber[2] }}
                        </div>
                        <div v-else>...</div>
                      </draggable>
                      <input
                        class="input-tri"
                        type="text"
                        name="poin6"
                        :value="3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-5">
                <div class="poin-tri-dharma3">Pengabdian Masyarakat</div>
              </div>
            </div>
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
import { VueDraggableNext } from "vue-draggable-next";
import axios from "axios";
import Spinner from "../../components/Spinner.vue";
import Confirm from "../../components/Confirm.vue";
export default {
  components: {
    draggable: VueDraggableNext,
    Spinner,
    Confirm,
  },
  data() {
    return {
      option: [
        {
          id: 1,
          desc: "pengembangan diri melalui ide dan inspirasi",
        },
        {
          id: 2,
          desc: "sumber informasi dan data",
        },
        {
          id: 3,
          desc: "permasalahan di masyarakat yang menjadi sumber inspirasi sebagai dasar penelitian",
        },
        {
          id: 4,
          desc: "pengaplikasian untuk mensejahterakan masyarakat",
        },
        {
          id: 5,
          desc: "meningkatkan kepedulian dan kepribadian humanis untuk mengembangkan dan memperkuat potensi serta daya bangsa",
        },
        {
          id: 6,
          desc: "pengabdian kepada masyarakat sesuai dengan bidang pendidikan",
        },
      ],
      triDharma: [],
      answer: [],
      optionNumber: [],
      isOver: true,
      grade: "",
      isLoading: true,
      showModal: false,
    };
  },
  methods: {
    toggleConfirm() {
      this.showModal = !this.showModal;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    addTriDharma(evt, a) {
      let idx = evt.added.element;
      this.optionNumber[a] = idx.id;
      this.answer[a] = idx.desc;
      this.triDharma = [];
      console.log(evt);
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
          const grade = res.data.booklet.tri_dharma;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: { message: "Anda telah mengerjakan booklet Tri Dharma" },
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
    submitTriDharma() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/booklet/tri-dharma`,
        data: {
          answer1: this.answer[0],
          answer2: this.answer[1],
          answer3: this.answer[2],
          answer4: this.answer[3],
          answer5: this.answer[4],
          answer6: this.answer[5],
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
            params: { message: "Submit Tri Dharma berhasil!" },
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
            params: { message: "Error submit Tri Dharma , mohon ulangi" },
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
.title-tri {
  color: white;
}

.tri-dharma-head {
  background-color: #304256;
  padding: 30px;
}

.btn-tri-dharma {
  background-color: #6fc8ee;
  width: 70%;
}

.tri-dharma-option {
  background-color: #f6ede4;
  padding: 50px 0px;
  margin-bottom: 30px;
}

.tri-option {
  background-color: white;
  height: 50px;
  text-align: center;
  cursor: grabbing;
}

.option-card-continer {
  border-right: 2px solid #304256;
}

.option-frame {
  background-color: white;
  border: 1px solid black;
  height: 55px;
  padding: 15px 0px;
  width: 80px;
  margin: 15px 15px;
  text-align: center;
  cursor: grabbing;
}

.container-answer-tri {
  margin: 20px 0px;
}

.frame-answer {
  height: 40px;
  width: 200px;
  background-color: white;
  text-align: center;
  padding: 5px 0px;
}

.poin-tri-dharma1 {
  background-color: white;
  margin-right: 80px;
  width: 150px;
  height: 150px;
  text-align: center;
  padding: 60px 0px;
  border-radius: 15px;
}

.poin-tri-dharma2 {
  background-color: white;
  margin-left: 80px;
  width: 150px;
  height: 150px;
  text-align: center;
  padding: 60px 0px;
  border-radius: 15px;
}

.poin-tri-dharma3 {
  background-color: white;
  width: 150px;
  height: 150px;
  text-align: center;
  padding: 50px 0px;
  border-radius: 15px;
}

.triangle {
  width: 0;
}

.triangle .triangle-right {
  border-top: 35px solid transparent;
  border-left: 50px solid white;
  border-bottom: 35px solid transparent;
  margin-left: -10px;
}

.triangle .triangle-left {
  border-top: 35px solid transparent;
  border-right: 50px solid white;
  border-bottom: 35px solid transparent;
  margin-left: -50px;
}

.row-right {
  margin-top: 30px;
  -ms-transform: rotate(50deg); /* IE 9 */
  transform: rotate(50deg);
}

.row-left {
  margin-top: 30px;
  -ms-transform: rotate(130deg); /* IE 9 */
  transform: rotate(130deg);
}

.text-transform {
  -ms-transform: rotate(175deg); /* IE 9 */
  transform: rotate(175deg);
}

.text-rotate {
  transform: rotate(180deg);
}

.input-tri {
  display: none;
}

.rotate {
  display: none;
}

.main-form-tri {
  margin-left: 50px;
  margin-right: 50px;
}

@media screen and (orientation: portrait) {
  .container-fluid.title-container-booklet.tri-dharma-container {
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

@media only screen and (max-width: 950px) {
  .btn-tri-dharma {
    width: 100%;
  }
}

@media only screen and (max-width: 1100px) {
  .main-form-tri {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
