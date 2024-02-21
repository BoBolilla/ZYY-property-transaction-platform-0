<template>
  <footer>
    <div class="footer w">
      <div class="main">
        <div class="logo">
          <img src="@/assets/images/logo.png" />
        </div>
        <div class="content">
          <div class="about">
            <h4>About Us</h4>
            <h4>关于我们</h4>
          </div>
          <div class="contact">
            <h4>Contact Us</h4>
            <h4>联系我们</h4>
            <div class="info">
              <p>Tel: 188 8888 8888</p>
              <p>Add：开封市顺河回族区明伦街85号</p>
              <p>P.C: 475001</p>
              <p>E-Mail: 1329300101@jsyx.com</p>
            </div>
          </div>
          <div class="using">
            <h4>Using Tutorials</h4>
            <h4>使用教程</h4>
          </div>
        </div>
        <div class="net">
          <img src="@/assets/images/net.png" />
        </div>
      </div>
      <div class="buttom">
        <h4>法律支持</h4>
        <div>
          <p>豫公网安备41000000000000</p>
          <p>豫ICP备05000000号</p>
          <p>版权所有 Copyright @ 2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 300px;
  overflow: hidden;
  color: white;
  background-color: #434343;
}
.footer {
  height: 300px;
}
.main {
  height: 200px;
}
.logo {
  float: left;
  width: 200px;
  height: 200px;
}
img {
  margin: 0 auto;
  margin-top: 130px;
}
.content {
  float: left;
  width: 600px;
  height: 200px;
  border-bottom: white solid 1px;
}
.about,
.contact,
.using {
  float: left;
  width: 200px;
  height: 200px;
  padding: 10px;
}
h4 {
  text-align: center;
}
.info {
  margin-top: 20px;
  margin-left: 20px;
}
.info p {
  margin: 5px;
  font-size: 12px;
}
.buttom h4 {
  text-align: center;
  margin-top: 40px;
  font-weight: 1;
}
.buttom > div {
  margin: 0 200px;
}
.buttom p {
  display: inline-block;
  margin: 0 16px;
}
</style>
