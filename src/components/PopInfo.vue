<template>
  <div class="modal-backdrop">
    <div
      class="modal-quiz-container d-flex flex-column justify-content-center"
      @click.self="closeModal"
    >
      <div class="submit-content">
        <div class="d-flex justify-content-end pe-1">
          <button class="btn btn-close" @click="closeModal"></button>
        </div>
        <div class="head-submit">
          <h2 class="title-submit">{{ title }}</h2>
          <p v-if="title == 'NURAGA (Nurani Pramuda Menjaga)'" class="mt-4">
           Yuk, kumpulkan link video campaign-mu di sini!
          </p>
          <p v-if="title == 'SENANDIKA (Selembar Wacana Kritis Dari Pramuda)'" >
            Yuk, kumpulkan essay-mu di sini! Dalam bentuk pdf yaa Pramuda!
          </p>
        </div>
        <hr />
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 input-submit">
              <h4 class="mb-4"><b>Link Video Campaign</b></h4>
              <div v-if="title == 'NURAGA (Nurani Pramuda Menjaga)'">
                <form action="">
                  <input
                    type="text"
                    class="input-link"
                    placeholder="Masukan Link"
                  />
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-edit">Edit</button>
                  </div>
                </form>
              </div>
              <div v-else>
                <form action="">
                  <input
                    type="file"
                    class="input-link"
                    placeholder="Masukan Link"
                  />
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-edit">Edit</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 input-submit">
              <h4 class="mb-3"><b>Reward</b></h4>
              <p>Menunggu Konfirmasi Panitia</p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-kembali-submit" @click="closeModal">
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalQuiz",
  props: ["title", "overview"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
}

.submit-content {
  background-color: #f4ebdc;
  height: 100%;
  width: 80%;
  max-height: 100vh;
  color: #304256;
  border-radius: 15px;
  overflow-y: auto;
}

.input-submit {
  padding: 30px 80px;
}

.input-link {
  border-radius: 8px;
  padding: 10px 20px;
  width: 80%;
  min-width: 30%;
  background-color: transparent;
  border: 0.5px solid black;
}

.input-link:focus {
  outline: none;
}

.btn-kembali-submit {
  margin-top: 140px;
  width: 100px;
  min-width: 80px;
  padding: 8px 10px;
  color: white;
  background-color: #2e602f;
}

.btn-edit {
  margin-top: 120px;
  width: 100px;
  min-width: 80px;
  padding: 8px 10px;
  color: white;
  background-color: #2e602f;
}

.head-submit {
  padding: 50px 50px 20px 70px;
}
.title-submit {
  color: #cbc87a;
  -webkit-text-stroke: 1px black;
}

.btn.btn-close {
  padding: 10px 10px;
  margin: 5px 5px;
  background-color: red;
}

hr {
  border: 1px solid black;
}

@media only screen and (min-height: 800px) {
  .btn-kembali-submit {
    margin-bottom: 100px;
  }
}
</style>
