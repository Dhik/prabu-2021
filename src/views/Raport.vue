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

            <router-link class="btn-certificate" to="/sertif">
              unduh sertifikat</router-link
            >
          </div>
        </div>
        <div class="raport-container p-4">
          <div class="raport-title">Hasil yang didapat</div>
          <!-- <div>
            <div v-for="item in badge" :key="item.id">
              <div v-if="item.name == data.name">
                <img :src="item.img" alt="badge" />
              </div>
            </div>
          </div> -->
          <div class="table-responsive px-5">
            <div class="raport-subtitle">Tugas</div>
            <table class="table" id="datatable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Tugas</th>
                  <th>Nilai</th>
                  <th>Badge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nuraga</td>
                  <td>
                    <div v-if="nuraga == null || nuraga.grade == null">
                      belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ nuraga.grade }}
                    </div>
                  </td>
                  <td>
                    <div v-if="nuraga == null || nuraga.badge == null">
                      Belum mendapatkan badge
                    </div>
                    <img
                      v-else
                      :src="nuraga.badge.image"
                      class="card-img-raport"
                      :alt="nuraga.badge.name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Senandika</td>
                  <td>
                    <div v-if="senandika == null || senandika.grade == null">
                      belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ senandika.grade }}
                    </div>
                  </td>
                  <td>
                    <div v-if="senandika == null || senandika.badge == null">
                      Belum mendapatkan badge
                    </div>
                    <img
                      v-else
                      :src="senandika.badge.image"
                      class="card-img-raport"
                      :alt="senandika.badge.name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pranata</td>
                  <td>
                    <div v-if="pranata == null">belum mendapatkan nilai</div>
                    <div v-else>
                      {{ pranata.grade }}
                    </div>
                  </td>
                  <td>
                    <div v-if="pranata == null || pranata.badge == null">
                      Belum mendapatkan badge
                    </div>
                    <img
                      v-else
                      :src="pranata.badge.image"
                      class="card-img-raport"
                      :alt="pranata.badge.name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Assessment</td>
                  <td>
                    <div v-if="assessment == null">belum mendapatkan nilai</div>
                    <div v-else>
                      {{ assessment.grade }}
                    </div>
                  </td>
                  <td>
                    <div v-if="assessment == null || assessment.badge == null">
                      Belum mendapatkan badge
                    </div>
                    <img
                      v-else
                      :src="assessment.badge.image"
                      class="card-img-raport"
                      :alt="assessment.badge.name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Cakrawala</td>
                  <td>
                    <div v-if="cakrawala.total == null">
                      belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.total }}
                    </div>
                  </td>
                  <td>
                    <div v-if="cakrawala.badge == null">
                      Belum mendapatkan badge
                    </div>
                    <img
                      v-else
                      :src="cakrawala.badge.image"
                      class="card-img-raport"
                      :alt="cakrawala.badge.name"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-responsive px-5">
            <div class="raport-subtitle">Tugas Cakrawala</div>
            <table class="table" id="datatable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Cakrawala</th>
                  <th>Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Analisis SWOT</td>
                  <td>
                    <div v-if="cakrawala.analisis_swot == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.analisis_swot.score }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Filosifi Logo</td>
                  <td>
                    <div v-if="cakrawala.filosofi_logo == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.filosofi_logo.score }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Life Plan</td>
                  <td>
                    <div v-if="cakrawala.life_plan == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.life_plan.score }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Respect</td>
                  <td>
                    <div v-if="cakrawala.respect == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.respect.score }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Sejarah Unpad</td>
                  <td>
                    <div v-if="cakrawala.sejarah_unpad == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.sejarah_unpad.score }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Tri Dharma</td>
                  <td>
                    <div v-if="cakrawala.tri_dharma == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.tri_dharma.score }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Visi Misi</td>
                  <td>
                    <div v-if="cakrawala.visi_misi == null">
                      Belum mendapatkan nilai
                    </div>
                    <div v-else>
                      {{ cakrawala.visi_misi.score }}
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
import axios from "axios";
import Spinner from "../components/Spinner.vue";

export default {
  data() {
    return {
      cakrawala: "",
      pranata: "",
      nuraga: "",
      senandika: "",
      assessment: "",
      isLoading: true,
    };
  },
  components: {
    Sidebar,
    Spinner,
  },
  methods: {
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
          this.nuraga = res.data.submit_nuraga;
          this.senandika = res.data.submit_senandika;
          this.pranata = res.data.quiz_pranata;
          this.assessment = res.data.quiz_assessment;
          this.cakrawala = res.data.booklet;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    this.getUserGrade();
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
.btn-certificate {
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
.raport-title {
  color: #2e602f;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 50px;
}
.raport-subtitle {
  color: #2e602f;
  font-weight: bold;
  font-size: 18px;
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
.card-img-raport {
  width: 80px;
  height: 80px;
}
</style>
