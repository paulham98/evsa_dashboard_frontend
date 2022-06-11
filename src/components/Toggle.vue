<template>
  <div>
    <Toggle v-model="on_off" @change="show_toggle()"/>
  </div>
</template>

<script>
import Toggle from '@vueform/toggle'
import {ref,inject} from "vue"
export default {
  name: "Toggle_btn",
  components: {
    Toggle,
  },
  setup(){
    let on_off = ref(false)
    let emitter = inject("emitter")
    function show_toggle(){
      emitter.emit('show_pred_trend', on_off.value)
    }
    return{on_off, show_toggle}
  }
}
</script>

<style src="@vueform/toggle/themes/default.css">
.toggle{ display: inline-block!important;}
</style>
