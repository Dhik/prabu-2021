<template>
  <div class="container setup">
    <div class="row eror">
      <div class="col-lg-4 col-md-6 col-sm-12 text-center justify-content-center">
        <img
          src="../views/img/Komodo.svg"
          width="400"
          height="400"
        />
      </div>
      <div class="col-lg-4 text-center mt-5">
      <h1>Opps..</h1>
      <h1>Kami Sedang Dalam Perbaikan</h1>
      <br>
      </div>
      <div class="col-lg-4 col-md-6  ol-sm-12">
        <img
          src="../views/img/Badak.svg"
          width="400"
          height="400"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setup"
};
</script>

<style>
.btn_map{
    background-color: #6C7358;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(108, 115, 88, 0.25);
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-align: center;
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 10px ;
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.eror{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}
</style>
