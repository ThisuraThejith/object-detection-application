<template>
  <v-container>
    <div v-if="imageRendererData">
      <canvas id="demo"/>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      imageRendererData: Object
    },
    data() {
      return {
        source: '',
        apiResponse: undefined,
      }
    },
    mounted() {
      this.source = URL.createObjectURL(this.$props.imageRendererData.imageFile);
      this.apiResponse = this.$props.imageRendererData.apiResponse;
      const canvas = document.getElementById('demo'); // Canvas Element
      const ctx = canvas.getContext('2d');
      const img = new Image; 
      // White line for demo
      ctx.strokeStyle = '#ffffff'; 

      
      img.src = this.source;
      img.apiResponse = this.apiResponse;
      // Start image loading, when done draw and setup 
      img.onload = start;

      function start() {
        // Initial draw of image
        ctx.canvas.width = this.width;
        ctx.canvas.height = this.height;
        ctx.drawImage(img, 0, 0, this.width, this.height);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = 'white';
        ctx.shadowColor = '#d53';
        ctx.shadowBlur = 20;
        ctx.lineJoin = 'bevel';
        ctx.lineWidth = 2;

        let x,y,box_width,box_height;
        this.apiResponse.data.boxes.forEach((box) => {
          x = Math.round(box.bbox[0] * this.width); // X coordinate of initial point of the drawn box
          y = Math.round(box.bbox[1] * this.height); // Y coordinate of initial point of the drawn box
          box_width = Math.round(box.bbox[2] * this.width); // Width of the drawn box
          box_height = Math.round(box.bbox[3] * this.height); // Height of the drawn box
          ctx.strokeRect(x, y, box_width, box_height);
        });
      }
    }
  }
</script>