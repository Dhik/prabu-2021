<template>
  <div class="container-fluid">
    <Spinner v-if="isLoading" />
    <div v-else class="row">
      <div class="col-1 col-md-1 col-lg-3">
        <Sidebar @close="toggleModal" />
      </div>
      <div class="col-11 col-md-11 col-lg-9">
        <div class="continer-fluid content-container">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-row">
                <img
                  v-if="foto != ''"
                  class="profile-image"
                  :src="foto"
                  alt="Foto_profile"
                />
                <img
                  v-if="foto == ''"
                  class="profile-image"
                  src="./img/placholder.png"
                  alt="Foto_profile"
                />
                <div class="ms-4">
                  <h4>{{ nama }}</h4>
                  <div>{{ fakultas }}, {{ prodi }}</div>
                  <div>{{ npm }}</div>
                  <button class="btn btn-card">
                    <router-link class="router-penugasan" to="/penugasan"
                      >mulai penugasan</router-link
                    >
                  </button>
                </div>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-12 col-md-12 col-lg-6 mt-4">
                <div class="card-profile">
                  <div class="card-body">
                    <div class="d-flex flex-row px-4">
                      <h5 class="card-title me-2">Badge</h5>
                      <!-- <div class="notification">3</div> -->
                    </div>
                    <div class="d-flex justify-content-center">
                      <div>
                        <div
                          class="no-badge"
                          v-if="
                            resultQuizPranata == null ||
                            resultQuizPranata.badge == null
                          "
                        >
                          Kamu belum mendapatkan badge
                        </div>
                        <img
                          v-else
                          :src="resultQuizPranata.badge.image"
                          class="card-img-bs"
                          alt="..."
                        />
                        <div class="card-text text-center">
                          <a href="#"><b>Pranata</b></a>
                        </div>
                      </div>
                      <div>
                        <div
                          class="no-badge"
                          v-if="
                            resultQuizAssess == null ||
                            resultQuizAssess.badge == null
                          "
                        >
                          Kamu belum mendapatkan badge
                        </div>
                        <img
                          v-else
                          :src="resultQuizAssess.badge.image"
                          class="card-img-bs"
                          alt="..."
                        />
                        <div class="card-text text-center">
                          <a href="#"><b>Assessment</b></a>
                        </div>
                      </div>
                      <div>
                        <div class="no-badge" v-if="resultSubmitNuraga == null">
                          Kamu belum mendapatkan badge
                        </div>
                        <div v-else>
                          <div
                            class="wait no-badge mx-3"
                            v-if="resultSubmitNuraga.badge == null"
                          >
                            Menunggu Penilaian
                          </div>
                          <img
                            v-else
                            :src="resultSubmitNuraga.badge.image"
                            class="card-img-bs"
                            alt="..."
                          />
                        </div>

                        <div class="card-text text-center">
                          <a href="#"><b>Nuraga</b></a>
                        </div>
                      </div>
                    </div>
                    <div class="all-badge" :class="{ show: showAll }">
                      <div class="d-flex justify-content-center">
                        <div>
                          <div
                            class="no-badge mx-3"
                            v-if="resultBooklet.badge == null"
                          >
                            Kamu belum mendapatkan badge
                          </div>
                          <img
                            v-else
                            :src="resultBooklet.badge.image"
                            class="card-img-bs"
                            alt="..."
                          />
                          <div class="card-text text-center">
                            <a href="#"> <b>Cakrawala</b></a>
                          </div>
                        </div>
                        <div>
                          <div
                            class="no-badge mx-3"
                            v-if="resultSubmitSenandika == null"
                          >
                            Kamu belum mendapatkan badge
                          </div>
                          <div v-else>
                            <div
                              class="wait no-badge mx-3"
                              v-if="resultSubmitSenandika.badge == null"
                            >
                              Menunggu Penilaian
                            </div>
                            <img
                              v-else
                              :src="resultSubmitSenandika.badge.image"
                              class="card-img-bs"
                              alt="..."
                            />
                          </div>
                          <div class="card-text text-center">
                            <a href="#"> <b> Senandika </b> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer py-4">
                    <div class="card-text text-center">
                      <div class="view-all" @click="showAllTask">view all</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-6 mt-4">
                <div class="card-profile">
                  <div class="card-body">
                    <div class="d-flex flex-row px-4">
                      <h5 class="card-title me-2">Nilai Penugasan</h5>
                      <!-- <div class="notification">5</div> -->
                    </div>
                    <div class="d-flex justify-content-center my-5">
                      <div>
                        <div class="card-text text-center">Pranata</div>
                        <div
                          v-if="resultQuizPranata != null"
                          class="btn-card result mx-2"
                        >
                          {{ resultQuizPranata.grade }}% accuracy
                        </div>
                        <div v-else class="btn-card result mx-2">
                          0% accuracy
                        </div>
                      </div>
                      <div>
                        <div class="card-text text-center">Assessment</div>
                        <div
                          v-if="resultQuizAssess != null"
                          class="btn-card result mx-2"
                        >
                          {{ resultQuizAssess.grade }}% accuracy
                        </div>
                        <div v-else class="btn-card result mx-2">
                          0% accuracy
                        </div>
                      </div>
                      <div>
                        <div class="card-text text-center">Nuraga</div>
                        <div
                          v-if="resultSubmitNuraga == null"
                          class="btn-card result mx-2"
                        >
                          0% accuracy
                        </div>
                        <div v-else>
                          <div
                            v-if="resultSubmitNuraga.grade == null"
                            class="btn-card result mx-2"
                          >
                            menunggu penilaian
                          </div>
                          <div v-else class="btn-card result mx-2">
                            {{ resultSubmitNuraga.grade }}% accuracy
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="all-result" :class="{ show: showResult }">
                      <div class="d-flex justify-content-center mb-5">
                        <div>
                          <div class="card-text text-center">Cakrawala</div>
                          <div
                            v-if="resultBooklet.total != null"
                            class="btn-card result mx-2"
                          >
                            {{ resultBooklet.total }}% accuracy
                          </div>
                          <div v-else class="btn-card result mx-2">
                            0% accuracy
                          </div>
                        </div>
                        <div>
                          <div class="card-text text-center">Senandika</div>
                          <div
                            v-if="resultSubmitSenandika == null"
                            class="btn-card result mx-2"
                          >
                            0% accuracy
                          </div>
                          <div v-else>
                            <div
                              v-if="resultSubmitSenandika.grade == null"
                              class="btn-card result mx-2"
                            >
                              menunggu penilaian
                            </div>
                            <div v-else class="btn-card result mx-2">
                              {{ resultSubmitSenandika.grade }}% accuracy
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer py-4">
                    <div class="card-text text-center">
                      <div class="view-all" @click="showAllResult">
                        view all
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Sidebar from "../components/Sidebar.vue";
import axios from "axios";
import Spinner from "../components/Spinner.vue";

