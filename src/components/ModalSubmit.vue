<template>
  <div class="modal-backdrop-penugasan">
    <div
      class="modal-quiz-container d-flex flex-column justify-content-center"
      @click.self="closeModal"
    >
      <div class="submit-content">
        <div class="d-flex justify-content-end pe-1">
          <button class="btn btn-close" @click="closeModal"></button>
        </div>
        <div class="head-submit">
          <h2 class="title-submit">{{ title }}</h2>
          <p v-if="title == 'Nuraga (Nurani Pramuda Menjaga)'" class="mt-4">
            Yuk, kumpulkan link video campaign-mu di sini!
          </p>
          <p v-if="title == 'Senandika (Selembar Wacana Kritis Dari Pramuda)'">
            Yuk, kumpulkan link essay mu di sini yaa Pramuda!
          </p>
        </div>
        <hr />

        <div class="container-fluid" v-if="loading">
          <Spinner />
        </div>

        <div class="container-fluid" v-else>
          <div class="row">
            <div class="col-md-6 input-submit">
              <div v-if="title == 'Nuraga (Nurani Pramuda Menjaga)'">
                <h4 class="mb-4"><b>Link Video Campaign</b></h4>
                <form action="" @submit.prevent="submitNuraga">
                  <input
                    type="text"
                    class="input-link"
                    placeholder="Masukan Link"
                    v-model="linkNuraga"
                    readonly
                  />
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-edit" disabled="true">Kirim</button>
                  </div>
                </form>
              </div>
              <div v-else>
                <h4 class="mb-4"><b>Link Essay</b></h4>
                <form action="" @submit.prevent="submitSenandika">
                  <input
                    type="text"
                    class="input-link"
                    placeholder="Masukan Link"
                    v-model="linkSenandika"
                     readonly
                   
                  />
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-edit" disabled="true" >Kirim</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 input-submit">
              <h4 class="mb-3"><b>Reward</b></h4>
              <p>Menunggu Konfirmasi Panitia</p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-kembali-submit" @click="closeModal">
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../components/Spinner.vue";

export default {
  name: "ModalQuiz",
  components: {
    Spinner,
  },
  data() {
    return {
      linkNuraga: "",
      linkSenandika: "",
      loading: true,
    };
  },
  mounted() {
    this.getUserGrade();
  },
  props: ["title", "overview"],
  methods: {
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
          this.loading = false;
          if (this.title == "Senandika (Selembar Wacana Kritis Dari Pramuda)") {
            if (res.data.submit_senandika != null) {
              this.closeModal();
              Swal.fire({
                icon: "success",
                title: "Anda telah mengerjakan Senandika",
              });
            }
          } else {
            if (res.data.submit_nuraga != null) {
              this.closeModal();
              Swal.fire({
                icon: "success",
                title: "Anda telah mengerjakan Nuraga",
              });
            }
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    closeModal() {
      this.$emit("close");
    },
    submitNuraga() {
      const token = localStorage.getItem("token");
      console.log(token);
      // const headerOption = {
      //   "Authorization": `Bearer ${token}`,
      //   "Content-type": "application/json",
      // };
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/submit-nuraga`,
        data: {
          link: this.linkNuraga,
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.closeModal();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    },
    submitSenandika() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/submit-senandika`,
        data: {
          link: this.linkSenandika,
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.closeModal();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    },
  },
};
</script>

<style>
.submit-content {
  background-color: #f4ebdc;
  height: 100%;
  width: 80%;
  max-height: 100vh;
  color: #304256;
  border-radius: 15px;
  overflow-y: auto;
}

.input-submit {
  padding: 30px 80px;
}

.input-link {
  border-radius: 8px;
  padding: 10px 20px;
  width: 80%;
  min-width: 30%;
  background-color: transparent;
  border: 0.5px solid black;
}

.input-link:focus {
  outline: none;
}

.btn-kembali-submit {
  margin-top: 140px;
  width: 100px;
  min-width: 80px;
  padding: 8px 10px;
  color: white;
  background-color: #2e602f;
}

.btn-edit {
  margin-top: 120px;
  width: 100px;
  min-width: 80px;
  padding: 8px 10px;
  color: white;
  background-color: #2e602f;
}

.head-submit {
  padding: 50px 50px 20px 70px;
}
.title-submit {
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  -webkit-text-stroke: 1px black;
}

.btn.btn-close {
  padding: 10px 10px;
  margin: 5px 5px;
  background-color: red;
}

hr {
  border: 1px solid black;
}

@media only screen and (min-height: 800px) {
  .btn-kembali-submit {
    margin-bottom: 100px;
  }
}
</style>
