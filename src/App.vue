<template>
    <div>
     <menu-modal v-model:show="modalVisible">
      <burger-menu :hideModal="hideModal"/>
    </menu-modal>
          <Header/>
          <Navbar :showModal="showModal"/>
          <footerg/>
    </div>
</template> 
<script>
import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"
import MenuModal from "./components/MenuModal.vue"
import burgerMenu from "./components/burgerMenu.vue"
import footerg from "./components/footer.vue"


export default {
    name: "App",
    components : {
      Header,
      Navbar,
      MenuModal,
      burgerMenu,
      footerg,
    },
    data() {
      return {
          modalVisible: false,        
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
  body{
    background-color: whitesmoke
  }
</style>

