<template>
    <div class="modal-backdrop">
        <div class="modal-quiz-container d-flex flex-column justify-content-center">
            <div class="submit-content">
                <div class="head-submit">
                    <img src="../img/logo_kuskus.png" class="img-sign" />
                    <h2 class="title-submit">Visi dan Misi Universitas Padjadjaran</h2>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="input-kuskus">
                            <p>Visi adalah rangkaian kata yang di dalamnya terdapat impian, cita-cita, atau nilai inti
                                dari suatu lembaga atau organisasi. Kemudian, misi adalah suatu proses atau tahapan yang
                                seharusnya dilalui oleh suatu lembaga atau organisasi dengan tujuan dapat mencapai visi
                                tersebut. Tentunya, Universitas Padjadjaran hadir dengan membawa visi dan misi sebagai
                                berikut.</p>
                            <h4 class="mb-3"><b>Visi</b></h4>
                            <p>&quot;Mencapai Universitas Bereputasi Dunia dan Berdampak pada Masyarakat&quot;</p>
                            
                            <h4 class="mb-3"><b>Misi</b></h4>
                            <ol class="list-group list-group-numbered" style="text-align: left;">
                                <li>Mewujudkan academic excellence dan memperoleh rekognisi nasional dan internasional</li>
                                <li>Meningkatnya relevansi dan inovasi pendidikan, penelitian dan pengabdian pada masyarakat</li>
                                <li>Mewujudkan kemandirian dengan kapitalisasi sumber daya internal dan kemitraan strategis</li>
                                <li>Meningkatkan kontribusi Unpad dalam penyelesaian masalah yang berdampak pada kesejahteraan masyarakat Jawa Barat dan Indonesia</li>
                                <li>Membangun karakter kepemimpinan dengan budaya kolektif, profesional, dan berintegritas dalam pengelolaan keberlanjutan universitas</li>
                            </ol>
                            <br>
                            <br>
                            <p>Agar visi Unpad dapat terwujud sesuai harapan, maka misi Unpad harus diterapkan dan dijalankan oleh seluruh civitas akademika Unpad, termasuk diantaranya Pramuda yang sekarang telah menjadi bagian dari Unpad.</p>
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

    @media (min-width: 576px) {
        .input-kuskus {
            padding: 30px 80px;
        }
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
</style>