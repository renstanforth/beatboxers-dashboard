<template>
  <div>
    <div class="nav-header">
        <a href="index.html" class="brand-logo">
            <!-- <img class="logo-abbr" src="../assets/logo.png" alt="">
            <img class="logo-compact" src="../assets/logo.png" alt=""> -->
            <img class="brand-title" src="../assets/logo.png" alt="">
        </a>

        <div class="nav-control">
            <div class="hamburger">
                <span class="line"></span><span class="line"></span><span class="line"></span>
            </div>
        </div>
    </div>
    <div class="header">
      <div class="header-content">
        <nav class="navbar navbar-expand">
          <div class="collapse navbar-collapse justify-content-between">
            <div class="header-left"></div>

            <ul class="navbar-nav header-right">
              <li class="nav-item dropdown header-profile">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  @click="showProfileDropdown = !showProfileDropdown"
                >
                  <div class="header-info">
                    <span
                      >Hi <strong>{{ user.displayName }}</strong>!</span
                    >
                  </div>
                  <img :src="user.photoURL" width="20" alt="" />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  :class="{ show: showProfileDropdown }"
                >
                  <a href="/profile" class="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-primary"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span class="ml-2">Profile </span>
                  </a>
                  <a href="#" class="dropdown-item ai-icon" @click="logOut()">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-danger"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span class="ml-2">Logout </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="deznav">
      <div class="deznav-scroll mm-active ps">
        <ul class="metismenu mm-show" id="menu">
          <li :class="{ 'mm-active': page === 'home' }">
            <a href="/" class="ai-icon" aria-expanded="false">
              <i class="flaticon-381-networking"></i>
              <span class="nav-text">Dashboard</span>
            </a>
          </li>
          <li :class="{ 'mm-active': page === 'profile' }">
            <a href="/profile" class="ai-icon" aria-expanded="false">
              <i class="flaticon-381-user-7"></i>
              <span class="nav-text">Profile</span>
            </a>
          </li>
          <li :class="{ 'mm-active': page === 'settings' }">
            <a href="/settings" class="ai-icon" aria-expanded="false">
              <i class="flaticon-381-settings-2"></i>
              <span class="nav-text">Settings</span>
            </a>
          </li>
          <li :class="{ 'mm-active': page === 'users' }">
            <a href="/users" class="ai-icon" aria-expanded="false">
              <i class="flaticon-381-user-9"></i>
              <span class="nav-text">Users</span>
            </a>
          </li>
          <li :class="{ 'mm-active': page === 'battles' }">
            <a href="/battles" class="ai-icon" aria-expanded="false">
              <i class="flaticon-381-microphone"></i>
              <span class="nav-text">Battles</span>
            </a>
          </li>
          <li :class="{ 'mm-active': page === 'message-board' }">
            <a href="/message-board" class="ai-icon" aria-expanded="false">
              <i class="flaticon-381-list"></i>
              <span class="nav-text">Message Board</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  props: ['page'],
  data() {
    return {
      user: {
        displayName: null,
        email: null,
      },
      showProfileDropdown: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
};
</script>
