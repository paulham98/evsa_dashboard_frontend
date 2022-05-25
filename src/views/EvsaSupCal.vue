<template>
  <Top_navBar></Top_navBar>
  <div class="inner">
    <p class="tit mt100">전기차 보조금 계산기</p>
    <div class="area3">
      <div class="select">
        <button class="label">서울특별시</button>
        <ul class="option">
          <li class="item">서울특별시1</li>
          <li class="item">서울특별시2</li>
          <li class="item">서울특별시3</li>
          <li class="item">서울특별시4</li>
        </ul>
      </div>
      <div class="select">
        <button class="label">서울특별시</button>
        <ul class="option">
          <li class="item">서울특별시1</li>
          <li class="item">서울특별시2</li>
          <li class="item">서울특별시3</li>
          <li class="item">서울특별시4</li>
        </ul>
      </div>
    </div>
    <div class="table_wrap">
      <table>
        <thead>
        <tr>
          <th>시·도</th>
          <th>지 역</th>
          <th>보조금(승용)</th>
          <th>보조금(초소형)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>전라북도</td>
          <td>완주군</td>
          <td>1400</td>
          <td>560%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <p class="color_gray mt10">*  전기차 지자체 보조금은 국비와 지방비를 합산한 총 금액입니다.</p>
    <p class="tit mt100">차량별 보조금 확인</p>
    <div class="area3">
      <div class="select">
        <button class="label">서울특별시</button>
        <ul class="option">
          <li class="item">서울특별시1</li>
          <li class="item">서울특별시2</li>
          <li class="item">서울특별시3</li>
          <li class="item">서울특별시4</li>
        </ul>
      </div>
      <div class="select">
        <button class="label">서울특별시</button>
        <ul class="option">
          <li class="item">서울특별시1</li>
          <li class="item">서울특별시2</li>
          <li class="item">서울특별시3</li>
          <li class="item">서울특별시4</li>
        </ul>
      </div>
    </div>
    <img src="images/car.png" alt="" class="car">
    <ul class="price">
      <li>
        <div>보조금 잔여대수 <em>2,200 / 3,000</em> 대</div>
        <div>접수율 <span class="percent color_blue">72%</span></div>
      </li>
      <li>
        <div>차량 가격</div>
        <div><em>5,039</em> 만원</div>
      </li>
      <li>
        <div>차량 가격</div>
        <div><em>-900</em> 만원</div>
      </li>
      <li>
        <div>구매 가격</div>
        <div><span class="color_blue">4,139</span> 만원</div>
      </li>
    </ul>
    <div class="area4">
      <p class="color_gray">* 국비+지방비 = 보조금</p>
      <p class="color_gray">*보조금은 지자체 출고 및 접수 마감으로 예산 소진 시 지급 종료됩니다.</p>
      <p class="color_gray">*잔여대수는 전체(우선순위+일반+법인+택시) 공고대수 대비 남은 전체 잔여대수입니다.</p>
      <p class="color_gray">*차량 가격은 기본 가격으로 옵션에 따라 변경될 수 있습니다.</p>
    </div>
  </div>
</template>

<script>
  import Top_navBar from "../components/TopNavBar"
  export default {
    name: "Evsa_sup_cal",
    components: {
      Top_navBar,
    }
  }
</script>

<style scoped>

</style>
