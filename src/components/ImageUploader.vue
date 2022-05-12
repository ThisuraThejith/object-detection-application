<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs3>
        <v-file-input
          accept="image/png, image/jpeg"
          placeholder="Pick an image"
          prepend-icon="mdi-camera"
          label="Image"
          @change="selectFile"
        ></v-file-input>
      </v-flex>
      <v-flex xs1>
        <v-btn
          :loading="loading"
          :disabled="loading || !this.currentFile"
          color="primary"
          class="ma-2 white--text"
          @click="postImage"
        >
          Upload
          <v-icon
            right
            dark
          >
            mdi-arrow-up-bold-box-outline
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ApiService from '../services/ApiService';

  export default {
    name: 'HelloWorld',
    data () {
      return {
        loading: false,
        currentFile: undefined,
      }
    },
    methods: {
      selectFile(file) {
        this.currentFile = file;
      },
      postImage() {
        if (this.currentFile) {
          this.loading = true
          ApiService.upload(this.currentFile).then(response => {
            const data = response;
            const imageRendererData = {
              apiResponse : data,
              imageFile : this.currentFile,
            }
            this.$emit('imageposted', null)
            setTimeout(() => {
              this.$emit('imageposted', imageRendererData)
            }, 10)
            this.loading = false;
          });
        }
      }
    }
  }
</script>
