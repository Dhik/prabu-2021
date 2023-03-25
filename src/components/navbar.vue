<template>
  <!-- <nav class="container_nav">
    <a href="#" class="logo">
      <img
        src="../assets/img/unpad.png"
        alt="gambar logo"
        class="d-inline-block align-text-top img-fluid"
      />
      <img
        src="../assets/img/bem.png"
        alt="gambar logo"
        class="d-inline-block align-text-top img-fluid"
      />
      <img
        src="../assets/img/kabinet.png"
        alt="gambar logo"
        class="d-inline-block align-text-top img-fluid"
      />
      <img
        src="../assets/img/logoprabu.png"
        alt="gambar logo"
        class="d-inline-block align-text-top img-fluid"
      />
    </a>
    <p class="h1">Prabu 2021</p>
    <span class="btn_maps">
      <router-link class="btn btn_map" to="/">
        <span class="maps">Homepage <i class="fas fa-home"></i></span>
      </router-link>
    </span>
    <span class="btn_maps">
      <a class="btn btn_map" href="https://paus.unpad.ac.id/oauth?client_id=VZjPRso9f6HWC.paus.unpad.ac.id&redirect_uri=http://localhost:8080/oauth/callback&state=2rNrG0DSz8OLK2y1Cj4m&response_type=code&scope=user.basic">
        <span class="login">Login<i class="fas fa-sign-in-alt"></i></span>
      </a>
    </span>
  </nav> -->
  <!-- <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <div class="container">
      <img src="../views/img/Logounpad.png" width="72" height="72" >
      <img src="../views/img/Logounpad.png" width="72" height="72" >
      <img src="../views/img/Logounpad.png" width="72" height="72" >
      <img src="../views/img/Logounpad.png" width="72" height="72" >
    </div>
  </a>
</nav> -->

  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <a href="/" class="navbar-brand d-flex w-50 mr-auto">
        <h1>Prabu 2021</h1>
      </a>
      <span
        class="navbar-toggler bg-menus"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-black"></i>
      </span>
      <div class="navbar-collapse collapse w-100" id="navbarNav">
        <ul class="collapse navbar-collapse">
          <li class="nav-item active">
            <a
              href="https://www.instagram.com/universitaspadjadjaran/"
              target="_blank"
            >
              <img src="../views/img/logounpad.png" width="79" height="72" />
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/bem.unpad/" target="_blank">
              <img src="../views/img/bem.png" width="72" height="72" />
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/ranantavrsta/" target="_blank">
              <img src="../views/img/kabinet.png" width="72" height="72" />
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/prabunpad/" target="_blank">
              <img src="../views/img/logoprabu.png" width="72" height="72" />
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <li class="nav-item ml-auto pad_button">
            <router-link class="btn btn_map home mb-sm-3 mb-md-2" to="/minimap">
              Minimap <i class="fas fa-map"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <span v-if="isLoggedIn == false || isLoggedIn == null">
              <router-link to="/form_login" class="btn btn_map">
                Login
                <i class="fas fa-sign-in-alt"></i>
              </router-link>
            </span>
            <div v-else>
              <router-link
                class="btn btn_map home mb-sm-3 mb-md-2"
                to="/profile"
              >
                Profile <i class="fa fa-user"></i>
              </router-link>
              <button class="btn btn_map home mb-sm-3 mb-md-2" @click="logout">
                Logout <i class="fa fa-sign-out"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import "../assets/nav.css";
import qs from "qs";

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: null,
    };
  },
  methods: {
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
};
</script>

<style>
ul {
  list-style: none;
}

.home {
  margin-right: 10px;
}

.logins {
  margin-left: 10px;
}

/* .navbar.navbar-expand-lg.bg-white{
  border-radius: 0 0 10px 10px;
  box-shadow: 0 20px 20px rgba(164, 205, 220, 100%);
} */
.btn_map a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.bg-menus {
  border-color: #333;
}
@media (max-width: 450px) {
  .pad_button {
    margin-bottom: 7px;
  }
}
</style>
