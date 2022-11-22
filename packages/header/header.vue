<template>
  <header class="header">
    <nav role="navigation">
      <div>
        <div>|||</div>
        <div>logo</div>
      </div>
      <div>
        <form target="_blank" action="/search" accept-charset="UTF-8" method="get">
          <input name="type" type="hidden" value="index" />
          <input type="text" name="q" v-model="text" @input="search" autocomplete="off" placeholder="搜索" class="search-input" />
          <a class="search-btn" href="javascript:;"><i class="iconfont ic-search"></i></a>
        </form> 
      </div>
      <div>
        <a href="javascript:;" @click="login">登录·注册</a>
        <ul id="ul2">
					<li ><a href="#">女装</a></li>
					<li><a href="#">男装</a></li>
					<li><a href="#">童装</a></li>
				</ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "you-header",
  data(){
    return {
      timer:null,
      text:''
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted(){
    let expire = localStorage.getItem('access')
    if(expire < 999){
      localStorage.clear()
    }
    localStorage.getItem('access')
  },
  methods:{
    search(){
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.$fetch.api('search',{q:this.text}).then(res=>{
            console.log(res)
        })
      },300);
    },
    user(){},
    info(){},
    follow(){},
    login(){
      console.log('login');
      console.log(this.$login.show());
    }
  }
};
</script>
<style>
.header{
  position: sticky;
  top: 0;
  height: 60px;
  
  box-shadow: 0px 2px 0px 0px #f33;
}
.header nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
      height: 100%;
    padding: 0 10px;
}
</style>