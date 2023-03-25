<template>
  <div :class="{ backdrop_sidebar: !isShow }" @click.self="handleShowSidebar">
    <div class="sidebar">
      <div class="d-flex flex-row">
        <div>
          <div class="sidebar-menu" :class="{ active: isShow }">
            <div class="d-flex align-items-start flex-column bd-highlight">
              <div class="menu-row px-5 mt-4">
                <li>
                  <div class="d-flex flex-row">
                    <div class="py-3 bd-highlight">
                      <span
                        ><i class="fa fa-user-o" aria-hidden="true"></i
                      ></span>
                    </div>
                    <div class="p-3 bd-highlight">
                      <router-link class="router-text" to="/profile">
                        <b>Profile</b></router-link
                      >
                      <!-- <b> <a href="/penugasan/profile"> Home </a> </b> -->
                    </div>
                  </div>
                </li>
              </div>
              <div class="menu-row px-5 my-2">
                <li>
                  <div class="d-flex flex-row">
                    <div class="py-3 bd-highlight">
                      <span
                        ><i class="fa fa-ellipsis-v" aria-hidden="true"></i
                      ></span>
                    </div>
                    <div class="p-3 bd-highlight">
                      <router-link class="router-text" to="/lain-lain"
                        ><b>Lain - Lain</b></router-link
                      >
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            class="open-button"
            @click="handleShowSidebar"
            :class="{ active: !isShow }"
          >
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    handleShowSidebar() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.backdrop_sidebar {
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  /* visibility: hidden; */
}

/* .backdrop.color {
  background-color: rgba(0, 0, 0, 0.5);
} */

.open-button {
  background-color: transparent;
  border: 0.5px solid white;
  margin-top: 100px;
  padding: 2px 6px;
  color: white;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  position: fixed;
}

.open-button.active {
  visibility: hidden;
}

.open-button:hover {
  background-color: transparent;
  border: 0.5px solid black;
  color: black;
  border-radius: 5px;
}

.close-button {
  background-color: transparent;
  border: 0.5px solid black;
  margin: 10px;
  padding: 0px 6px;
  color: black;
  border-radius: 5px;
  font-size: 15px;
  visibility: hidden;
  cursor: pointer;
}

.sidebar {
  margin-top: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
}

.sidebar-menu {
  position: fixed;
  min-width: 20%;
  min-height: 60vh;
  background-color: white;
  border-radius: 10px;
  left: 0;
}

.sidebar-menu.active {
  left: 0;
}

.sidebar-menu li {
  list-style: none;
  text-align: left;
}

li span {
  display: inline-block;
  font-size: 20px;
  width: 40px;
  height: 40px;
  text-align: center;
}

b a {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 950px) {
  .sidebar-menu.active {
    left: -100%;
  }
  .close-button {
    visibility: visible;
  }
}

@media only screen and (min-width: 950px) {
  .open-button {
    visibility: hidden;
  }
  .backdrop_sidebar {
    position: relative;
    background-color: transparent;
  }
}
</style>
