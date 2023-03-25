<template>
  <div class="backdrop-confirm" @click.self="closeConfirm">
    <div class="modal-container-confirm">
      <div class="d-flex justify-content-center mb-4">
        <div class="circle">
          <i class="fa 3x fa-exclamation fa-5x custom-icon"></i>
        </div>
      </div>
      <h3 class="title-modals mb-3">Yakin untuk mengirim jawaban ?</h3>
      <p class="text-center mb-3">
        Jawaban yang telah dikirim tidak bisa diedit kembali, mohon periksa
        kembali jawaban anda!
      </p>
      <div class="d-flex justify-content-center">
        <button class="btn btn-confirm-submit" @click="submitBooklet">
          Kirim jawaban
        </button>
        <button class="btn btn-confirm-cancel" @click="closeConfirm">
          Urungkan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeConfirm() {
      this.$emit("close");
    },
    submitBooklet() {
      this.$emit("submit");
    },
  },
};
</script>

<style>
.custom-icon {
  margin: 5px 29px;
  color: rgb(223, 85, 85);
}
.circle {
  border: 6px solid rgb(223, 85, 85);
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.title-modals {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #454945;
  text-align: center;
}
.modal-container-confirm {
  width: 70%;
  padding: 30px;
  margin: 25vh auto;
  background-color: white;
  border-radius: 10px;
  z-index: 9999;
  animation: down 0.5s ease forwards;
}
@keyframes down {
  0% {
    transform: translateY(0);
  }
   50% {
    transform: translateY(50px);
  }
    
  100% {
    transform: translatex(0);
  }
}

.backdrop-confirm {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.btn-confirm-submit {
  background-color: #2e602f;
  margin: 10px;
  color: white;
}
.btn-confirm-submit:hover {
  border: 2px #2e602f solid;
  background-color: white;
}
.btn-confirm-cancel {
  border: 2px #2e602f solid;
  margin: 10px;
}
.btn-confirm-cancel:hover {
  background-color: #2e602f;
  color: white;
}
.icon {
  margin: 0 auto;
}
</style>
