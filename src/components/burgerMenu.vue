<template>
    <div>
        <button @click="hideModal">Bekor Qilish</button>
        <div class="navbar">
             <div class="container">
                <nav class="sitenav">
                    <div class="sitenav__container">
                        <div class="sitenav__about">
                            <h3 class="sitenav__heading">Agentlik</h3>
                             <ul class="list">
                            <li class="item">
                                <router-link class="link" to="/about">Agentlik haqida</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/regional-branches">Hududiy filiallar</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/structure">Tashkiliy tuzilma</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/adminstration">Rahbariyat</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/centrel-adminstration">Markaziy Apparat</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/documents">Me'yoriy hujjatlar</router-link>
                            </li>
                        </ul>
                        </div>
                        <div class="sitenav__about">
                            <h3 class="sitenav__heading">Faoliyat</h3>
                             <ul class="list">
                            <li class="item">
                                <router-link class="link" to="/static/elyurt">Elyurt jamg'armasi</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/static/regional-branches">O'zbekiston Respublikasi Prezidenti huzuridagi Davlat boshqaruv akademiyasi</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/static/davlat-xizmati">Davlat xizmatini rivojlantirish qo'llab quvvatlash jamg'armasi</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/centrel-adminstration">Markaziy Apparat</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/documents">Me'yoriy hujjatlar</router-link>
                            </li>
                        </ul>
                        </div>
                        <div class="sitenav__about">
                            <h3 class="sitenav__heading">Agentlik</h3>
                             <ul class="list">
                            <li class="item">
                                <router-link class="link" to="/about">Agentlik haqida</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/regional-branches">Hududiy filiallar</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/structure">Tashkiliy tuzilma</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/adminstration">Rahbariyat</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/about/centrel-adminstration">Markaziy Apparat</router-link>
                            </li>
                            <li class="item">
                                <router-link class="link" to="/documents">Me'yoriy hujjatlar</router-link>
                            </li>
                        </ul>
                        </div>
                    </div>  
                </nav>
             </div>
       </div>
    </div>
</template> 

<script>
export default {
    name: "burger-menu",
    props: {
        hideModal: {
            type: Function
        }
    }
}
</script>

<style scoped>
    .sitenav__heading{
        margin: 0;
        padding: 0;
        color: rgb(94, 94, 231);
        font-family: sans-serif;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .sitenav__about{
        margin: 50px
    }

    .sitenav__container{
        display: flex;
    }
    
    .list{
        list-style: none;
    }

    .item{
        margin-top: 20px;
        max-width: 200px;
    }

    .link{
        text-decoration: none;
        font-family: sans-serif;
        color: rgb(117, 115, 115);
        cursor: pointer;
    }

    .link:hover{
        margin-left: 10px;
        transition: all 0.2s ease-in-out;
        color:  rgb(94, 94, 231); 
    }
</style>

