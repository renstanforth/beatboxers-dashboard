<template>
  <div class="authincation h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
                <div class="authincation-content">
                    <div class="row no-gutters">
                        <div class="col-xl-12">
                            <div class="auth-form">
                                <img class="brand-logo" src="../assets/logo.png" alt="Cebu Elite Beatboxers United Logo">
                                <h4 class="text-center mb-4">Login to your account</h4>
                                <section id="firebaseui-auth-container"></section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {};
  },
  mounted() {
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
          ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      var uiConfig = {
          signInSuccessUrl: "/profile", // This redirect can be achived by route using callback.
          signInFlow: "popup",

          signInOptions: [
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
          ]
      };
      ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>