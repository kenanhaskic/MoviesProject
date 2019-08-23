<template>
  <div id="app">
    <div id="navbar">
            <input id="input" v-model="name" placeholder="Search">

<router-link class='nav-bar' to="/">Home</router-link>
    </div>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  
  name: 'app',
  data () {
    return {
    
    }
  },
  
}
</script>
<style>
body{
  color:white;
  background-color: #333232;
}
.nav-bar{
  text-decoration: none;
  color:white;  
  font-size: 20px;
  margin: 20px;
  text-transform: uppercase;
  
}
.nav-bar:hover{
  color: aqua;
}
#navbar{
  text-align: center;
  background-color:#1d1b1b;
  display: absolute;
  height:30px;
  padding: 5px; 
  

}
#input{
  margin-left:-580px;
  display: absolute;
  margin-right: 350px;
  width:230px;
  height:20px;
  opacity: 0.2;
}
#input:hover{
  opacity: 0.5;

}

</style>
