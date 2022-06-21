<template>
  <div class="modal modal-sheet " tabindex="-1" role="dialog" id="modalSheet">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-6 shadow">
        <div class="modal-header border-bottom-0">
          <h5 class="modal-title">페이지 검색</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close_modal"></button>
        </div>
        <div class="modal-body py-0">
          <form class="row g-3">
            <div class="col-auto">
              <input class="form-control" v-model="page_number" placeholder="숫자만 입력해주세요."/>
            </div>
            <div class="col-auto">
              <button class="btn btn-lg btn-primary  mx-0 mb-2" @key_up.enter.prevent="submit_page(page_number)" @click="submit_page(page_number)">Search</button>
            </div>
          </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {inject, ref} from "vue"
  export default {
    name: "AdminSearchPageModal",
    setup(){
      let emitter = inject("emitter")
      let page_number = ref('')
      function close_modal(){
        let data = [false, 0]
        emitter.emit("close_search_page", (data))
      }
      function submit_page(number){
        if(!parseInt(number)){
          alert('숫자만 입력해주세요')
        }else{
          let data = [false, parseInt(number)]
          emitter.emit("close_search_page", (data))
        }
      }
      return{
        close_modal, page_number, submit_page
      }
    }

  }
</script>

<style scoped>
  .modal{
    z-index: 999;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }
  /*.modal-container{*/
    /*background: white;*/
    /*width: 80%;*/
    /*padding: 1.5rem;*/
    /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
  /*}*/
</style>