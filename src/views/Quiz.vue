<template>
  <Spinner v-if="isLoading" />
  <div v-else class="quiz" :class="{ submit: done == true }">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitPranata" />
    <div class="container-quiz">
      <div class="main-quiz-container">
        <div class="text-center title-page quiz">Pranata</div>
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
      date: moment(60 * 30 * 1000),
      done: false,
      badge: "",
      correct: "",
      incorrect: "",
      grade: "",
      answer: new Array(30).fill(""),
      current: 1,
      pageSize: 1,
      questionCount: 30,
      question: [
        {
          no: 1,
          question:
            "Dalam budaya Sunda, cara meminta tolong yang baik adalah, kecuali …",
          A: "Gunakan kalimat yang sopan dan jangan lupa mengucapkan kata “tolong”.",
          B: "Tidak memperhatikan waktu dan bertele-tele.",
          C: "Jangan lupa mengucapkan terima kasih apabila sudah dibantu.",
          D: "Lihat kondisi orang yang akan diminta tolong.",
        },
        {
          no: 2,
          question:
            "Contoh kalimat minta tolong dengan bahasa Sunda loma adalah…",
          A: "Cing tulungan pangeusikeun soal ujian Indonesia.",
          B: "Punten pang masihkeun acuk ieu ka Alya",
          C: "Punten, teu kenging ribut.",
          D: "Punten, nyuhunkeun bantosan ngagotong korsi ka payun.",
        },
        {
          no: 3,
          question:
            "Dalam budaya Sunda, cara meminta maaf yang baik adalah, kecuali …",
          A: "Jika salah meminta maaf dengan sopan",
          B: "Hanya meminta maaf lalu pergi begitu saja ",
          C: "Langsung pergi jika melakukan kesalahan karena tidak peduli",
          D: "Semua salah",
        },
        {
          no: 4,
          question:
            "Agar terbentuk hubungan yang harmonis antar masyarakat, maka yang harus dilakukan adalah … ",
          A: "Jika salah meminta maaf dengan sopan ",
          B: "Hanya meminta maaf lalu pergi begitu saja ",
          C: "Langsung pergi jika melakukan kesalahan karena tidak peduli",
          D: "Semua salah",
        },
        {
          no: 5,
          question:
            "Kata yang digunakan untuk mengawali permintaan maaf dalam bahasa Sunda adalah …",
          A: "Sampurasun",
          B: "Muhun",
          C: "Hapunten",
          D: "Rampes",
        },
        {
          no: 6,
          question:
            "Cara mengucapkan terima kasih yang baik dan benar adalah, kecuali …",
          A: "Ucapkan terima kasih sambil tersenyum.",
          B: "Ucapkan maksud terima kasih secara spesifik.",
          C: "Usahakan untuk selalu mengucapkan terima kasih dengan penuh ketulusan.",
          D: "Ucapkan terima kasih dengan tubuh yang membungkuk dan mengucapkan dengan lantang",
        },
        {
          no: 7,
          question:
            "Terima kasih dalam bahasa Sunda bentuk lebih formal yang biasanya digunakan untuk percakapan dengan teman sebaya atau orang akrab, yaitu …",
          A: "Hatur nuhun",
          B: "Nuhun euy",
          C: "Nuhun",
          D: "Haturan",
        },
        {
          no: 8,
          question:
            "Cara menjawab ungkapan “nuhun” dalam bahasa Sunda adalah …",
          A: "Punten",
          B: "Sami-sami",
          C: "Kulan",
          D: "Mangga",
        },
        {
          no: 9,
          question:
            "Dalam tata krama masyarakat Sunda, jika ada seseorang yang lewat dan mengatakan 'punten', harus dibalas dengan mengucapkan …",
          A: "Hayu ",
          B: "Nuhun ",
          C: "Mangga",
          D: "Ka ditu",
        },
        {
          no: 10,
          question:
            "Dalam tata krama masyarakat Sunda, saat melewati orang yang lebih tua hendaknya mengucapkan 'punten' dengan gerakan tubuh …",
          A: "Menunjuk",
          B: "Membungkuk",
          C: "Merangkak",
          D: "Duduk",
        },
        {
          no: 11,
          question: "Arti “punten-mangga” dalam bahasa Indonesia adalah …",
          A: "Permisi-terima kasih",
          B: "Maaf-tidak",
          C: "Permisi-silahkan",
          D: "Silakan-permisi",
        },
        {
          no: 12,
          question:
            "Kata “abdi” (saya), digunakan dan ditujukan saat kita berbicara dengan …",
          A: "Orang tua",
          B: "Kakak tingkat",
          C: "Dosen",
          D: "Semua jawaban benar",
        },
        {
          no: 13,
          question:
            " Dosen: Aya nu bade naros? (Ada yang mau bertanya?), <br/ >Mahasiswa: ... , Pak! <br /> Kata yang tepat untuk mengisi titik-titik di atas adalah …",
          A: "Urang",
          B: "Abdi",
          C: "Aing",
          D: "Kuring",
        },
        {
          no: 14,
          question:
            "Kata “manéh” (kamu), digunakan dan ditujukan saat kita berbicara dengan …",
          A: "Orang yang seumuran/sebaya dengan kita",
          B: "Dosen",
          C: "Orang tua",
          D: "Guru",
        },
        {
          no: 15,
          question:
            "Dosen: Sok mangga, … bade naros naon? <br /> Mahasiswa: Upami 1+1 teh sabaraha, Pak? <br/> Kata yang tepat untuk mengisi titik-titik di atas adalah … ",
          A: "Maneh",
          B: "Sia",
          C: "Anjeun",
          D: "Didinya",
        },
        {
          no: 16,
          question: "Kata “nyatu” (makan), merujuk pada ... yang sedang makan",
          A: "rang Tua",
          B: "Orang yang seumuran/sebaya dengan kita",
          C: "Hewan",
          D: "Orang yang umurnya lebih muda dibanding kita",
        },
        {
          no: 17,
          question:
            "Manakah kalimat yang benar saat kita berbicara kepada orang tua ketika ingin berpergian?",
          A: "“Mah, Asep rek indit ka pasar” (Mah, Asep mau pergi ke pasar)",
          B: "“Mah, Asep bade mios heula ka kampus” (Mah, Asep mau pergi dulu ke kampus)",
          C: "“Mah, Asep rek angkat heula ka Garut” (Mah, Asep mau pergi dulu ke Garut)",
          D: "Tidak ada jawaban benar",
        },
        {
          no: 18,
          question: "Lesehan memiliki kata dasar “leseh” yang berarti …",
          A: "Duduk di lantai dengan beralaskan tikar dan sebagainya",
          B: "Duduk bersama-sama dalam satu tempat",
          C: "Duduk untuk menikmati makanan",
          D: "Duduk di dalam saung",
        },
        {
          no: 19,
          question: "Lesehan merupakan budaya Sunda yang menunjukkan sifat …",
          A: "Kesederhanaan, kebersamaan , dan kesetaraan",
          B: "Kesopanan, kebersamaan, dan kemurahan hati",
          C: "Kesopanan, kebersamaan, dan kepraktisan",
          D: "Kesederhanaan, kesopanan, dan kesetaraan",
        },
        {
          no: 20,
          question:
            "Arti “émok” dalam budaya lesehan masyarakat Sunda adalah …",
          A: "Cara duduk wanita",
          B: "Cara duduk pria",
          C: "Alas yang digunakan untuk duduk",
          D: "Duduk bersama-sama dalam satu tempat",
        },
        {
          no: 21,
          question:
            "Tata krama makan dalam budaya Sunda, di antaranya adalah …",
          A: "Makan tidak bersuara, makan sambil berbicara, makan menggunakan tangan",
          B: "Makan tidak bersuara, makan menggunakan tangan, makan ngariung dan lesehan",
          C: "Makan dengan bersuara, makan menggunakan tangan, makan ngariung dan lesehan",
          D: "Makan tidak bersuara, makan ngariung dan lesehan, makan sambil berbicara",
        },
        {
          no: 22,
          question:
            "Dalam budaya Sunda, kita tidak boleh makan bersuara. Alasannya adalah ...",
          A: "Agar tidak mengganggu orang lain",
          B: "Agar makan tidak berantakan",
          C: "Agar makan dapat diserap tubuh dengan baik",
          D: "Agar tidak cepat lapar",
        },
        {
          no: 23,
          question: "Makan bersuara dalam bahasa Sunda disebut…",
          A: "Cageur",
          B: "Calakan",
          C: "Caplak",
          D: "Ceplak",
        },
        {
          no: 24,
          question:
            "Meskipun makan menggunakan tangan, ketika mengambil nasi dari  boboko (bakul nasi) tidak boleh secara langsung dengan tangan karena hal ini dianggap…",
          A: "Rasuk",
          B: "Merusak suasana",
          C: "Akan membuat orang menjadi tidak nyaman",
          D: "Akan meningkatkan nafsu makan orang lain meningkat",
        },
        {
          no: 25,
          question:
            "Pada tata krama makan sunda, sebelum makan dan sesudah makan wajib melakukan…",
          A: "Mencuci tangan agar tangan bersih dan terhindar dari kuman",
          B: "Mencuci tangan agar meningkatkan nafsu makan",
          C: "Mencuci tangan dan kaki agar terhindar dari kuman",
          D: "Mencuci tangan kanan dan tangan kiri agar bersih",
        },
        {
          no: 26,
          question:
            "Arti kata “silih” dalam budaya Sunda silih asah, silih asih, dan silih asuh adalah …",
          A: "Selalu",
          B: "Saling",
          C: "Bersama",
          D: "Mari",
        },
        {
          no: 27,
          question:
            "Arti silih asah, silih asih, dan silih asuh secara berurutan adalah?",
          A: "Saling menajamkan pikiran, saling mengasihi, dan saling membimbing",
          B: "Saling menajamkan pikiran, saling membimbing, dan saling mengasihi",
          C: "Saling membimbing, saling mengasihi, dan saling menajamkan pikiran",
          D: "Saling mengasihi, saling menajamkan pikiran, dan saling membimbing",
        },
        {
          no: 28,
          question: "Contoh dari perilaku silih asah adalah…",
          A: "Mengingatkan orang lain yang melakukan kesalahan",
          B: "Memberi makanan kepada tetangga yang kelaparan",
          C: "Memberi uang tip kepada supir ojek online",
          D: "Memberikan dukungan kepada sesama teman",
        },
        {
          no: 29,
          question: "Contoh dari perilaku silih asih adalah…",
          A: "Memberi makanan kepada tetangga yang kelaparan",
          B: "Mengingatkan orang lain yang melakukan kesalahan",
          C: "Belajar bersama untuk membahas materi pelajaran",
          D: "Menghindari konflik yang tidak perlu",
        },
        {
          no: 30,
          question: "Contoh dari perilaku silih asuh adalah...",
          A: "Membimbing teman yang kesulitan dalam memahami materi",
          B: "Memberi makanan kepada tetangga yang kelaparan",
          C: "Memberi uang tip kepada supir ojek online",
          D: "Memberikan support kepada sesama teman",
        },
      ],
      grade: false,
      isLoading: true,
      showModal: false,
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
    checkLoggedInForPenugasan() {
      if (!localStorage.token) {
        this.$router.push({
          name: "NotLogin",
        });
      }
    },
    prev() {
      if (this.current > 1) {
        this.current--;
      }
    },

    next() {
      if (this.questionCount > this.current) {
        this.current++;
      }
    },

    submitQuiz(e) {
      console.log("hey");
      localStorage.removeItem("time");
      localStorage.removeItem("quiz");
      localStorage.removeItem("answer");
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
        localStorage.setItem("time", this.date);
        console.log(moment.duration(localStorage.time));
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("quiz");
          localStorage.removeItem("time");
          localStorage.removeItem("answer");
          this.done = true;
          this.$refs.submitBtn.click();
        }
      }, 1000);
    },

    setTimeContinue() {
      console.log("no  time");
      this.date = moment(localStorage.getItem("time"));
      const timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, "seconds"));
        localStorage.setItem("time", this.date);
        // localStorage.setItem("time", this.date);
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("quiz");
          localStorage.removeItem("time");
          localStorage.removeItem("answer");
          this.done = true;
          this.$refs.submitBtn.click();
        }
      }, 1000);
    },

    quizTakenCheck() {
      // chekc user submision in databse
      this.taken = false;
    },

    submitPranata() {
      this.isLoading = true;
      localStorage.removeItem("answer");
      localStorage.removeItem("time");
      localStorage.removeItem("quiz");
      const token = localStorage.getItem("token");

      console.log(token);
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/quiz-pranata`,
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
          answer21: this.answer[20],
          answer22: this.answer[21],
          answer23: this.answer[22],
          answer24: this.answer[23],
          answer25: this.answer[24],
          answer26: this.answer[25],
          answer27: this.answer[26],
          answer28: this.answer[27],
          answer29: this.answer[28],
          answer30: this.answer[29],
        },
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          this.isLoading = false;
          this.done = true;
          console.log(res);
          this.badge = res.data.badge;
          this.correct = res.data.correct;
          this.incorrect = res.data.incorrect;
          this.grade = res.data.grade;
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
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
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          const grade = res.data.quiz_pranata;
          this.grade = grade;
          console.log(this.grade);
          this.isLoading = false;
          if (this.grade != null) {
            localStorage.removeItem("answer");
            localStorage.removeItem("time");
            localStorage.removeItem("quiz");
            this.$router.push({
              name: "Penugasan",
              params: { message: "Anda telah mengerjakan Quiz Pranata" },
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Quiz Pranata",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          localStorage.removeItem("time");
          localStorage.removeItem("quiz");
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
    if (localStorage.answer) {
      this.answer = JSON.parse(localStorage.getItem("answer"));
    }
    localStorage.quiz = "quizSecretKeyH3HH3";
    if (localStorage.time) {
      console.log("lanjooot");
      this.setTimeContinue();
    } else {
      this.setTime();
    }
  },
  updated() {
    if (!this.done) {
      localStorage.setItem("answer", JSON.stringify(this.answer));
    }
  },
};
</script>

<style>
.container-quiz {
  background: url(./img/latar_quiz.png) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}

.quiz.submit {
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
