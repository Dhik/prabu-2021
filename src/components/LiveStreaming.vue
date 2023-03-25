<template>
  <div class="Live">
    <div class="container">
      <div class="box1"><img src="logoprabu.png" alt="gambar logo" /></div>
      <div class="box2">
        <h4>Prabu 2021</h4>
      </div>
      <button class="box3">
        <p>Maps</p>
        <img src="map.svg" alt="" srcset="" />
      </button>
      <button class="box4">
        <p>Login</p>
        <img src="out.svg" alt="" srcset="" />
      </button>
    </div>

    <!-- Background -->
    <section class="banner-area">
      <!-- LiveStreaming -->
      <div class="livestream">
        <div class="video">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/8o49U8xAfZ4?rel=0&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="chat">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/live_chat?v=8o49U8xAfZ4&embed_domain=cobadikit.w3spaces.com"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
      <!-- Footer -->
      <div class="footer">
        <div class="sponsor">
          <h3>Sponsor</h3>
          <img src="ig.png" alt="" />
          <img src="ig.png" alt="" />
          <img src="ig.png" alt="" />
        </div>
        <div class="medpart">
          <h3>Media Partner</h3>
          <img src="ig.png" alt="" />
          <img src="ig.png" alt="" />
          <img src="ig.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: Live,
};
</script>

<style>
@font-face {
    font-family: Brudge;
    src: url('fonts/Brudge Regular.otf') format('truetype');
}
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #eaeaea;
}
 h4{
    font-size: 50px;
    text-align: center;
    color: #1A9AD4;
    text-shadow: 2px 2px 0 black;
    font-family: "Brudge", Arial, Helvetica, sans-serif;
} 
/* Awal Heading Navbar */
.container{
    position: fixed;
    display: flex;
    align-items: center;
    width: 60vw;
    height: 12vh;
    background-color: white;
    justify-content: space-evenly;
    margin: 0 auto; 
    left: 0;
    right: 0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 10px 20px rgba(108, 115, 88, 0.25);
    z-index: 1;
}
.container .box1{
    width: 72px;
    height: 69px;
    text-align: center;
    line-height: 60px;
}
.container .box2{
    width: 250px;
    height: 53px;
    text-align: center;
    line-height: 60px;
}
.container .box3{
    justify-content: space-evenly;
    border: none;
    display: flex;
    width: 129px;
    height: 40px;
    background-color: #6C7358;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(108, 115, 88, 0.25);
    text-align: center;
    line-height: 40px;
}
.box3 p, .box4 p{
    font-size: 20px;
    font-weight: bold;
    color: white;
}
.container .box4{
    justify-content: space-evenly;
    border: none;
    display: flex;
    width: 129px;
    height: 40px;
    text-align: center;
    line-height: 60px;
    background-color: #6C7358;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(108, 115, 88, 0.25);
    text-align: center;
    line-height: 40px;
}
/*  Akhir Heading Navbar  */
/* Awal Background */
.banner-area{
    background-image: url(https://i.postimg.cc/GtRM7mdX/1.jpg);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
/* Akhir Background */
/* Awal Sponsor */
.footer{
    flex-wrap: wrap;
    display: flex;
    position: relative;
    bottom: 85vh;
    background-color: #EEF6F9;
    overflow: hidden;
    justify-content: space-evenly;
}
.footer .sponsor h3, .medpart h3{
    text-align: center;
    justify-content: center;
    padding: 20px 0;
}
.footer .sponsor img, .sponsor img{
    padding-bottom: 20px;
}
h3{
    font-family: 'Montserrat', sans-serif;
}
/* Akhir Sponsor & Medpart */
/* Awal LiveStreaming */
.livestream{
    position: relative;
    bottom: 80vh;
    display: flex;
    overflow: hidden;
    justify-content: center;
}
.livestream video{
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
}
 iframe{
    width: 100%;
    height: 100%;
}
</style>