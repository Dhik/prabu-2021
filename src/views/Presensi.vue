<template>
  <div class="container-fluid">
    <Spinner v-if="isLoading" />
    <div v-else class="row">
      <div class="col-1 col-md-1 col-lg-3" :class="{}">
        <Sidebar @close="toggleModal" />
      </div>
      <div class="col-10 col-md-8 content-container mb-5">
        <div class="raport-head py-4 px-5">
          <div class="d-flex justify-content-between">
            <router-link class="router-text pt-1" to="/lain-lain">
              kembali</router-link
            >
          </div>
        </div>
        <div class="raport-container p-4">
          <div class="absensi-title">Presensi PRABU 2021</div>
          <div class="table-responsive px-5 mb-3">
            <table class="table" id="datatable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Hari, tanggal</th>
                  <th>Presensi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(log, idx) in presensiLog" :key="idx">
                  <td>{{ ++idx }}</td>
                  <td>{{ hari[idx] }}, {{ log.date }}</td>
                  <td>
                    <div v-if="log.log == null">
                      <button
                        v-if="today == log.date"
                        class="btn btn-hadir"
                        @click="submitPresensi"
                      >
                        Hadir
                      </button>
                      <button v-else class="btn btn-hadir" disabled>
                        Hadir
                      </button>
                    </div>
                    <div v-else>
                      <button class="btn btn-hadir" disabled>
                        Presensi telah dilakukan
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Spinner from "../components/Spinner.vue";
import moment from "moment";
import axios from "axios";

export default {
  components: {
    Sidebar,
    Spinner,
  },
  data() {
    return {
      today: moment().format("M/DD/YYYY"),
      presensiLog: [],
      isLoading: true,
      hari: ["", "Senin", "Selasa", "Rabu"],
    };
  },
  methods: {
    getUserPresensi() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/absen/schedule`,
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.presensiLog = res.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("There was an error!", error);
          Swal.fire({
            icon: "error",
            title: "Terjadi masalah saat mengambil data, silahkan coba lagi",
          });
        });
    },
    submitPresensi() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/account/absen/do`,
        data: {
          date: this.today,
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Presensi berhasil dilakukan",
            showConfirmButton: true,
          });
          window.location.reload();
        })
        .catch((error) => {
          console.error("There was an error!", error.message);
          Swal.fire({
            icon: "error",
            title: "Presensi gagal, silahkan coba lagi",
          });
        });
    },
  },
  mounted() {
    this.getUserPresensi();
  },
};
</script>

<style scoped>
.raport-container {
  background-color: white;
}
.raport-head {
  background-color: #98bc62;
  color: white !important;
}
.router-text {
  color: white;
}
.btn-hadir {
  padding: 5px 15px;
  background-color: #7c6244;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  border: 0.5px solid #7c6244;
}
.btn-certificate:hover {
  border: 0.5px solid white;
}
.absensi-title {
  color: #2e602f;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 50px;
  text-align: center;
}
.raport-subtitle {
  color: #2e602f;
  font-weight: bold;
  font-size: 22px;
  margin: 20px 0px;
}
table th {
  background-color: #7c6244;
  color: white;
  text-align: center;
}
tbody tr {
  text-align: center;
}
</style>
