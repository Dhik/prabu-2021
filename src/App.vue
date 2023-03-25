<template>
  <div
    v-if="
      this.$route.name != 'Quiz' &&
      this.$route.name != 'Hasil' &&
      this.$route.name != 'DetailAcara' &&
       this.$route.name != 'Error' &&
      this.$route.name != 'Role' &&
      this.$route.name != 'Setup' &&
      this.$route.name != 'Assessment'&&
      this.$route.name != 'Soon' &&
      this.$route.name != 'Form_Login'
    "
  >
    <Navbar />
  </div>
  <router-view />
   <div
    v-if="
      this.$route.name != 'Form_Login' &&
      this.$route.name != 'Penugasan' &&
      this.$route.name != 'Minimap' &&
      this.$route.name != 'Infografis' &&
      this.$route.name != 'Spinner' &&
      this.$route.name != 'DetailAcara'

    "
  >
     <Identitas/>
   </div>
</template>

<script>

import Navbar from "./components/navbar.vue";
import Identitas from "./components/Identitas.vue";
export default{
  components: { Navbar, Identitas},
  methods: {
    checkQuizStorage() {
      if (localStorage.quiz) {
        this.$router.push({
          name: "Quiz",
        });
      } else if (localStorage.assessment) {
        this.$router.push({
          name: "Assessment",
        });
      }
    },
  },
  mounted() {
    this.checkQuizStorage();
  },
};
</script>
