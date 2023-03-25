<template>
  <div id="appy">
    <img src="./img/sertif/jadi.png" style="width: 1000px; height:1000px; position: absolute; " class="center" />
    <div style="position: relative; text-align: center;">
      <div style="height: 50px; width: 1000px; padding-top: 200px;">
        <h6 class="nomr">{{ code }}/PRABU/BEM-KMUP/VIII/2021</h6>
      </div>
      <div style="height: 50px; width: 1000px; padding-top: 60px;">
        <h5 class="name">{{ name }}</h5>
      </div>
      <div style="height: 300px; width: 1320px; padding-top: 230px">
        <table class="center">
          <tr>
            <td class="cert">{{ attendance }}</td>
          </tr>
          <tr>
            <td class="cert">{{ assignment }}</td>
          </tr>
          <tr>
            <td class="cert">{{ assessment }}</td>
          </tr>
          <tr>
            <td class="cert" style="color: white;">{{ total }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div style="position: relative; text-align: center">
    <div style="height: 50px; width: 900px; padding-top: 460px">
      <button
        @click="makePDF"
        class="btn btn-primary"
        style="position: absolute"
      >
        Make PDF
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
export default {
  data() {
    return {
      name : "",
      code : "",
      attendance : "",
      assignment : "",
      assessment : "",
      total : "",
    };
  },
  name: "Sertif",
  methods: {
    makePDF() {
      window.html2canvas = html2canvas;
      var doc = new jsPDF("l", "px", [1004, 1004]);
      doc.html(document.querySelector("#appy"), {
        callback: function (pdf) {
          pdf.save("mypdf.pdf");
        },
      });
    },
    getData() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/profile/sertificate`,
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.name = res.data.name;
          this.attendance = res.data.attendance;
          this.assignment = res.data.assignment;
          this.assessment = res.data.assessment;
          this.total = res.data.total;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    getCode() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/profile/sertificate/create`,
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.code = res.data.code;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    this.getData();
    this.getCode();
  },
};
</script>
<style scoped>
.cent {
  display: flex;
  justify-content: center;
}

table.center {
  margin-left: auto;
  margin-right: auto;
}

  td.cert {
    padding-top: 32px;
    font-weight: bold;
    color: #a6a6a8;
  }

  h5.name {
    text-align: center;
    color: #ee9a98;
    font-size: 30px;
    -webkit-text-stroke: 1px #7b2b2c;
    font-weight: 700;
  }
  h6.nomr {
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }
</style>
