<template>
    <div class="modal-backdrop">
        <div class="modal-quiz-container d-flex flex-column justify-content-center">
            <div class="submit-content">
                <div class="head-submit">
                    <img src="../img/logo_cendrawasih.png" class="img" />
                    <h2 class="title-submit">Berbagai Web Unpad yang Wajib Diketahui Pramuda</h2>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="input-sub" style="text-align: justify;">
                            <p style="text-indent :3em;">Halo, Pramuda! Tak terasa, agenda perkuliahan akan segera
                                dimulai. Untuk mempermudah kebutuhan akademik dan non-akademik seluruh mahasiswa Unpad
                                selama masa perkuliahan. Unpad menyediakan berbagai website yang dapat diakses oleh
                                Pramuda. Yuk, disimak baik-baik!</p>


                            <ol class="list-group list-group-numbered" style="text-align: left;">
                                <li><span style="font-weight: bold; font-size: 18px">PAuS
                                        (paus.unpad.ac.id)</span><br><br> Padjadjaran Authentication System (PAuS)
                                    adalah sistem autentikasi mahasiswa, dosen, dan staf Unpad yang menggunakan
                                    teknologi single sign-on (SSO) agar dapat mengakses berbagai layanan di Universitas
                                    Padjadjaran. Beberapa fungsi web PAuS, di antaranya aktivasi email Unpad, aktivasi
                                    akses Unpad Wifi yang dapat diakses di kampus Unpad, serta aktivasi layanan
                                    e-journal yang dapat diakses oleh seluruh mahasiswa Unpad. Pramuda dapat
                                    mengaktifkan akun PAuS setelah mendapatkan Kartu Tanda Mahasiswa (KTM) saat daftar
                                    ulang.</li><br>
                                    <img src="../img/paus.png"><br>

                                <li><span style="font-weight: bold; font-size: 18px">PACIS
                                        (students.unpad.ac.id)</span><br><br>Web Padjadjaran Academics Information
                                    System (PACIS) adalah website yang dapat mendukung aktivitas akademik mahasiswa
                                    selama berkuliah di Unpad. Pada web PACIS, mahasiswa dapat mengakses transkrip
                                    nilai, jadwal mata kuliah, kartu rencana studi, status registrasi, mendaftar
                                    kegiatan KKN, dan mendaftar wisuda. Pramuda dapat mengakses web PACIS setelah
                                    Pramuda mengaktifkan akun PAuS.</li><br>
                                    <img src="../img/pacis.png"><br>

                                <li><span style="font-weight: bold; font-size: 18px">LiVE
                                        (reguler.live.unpad.ac.id)</span><br><br> Web Learning in Virtual Environment
                                    (LiVE) Unpad adalah salah satu website yang paling sering digunakan dalam
                                    pelaksanaan e-learning di Unpad. Umumnya, dosen akan memberikan materi perkuliahan
                                    pada LiVE Unpad dan mahasiswa dapat mengakses materi perkuliahan yang telah
                                    diberikan. Tidak jarang, pelaksanaan ujian semester pun dilaksanakan secara daring
                                    menggunakan LiVE Unpad. Untuk dapat mengakses web LiVE, Pramuda dapat log in
                                    menggunakan PAuS ID atau mendaftar menggunakan email.</li><br>
                                    <img src="../img/regular_live.png"><br>

                                <li><span style="font-weight: bold; font-size: 18px">Lacak Odong
                                        (siat.unpad.ac.id/sarpras/angkutankampus)</span><br><br>Web Lacak Odong adalah
                                    website yang dapat membantu Pramuda untuk melacak keberadaan odong-odong. Pada web
                                    Lacak Odong, akan muncul letak berbagai odong-odong sesuai dengan warna: hijau,
                                    kuning, dan merah. Odong-odong dengan keterangan warna hijau menandakan angkutan
                                    jalur saintek, sedangkan odong-odong dengan keterangan warna kuning menandakan
                                    angkutan jalur soshum. Terdapat pula odong-odong dengan keterangan warna merah, yang
                                    menandakan angkutan tersebut sedang tidak beroperasi.</li><br>
                                    <img src="../img/lacak_odong.png"><br>

                                <li><span style="font-weight: bold; font-size: 18px">Lacak Kantin
                                        (siat.unpad.ac.id/sarpras/kantin)</span><br><br>Serupa dengan website Lacak
                                    Odong, website Lacak Kantin berguna bagi Pramuda yang penasaran dengan letak
                                    kantin-kantin yang berada di Unpad. Dengan website Lacak Kantin, Pramuda dapat
                                    menemukan berbagai kantin dengan makanan yang enak, variatif, serta harganya yang
                                    ramah di kantong mahasiswa. </li><br>
                                    <img src="../img/lacak_kantin.png"><br>

                                <li><span style="font-weight: bold; font-size: 18px">Jalatista
                                        (siat.unpad.ac.id/sarpras/jalatista)</span><br><br>Jalatista adalah keran air
                                    yang telah melalui proses penyaringan sehingga airnya menjadi siap diminum. Tiap
                                    mahasiswa yang mengisi air minum di Jalatista tidak dikenakan biaya apapun, alias
                                    gratis. Hingga saat ini, Jalatista sudah dapat ditemukan di berbagai titik di Unpad,
                                    yang keberadaannya bisa dilacak dengan mengakses website Lacak Jalatista. </li><br>
                                    <img src="../img/jalatista.png"><br>
                            </ol>
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
    @media (min-width: 576px) {
        .input-sub {
            padding: 30px 80px;
        }
    }
    .img {
        height: 120px;
        width: 80px;
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