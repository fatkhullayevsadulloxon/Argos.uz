<template>
    <div class="">
    <menu-modal v-model:show="modalVisible">
      <burger-menu :hideModal="hideModal"/>
    </menu-modal>
          <Header/>
          <Navbar :showModal="showModal"/>
          <hero/> 
    </div>
   
</template>

<script>
  import Header from "./components/Header"
  import Navbar from "./components/Navbar"
  import MenuModal from "./components/MenuModal"
  import burgerMenu from "./components/burgerMenu"
  import hero from "./components/hero"
export default {
    name: "App",
    components : {
      Header,
      Navbar,
      MenuModal,
      burgerMenu,
      hero
    },
    data() {
      return {
          modalVisible: false  
      }
    },
    methods: {
      showModal(){
        this.modalVisible = true
      },
      hideModal() {
        this.modalVisible = false
      }
    },
}
</script>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

  *{
    margin: 0;
    padding: 0
  }

  .container{
    width: 1250px;
    margin: 0 auto;
    padding: 0 20px
  }
</style>



