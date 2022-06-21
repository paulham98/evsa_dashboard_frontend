<template>
  <main>
    <AdminSideBar :page="1"></AdminSideBar>
    <div class="table-responsive">
      <h1>car_name</h1>
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th style="width:10%" scope="col">id</th>
          <th style="width:20%" scope="col">category</th>
          <th style="width:50%" scope="col">category2</th>
          <th style="width:20%" scope="col">car price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in current_page_data" :key="i">
          <td>{{item.id}}</td>
          <td>{{item.category}}</td>
          <td>{{item.category2}}</td>
          <td>{{item.carPrice}}만</td>
        </tr>
        </tbody>
      </table>
      <AdminPagenation :category="'name'"></AdminPagenation>
      <div style="margin-right:150px;padding: 10px; float:right;">
        <input placeholder="파일명" type="file" class="control_input"/>
        <input placeholder="업로드" type="submit" class="control_input"/>
      </div>
    </div>
  </main>

</template>

<script>
import AdminSideBar from './AdminSideBar'
import {ref,inject} from "vue"
import {fetch_api} from "../plugin.js"
import urlTemplates from "@/composables/urlTemplates";
import AdminPagenation from "./AdminPagenation"

  export default {
    name: "AdminCarName",
    components:{
      AdminPagenation,
      AdminSideBar
    },
    setup: function () {
      // api call, data 뿌리고, 기능 20개를 기준으로 자르고
      let current_page_data = ref([])
      let current_page_number = ref(0)
      let emitter = inject('emitter')

      function call_table_data(){
        let page_url = urlTemplates.admin_car_name(current_page_number.value, 20)
        fetch_api(page_url, (data) => {
          console.log(data)
          current_page_data.value = data.content
        })
      }
      //emitter 영역
      emitter.on('change_data', (data) =>{
        // console.log(data)
        current_page_data.value = data
      })
      call_table_data()
      return {
        current_page_data,

      }
    }
  }
</script>

<style scoped>
table{table-layout: fixed}
</style>