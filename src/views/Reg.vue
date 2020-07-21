<template>
  <div id="reg" class="container">
    <!-- 麵包屑 -->
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25"></b-icon>
        </b-breadcrumb-item>
        <b-breadcrumb-item>
          <router-link to="/reg">新會員註冊</router-link>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <b-row class="justify-content-md-center">
        <b-col class="form" sm="12" lg="6" md="8">
          <p class="h4 text-center mb-4 mt-4">新會員註冊</p>
          <input type="text" class="form-control" placeholder="請輸入姓名" />
          <br />
          <input type="text" class="form-control" placeholder="請輸入電話" />
          <br />
          <input type="email" class="form-control" placeholder="請輸入信箱" />
          <br />
          <input type="email" class="form-control" placeholder="再次輸入你的信箱" />
          <br />
          <input type="password" class="form-control" placeholder="請輸入密碼" />
          <br />
          <input type="password" class="form-control" placeholder="再次輸入你的密碼" />
          <div class="text-center mt-4 mb-4">
            <button class="btn btn-unique" type="submit">會員註冊</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
