<template>
  <main>
    <AdminSideBar :page="2"></AdminSideBar>
    <div class="table-responsive">
      <h1>sub sidy capital</h1>
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">date</th>
          <th scope="col">category</th>
          <th scope="col">category2</th>
          <th scope="col">category3</th>
          <th scope="col">count</th>
        </tr>
        </thead>
        <tbody>
        <tr :class="click_id === item.id ? 'hover' : ''" @click="line_click(item)" v-for="(item, i) in current_page_data" :key="i">
          <td>{{item.date}}</td>
          <td>{{item.category}}</td>
          <td>{{item.category2}}</td>
          <td>{{item.category3}}</td>
          <td>{{item.count}}</td>
        </tr>
        </tbody>
      </table>
      <!--<ul class="pagination justify-content-center">-->
        <!--<li :class="prev_disable?'page-item disabled' : 'page-item'">-->
          <!--<a class="page-link" href="#" tabindex="-1" @click="prev_pages()">Previous</a>-->
        <!--</li>-->
        <!--<li :class="current_page_number+1===item?'page-item active':'page-item'" v-for="(item, i) in paging" :key="i"><a class="page-link" @click="click_specific_number(item-1)">{{item}}</a></li>-->
        <!--<li class="page-item" @click="search_page"><a class="page-link" >...{{total_page_number}}</a></li>-->
        <!--<li :class="next_disable?'page-item disabled' : 'page-item'">-->
          <!--<a class="page-link" @click="next_pages()">Next</a>-->
        <!--</li>-->
      <!--</ul>-->
      <AdminPagenation :category="'capital'"></AdminPagenation>
      <div style="margin-right:150px;padding: 10px; float:right;">
        <input placeholder="파일명" type="file" accept=".xlsx ,.csv, appliction/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
               class="control_input" @change="get_file($event)"/>
        <input placeholder="업로드" type="submit" @click="upload_file()" class="control_input"/>
      </div>
    </div>
  </main>
</template>

<script>
import AdminSideBar from './AdminSideBar'
import {ref,inject} from "vue"
import {fetch_api, post_excel_file} from "../plugin.js"
import urlTemplates from "@/composables/urlTemplates";
import AdminPagenation from "./AdminPagenation"
// import AdminSearchPageModal from "./AdminSearchPageModal"

  export default {
    name: "AdminSubsidyCapital",
    components:{
      // AdminSearchPageModal,
      AdminSideBar,
      AdminPagenation,
    },
    setup: function () {
      // api call, data 뿌리고, 기능 20개를 기준으로 자르고
      let current_page_data = ref([])
      let current_page_number = ref(0)
      let emitter = inject('emitter')
      let file = ref('')
      let isClick = ref(false)
      let click_id = ref(0)
      function call_table_data(){
        let page_url = urlTemplates.admin_subsidy_capital_page(current_page_number.value, 20)
        fetch_api(page_url, (data) => {
          console.log(data)
          current_page_data.value = data.content
        })
      }
      function get_file(data){
        console.log(data.target.files[0])
        file.value = data.target.files[0]
      }
      function upload_file(){
        let formData = new FormData()
        formData.append('file', file.value)
        if(file.value === ''){
          alert('파일이 선택되어 있지 않습니다.')
        }else {
          let file_url = urlTemplates.upload_excel_file()
          post_excel_file(file_url, formData, (data) => {
            console.log(data)
            window.location.reload()
          })
        }
      }
      function line_click(data){
        console.log(data)
        if(!isClick.value){
          click_id.value = data.id
          isClick.value = true
        }else{
          click_id.value = 0
          isClick.value = false
        }

      }
      //emitter 영역
      emitter.on('change_data', (data) =>{
        // console.log(data)
        current_page_data.value = data
      })
      call_table_data()
      return {
        current_page_data,get_file, upload_file, line_click, click_id

      }
    }
  }
</script>

<style scoped>
.hover{
  border-color: black; border-width: 2px;
}
</style>