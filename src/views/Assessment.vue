<template>
  <Spinner v-if="isLoading" />
  <div v-else class="quiz" :class="{ submit: done == true }">
    <Confirm
      v-if="showModal"
      @close="toggleConfirm"
      @submit="submitAssessment"
    />
    <div class="container-quiz">
      <div class="main-quiz-container">
        <div class="text-center title-page quiz">Assessment</div>
        <div class="container quiz-bg">
          <div class="d-flex justify-content-end score-time">
            <div
              class="d-flex flex-row justify-content-center time-container mb-3"
            >
              <div class="me-3">Time</div>
              <div>{{ time }}</div>
            </div>
          </div>
          <div>
            <div v-for="question in paginated" :key="question.no">
              <div class="question">
                <span v-html="question.no"></span>.<span
                  v-html="question.question"
                ></span>
              </div>
              <div class="d-flex justify-content-around multiple-choice">
                <div class="d-flex flex-column text-center option-container">
                  <label class="answer">
                    <input
                      type="radio"
                      name="A"
                      value="A"
                      v-model="answer[question.no - 1]"
                    />
                    A. {{ question.A }}
                  </label>
                  <label class="answer">
                    <input
                      type="radio"
                      name="B"
                      value="B"
                      v-model="answer[question.no - 1]"
                    />
                    B. {{ question.B }}
                  </label>
                </div>
                <div class="d-flex flex-column text-center option-container">
                  <label class="answer">
                    <input
                      type="radio"
                      name="C"
                      value="C"
                      v-model="answer[question.no - 1]"
                    />
                    C. {{ question.C }}
                  </label>
                  <label class="answer">
                    <input
                      type="radio"
                      name="D"
                      value="D"
                      v-model="answer[question.no - 1]"
                    />
                    D. {{ question.D }}
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-end my-5 score-time">
                <div class="btn btn-nav" @click="prev">Prev Question</div>
                <div class="pt-3 mx-3">
                  {{ current }} of {{ questionCount }} Question
                </div>
                <div class="btn btn-nav" @click="next">Next Question</div>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  v-show="current == questionCount"
                  ref="submitBtn"
                  type="submit"
                  class="btn btn-nav"
                  @click="toggleModal"
                >
                  Submit Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="done">
    <HasilQuiz
      :badge="badge"
      v-bind:correct="correct"
      :incorrect="incorrect"
      :grade="grade"
      assessment="true"
    />
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import HasilQuiz from "../components/HasilQuiz.vue";
import Spinner from "../components/Spinner.vue";
import Confirm from "../components/Confirm.vue";
export default {
  components: {
    HasilQuiz,
    Spinner,
    Confirm,
  },
  data() {
    return {
      taken: false,
      showModal: false,
      date: moment(60 * 20 * 1000),
      done: false,
      badge: "",
      correct: "",
      incorrect: "",
      grade: "",
      answer: new Array(20).fill(""),
      current: 1,
      pageSize: 1,
      questionCount: 20,
      question: [
        {
          no: 1,
          question:
            "Apa yang terjadi pada scene pembuka drama musikal Kisah Suara Pramuda?",
          A: "Pemeran utama tidak melanjutkan kuliah",
          B: "Pemeran utama menolak kampus yang menerimanya",
          C: "Pemeran utama memutuskan untuk menunda perkuliahan",
          D: "Pemeran utama diterima di kampus impiannya setelah melewati serangkaian tes yang berat",
        },
        {
          no: 2,
          question:
            "Apa yang kamu tangkap perihal isi orasi yang ada pada konten Padjadjaran Welcoming Ceremony?",
          A: "Mahasiswa melaksanakan nilai tri dharma perguruan tinggi dan dapat bermanfaat bagi masyarakat",
          B: "Mahasiswa harus bisa pintar dan tidak melakukan hal-hal bodoh",
          C: "Mahasiswa harus bisa mengabdikan diri kepada masyarakat selama 13 bulan",
          D: "Mahasiswa memiliki peran untuk mendidik masyarakat perihal ilmu yang dipelajari selama kuliah",
        },
        {
          no: 3,
          question:
            " Dari konten Kisah Suara Pramuda kita mengetahui bahwa terdapat mata kuliah di Universitas Padjadjaran yang mengimplementasikan nilai tri dharma perguruan tinggi yang ke-3. Mata kuliah apa yang dimaksud dan apa nilainya?",
          A: "OKK dan penelitian",
          B: "KKN dan pendidikan",
          C: "OKK dan pengabdian pada masyarakat",
          D: "KKN dan pengabdian pada masyarkat",
        },
        {
          no: 4,
          question:
            "Apa pokok bahasan dari orasi setiap ketua BEM dan wakil ketua BEM dalam konten Padjadjaran Welcoming Ceremony?",
          A: "Pentingnya tri dharma perguruan tinggi bagi mahasiswa baru",
          B: "Budaya RESPECT yang ada di Universitas Padjadjaran",
          C: "Adaptasi mahasiswa baru dengan kebudayaan Sunda",
          D: "Peran mahasiswa dalam menciptakan persatuan untuk mewujudkan cita-cita bangsa",
        },
        {
          no: 5,
          question:
            "Saat ini pramuda 2021 melaksanakan Prabu secara daring dikarenakan adanya himbauan social distancing. Namun setelah itu para pramuda diharapkan berperan sebagai pengontrol kehidupan sosial dalam masyarakat. Peran yang dimaksud adalah...",
          A: "Moral Force",
          B: "Social Control",
          C: "Agent of Chenge",
          D: "Iron Stock",
        },
        {
          no: 6,
          question:
            "Pesan apa yang dibawakan melalui konten Kisah Suara Pramuda?",
          A: "Penggambaran kondisi kuliah secara tatap muka di Universitas Padjadjaran",
          B: "Penggambaran lingkungan fisik Universitas Padjadjaran",
          C: "Aktivitas mahasiswa Universitas Padjadjaran saat berada di kampus",
          D: "Semua benar",
        },
        {
          no: 7,
          question: "Apa yang kamu dapat dari konten Pakuan Padjadjaran?",
          A: "Pengenalan akan lingkungan fisik, UKM, dan LK di Universitas Padjadjaran",
          B: "Pengenalan akan bhinneka tunggal ika dan pancasila sebagai dasar negara",
          C: "Pengenalan akan tri dharma perguruan tinggi",
          D: "Pengenalan akan kebudayaan tanah sunda sebagai tempat berdirinya Universitas Padjadjaran",
        },
        {
          no: 8,
          question:
            "Unit Kegiatan Mahasiswa (UKM) apa saja yang terlibat dalam pembuatan konten Alunan Sora Padjadjaran?",
          A: "Unit Basket Unpad, Unit Renang Unpad, Unik Hockey Unpad",
          B: "Palawa Unpad, Unit Tarung Unpad, Unit Bridge Unpad",
          C: "Padjadjaran Ensemble Community (PEC), Paduan Suara Mahasiswa (PSM), Sadaluhung Padjadjaran Drum Corps (SPdC)",
          D: "Paduan Suara Mahasiswa (PSM), Korps Protokoler Mahasiswa (KPM), Lingkung Seni Sunda",
        },
        {
          no: 9,
          question: "Lagu apa yang digunakan pada filter instagram Prabu 2021?",
          A: "Halo-halo bandungi",
          B: "Karatagan padjadjaran",
          C: "Hymne unpad",
          D: "Semua benar",
        },
        {
          no: 10,
          question:
            "Apa makna dari lukisan yang ada pada konten Lukis Warna Padjadjaran?",
          A: "Menggambarkan awal mula sejarah berdirinya Universitas Padjadjaran",
          B: "Menggambarkan kebudayaan yang ada di Universitas Padjadjaran",
          C: "Menggambarkan bhinneka tunggal ika",
          D: "Menggambarkan kondisi Universitas Padjadjaran di masa pandemi",
        },
        {
          no: 11,
          question:
            "Dalam sebuah scene di konten Kisah Suara Pramuda, adegan apa yang mencerminkan nilai encouragement (budaya RESPECT)?",
          A: "Pemeran utama mengadu kepada orang tua dan tidak mau melanjutkan kuliah",
          B: "Pemeran utama mengerjakan tugas dengan baik dan sungguh-sungguh serta aktif berorganisasi",
          C: "Pemeran utama tetap berusaha untuk menjalankan tugas sebagai mahasiswa walaupun merasa terbebani dalam beradaptasi di masa awal perkuliahan",
          D: "Semua jawaban benar",
        },
        {
          no: 12,
          question:
            "Apa arti toleransi yang terkandung dalam konten Raung Gaung?",
          A: "Berbeda-beda tapi tetap satu jua",
          B: "Menerima dan menghargai semua pandangan dari setiap kalangan",
          C: "Tidak membeda-bedakan ras dan agama",
          D: "Tidak memandang kasta serta strata sosial",
        },
        {
          no: 13,
          question:
            "Budaya apa yang diangkat dalam alur cerita LINE webtoon “Aku Kamu Kita Season 2”?",
          A: "Budaya RESPECT Unpad",
          B: "Budaya silih asah, silih asih, silih asuh",
          C: "Budaya toleransi",
          D: "Budaya Jawara 5.0",
        },
        {
          no: 14,
          question:
            "Dalam konten Kisah Suara Pramuda, apa yang terjadi saat pemeran utama berbicara dengan panitia (kakak tingkat)?",
          A: "Pemeran utama bingung karena suara panitia tersebut tidak terdengar",
          B: "Pemeran utama bingung karena tidak paham Bahasa Sunda",
          C: "Pemeran utama menggunakan earphone sehingga tidak mendengarkan apa yang dibicarakan",
          D: "Semua jawaban salah",
        },
        {
          no: 15,
          question: "Apa yang digambarkan pada konten Domino?",
          A: "Bendera merah putih",
          B: "Logo unpad dan tulisan bhinneka tunggal ika",
          C: "Burung garuda",
          D: "Jam gadang",
        },
        {
          no: 16,
          question:
            "Pesan apa yang dapat diambil oleh mahasiswa setelah menyaksikan konten Karsasastra?",
          A: "Bersikap apatis dan tidak peduli dengan kondisi sekitar",
          B: "Menyuarakan pendapat dengan lantang dan tidak pandang bulu",
          C: "Menyuarakan pendapat dengan berdemo dan melakukan gerakan anarkisn",
          D: "Menyuarakan hak dan pendapat sesuai dengan kepentingan bersama",
        },
        {
          no: 17,
          question:
            "Tujuan terpenting dalam mengembangkan diri sebagai warga negara adalah untuk turut serta dalam mewujudkan kehidupan Bangsa Indonesia yang makmur dan beradab, hal ini merupakan bagian dari perwujudan...",
          A: "Individualisme",
          B: "Nasionalisme",
          C: "Nasionalisme",
          D: "Antipati",
        },
        {
          no: 18,
          question:
            " Apa esensi yang dapat diambil dari konten Prabu Got Talent?",
          A: "Sebagai wadah bagi mahasiswa baru untuk menunjukkan bakat yang dimiliki",
          B: "Menumbuhkan rasa percaya diri agar lebih berani untuk tampil di depan publik",
          C: "Untuk mengembangkan kreativitas mahasiswa baru",
          D: "Semua benar",
        },
        {
          no: 19,
          question:
            "Pada konten Kisah Suara Pramuda, masalah apa yang dialami oleh pemeran utama?",
          A: "Sulit untuk beradaptasi dengan lingkungan (bahasa, budaya, dan tingkah laku)",
          B: "Sulit untuk mendapatkan teman baru",
          C: "Sulit dalam mengejar pelajaran selama kuliah",
          D: "Semua benar",
        },
        {
          no: 20,
          question: "Apa inti bahasan dari talkshow Dialogika Padjadjaran?",
          A: "Cara menjadi mahasiswa berprestasi dengan mudah",
          B: "Cara untuk mencari makanan murah di Jatinangor",
          C: "Cara untuk mengerjakan tugas dengan mudah",
          D: "Cara untuk menjadi mahasiswa yang produktif dan sesuai fungsinya",
        },
      ],
      grade: false,
      isLoading: true,
    };
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.question.slice(this.indexStart, this.indexEnd);
    },
    time: function () {
      return this.date.format("mm:ss");
    },
  },
  methods: {
    toggleConfirm() {
      this.showModal = !this.showModal;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    prev() {
      if (this.current > 1) {
        this.current--;
      }
    },
    checkLoggedInForPenugasan() {
      if (!localStorage.token) {
        this.$router.push({
          name: "NotLogin",
        });
      }
    },
    next() {
      if (this.questionCount > this.current) {
        this.current++;
      }
    },

    submitQuiz(e) {
      console.log("hey");
      localStorage.removeItem("timeAssessment");
      localStorage.removeItem("assessment");
      localStorage.removeItem("answerAssessment");
      this.$router.push({
        name: "Penugasan",
        params: { title: "Quiz telah disubmit!" },
      });
    },

    setTime() {
      const timer = setInterval(() => {
        console.log("setTime");
        this.date = moment(this.date.subtract(1, "seconds"));
        console.log(this.date);
        localStorage.setItem("timeAssessment", this.date);
        console.log(moment.duration(localStorage.time));
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("assessment");
          localStorage.removeItem("timeAssessment");
          localStorage.removeItem("answerAssessment");
          this.done = true;
          this.$refs.submitBtn.click();
        }
      }, 1000);
    },

    setTimeContinue() {
      this.date = moment(localStorage.getItem("timeAssessment"));
      const timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, "seconds"));
        localStorage.setItem("timeAssessment", this.date);
        // localStorage.setItem("time", this.date);
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("assessment");
          localStorage.removeItem("timeAssessment");
          localStorage.removeItem("answerAssessment");
          this.done = true;
          this.$refs.submitBtn.click();
        }
      }, 1000);
    },

    quizTakenCheck() {
      // chekc user submision in databse
      this.taken = false;
    },

    submitAssessment() {
      localStorage.removeItem("answerAssessment");
      localStorage.removeItem("timeAssessment");
      localStorage.removeItem("assessment");
      const token = localStorage.getItem("token");

      console.log(token);
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/quiz-assessment`,
        data: {
          answer1: this.answer[0],
          answer2: this.answer[1],
          answer3: this.answer[2],
          answer4: this.answer[3],
          answer5: this.answer[4],
          answer6: this.answer[5],
          answer7: this.answer[6],
          answer8: this.answer[7],
          answer9: this.answer[8],
          answer10: this.answer[9],
          answer11: this.answer[10],
          answer12: this.answer[11],
          answer13: this.answer[12],
          answer14: this.answer[13],
          answer15: this.answer[14],
          answer16: this.answer[15],
          answer17: this.answer[16],
          answer18: this.answer[17],
          answer19: this.answer[18],
          answer20: this.answer[19],
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          this.done = true;
          console.log(res);
          this.badge = res.data.badge;
          this.correct = res.data.correct;
          this.incorrect = res.data.incorrect;
          this.grade = res.data.grade;
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answerAssessment");
          localStorage.removeItem("time");
          localStorage.removeItem("quiz");
          this.$router.push({
            name: "Penugasan",
            params: { title: "Error!" },
          });
        });
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
          const grade = res.data.quiz_assessment;
          this.grade = grade;
          console.log(this.grade);
          this.isLoading = false;
          if (this.grade != null) {
            localStorage.removeItem("answerAssessment");
            localStorage.removeItem("time");
            localStorage.removeItem("assessment");
            this.$router.push({
              name: "Penugasan",
              params: { message: "Anda telah mengerjakan Assesment" },
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Assessment",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answerAssessment");
          localStorage.removeItem("time");
          localStorage.removeItem("assessment");
          this.$router.push({
            name: "Penugasan",
          });
          Swal.fire({
            icon: "error",
            title: "Terjadi masalah saat mengambil data, silahkan coba lagi",
          });
        });
    },
  },
  mounted() {
    this.checkLoggedInForPenugasan();
    this.getUserGrade();
    this.quizTakenCheck();
    if (localStorage.answerAssessment) {
      this.answer = JSON.parse(localStorage.getItem("answerAssessment"));
    }
    localStorage.assessment = "quizSecretKeyH3HH3";
    if (localStorage.timeAssessment) {
      console.log("lanjooot");
      this.setTimeContinue();
    } else {
      this.setTime();
    }
  },
  updated() {
    if (!this.done) {
      localStorage.setItem("answerAssessment", JSON.stringify(this.answer));
    }
  },
};
</script>

<style>
.main-quiz-container.submit {
  display: none;
}

.title-page.quiz {
  margin: 20px;
}

.quiz-bg {
  background-color: #6fc8ee;
  height: auto;
  width: 100%;
  padding: 70px 50px;
  box-shadow: 2px 3px 5px;
  margin-bottom: 100px;
}

.question {
  margin: 40px 0px 40px 0px;
}

.score-container {
  background-color: #fff586;
  padding: 10px 30px;
  border-radius: 50px;
}

.time-container {
  background-color: #ee6e66;
  padding: 10px 30px;
  border-radius: 50px;
  color: white;
}

.answer {
  background-color: white;
  border-radius: 50px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 20px 50px;
  max-width: 70vh;
}

.answer:hover {
  background-color: #304256;
  color: white;
}

input[type="radio"] {
  margin-right: 10px;
}

.btn-nav {
  background-color: white;
  border-radius: 50px;
  padding: 10px 20px;
  border: 0.5px solid black;
}

.btn.btn-nav[type="submit"] {
  background-color: #2e602f;
  color: white;
  border: none;
}

.multiple-choice {
  height: 45vh;
}

@media only screen and (max-width: 800px) {
  .multiple-choice {
    flex-direction: column;
  }
  .score-time {
    margin: 10px 60px;
    flex-direction: column;
  }
}
</style>
