<template>
  <v-app :goDark="goDark" @changeTheme="updateTheme($event)">
    <v-main>
      <TheHeader/>
        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
      <router-view></router-view>
      </transition>
    </v-main>
      <v-footer>
      <TheFooter/>
      </v-footer>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";


export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter
},

  data() {
    return { goDark: false };
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
    }
  }
};
</script>
