<template>
  <div
    class="modal-backdrop-penugasan"
    v-if="isLoggedIn == false || isLoggedIn == null"
  >
    <div class="modal-quiz-container justify-content-center">
      <div class="container-fluid login-form">
        <div class="row align-items-center">
          <div class="col-12 col-md-12 col-lg-6 text-center penugasan-img">
            <div class="row text-center justify-content-center">
              <div class="col-lg image-login">
                <img
                  src="../views/img/komodo.png"
                  alt="Image"
                  class="img-md-fluid img-komodo"
                  id="maskot"
                  style="width: 60%; height: 100%"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <div class="title-penugasan desc">
              <img src="../assets/img/logoprabu.png" width="72" height="72" />
            </div>
            <p class="text-center login-prabu">Login Prabu 2021</p>
            <p class="text-center">
              Silahkan Masukan NISN/Password yang telah terdaftar
            </p>
            <div
              class="overview justify-content-center align-items-center bg-gradient"
            >
              <div class="form-group">
                <label class="label">NISN</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  v-model="npm"
                  aria-describedby="emailHelp"
                  placeholder="Masukan NISN"
                />
              </div>
              <div class="form-group">
                <label class="label">Password (contoh:02/20/****)</label>
                <input
                  type="date"
                  v-model="birthdate"
                  class="form-control mb-5"
                  placeholder="Password"
                />
              </div>
              <div class="row">
                <button @click="loginForm" value="kirim" class="btn btn-login">
                  Login
                </button>
              </div>
              <div class="row">
                <p class="text-center justify-content-center mt-3">Or</p>
              </div>
              <div class="row">
                <span class="btn btn-paus" @click="login"> Paus Unpad </span>
              </div>
              <br />
              <div class="row">
                <router-link to="/minimap" class="back-minimap"
                  ><p class="text-center justify-content-center mt-3">
                    Kembali ke Minimap
                  </p></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
import moment from "moment";

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: null,
      npm: "",
      birthdate: "",
    };
  },
  methods: {
    loginForm() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/account/login/alt`,
        data: {
          npm: this.npm,
          birthdate: moment(this.birthdate, "YYYY/MM/DD").format("M/D/YYYY"),
        },
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          console.log("berhasil", response);
          const bearerToken = response.data.token;
          const role = response.data.role;

          localStorage.setItem("token", bearerToken);

          if (role === "pramuda") {
            this.$router.push({ name: "Profile" });
          } else if (role === "admin") {
            window.location.href = `${
              import.meta.env.VITE_BACKEND_BASE_URL
            }/admin/login?token=${bearerToken}&role=${role}`;
          } else {
            this.$router.push({ name: "Role" });
          }
        })
        .catch((e) => {
          console.log("Ada Eror mas", e);
          Swal.fire({
            icon: "error",
            title: "NISN/Password tidak terdaftar",
            text: "Silahkan menghubungi pihak admin atau login menggunakan Paus Unpad",
          });
        });
    },
    //Loginn Paus Unpad
    login() {
      const params = {
        client_id: import.meta.env.VITE_PAUS_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_PAUS_REDIRECT_URI,
        state: "2rNrG0DSz8OLK2y1Cj4m", // To Do checking state
        response_type: "code",
        scope: "user.basic",
      };
      window.location.href = `${
        import.meta.env.VITE_PAUS_ORIGINAL
      }?${qs.stringify(params)}`;
    },
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push({
        name: "Home",
      });
    },
    checkLogin() {
      if (localStorage.token) {
        this.isLoggedIn = true;
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
  computed: {
    formattedDate() {
      return moment(this.birthdate).format("MM/DD/YYYY");
    },
  },
};
</script>

<style>
.label {
  font-weight: bold;
  color: #b3b3b3;
  margin-bottom: 10px;
}
.back-minimap {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.input-swot {
  width: 100%;
  height: 50px;
  font: 15px/1.4 "Poppins", sans-serif;
  padding: 15px;
  border: 1px solid black;
  border-radius: 10px;
  transition: border 0.3s linear;
}
.login-prabu {
  font-size: 3rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
}
.btn-login {
  background-color: #6c7358;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(108, 115, 88, 0.25);
  font-weight: 600;
  padding: 5px 20px;
  letter-spacing: 0.05rem;
  color: white;
}
.btn-paus {
  border: 2px solid #6c7358;
  color: #6c7358;
  font-weight: 600;
  border-radius: 10px;
}

.modal-backdrop-penugasan {
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
}

.login-form {
  background-color: white;
  width: 80%;
  border-radius: 15px;
  animation: slide_up 1s ease;
}
@keyframes slide_up {
  0% {
    transform: translateY(800px);
  }
  100% {
    transform: translateY(0);
  }
}

@media only screen and (max-width: 500px) {
  .image-login {
    display: none;
  }
}
@media only screen and (max-width: 991px) {
  .image-login {
    display: none;
  }
}

/* @media only screen and (min-width: 1510px) {
  .penugasan-img img {
    height: 90vh;
  }
} */
</style>
