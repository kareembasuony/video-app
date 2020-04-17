<template>
  <v-app dark>
    <div class="layout d-flex align-center justify-center text-center">
      <div class="text-center">
        <h1 class="text-capitalize lato-light display-1 pa-2">
          search for specific channel id
        </h1>
        <p>You can get channel id from channel url</p>
        <!-- search form -->
        <v-form class="mb-10" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="channelId"
            color="red darken-2"
            :rules="nameRules"
            label="Channel Id"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="red darken-2"
            class="mr-4"
            @click="validate"
          >
            Search
          </v-btn>
        </v-form>
      </div>
    </div>
    <v-container>
      <!-- channel -->
      <h1 class="lato-regular display-1" id="result">{{ channelTitle }}</h1>
      <v-row>
        <v-col
          sm="12"
          md="4"
          v-for="item in channel"
          :key="item"
          class="text-center"
        >
          <vytia-player
            width="296"
            height="200"
            class="video"
            :ytid="item.snippet.resourceId.videoId"
          ></vytia-player>
          <p>{{ item.snippet.title }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      channel: [],
      channelTitle: "",
      valid: true,
      channelId: "",
      nameRules: [v => !!v || "Name is required"]
    };
  },
  methods: {
    validate() {
      //check if form correct
      if (this.$refs.form.validate()) {
        //get playlist id
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${this.channelId}&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8`
          )
          .then(res => {
            const playlistId =
              res.data.items[0].contentDetails.relatedPlaylists.uploads;
            //get videos
            axios
              .get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8`
              )
              .then(res => {
                this.channelTitle = res.data.items[0].snippet.channelTitle;
                this.channel = res.data.items;
                this.$vuetify.goTo("#result", { offset: 100 });
              });
          });
      }
    }
  },
  head() {
    return {
      title: "search"
    };
  }
};
</script>
