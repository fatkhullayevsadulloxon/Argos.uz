<template>
    <div>
       <div class="navbar">
             <div class="container">
            <nav class="sitenav">
            <ul class="list">
             <li class="item">
                    <button @click="showModal">
                        <img src="../assets/img/bars-solid.svg" alt="" width="30" height="30">
                    </button>
                </li>
                <li class="item">
                    <router-link class="link" to="/about">Agentlik</router-link>
                </li>
                <li class="item">
                    <router-link class="link" to="/elyurt">Faoliyat</router-link>
                </li>
                <li class="item">
                    <router-link class="link" to="/services">Interaktiv xizmatlar</router-link>
                </li>
                <li class="item">
                    <router-link class="link" to="/news">Axborot xizmati</router-link>
                </li>
                <li class="item">
                    <router-link class="link" to="/international-news">Xalqaro hamkorlik</router-link>
                </li>
                <li class="item">
                    <router-link class="link" to="/contact">Bog'lanish</router-link>
                </li>
                <li class="item">
                    <router-link class="link" to="/open-data">Ochiq ma'lumotlar</router-link>
                </li>
            </ul>
        </nav>
        </div>
       </div>
    <router-view/>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        showModal: {
            type: Function,
        }
    },
}
</script>


<style scoped>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

    .navbar{
        background-color: white;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
    }

    .link{
        text-decoration: none;
        font-family:  sans-serif;
        color: rgb(117, 115, 115);
        transition: border-bottom 0.3s 
    }

    .link:hover{
        border-bottom: 3px solid green;
        transition: all 0.3s
    }

    .item button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    
</style>

