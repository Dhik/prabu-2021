<template>
  <Spinner v-if="isLoading" />
  <div v-else class="Life">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitlife" />
    <div class="container-booklet">
      <div class="title-page">Life Plan</div>
      <div class="container text-center justify-content-center pernyataan">
        <p>
          Setelah mengenali diri sendiri, cobalah buat rencana hidup kamu selama
          menjadi mahasiswa Unpad disertai dengan action plan untuk membantu
          mewujudkan rencana hidup yang telah kamu buat
        </p>
      </div>

      <div class="container mt-5">
        <div class="row text-center">
          <!-- Card Plan Tingkat 1 -->
          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-1">
              <!-- <form v-on:submit.prevent="addlifeplan1"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Tingkat 1</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="lifeplan1new"
                      v-on:keyup.enter="addlifeplan1"
                    />
                    <span @click="addlifeplan1"
                      ><i class="fas fa-plus"></i
                    ></span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(plan1, index) in lifeplan1"
                        :key="`plan1-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ plan1 }}</span>
                        <span @click="deletelifeplan1(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <div class="btnAction">
                  <span @click="showPlan1 = !showPlan1">
                    <div v-if="showPlan1 == true">Disable Action</div>
                    <div v-else>Enable Action</div>
                  </span>
                  <i class="fas fa-chevron-circle-right large-icon"></i>
                  <i
                    class="d-md-none fas fa-chevron-circle-down small-icon"
                  ></i>
                </div>
              </div>
              <!-- </form> -->
            </div>
          </div>

          <!-- Card Action Tingkat 1 -->
          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-5" v-if="showPlan1">
              <!-- <form v-on:submit.prevent="actionplan1new"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Action Plan</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Aksimu"
                      v-model="actionplan1new"
                      v-on:keyup.enter="addactionplan1"
                    />
                    <span @click="addactionplan1">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(action1, index) in actionplan1"
                        :key="`action1-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ action1 }}</span>
                        <span @click="deleteactionplan1(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
              </div>
              <!-- </form> -->
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-1">
              <!-- <form v-on:submit.prevent="addlifeplan2"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Tingkat 2</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="lifeplan2new"
                      v-on:keyup.enter="addlifeplan2"
                    />
                    <span @click="addlifeplan2"
                      ><i class="fas fa-plus"></i
                    ></span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(plan2, index) in lifeplan2"
                        :key="`plan2-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ plan2 }}</span>
                        <span @click="deletelifeplan2(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <div class="btnAction">
                  <span @click="showPlan2 = !showPlan2">
                    <div v-if="showPlan2 == true">Disable Action</div>
                    <div v-else>Enable Action</div>
                  </span>
                  <i class="fas fa-chevron-circle-right large-icon"></i>
                  <i
                    class="d-md-none fas fa-chevron-circle-down small-icon"
                  ></i>
                </div>
              </div>
              <!-- </form> -->
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-5" v-if="showPlan2">
              <!-- <form v-on:submit.prevent="actionplan2new"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Action Plan</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Aksimu"
                      v-model="actionplan2new"
                      v-on:keyup.enter="addactionplan2"
                    />
                    <span @click="addactionplan2">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(action2, index) in actionplan2"
                        :key="`action2-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ action2 }}</span>
                        <span @click="deleteactionplan2(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
              </div>
              <!-- </form> -->
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-1">
              <!-- <form v-on:submit.prevent="addlifeplan3"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Tingkat 3</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="lifeplan3new"
                      v-on:keyup.enter="addlifeplan3"
                    />
                    <span @click="addlifeplan3"
                      ><i class="fas fa-plus"></i
                    ></span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(plan3, index) in lifeplan3"
                        :key="`plan3-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ plan3 }}</span>
                        <span @click="deletelifeplan3(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <div class="btnAction">
                  <span @click="showPlan3 = !showPlan3">
                    <div v-if="showPlan3 == true">Disable Action</div>
                    <div v-else>Enable Action</div>
                  </span>
                  <i class="fas fa-chevron-circle-right large-icon"></i>
                  <i
                    class="d-md-none fas fa-chevron-circle-down small-icon"
                  ></i>
                </div>
              </div>
              <!-- </form> -->
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-5" v-if="showPlan3">
              <!-- <form v-on:submit.prevent="actionplan3new"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Action Plan</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Aksimu"
                      v-model="actionplan3new"
                      v-on:keyup.enter="addactionplan3"
                    />
                    <span @click="addactionplan3">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(action3, index) in actionplan3"
                        :key="`action3-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ action3 }}</span>
                        <span @click="deleteactionplan3(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
              </div>
              <!-- </form> -->
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-3">
              <!-- <form v-on:submit.prevent="addlifeplan4"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Tingkat 4</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Rencanamu"
                      v-model="lifeplan4new"
                      v-on:keyup.enter="addlifeplan4"
                    />
                    <span @click="addlifeplan4"
                      ><i class="fas fa-plus"></i
                    ></span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(plan4, index) in lifeplan4"
                        :key="`plan4-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ plan4 }}</span>
                        <span @click="deletelifeplan4(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
                <div class="btnAction">
                  <span @click="showPlan4 = !showPlan4">
                    <div v-if="showPlan4 == true">Disable Action</div>
                    <div v-else>Enable Action</div>
                  </span>
                  <i class="fas fa-chevron-circle-right large-icon"></i>
                  <i
                    class="d-md-none fas fa-chevron-circle-down small-icon"
                  ></i>
                </div>
              </div>
              <!-- </form> -->
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card-plan pt-5 mb-5" v-if="showPlan4">
              <!-- <form v-on:submit.prevent="actionplan4new"> -->
              <div class="card-body">
                <h5 class="card-title form-life">
                  <p class="p-2 box-item">Action Plan</p>
                  <div class="form">
                    <input
                      type="text"
                      placeholder="Masukan Aksimu"
                      v-model="actionplan4new"
                      v-on:keyup.enter="addactionplan4"
                    />
                    <span @click="addactionplan4">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                </h5>
                <h6 class="card-subtitle mb-2">
                  <div class="taskItems">
                    <ul>
                      <li
                        v-for="(action4, index) in actionplan4"
                        :key="`action4-${index}`"
                      >
                        <span><i class="fas fa-circle"></i> {{ action4 }}</span>
                        <span @click="deleteactionplan4(index)">
                          <i class="far fa-trash-alt"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </h6>
              </div>
              <!-- </form> -->
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
  name: "Life",
  components: {
    Spinner,
    Confirm,
  },
  data() {
    return {
      grade: false,
      isLoading: true,
      lifeplan1: [],
      lifeplan1new: "",
      actionplan1: [],
      actionplan1new: "",
      lifeplan2: [],
      lifeplan2new: "",
      actionplan2: [],
      actionplan2new: "",
      lifeplan3: [],
      lifeplan3new: "",
      actionplan3: [],
      actionplan3new: "",
      lifeplan4: [],
      lifeplan4new: "",
      actionplan4: [],
      actionplan4new: "",

      showPlan1: false,
      showPlan2: false,
      showPlan3: false,
      showPlan4: false,
      showModal: false,
      // DATA 1
    };
  },
  mounted() {
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
          const grade = res.data.booklet.life_plan;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: {
                message: "Anda telah mengerjakan booklet Life Plan",
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
    submitlife() {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const dataSubmit = {
        lifeplan1: this.lifeplan1,
        actionplan1: this.actionplan1,
        lifeplan2: this.lifeplan2,
        actionplan2: this.actionplan2,
        lifeplan3: this.lifeplan3,
        actionplan3: this.actionplan3,
        lifeplan4: this.lifeplan4,
        actionplan4: this.actionplan4,
      };

      axios
        .post(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/v1/assessment/booklet/life-plan`,
          dataSubmit,
          {
            headers: headers,
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Life Plan berhasil!" },
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch(() => {
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Life Plan Gagal!" },
          });
        });
    },

    // lifeplan1
    addlifeplan1() {
      this.lifeplan1.push(this.lifeplan1new);
      this.lifeplan1new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deletelifeplan1(index) {
      this.lifeplan1.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    // actionplan1
    addactionplan1() {
      this.actionplan1.push(this.actionplan1new);
      this.actionplan1new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deleteactionplan1(index) {
      this.actionplan1.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    //lifeplan2
    addlifeplan2() {
      this.lifeplan2.push(this.lifeplan2new);
      this.lifeplan2new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deletelifeplan2(index) {
      this.lifeplan2.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    // actionplan2
    addactionplan2() {
      this.actionplan2.push(this.actionplan2new);
      this.actionplan2new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deleteactionplan2(index) {
      this.actionplan2.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    //lifeplan3
    addlifeplan3() {
      this.lifeplan3.push(this.lifeplan3new);
      this.lifeplan3new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deletelifeplan3(index) {
      this.lifeplan3.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    // actionplan3
    addactionplan3() {
      this.actionplan3.push(this.actionplan3new);
      this.actionplan3new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deleteactionplan3(index) {
      this.actionplan3.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    //lifeplan4
    addlifeplan4() {
      this.lifeplan4.push(this.lifeplan4new);
      this.lifeplan4new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deletelifeplan4(index) {
      this.lifeplan4.splice(index, 1);
      Swal.fire({
        position: "center",
        icon: "delete",
        title: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    // actionplan4
    addactionplan4() {
      this.actionplan4.push(this.actionplan4new);
      this.actionplan4new = "";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    deleteactionplan4(index) {
      this.actionplan2.splice(index, 1);
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
.pernyataan {
  padding: 10px;
  background-color: #fff !important;
  border-radius: 10px;
  box-shadow: 0 20px 20px rgba(164, 205, 220, 100%);
}
/* .form-life {
  display: flex;
  justify-content: space-evenly;
} */
input[type="text"] {
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

input[type="text"]:focus {
  outline: none;
  border: 1px solid #1d1d1d;
}

button {
  cursor: pointer;
  font: 15px/1.4 "Poppins", sans-serif;
  color: #555;
  transition: all 0.3s linear;
}

.box-item {
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: Brudge;
  font-size: 3rem;
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
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
}
.taskItems {
  padding: 0 10px;
}

.taskItems li {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
  line-height: 30px;
}

.taskItems span {
  background: none;
  border: none;
  cursor: pointer;
}

.taskItems .toggle i {
  margin: 0 10px 0 0;
  font-size: 14px;
}

.btnAction {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
  align-items: baseline;
}
.btnAction span {
  width: 35%;
  background: #6c7358;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
}

.card-plan {
  background: rgba(246, 237, 228, 100%) !important;
  border-radius: 10px;
}
.btn-booklet-kirim {
  color: white;
}
.btn-booklet-kirim:hover {
  color: #1d1d1d;
}

@media screen and (max-width: 992px) {
  .large-icon {
    display: none;
  }
}
</style>
