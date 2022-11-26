<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__list">
                    <img class="footer__logo" src="../assets/img/footer__logo.png" alt="" width="350" height="150">
                    <p class="footer__desc">Islom Karimov 43, 100163, O‘zbekiston</p>
                    <p class="footer__desc"> info@argos.uz</p>
                </div>
                <div class="footer__list-center">
                    <h3>Agentlik</h3>
                    <ul class="list">
                        <li class="item">
                           <router-link class="link" to="/about">Agentlik</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/anout/regional-branches">Hududiy filiallar</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/about/structure">Tashkiliy tuzilma</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/about/adminstration">Rahbariyat</router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/about/central-adminstration">Markaziy apparat</router-link>
                        </li>
                        <li class="item">    
                            <router-link class="link" to="/documents">Markaziy apparat</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__list-right">
                    <h3>Ochiq ma'lumotlar</h3>
                    <ul class="list">
                        <li class="item">
                           <router-link class="link" to="/press-center/open-data">PF-6247-sonli Farmonga muvofiq ochiq maʼlumotlar</router-link>
                        </li>
                        <li class="item">
                           <router-link class="link" to="/press-center/budget-open-data">Byudjet to‘g‘risidagi qonunchilik hujjatlariga muvofiq ochiq maʼlumotlar</router-link>
                        </li>
                        <li class="item">
                           <router-link class="link" to="/static/responsibles">Ochiq maʼlumotlar uchun masʼullar</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__list-form">
                    <form class="form">
                        <input class="input" type="text" placeholder="info@argos.uz">
                        <button class="footer__btn">Obuna bo'lish</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footerg"
}
</script>

<style scoped>
    .footer{
        background-color: #1E2F97;
        margin-top: 100px;
        height: 400px;
    }

    .footer__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .footer__desc{
        opacity: 0.7;
        color: white;
    }

    .footer__list-center{
        margin-top: 90px
    }

    .list{
        list-style: none
    }
    
    .item{
        margin-top: 20px;
        max-width: 200px
    }

    .link{
        color: white;
        max-width: 50px !important;
    }

    .footer__list-right{
        margin-top: 50px
    }

    h3{
        color: white
    }

    .input{
        background-color: #101d74;
        border: none;
        width: 240px;
        height: 40px;
        border-radius: 5px;
        outline: none;
        color: white
    }

    .footer__btn{
        width: 100px;
        height: 36px;
        border-radius: 5px;
        background-color: #1E2F97;
        color: white;
        margin-left: -102px;
        border: none ;
        transition: background-color 4s
    }

    .footer__btn:hover{
        background-color: #101d74;
        transition: all 0.4s
    }
</style>