export default {
  data() {
    return {
      showAll: false,
      showResult: false,
      isLoading: true,
      nama: "",
      npm: "",
      prodi: "",
      foto: "",
      fakultas: "",
      resultBooklet: null,
      resultQuizAssess: null,
      resultQuizPranata: null,
      resultSubmitNuraga: null,
      resultSubmitSenandika: null,
    };
  },
  components: {
    Sidebar,
    Spinner,
  },
  methods: {
    checkLoggedInForPenugasan() {
      if (!localStorage.token) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Anda perlu login",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    showAllTask() {
      this.showAll = !this.showAll;
    },
    showAllResult() {
      this.showResult = !this.showResult;
    },
    getUserProfile() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/profile/pramuda`,
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.foto = res.data.foto;
          this.nama = res.data.nama;
          this.npm = res.data.npm;
          this.prodi = res.data.prodinama;
          this.fakultas = res.data.fakultas;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("There was an error!", error);
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
          console.log(res.data);
          this.resultBooklet = res.data.booklet;
          this.resultQuizAssess = res.data.quiz_assessment;
          this.resultQuizPranata = res.data.quiz_pranata;
          this.resultSubmitNuraga = res.data.submit_nuraga;
          this.resultSubmitSenandika = res.data.submit_senandika;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    this.getUserProfile();
    this.getUserGrade();
    this.checkLoggedInForPenugasan();
  },
};
</script>

<style>
.profile-image {
  width: 20%;
  height: 30%;
  border-radius: 10px;
}

.notification {
  background-color: #6c3a84;
  padding: 0px 10px;
  margin-top: -2px;
  font-size: 22px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
}

.card-profile {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 10px;
  box-shadow: 2px 5px 10px rgba(63, 63, 63, 0.604);
  min-height: 320px;
}

.card-text a {
  text-decoration: none;
  color: black;
}

.btn-card.result {
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 14px;
}

.view-all {
  cursor: pointer;
}

.card-text .view-all:hover {
  font-weight: bold;
}

.all-badge {
  display: none;
  transition: display 1s;
}

.all-badge.show {
  display: inline;
}

.all-result {
  display: none;
}

.all-result.show {
  display: inline;
}

.router-penugasan {
  text-decoration: none;
  color: white;
}

.router-penugasan:hover {
  color: white;
}

.no-badge {
  text-align: center;
  margin: 30px 0px;
  background-color: #fc8c86;
  margin: 20px 10px;
  border-radius: 5px;
  color: white;
  padding: 10px 5px;
}

.wait.no-badge {
  background-color: #3b928c;
}

.card-img-bs {
  width: 150px;
  height: 150px;
}
</style>
