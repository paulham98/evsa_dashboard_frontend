<template>
  <header>
    <div class="inner">
      <img src="../../public/images/logo.png" alt="" class="logo">
    </div>
    <div class="line">
      <div class="inner">
        <h1>우리 지역 한눈에</h1>
        <div>
          <ul>
            <li><router-link :to="{name:'Evsa_sup_current'}"><a class="active">전기차 보조금 현황</a></router-link></li>
            <li><router-link :to="{name:'Evsa_sup_cal'}"><a class="active">전기차 보조금 계산기</a></router-link></li>
            <li><router-link :to="{name:'Evsa_apply_guide'}"><a class="active">보조금 신청 가이드</a></router-link></li>
          </ul>
        </div>
        <a href="#" class="login"><img src="images/login.png" alt=""></a>
      </div>
    </div>
  </header>
  <!--
  <router-link :to="{name:'Main'}"><a class="navbar-brand">IMG</a></router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-left-item">
            <router-link  :to="{name:'Main'}">
             <h2 class="nav-link active" aria-current="page">우리지역 한눈에</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  :to="{name:'Evsa_sup_current'}">
              <a class="nav-link" href="#">전기차 보조금 현황</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  :to="{name:'Evsa_sup_cal'}">
              <a class="nav-link" href="#">전기차 보조금 계산기</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  :to="{name:'Evsa_apply_guide'}">
              <a class="nav-link" href="#">보조금 신청 가이드</a>
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  -->
</template>

<script>
  export default {
    name: "Top_navBar"
  }
</script>

<style scoped>
</style>