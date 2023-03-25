<template>
  <v-container fill-height fluid>
    <!-- <div class="mx-auto text-center">
      <div class="txtSubJudul">Logging in. Please Wait...</div>
      <div class="loading"></div>
    </div> -->
    <Spinner />
  </v-container>
</template>
<script>
import axios from "axios";
import qs from "qs";
import Spinner from "../components/Spinner.vue";
export default {
  name: "LoginCallback",
  components: {
    Spinner,
  },
  methods: {
    getOauthToken() {
      const params = {
        client_id: import.meta.env.VITE_PAUS_CLIENT_ID,
        client_secret: import.meta.env.VITE_PAUS_CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: import.meta.env.VITE_PAUS_REDIRECT_URI,
        code: this.$route.query.code,
      };
      axios({
        method: "POST",
        url: `${import.meta.env.VITE_PAUS_BASE_URL}/access-token`,
        data: qs.stringify(params),
      })
        .then((response) => {
          const accessToken = response.data.access_token;
          axios({
            method: "POST",
            url: `${
              import.meta.env.VITE_BACKEND_BASE_URL
            }/v1/account/login/oauth`,
            data: {
              access_token: accessToken,
            },
          })
            .then((response) => {
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
            .catch((error) => {
              this.$router.push({ name: "Role" });
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getOauthToken();
  },
};
</script>
