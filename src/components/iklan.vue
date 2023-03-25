<template>
  <div class="modal">
    <div class="contentBox">
      <div class="close" @click="popupTrigger()"></div>
      <div class="imgBx">
        <img
          src="http://smkn5batam.sch.id/wp-content/uploads/2020/04/POSTERCORONA2.jpg"
        />
      </div>
      <div class="iklan">
        <div>
          <h3>Judul Iklan</h3>
          <h2>80<sup>%</sup><span>Off</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            expedita iusto odio nemo. Voluptatum quidem ipsum iste odit. Rerum
            dicta sit voluptates voluptati.
          </p>
          <a href="#">Klik Disini</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Iklan",
  props: ["popupTrigger"],
};
</script>

<style>
@import "../assets/iklan.css";
</style>
