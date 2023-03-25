<template>
  <div class="container role">
    <div class="row eror">
      <div
        class="col-lg-4 col-md-6 col-sm-12 text-center justify-content-center"
      >
        <img src="./img/komodo.png" alt="Image" class="img-md-fluid img-komodo" style="width: 60%; height: 100%;">
      </div>
      <div class="col-lg-4 text-center mt-5 mb-5">
        <h1>Opps..</h1>
        <h1>Anda bukan pramuda atau admin</h1>
        <br />
        <router-link to="/minimap" class="btn_map">
          <span>Kembali Ke Mini Map
          <i class="fas fa-map"></i>
          </span> 
        </router-link>
      </div>
      <div class="col-lg-4 col-md-6 ol-sm-12 text-center justify-content-center">
      <img src="./img/badak.png" alt="Image" class="img-md-fluid" style="width: 60%; height: 100%;" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Role",
};
</script>

<style>
.btn_map {
  background-color: #6c7358;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(108, 115, 88, 0.25);
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-align: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.eror {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}
</style>
