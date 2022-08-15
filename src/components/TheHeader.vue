<template>
  <div>
    <v-app-bar
      app
      color=""
    >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Jane Logo"
          class="shrink mr-2"
          contain
          src="require('./assets/Pfp.JPG')"
          transition="scale-transition"
          width="40"
        /> -->

        <v-text
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=''
          width="100"
        >Jane Lim</v-text>
      </div>

      <v-spacer></v-spacer>

        <v-switch
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
        ></v-switch>
        
      <v-btn text fab dark small icon>
        <router-link to="/"><v-icon>mdi-home</v-icon></router-link>
      </v-btn>

      <v-btn text fab dark small icon>
        <router-link to="/about"><v-icon>mdi-account-circle</v-icon></router-link>
      </v-btn>

     <v-btn text fab dark small icon>
        <router-link to="/contact"><v-icon>mdi-phone</v-icon></router-link>
      </v-btn>


    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  // data()
  // {
  //   return 
  //   {

  //   }
  // }

};
</script>
