<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <div class="display-1 font-weight-bold mb-3 mt-3">
            Object Detection Application
        </div>        
      </div>
    </v-app-bar>
    <v-main>
      <div class="text-center my-5">
        <p class="subheading font-weight-regular">
          Please upload a picture (jpeg or png) to detect objects (people or vehicles) in it.
        </p>
      </div>
      <v-row class="text-center" justify="center">
        <image-uploader @imageposted="sendDataToImageRenderer($event)"/>
      </v-row>

      <v-row class="text-center" justify="center">
        <image-renderer v-if="imageRendererData" :imageRendererData="imageRendererData"/>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ImageUploader from './components/ImageUploader';
import ImageRenderer from './components/ImageRenderer';

export default {
  name: 'App',
  data () {
      return {
        imageRendererData: undefined,
      }
    },
  components: {
    ImageUploader,
    ImageRenderer,
  },
  methods: {
    sendDataToImageRenderer(imageRendererData) {
      this.imageRendererData = imageRendererData;
    },
  }
};
</script>
