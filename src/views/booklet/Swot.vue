<template>
  <Spinner v-if="isLoading" />
  <div v-else class="swot">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitForm" />
    <div class="container-booklet">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-5 mt-5">
            <!-- <i class="fa fa-chevron-left"></i>
          <router-link to="/penugasan" class="router-penugasan">
            Penugasan
          </router-link> -->
          </div>
        </div>
      </div>
      <div class="title-page">Analisis Swot</div>
      <div class="container text-center justify-content-center pertanyaan">
        <p>
          Seberapa jauh sih kamu mengenali diri kamu? Agar lebih mengenal diri
          kamu sendiri, yuk analisis diri dengan mengisi bagian kosong analisis
          SWOT ini!
        </p>
      </div>

      <div
        class="
          container
          text-center
          justify-content-center
          pernyataan
          mt-3
          mb-3
        "
      >
        <div class="card-pernyataan">
          Hai! Perkenalkan nama saya
          <input
            class="input-identitas"
            type="text"
            placeholder="Masukan Namamu"
            v-model="userName"
            readonly="readonly"
          />
          Berasal dari fakultas
          <input
            class="input-identitas"
            type="text"
            placeholder="Masukan Fakultasmu"
            v-model="fakultas"
            readonly="readonly"
          />
          Jurusan
          <input
            class="input-identitas"
            placeholder="Masukan Jurusanmu"
            v-model="prodi"
            type="text"
            readonly="readonly"
          />
          <br />
          Kini, saya akan memasuki lingkungan baru perkuliahan di unpad, dimana
          tahap ini merupakan fase awal dalam menghadapi quarter life crisis.
          Langkah awal yang bisa saya lakukan untuk menghadapi quarter life
          crisis tersebut yaitu dengan mengidentifikasi diri saya sendiri
          menggunakan metode analisis SWOT.
          <br />
        </div>
      </div>

      <div class="container mt-5">
        <div class="row text-center">
          <!-- Strength -->
          <div class="col-lg-6 mb-3">
            <div class="card-swot pt-5 mb-2">
              <div class="card-body">
                <!-- <form v-on:submit.prevent="addstrength"> -->
                <h5 class="card-title form-life">
                  <p class="card-desc">Berdasarkan metode analsis SWOT,</p>
                  <p class="p-2 box-item">
                    Kelebihan (Strength) yang saya miliki adalah
                  </p>
                  <div class="form">
                    <input
                      class="input-swot"
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="strngthNew"
                      v-on:keyup.enter="addstrength"
                    />
                    <span @click="addstrength">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(strg, index) in strength"
                        :key="`strg-${index}`"
                      >
                        <span
                          ><i class="fas fa-circle"></i>

                          {{ strg }}</span
                        >
                        <span class="delete" @click="deletestrength(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <!-- </form> -->
              </div>
            </div>
          </div>

          <!-- Weakness -->
          <div class="col-lg-6 mb-3">
            <div class="card-swot pt-5 mb-2">
              <div class="card-body">
                <!-- <form v-on:submit.prevent="addweakness"> -->
                <h5 class="card-title form-life">
                  <p class="card-desc">Berdasarkan metode analsis SWOT,</p>
                  <p class="p-2 box-item">
                    Kekurangan (Weakness) yang saya miliki adalah
                  </p>
                  <div class="form">
                    <input
                      class="input-swot"
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="weaknessNew"
                      v-on:keyup.enter="addweakness"
                    />
                    <span @click="addweakness">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(weak, index) in weakness"
                        :key="`strg-${index}`"
                      >
                        <span
                          ><i class="fas fa-circle"></i>

                          {{ weak }}</span
                        >
                        <span class="delete" @click="deleteweakness(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <!-- </form> -->
              </div>
            </div>
          </div>

          <!-- Opportunity -->
          <div class="col-lg-6 mb-3">
            <div class="card-swot pt-5 mb-2">
              <div class="card-body">
                <!-- <form v-on:submit.prevent="addopportunity"> -->
                <h5 class="card-title form-life">
                  <p class="card-desc">Berdasarkan metode analsis SWOT,</p>
                  <p class="p-2 box-item">
                    Peluang (Opportunity) yang saya miliki adalah
                  </p>
                  <div class="form">
                    <input
                      class="input-swot"
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="opportunityNew"
                      v-on:keyup.enter="addopportunity"
                    />
                    <span @click="addopportunity">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(opt, index) in opportunity"
                        :key="`strg-${index}`"
                      >
                        <span
                          ><i class="fas fa-circle"></i>

                          {{ opt }}</span
                        >
                        <span class="delete" @click="deleteopportunity(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <!-- </form> -->
              </div>
            </div>
          </div>

          <!-- Threat -->
          <div class="col-lg-6 mb-3">
            <div class="card-swot pt-5 mb-2">
              <div class="card-body">
                <!-- <form v-on:submit.prevent="addthreat"> -->
                <h5 class="card-title form-life">
                  <p class="card-desc">Berdasarkan metode analsis SWOT,</p>
                  <p class="p-2 box-item">
                    Ancaman (Threat) yang saya miliki adalah
                  </p>
                  <div class="form">
                    <input
                      class="input-swot"
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="threatNew"
                      v-on:keyup.enter="addthreat"
                    />
                    <span @click="addthreat">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li v-for="(thr, index) in threat" :key="`strg-${index}`">
                        <span
                          ><i class="fas fa-circle"></i>

                          {{ thr }}</span
                        >
                        <span class="delete" @click="deletethreat(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <!--</form> -->
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mb-3">
          <router-link class="router-penugasan" to="/booklet">
            <button class="btn btn-booklet-back">Kembali</button>
          </router-link>
          <button
            @click="toggleModal"
            value="kirim"
            class="btn btn-booklet-kirim"
          >
            Kirim
          </button>
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
  name: "Swot",
  components: {
    Spinner,
    Confirm,
  },
  data() {
    return {
      grade: false,
      isLoading: true,
      strength: [],
      strngthNew: "",
      weakness: [],
      weaknessNew: "",
      opportunity: [],
      opportunityNew: "",
      threat: [],
      threatNew: "",
      userName: "",
      fakultas: "",
      prodi: "",
      showModal: false,

      //Data1
      strength: [],
      weakness: [],
      opportunity: [],
      threat: [],
    };
  },
  mounted() {
    this.getProfile();
    this.getUserGrade();
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleConfirm() {
      this.showModal = !this.showModal;
    },
    getUserGrade() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/assessment/user/me`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          const grade = res.data.booklet.analisis_swot;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: {
                message: "Anda telah mengerjakan booklet Analisis Swot",
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
    getProfile() {
      const token = localStorage.getItem("token");
      const accessToken = localStorage.getItem("access_token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/v1/account/profile/pramuda?access_token=${accessToken}`,
          {
            headers: headers,
          }
        )
        .then((response) => {
          this.userName = response.data.nama;
          this.fakultas = response.data.fakultas;
          this.prodi = response.data.prodinama;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitForm() {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const dataSubmit = {
        strength: this.strength,
        weakness: this.weakness,
        opportunity: this.opportunity,
        threat: this.threat,
      };

      axios
        .post(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/v1/assessment/booklet/analisis-swot`,
          dataSubmit,
          {
            headers: headers,
          }
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Analisis Swot berhasil!" },
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch((e) => {
          console.log(e.message);
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Analisis Swot Gagal!" },
          });
        });
    },
    // Strength
    addstrength() {
      this.strength.push(this.strngthNew);
      this.strngthNew = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deletestrength(index) {
      this.strength.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    //Weakness
    addweakness() {
      this.weakness.push(this.weaknessNew);
      this.weaknessNew = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deleteweakness(index) {
      this.weakness.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    //Opportunity
    addopportunity() {
      this.opportunity.push(this.opportunityNew);
      this.opportunityNew = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deleteopportunity(index) {
      this.opportunity.splice(index, 1);
    },
    //Threat
    addthreat() {
      this.threat.push(this.threatNew);
      this.threatNew = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deletethreat(index) {
      this.threat.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style scoped>
.card-swot {
  background-color: rgba(246, 237, 228, 100%) !important;
  border-radius: 10px;
}
.pertanyaan {
  padding: 10px;
  background-color: #fff !important;
  border-radius: 10px;
  box-shadow: 0 20px 20px rgba(164, 205, 220, 100%);
}
.pernyataan {
  padding: 10px;
  background-color: rgba(246, 237, 228, 100%);
  border-radius: 10px;
  line-height: 40px;
}
.input-identitas {
  text-align: center;
  width: 40%;
  border: none;
  border-bottom: 0.5px solid black;
  background-color: transparent;
  cursor: pointer;
  padding: 0px 5px;
}
input[type="text"] {
  font: 15px/1.4 "Poppins", sans-serif;
  padding-left: 3px;
  font-weight: 700;
  background: #fff;
  color: #333;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: border 0.3s linear;
}
.box-item {
  color: #1a9ad4;
  font-family: Brudge;
  font-size: 28px;
}
.card-desc {
  color: #828282;
  font-size: 15px;
}
.form {
  position: relative;
  margin: 0 0 30px;
}

.form span {
  background: none;
  border-radius: 50%;
  padding: 10px;
  border: none;
  color: #333;
  font-size: 18px;
  position: absolute;
  top: 50%;
  cursor: pointer;
  right: 20px;
  transform: translateY(-50%);
}
.input-swot {
  width: 100%;
  height: 50px;
  font: 15px/1.4 "Poppins", sans-serif;
  padding: 15px;
  background: #f3f3f3;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 25%);
  color: #333;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}
.taskItems {
  padding: 0 10px;
}

.taskItems li {
  display: flex;
  justify-content: space-between;
  text-align: left;
  line-height: 30px;
  margin: 0 0 20px;
}

.taskItems .delete {
  margin: 0 10px 0 0;
  font-size: 14px;
  cursor: pointer;
}
</style>
