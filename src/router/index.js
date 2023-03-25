import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import Lainnya from "../views/Lainnya.vue";
import Profile from "../views/Profile.vue";
import DetailAcara from "../views/DetailAcara.vue";
import Acara from "../views/Acara.vue";
import Raport from "../views/Raport.vue";
import Penugasan from "../views/Penugasan.vue";
import Quiz from "../views/Quiz.vue";
import Assessment from "../views/Assessment.vue";
import Booklet from "../views/Booklet.vue";
import Timeline from "../views/booklet/VisiMisi.vue";
import Sejarah from "../views/booklet/Sejarah.vue";
import Respect from "../views/booklet/Respect.vue";
import Life from "../views/booklet/Life.vue";
import Swot from "../views/booklet/Swot.vue";
import Infografis from "../views/Infografis.vue";
import TriDharma from "../views/booklet/TriDharma.vue";
import Filosofi from "../views/booklet/FilosofiLogo.vue";
import Kuskus from "../views/info/Kuskus.vue";
import Kasuari from "../views/info/Kasuari.vue";
import Patung from "../views/info/Patung.vue";
import Piring from "../views/info/Piring.vue";
import Pisau from "../views/info/Pisau.vue";
import Tameng from "../views/info/Tameng.vue";
import Login from "../views/LoginCallback.vue";
import Cendrawasih from "../views/info/Cendrawasih.vue";
import Kangguru from "../views/info/Kangguru.vue";
import Anggrek from "../views/info/Anggrek.vue";
import Minimap from "../views/Minimap.vue";
import Error from "../views/Error.vue";
import Role from "../views/Role.vue";
import Setup from "../views/Setup.vue";
import Soon from "../views/Soon.vue";
import Sertif from "../views/Sertif.vue";
import NotLogin from "../views/NotLogin.vue";
import Presensi from "../views/Presensi.vue";
import Form_Login from "../components/Login.vue";

// import Babad from "../views/Babad.vue";

const routes = [
  {
    path: "/form_login",
    name: "Form_Login",
    component: Form_Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/acara/:id",
    name: "DetailAcara",
    component: DetailAcara,
  },
  {
    path: "/acara",
    name: "Acara",
    component: Acara,
  },
  {
    path: "/lain-lain",
    name: "Lainnya",
    component: Lainnya,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/raport",
    name: "Raport",
    component: Raport,
  },
  {
    path: "/penugasan",
    name: "Penugasan",
    component: Penugasan,
  },
  {
    // /quiz
    path: "/^&^",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/^&^",
    name: "Assessment",
    component: Assessment,
  },
  {
    //"/booklet"
    path: "/^&^",
    name: "Booklet",
    component: Booklet,
  },
  {
    path: "/booklet/visi-misi",
    name: "VisiMisi",
    component: Timeline,
  },
  {
    path: "/booklet/sejarah",
    name: "Sejarah",
    component: Sejarah,
  },
  {
    path: "/booklet/respect",
    name: "Respect",
    component: Respect,
  },
  {
    path: "/booklet/life",
    name: "Life",
    component: Life,
  },
  {
    path: "/booklet/tri-dharma",
    name: "TriDharma",
    component: TriDharma,
  },
  {
    path: "/booklet/swot",
    name: "Swot",
    component: Swot,
  },
  {
    path: "/booklet/filosofi",
    name: "Filosofi",
    component: Filosofi,
  },
  {
    path: "/infografis",
    name: "Infografis",
    component: Infografis,
  },
  {
    path: "/oauth/callback",
    name: "Login",
    component: Infografis,
  },
  {
    path: "/infografis/kuskus",
    name: "Kuskus",
    component: Kuskus,
  },
  {
    path: "/infografis/kasuari",
    name: "Kasuari",
    component: Kasuari,
  },
  {
    path: "/infografis/patung",
    name: "Patung",
    component: Patung,
  },
  {
    path: "/infografis/piring",
    name: "Piring",
    component: Piring,
  },
  {
    path: "/infografis/pisau",
    name: "Pisau",
    component: Pisau,
  },
  {
    path: "/infografis/tameng",
    name: "Tameng",
    component: Tameng,
  },
  {
    path: "/oauth/callback",
    name: "Login",
    component: Login,
  },
  {
    path: "/infografis/cendrawasih",
    name: "Cendrawasih",
    component: Cendrawasih,
  },
  {
    path: "/infografis/anggrek",
    name: "Anggrek",
    component: Anggrek,
  },
  {
    path: "/infografis/kangguru",
    name: "Kangguru",
    component: Kangguru,
  },
  // {
  //   path: "/babad",
  //   name: "Babad",
  //   component: Babad,
  // },
  {
    path: "/minimap",
    name: "Minimap",
    component: Minimap,
  },
  {
    path: "/:error(.*)*",
    name: "Error",
    component: Error,
  },
  {
    path: "/role",
    name: "Role",
    component: Role,
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
  },
  {
    path: "/soon",
    name: "Soon",
    component: Soon,
  },
  {
    path: "/sertif",
    name: "Sertif",
    component: Sertif,
  },
  {
    path: "/sertif",
    name: "Sertif",
    component: Sertif,
  },
  {
    path: "/presensi",
    name: "Presensi",
    component: Presensi,
  },
  {
    path: "/no-login",
    name: "NotLogin",
    component: NotLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
