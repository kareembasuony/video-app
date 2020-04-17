<template>
  <v-app dark>
    <div class="layout d-flex align-center justify-center text-center">
      <h1 class="text-capitalize lato-light display-1 pa-1">
        welcome to videos application project
      </h1>
    </div>
    <v-container>
      <!-- first channel -->
      <h1 class="lato-regular display-1">{{ channelOneTitle }}</h1>
      <v-row>
        <v-col
          sm="12"
          md="4"
          v-for="item in channelOne"
          :key="item"
          class="text-center"
        >
          <vytia-player
            width="296"
            height="200"
            :ytid="item.snippet.resourceId.videoId"
          ></vytia-player>
          <p>{{ item.snippet.title }}</p>
        </v-col>
      </v-row>
      <!-- second channel -->
      <h1 class="lato-regular display-1">{{ channelTwoTitle }}</h1>
      <v-row>
        <v-col
          sm="12"
          md="4"
          v-for="item in channelTwo"
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
      <!-- third channel -->
      <h1 class="lato-regular display-1">{{ channelThreeTitle }}</h1>
      <v-row>
        <v-col
          sm="12"
          md="4"
          v-for="item in channelThree"
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
      <!-- fourth channel -->
      <h1 class="lato-regular display-1">{{ channelFourTitle }}</h1>
      <v-row>
        <v-col
          sm="12"
          md="4"
          v-for="item in channelFour"
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
      <!-- fifth channel -->
      <h1 class="lato-regular display-1">{{ channelFiveTitle }}</h1>
      <v-row>
        <v-col
          sm="12"
          md="4"
          v-for="item in channelFive"
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
    <div class="d-flex justify-center align-center">
      <nuxt-link to="/search" style="text-decoration:none">
        <v-btn color="red darken-2" class="mb-5">
          Go to search for more
        </v-btn></nuxt-link
      >
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //first channel
      channelOne: [],
      channelOneTitle: "",
      //second channel
      channelTwo: [],
      channelTwoTitle: "",
      //third channel
      channelThree: [],
      channelThreeTitle: "",
      //fourth channel
      channelFour: [],
      channelFourTitle: "",
      //fifth channel
      channelFive: [],
      channelFiveTitle: ""
    };
  },
  async created() {
    //to get more videos you can write maxResults Parameter in the get url
    //get first channel videos
    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU-4KnPMmZzwAzW7SbVATUZQ&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8"
      )
      .then(res => {
        this.channelOneTitle = res.data.items[0].snippet.channelTitle;
        this.channelOne = res.data.items;
      })
      .catch(err => {
        console.log(err);
      });
    //get second channel videos
    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU1FYFqgdW_1LueJTmXn-8cg&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8"
      )
      .then(res => {
        this.channelTwoTitle = res.data.items[0].snippet.channelTitle;
        this.channelTwo = res.data.items;
      })
      .catch(err => {
        console.log(err);
      });
    //get third channel videos
    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUSJbGtTlrDami-tDGPUV9-w&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8"
      )
      .then(res => {
        this.channelThreeTitle = res.data.items[0].snippet.channelTitle;
        this.channelThree = res.data.items;
      })
      .catch(err => {
        console.log(err);
      });
    //get fourth channel videos
    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU07e1ZK4KWoDWnCN-z6VUiA&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8"
      )
      .then(res => {
        this.channelFourTitle = res.data.items[0].snippet.channelTitle;
        this.channelFour = res.data.items;
      })
      .catch(err => {
        console.log(err);
      });
    //get fifth channel videos
    await axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUjMdgUQQM68S7tdXspE45Ag&key=AIzaSyCuY8bf9-bPzfHYsjDHM_s7ofTfSADt_z8"
      )
      .then(res => {
        this.channelFiveTitle = res.data.items[0].snippet.channelTitle;
        this.channelFive = res.data.items;
      })
      .catch(err => {
        console.log(err);
      });
  },
  head() {
    return {
      title: "home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best Videos Application"
        }
      ]
    };
  }
};
</script>
<style>
.layout {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(#000000a0, #000000a0),
    url("../assets/szabo-viktor-4QmSdCP4bhM-unsplash.jpg");
  background-position: center;
  background-size: cover;
}
</style>
