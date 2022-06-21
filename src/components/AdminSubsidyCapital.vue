<template>
  <AdminSearchPageModal v-if="show_modal"></AdminSearchPageModal>
  <main>
    <AdminSideBar :page="2"></AdminSideBar>
    <div class="table-responsive">
      <h1>sub sidy capital</h1>
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">category</th>
          <th scope="col">category2</th>
          <th scope="col">category3</th>
          <th scope="col">count</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in current_page_data" :key="i">
          <td>{{item.category}}</td>
          <td>{{item.category2}}</td>
          <td>{{item.category3}}</td>
          <td>{{item.count}}</td>
        </tr>
        </tbody>
      </table>
      <ul class="pagination justify-content-center">
        <li :class="prev_disable?'page-item disabled' : 'page-item'">
          <a class="page-link" href="#" tabindex="-1" @click="prev_pages()">Previous</a>
        </li>
        <li :class="current_page_number+1===item?'page-item active':'page-item'" v-for="(item, i) in paging" :key="i"><a class="page-link" @click="click_specific_number(item-1)">{{item}}</a></li>
        <li class="page-item" @click="search_page"><a class="page-link" >...{{total_page_number}}</a></li>
        <li :class="next_disable?'page-item disabled' : 'page-item'">
          <a class="page-link" @click="next_pages()">Next</a>
        </li>
      </ul>
      <div style="margin-right:150px;padding: 10px; float:right;">
        <input placeholder="파일명" type="file" class="control_input"/>
        <input placeholder="업로드" type="submit" class="control_input"/>
      </div>
    </div>
  </main>
</template>

<script>
import AdminSideBar from './AdminSideBar'
import {ref, inject} from "vue"
import {fetch_api} from "../plugin.js"
import urlTemplates from "@/composables/urlTemplates";
import AdminSearchPageModal from "./AdminSearchPageModal"
  export default {
    name: "AdminSubsidyCapital",
    components:{
      AdminSearchPageModal,
      AdminSideBar
    },
    setup: function () {
      // api call, data 뿌리고, 기능 20개를 기준으로 자르고
      // let capital_page = ref([])
      let current_page_number = ref(0)
      let current_page_data = ref([])
      let total_page_number = ref(0)
      let start_number = ref(1)
      let end_number = ref(10)
      let remainder = ref(0)
      let next_disable = ref(false)
      let prev_disable = ref(true)
      let paging = ref([])
      let emitter = inject('emitter')
      let show_modal = ref(false)

      function call_page() {
        let page_url = urlTemplates.subsidy_capital_page(current_page_number.value, 20)
        fetch_api(page_url, (data) => {
          console.log(data)
          paging.value = []
          current_page_data.value = data.content
          total_page_number.value = data.totalPages
          remainder.value = current_page_number.value % 10
          start_number.value = current_page_number.value - remainder.value + 1
          end_number.value = current_page_number.value - remainder.value + 10
          // 끝까지 갔을때 끝숫자 총 페이지 숫자랑 맞춰주는 로직
          if (end_number.value >= total_page_number.value) {
            end_number.value = total_page_number.value
            for (let i = start_number.value; i <= end_number.value; i++) {
              paging.value.push(i)
            }
            next_disable.value = true
          } else {
            for (let i = start_number.value; i <= end_number.value; i++) {
              paging.value.push(i)
            }
            next_disable.value = false
          }
          // call 될 때마다 next, prev 버튼의 disable 여부를 판단해야함
          let start_tmp = start_number.value - 10
          if (start_tmp < 0) {
            prev_disable.value = true
          } else {
            prev_disable.value = false
          }
          console.log(start_number.value, end_number.value)

        })
      }

      function next_pages() {
        paging.value = []
        current_page_number.value += 10
        call_page()
      }

      function prev_pages() {
        paging.value = []
        let tmp = current_page_number.value - 10
        if (tmp < 0) {
          current_page_number.value = 0;
          call_page()
        } else {
          current_page_number.value -= 10;
          call_page()
        }
      }

      function click_specific_number(number) {
        console.log(number)
        current_page_number.value = number
        call_page()
      }

      function search_page() {
        if (show_modal.value === false){
          console.log(1)
          show_modal.value = true
        } else show_modal.value = false
      }

      // emitter 영역
      emitter.on('close_search_page', (data) => {
        let real_id = data[1]-1
        if(real_id > total_page_number.value){
          return alert('잘못된 입력값입니다.')
        }else{
          if (show_modal.value === true) show_modal.value = data[0]
          current_page_number.value = real_id
          call_page()
        }
        // console.log(data)
      })


      call_page()
      return {
        current_page_data,
        current_page_number,
        start_number,
        end_number,
        prev_disable,
        next_disable,
        total_page_number,
        show_modal,
        next_pages,
        prev_pages,
        paging,
        click_specific_number,
        search_page
      }
    }
  }
</script>

<style scoped>

</style>