<template>
  <div>
    <Toggle v-model="on_off" @click="show_toggle()"/>
  </div>
</template>

<script>
import Toggle from '@vueform/toggle'
import {ref,inject} from "vue"
import urlTemplates from "@/composables/urlTemplates";
import {fetch_api} from "../plugin.js"
export default {
  name: "Toggle_btn",
  components: {
    Toggle,
  },
  setup(){
    let on_off = ref()
    let emitter = inject("emitter")
    function show_toggle(){
      let url = urlTemplates.admin_predict_toggle()
      fetch_api(url, data =>{
          console.log(data)
          if(data.num === 0){
            console.log(data.num)
            on_off.value = false
          }else if(data.num === 1){
            console.log(data.num)
            on_off.value = true
          }
        })
    }

    function get_pred_stat(){
      let url = urlTemplates.admin_predict()
      fetch_api(url, data =>{
        console.log('toggle에서 처음 데이터를 구함',data.num)
        if(data.num === 0){
          on_off.value = false
        }else if(data.num === 1){
          on_off.value = true
        }
      })
    }
    get_pred_stat()
    // emitter 영역
    emitter.on('signal to toggle', data =>{
      console.log('toggle 에서 받음',data)
      on_off.value = data
      emitter.emit('show_pred_trend', on_off.value)
    })
    return{on_off, show_toggle}
  }
}
</script>

<style src="@vueform/toggle/themes/default.css">
.toggle{ display: inline-block!important;}
</style>
