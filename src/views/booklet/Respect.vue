<template>
  <Spinner v-if="isLoading" />
  <div v-else class="Respect">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitRespect" />
    <div class="container-booklet">
      <div class="container title-container-booklet">
        <div class="title-booklet respect mb-4">Respect</div>
        <div>
          <div
            v-for="(question, idx) in respectQuestion"
            :key="idx"
            class="text-center respect-container"
          >
            <div class="instruction">{{ question.instruction }}</div>
            <div class="row respect-question">
              <div class="col-md-4 question-card">
                {{ question.questionWord }}
              </div>
              <div class="col-md-4 pt-4">
                <i class="fa fa-long-arrow-right arrow" aria-hidden="true"></i>
              </div>
              <div class="col-md-4 question-card">
                <div v-if="!answer[idx]">?</div>
                {{ answer[idx] }}
              </div>
            </div>
            <div class="row px-5 my-5">
              <div class="col-md-3">
                <!-- <input type="radio" name="A" /> A.Lorem Lorem -->
                <label class="question-radio">
                  <input
                    type="radio"
                    :name="'A' + idx"
                    :value="question.option1"
                    v-model="answer[idx]"
                  />
                  A. {{ question.option1 }}
                </label>
              </div>
              <div class="col-md-3">
                <label class="question-radio">
                  <input
                    type="radio"
                    :name="'B' + idx"
                    :value="question.option2"
                    v-model="answer[idx]"
                  />
                  B. {{ question.option2 }}
                </label>
              </div>
              <div class="col-md-3">
                <label class="question-radio">
                  <input
                    type="radio"
                    :name="'C' + idx"
                    :value="question.option3"
                    v-model="answer[idx]"
                  />
                  C. {{ question.option3 }}
                </label>
              </div>
              <div class="col-md-3">
                <label class="question-radio">
                  <input
                    type="radio"
                    :name="'D' + idx"
                    :value="question.option4"
                    v-model="answer[idx]"
                  />
                  D. {{ question.option4 }}
                </label>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end mb-3">
            <router-link class="router-penugasan" to="/booklet">
              <button type="submit" value="kirim" class="btn btn-booklet-back">
                Kembali
              </button>
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
      answer: [],
      respectQuestion: [
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord:
            "Memiliki kepekaan dalam menyikapi permasalahan di lingkungannya",
          option1: "Responsibility",
          option2: "Excellence",
          option3: "Scientific rigor",
          option4: "Encouragement",
        },
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord: "Memberi dukungan kepada teman yang sedang lomba",
          option1: "Excellence",
          option2: "Encouragement",
          option3: "Responsibility",
          option4: "Professionalism",
        },
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord: "Memahami & mendalami bidang keilmuan masing - masing",
          option1: "Professionalism",
          option2: "Excellence",
          option3: "Trust",
          option4: "Scientific rigor",
        },
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord: "Tidak menyontek saat ujian",
          option1: "Creativity",
          option2: "Professionalism",
          option3: "Trust",
          option4: "Excellence",
        },
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord:
            "Memberikan suatu gagasan baru yang mampu menghasilkan produk baru yang belum ada sebelumnya dan bisa digunakan oleh warga Unpad",
          option1: "Creativity",
          option2: "Trust",
          option3: "Encouragement",
          option4: "Scientific rigor",
        },
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord: "Bersungguh - sungguh dalam mempersiapkan ujian",
          option1: "Excellence",
          option2: "Encouragement",
          option3: "Creativity",
          option4: "Responsibility",
        },
        {
          instruction:
            "Pilihlah Unsur RESPECT yang cocok dengan menggambarkan implementasi di bawah ini?",
          questionWord:
            "Menghargai berbagai jenjang keprofesian dari berbagai rumpun ilmu",
          option1: "Scientific rigor",
          option2: "Responsibility",
          option3: "Professionalism",
          option4: "Creativity",
        },
      ],
      grade: "",
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
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          const grade = res.data.booklet.respect;
          this.grade = grade;
          this.isLoading = false;
          if (this.grade != null) {
            this.$router.push({
              name: "Booklet",
              params: { message: "Anda telah mengerjakan booklet Respect!!" },
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
    submitRespect() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/booklet/respect`,
        data: {
          answer1: this.answer[0].toLowerCase(),
          answer2: this.answer[1].toLowerCase(),
          answer3: this.answer[2].toLowerCase(),
          answer4: this.answer[3].toLowerCase(),
          answer5: this.answer[4].toLowerCase(),
          answer6: this.answer[5].toLowerCase(),
          answer7: this.answer[6].toLowerCase(),
        },
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: "Booklet",
            params: { message: "Submit Respect berhasil!" },
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
            params: { message: "Error submit Respect, mohon ulangi" },
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
.arrow {
  font-size: 60px;
}

.title-booklet.respect {
  font-size: 64px;
}

.respect-container {
  font-weight: bold;
  margin-bottom: 80px;
}

.respect-question {
  margin: 50px 0px;
}

.question-card {
  background-color: #f6ede4;
  padding: 30px 0px;
  border-radius: 10px;
}

.question-radio {
  background-color: #f6ede4;
  padding: 30px 10px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  margin: 10px 0px;
}
.instruction {
  background-color: #fff;
  border-radius: 5px;
}
</style>
