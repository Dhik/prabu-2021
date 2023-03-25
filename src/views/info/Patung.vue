<template>
    <div class="modal-backdrop">
        <div class="modal-quiz-container d-flex flex-column justify-content-center">
            <div class="submit-content">
                <div class="head-submit">
                    <img src="../img/logo_patung.png" class="img-sign" style="height: 130px; width: 50px;" />
                    <h2 class="title-submit">Filosofi Logo Universitas Padjadjaran</h2>
                </div>
                <div class="head-submit" style="text-align: center;">
                    <img src="../img/logo-unpad1.png" class="img-sign" style="height: 50%; width: 50%;" />
                </div>
                <div class="container-fluid">
                    <div class="input-patung" style="text-align: justify;">
                        <p style="text-indent :3em;">Layaknya logo pada tiap lembaga maupun instansi, Universitas
                            Padjadjaran atau yang biasa disebut sebagai Unpad, juga memiliki filosofi tersendiri di
                            balik terbentuknya logo kebanggaan yang dimiliki. Bentuk dan arti lambang Universitas
                            Padjadjaran ditetapkan berdasarkan SK Rektor Nomor: 903/H6.1/KEP/HK/2010 dan terdaftar
                            di Kementerian Hukum dan Hak Asasi Manusia Nomor: 045978 tanggal 5 Februari 2010.</p>

                        <p>Berikut makna dari tiap unsur yang ada dalam logo Universitas Padjadjaran:</p>
                        <ol class="list-group list-group-numbered" style="text-align: left;">
                            <li><span style="font-weight: bold; font-size: 20px">Obor</span><br> Gambar obor dalam
                                logo Unpad menggambarkan ilmu yang merupakan suluh penerangan kehidupan, yang
                                membawa cahaya bahagia menuju keluhuran budi.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Kujang</span><br>Ilustrasi kujang
                                yang berada di dua sisi berbeda ialah senjata pusaka orang Sunda sebagai lambang
                                kekuatan dan keberanian untuk melindungi hak dan kebenaran, yang menjadi tugas ilmu
                                pengetahuan. </li>
                            <li><span style="font-weight: bold; font-size: 20px">Sayap</span><br> Gambar sayap yang
                                terlukis dalam bentuk daun paku ialah sindiran terhadap kota Pakuan yang mengandung
                                kata “paku” yang merupakan Pusat Kebesaran dari Keprabuan “Padjadjaran” dan daun
                                paku ini merupakan sayap berarti senantiasa berusaha mencapai taraf atau mutu yang
                                lebih tinggi.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Roda</span><br> Makna roda ialah
                                kemasyarakatan, seperti halnya dengan roda senantiasa bergerak berputar dalam proses
                                perubahan dan yang menjadi corak Universitas Padjadjaran.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Bunga Teratai</span><br>
                                Terpampangnya ilustrasi bunga teratai yang sedang mekar dalam logo Universitas
                                Padjadjaran berarti jaya abadi, suci sepanjang masa, lambang kebudayaan dan
                                pendidikan.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Pentagon</span><br> Bentuk logo
                                Universitas Padjadjaran berupa perisai yang berbentuk segi lima terinspirasi dari
                                Pancasila, asas negara yang menjadi pedoman bagi segala usaha serta kegiatan
                                universitas demi kepentingan negara dan bangsa.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Kuning</span><br> Warna kuning yang
                                menjadi warna dasar pada logo Universitas Padjadjaran berarti kejayaan dan keluhuran
                                budi.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Merah</span><br> Terdapatnya warna
                                merah pada ilustrasi nyala obor dan roda dalam logo menggambarkan kebersihan.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Putih</span><br> Warna putih yang
                                digunakan sebagai warna kujang dan teratai berarti kejujuran dan kesucian.</li>
                            <li><span style="font-weight: bold; font-size: 20px">Hitam</span><br> Warna hitam yang
                                digunakan pada lambang sayap pada logo Universitas Padjadjaran berarti keteguhan,
                                kekuatan, dan ketabahan hati.</li>
                        </ol>
                        <br>
                        <br>
                        <p style="text-indent :3em;">Logo Universitas Padjadjaran dan makna-makna tersirat di
                            dalamnya tentu telah dibuat dengan penuh harapan dan doa untuk seluruh unsur yang
                            mengiringi kehidupan Universitas Padjadjaran. Logo tersebut juga telah menjadi ciri khas
                            keluarga mahasiswa Unpad yang tentunya harus kita jaga dan harumkan namanya. Untuk
                            mewujudkan itu semua, tentunya Pramuda harus tetap menjaga nyala obor semangat di hati
                            Pramuda.</p>
                        <h3 style="text-align:center;">Aku, kamu, kita, salam satu Unpad!</h3>
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
        .input-patung {
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