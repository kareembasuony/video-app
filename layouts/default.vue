<template>
  <v-app dark>
    <v-app-bar color="red darken-2" dark fixed>
      <nuxt-link to="/" class="nav-link"
        ><v-toolbar-title class="white--text"
          >Videos App</v-toolbar-title
        ></nuxt-link
      >
      <nuxt-link to="/search" class="nav-link"
        ><v-toolbar-title class="white--text ml-5"
          >Search</v-toolbar-title
        ></nuxt-link
      >

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>Created by Kareem &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
<style>
.lato-light {
  font-family: "Lato", sans-serif;
  font-weight: 300;
}
.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
}
.nav-link {
  text-decoration: none;
}
</style>
