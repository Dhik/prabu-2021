<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1 col-md-1 col-lg-3" :class="{}">
        <Sidebar @close="toggleModal" />
      </div>
      <div class="col-11 col-md-11 col-lg-9">
        <div class="content-container">
          <div class="d-flex flex-row">
            <div
              class="dashboard-card card-penugasan text-center"
              style="width: 18rem"
            >
              <img
                src="https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-task-icon-for-your-project-png-image_1520262.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Sertifikat & Rapot</h5>
                <router-link class="btn btn-card" to="/sertif">
                  <!-- /raport -->
                  Klik Disini</router-link
                >
                <!-- <a href="#" class="btn btn-card">Klik Disini</a> -->
              </div>
            </div>
            <div
              class="dashboard-card card-penugasan text-center"
              style="width: 18rem"
            >
              <img
                src="https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-task-icon-for-your-project-png-image_1520262.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Presensi</h5>
                <router-link class="btn btn-card" to="/presensi">
                  <!-- /presensi -->
                  Klik Disini</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
.dashboard-card {
  border-radius: 10px;
  margin: 0px 10px;
}
.btn-card {
  margin-top: 15px;
  background-color: #3b928c;
  color: white;
}
.card-penugasan {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
  box-shadow: 2px 5px 10px rgba(63, 63, 63, 0.604);
}
</style>
