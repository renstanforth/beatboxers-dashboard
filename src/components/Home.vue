<template>
  <div>
    <navigation page="home"></navigation>
  </div>
</template>

<script>
import navigation from "@/components/Header.vue";

export default {
  data() {
    return {
      user: {
        displayName: null,
        email: null,
      },
      showProfileDropdown: false,
    };
  },
  components: {
    navigation
  },
};
</script>
