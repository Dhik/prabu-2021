<template>
  <Spinner v-if="isLoading" />
  <div v-else class="Visimisi">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitVisiMisi" />
    <div class="container-booklet">
      <div class="container title-container-booklet">
        <div class="row">
          <div class="col-12">
            <div class="title-booklet">
              Visi dan Misi Universitas Padjadjaran
            </div>
          </div>
        </div>
        <div>
          <div class="row visi-misi-container">
            <div class="visi-misi-content">
              <div class="visi-misi-title"><b>Visi</b><br /></div>
              <textarea
                v-model="visi"
                class="input-visimisi"
                name="visi"
                placeholder="Visi Universitas Padjadjaran"
              ></textarea>
              <div class="visi-misi-title"><b>Misi</b><br /></div>
              <textarea
                v-model="misi[0]"
                class="input-visimisi"
                name="misi"
                placeholder="Misi Universitas Padjadjaran"
              ></textarea>
              <textarea
                v-model="misi[1]"
                class="input-visimisi"
                name="misi"
                placeholder="Misi Universitas Padjadjaran"
              ></textarea>
              <textarea
                v-model="misi[2]"
                class="input-visimisi"
                name="misi"
                placeholder="Misi Universitas Padjadjaran"
              ></textarea>
              <textarea
                v-model="misi[3]"
                class="input-visimisi"
                name="misi"
                placeholder="Misi Universitas Padjadjaran"
              ></textarea>
              <textarea
                v-model="misi[4]"
                class="input-visimisi"
                name="misi"
                placeholder="Misi Universitas Padjadjaran"
              ></textarea>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-3">
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
</template>

<script>
import axios from "axios";
import Spinner from "../../components/Spinner.vue";
import Confirm from "../../components/Confirm.vue";
export default {
  data() {
    return {
      visi: "",
      misi: [],
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
    toggleModal() {
      this.showModal = !this.showModal;
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
          const grade = res.data.booklet.visi_misi;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: { message: "Anda telah mengerjakan booklet Visi Misi!" },
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
    submitVisiMisi() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/booklet/visi-misi`,
        data: {
          visi: this.visi.toLowerCase(),
          misi1: this.misi[0].toLowerCase(),
          misi2: this.misi[1].toLowerCase(),
          misi3: this.misi[2].toLowerCase(),
          misi4: this.misi[3].toLowerCase(),
          misi5: this.misi[4].toLowerCase(),
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
            params: { message: "Submit Visi Misi berhasil!" },
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
            params: { message: "Submit VisiMisi Gagal!" },
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
.btn-booklet {
  text-align: center;
  background-color: #f4f3f1;
  height: 100%;
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-booklet .router-penugasan {
  color: black;
}

.router-penugasan:hover {
  font-weight: bold;
}

.title-container-booklet {
  margin-top: 10px;
}

.title-booklet {
  font-size: 3rem;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  text-align: center;
  font-family: "Brudge", Arial, Helvetica, sans-serif;
}

.visi-misi-container {
  background-color: #f6ede4;
  margin: 50px 0px;
  box-shadow: 3px 3px 5px;
  border-radius: 8px;
}

.visi-misi-title {
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 24px;
}

.visi-misi-content {
  padding: 30px 60px;
  text-align: justify;
}

.input-visimisi {
  width: 100%;
  border: none;
  border-bottom: 0.5px solid black;
  background-color: transparent;
  padding-top: 15px;
  font-size: 18px;
  margin-bottom: 10px;
}

.input-visimisi:focus {
  outline: none;
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
</style>
