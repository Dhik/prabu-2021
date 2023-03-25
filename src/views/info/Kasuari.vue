<template>
    <div class="modal-backdrop">
        <div class="modal-quiz-container d-flex flex-column justify-content-center">
            <div class="submit-content">
                <div class="head-submit">
                    <img src="../img/logo_kasuari.png" class="img-sign" />
                    <h2 class="title-submit">Tri Dharma Perguruan Tinggi</h2>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="input-kasuari" style="text-align: justify;">
                            <p style="text-indent :3em;">Tri Dharma Perguruan Tinggi berasal dari bahasa sansekerta “Tri” yang berarti tiga, dan “Dharma” yang berarti kewajiban. Berdasarkan UU No. 12 Tahun 2012 Pasal 1 Ayat 9 tentang Pendidikan Tinggi, Tri Dharma wajib dilaksanakan oleh seluruh perguruan tinggi yang ada di Indonesia, baik perguruan tinggi negeri yang dikelola oleh pemerintah, maupun perguruan tinggi swasta yang dikelola oleh masyarakat.</p>
                            <p style="text-indent :3em;">Tri Dharma perguruan tinggi adalah suatu asas yang dipegang oleh setiap perguruan tinggi di Indonesia yang terdiri atas tiga kewajiban, yaitu pendidikan, penelitian, dan pengabdian masyarakat, dengan uraian sebagai berikut:</p>
                            
                            <ol class="list-group list-group-numbered" style="text-align: left;">
                                <li><span style="font-weight: bold; font-size: 20px">Pendidikan</span> adalah usaha sadar dan terencana untuk mewujudkan suasana belajar dan proses pembelajaran agar peserta didik secara aktif mengembangkan potensi dirinya untuk memiliki kekuatan spiritual keagamaan, pengendalian diri, kepribadian, kecerdasan, akhlak mulia, serta keterampilan yang diperlukan dirinya, masyarakat, bangsa, dan negara.</li><br>
                                <li><span style="font-weight: bold; font-size: 20px">Penelitian</span> adalah kegiatan yang dilakukan menurut kaidah dan metode ilmiah secara sistematis untuk memperoleh informasi, data, dan keterangan yang berkaitan dengan pemahaman dan/atau pengujian suatu cabang ilmu pengetahuan dan teknologi. Penelitian biasanya didasari atas kejadian atau permasalahan yang dialami masyarakat sehari-hari. </li><br>
                                <li><span style="font-weight: bold; font-size: 20px">Pengabdian</span> kepada masyarakat adalah kegiatan civitas akademika yang memanfaatkan ilmu pengetahuan dan teknologi sesuai dengan bidangnya untuk memajukan kesejahteraan masyarakat dan mencerdaskan kehidupan bangsa.</li>
                            </ol>
                            <br>
                            <br>
                            <p style="text-indent :3em;">Pelaksanaan Tri Dharma Perguruan Tinggi bertujuan untuk mewujudkan salah satu fungsi dari perguruan tinggi, yaitu mengembangkan civitas akademika yang inovatif, responsif, kreatif, terampil, berdaya saing, dan kooperatif, sehingga civitas akademika dapat berperan aktif positif dalam proses perubahan dan perkembangan sosial. Peran tersebut meliputi mampu menemukan permasalahan, menerangkan, memprediksi suatu peristiwa, hingga mampu mengatasi permasalahan dalam kehidupan masyarakat, dunia usaha, dan dunia industri. </p>
                            <p style="text-indent :3em;">Seluruh civitas akademika wajib dan bertanggung jawab dalam mewujudkan Tri Dharma Perguruan Tinggi. Menurut undang-undang, civitas akademika merupakan komunitas yang memiliki tradisi ilmiah dengan mengembangkan budaya akademik. Civitas akademika yang dimaksud dalam Tri Dharma Perguruan Tinggi adalah dosen dan mahasiswa. Maka dari itu, penting bagi Pramuda, sebagai mahasiswa, untuk memahami apa itu Tri Dharma Perguruan Tinggi serta tiga kewajiban dari Tri Dharma Perguruan Tinggi.</p>
                           <div class="d-flex justify-content-center">
                                <router-link class="btn btn-kembali-submit" to="/infografis">
                                    Kembali
                                </router-link>
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
        background-image: url("");
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../img/Webp.net-resizeimage.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
    }

    .img-sign {
        height: 100px;
        width: 100px;
        margin: 15px;
    }
    @media (min-width: 576px) {
        .input-kasuari {
            padding: 30px 80px;
        }
    }
    .submit-content {
        background-color: #f4ebdc;
        height: 100%;
        width: 80%;
        max-height: 100vh;
        color: #304256;
        border-radius: 15px;
        overflow-y: auto;
        text-align: center;
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

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(116, 116, 116);
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(85, 85, 85);
    }

    ol {
  margin:0 0 1.5em;
  padding:0;
  counter-reset:item;
}
 
ol>li {
  margin:0;
  padding:0 0 0 2em;
  text-indent:-2em;
  list-style-type:none;
  counter-increment:item;
}
 
ol>li:before {
  display:inline-block;
  width:1.5em;
  padding-right:0.5em;
  font-weight:bold;
  text-align:right;
  content:counter(item) ".";
}
</style>