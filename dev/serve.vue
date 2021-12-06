<script>
import Vue from 'vue';
import ColorPicker from '@/color-picker.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    ColorPicker
  },
  data(){
    return {
      colorValue:''
    }
  },
  methods:{
    receiveColor(colorValue){
      this.colorValue = colorValue
    }
  }
});
</script>

<template>
  <div id="app">
    {{colorValue}}
    <color-picker :draggable="true" @receiveColor="receiveColor"></color-picker>
  </div>
</template>
