<template>
  <main>
    <AdminSideBar :page="3"></AdminSideBar>
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
        <tr>
          <td>1,001</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
        </tr>
        <tr>
          <td>1,002</td>
          <td>placeholder</td>
          <td>irrelevant</td>
          <td>visual</td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>data</td>
          <td>rich</td>
          <td>dashboard</td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>information</td>
          <td>placeholder</td>
          <td>illustrative</td>
        </tr>
        <tr>
          <td>1,004</td>
          <td>text</td>
          <td>random</td>
          <td>layout</td>
        </tr>
        <tr>
          <td>1,005</td>
          <td>dashboard</td>
          <td>irrelevant</td>
          <td>text</td>
        </tr>
        <tr>
          <td>1,006</td>
          <td>dashboard</td>
          <td>illustrative</td>
          <td>rich</td>
        </tr>
        <tr>
          <td>1,007</td>
          <td>placeholder</td>
          <td>tabular</td>
          <td>information</td>
        </tr>
        <tr>
          <td>1,008</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
        </tr>
        <tr>
          <td>1,009</td>
          <td>placeholder</td>
          <td>irrelevant</td>
          <td>visual</td>
        </tr>
        <tr>
          <td>1,010</td>
          <td>data</td>
          <td>rich</td>
          <td>dashboard</td>
        </tr>
        </tbody>
      </table>
      <div style="padding: 10px">
        <input placeholder="날짜 선택 기능" class="control_input"/>
        <input placeholder="파일명" class="control_input"/>
        <input placeholder="찾아오기" class="control_input"/>
        <input placeholder="업로드" class="control_input"/>
      </div>
    </div>
  </main>
</template>

<script>
import AdminSideBar from './AdminSideBar'
  export default {
    name: "AdminSubsidyCapital",
    components:{
      AdminSideBar
    }
  }
</script>

<style scoped>

</style>