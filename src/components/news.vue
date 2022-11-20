<template>
    <div class="container">
        <section class="news">
            <div class="news__container">
               <div class="news-left">
              <h3 class="news__heading">Kun yangiliklari</h3>
                 <router-link class="news-left__link" to="/backend/yoqda">
                    <img class="news-left__img" src="../assets/img/big-img.jpg" alt="" width="527" height="418">
                    <p class="news-left__desc">Odob-axloq qoidalari - davlat fuqarolik xizmatchisining xalq bilan samarali ishlashga...</p>
                </router-link>
               </div>

                <div class="news-right">
                    <router-link class="news-left__link" to="/backend/yoqda">
                    <img class="news-right__img" src="../assets/img/small-img-1.jpg" alt="" width="390" height="188">
                    <p class="news-right__desc">Odob-axloq qoidalari - davlat fuqarolik xizmatchisining xalq bilan samarali ishlashga...</p>
                </router-link>
                 <router-link class="news-left__link" to="/backend/yoqda">
                    <img class="news-right__img2" src="../assets/img/small-img-2.jpg" alt="" width="390" height="218">
                    <p class="news-right__desc">Odob-axloq qoidalari - davlat fuqarolik xizmatchisining xalq bilan samarali ishlashga...</p>
                </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "news"
}
</script>

<style scoped>
    .news{
        margin-top: 82px;
    }

    .news__container{
        display: flex
    }

    .news__heading{
        margin-bottom: 20px;
        font-family: sans-serif;
        font-size: 30px
    }

    .news-left__img{
        border-radius: 8px;
        z-index: -3
    }

    .news-left__link{
        text-decoration: none
    }

    .news-left__desc{
        margin-top: -74px;
        color: white;
        font-family: sans-serif;
        font-size: 20px;
        max-width: 500px;
        margin-left: 34px;
    }

    .news-right{
        margin-left: 5px
    }

    .news-right__img{
        margin-top: 55px;
        border-radius: 8px
    }

    .news-right__img2{
        margin-top: 25px;
        border-radius: 8px
    }

    .news-right__desc{
        margin-top: -74px;
        color: white;
        font-family: sans-serif;
        font-size: 16px;
        max-width: 300px;
        margin-left: 34px;
    }
</style>

