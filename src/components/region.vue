<template>
    <section class="region">
        <div class="container">
            <div class="region__container">
                <div class="region__left">
                    <img class="region__img" src="../assets/img/Uzbekistan.svg" alt="" width="700">
                    <div class="whole__country">
                        <h3>Butun Respublika</h3>
                    </div>
                </div>
                <div class="region-right">
                  <div class="region-right__country">
                    <h3 class="region-rigth__heading">Butun respublika</h3>
                  </div>
                   <div class="region-right__country-bottom">
                   <img class="region__icon" src="icon.svg" alt="bu">
                    <h3 class="region-rigth__heading-bottom">Jami bo‘sh ish o‘rinlari</h3>
                    <p>1075</p>
                  </div>
                   <div class="region-right__country-bottom">
                   <img class="region__icon" src="icon.svg" alt="bu">
                    <h3 class="region-rigth__heading-bottom">Tashkilotlar soni</h3>
                    <p>14395</p>
                  </div>
                   <div class="region-right__country-bottom">
                   <img class="region__icon" src="icon.svg" alt="bu">
                    <h3 class="region-rigth__heading-bottom">Rezyumelar soni</h3>
                    <p>1241780</p>
                  </div>
                   <div class="region-right__country-bottom">
                   <img class="region__icon" src="icon.svg" alt="bu">
                    <h3 class="region-rigth__heading-bottom">Qabul qilinganlar</h3>
                    <p>130897</p>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "region"
}
</script>

<style scoped>

    .region__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .region__left{
        background-color: white;
        width: 750px;
            box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.27);
-webkit-box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.27);
-moz-box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.27);
border-radius: 5px
    }

    .region__left img{
        padding: 40px;
        cursor: pointer;
    }

    .region__img:hover{
        opacity: 0.4;
    }

    .region__icon{
        background-color: #1E2F97;
        padding: 15px;
        border-radius: 5px;
        margin-left: 10px
    }

    .whole__country{
        background-color: #1E2F97;
        width: 200px;
        font-size: 16px;
        border-radius: 3px
    }

    .whole__country h3{
        font-family: sans-serif;
        padding: 20px;
    }

    .region-right{
            background-color: white;
            box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.27);
-webkit-box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.27);
-moz-box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.27);
border-radius: 5px;
  width: 400px;
  height: 549px;
    }

    .region-right__country{
        background-color: #1E2F99;
        width: 320px;
        height: 60px;
        margin: 0 auto;
        border-radius: 5px;
        margin-top: 30px
    }

    .region-rigth__heading{
        padding: 8px 16px;
        color: white;
        font-family: sans-serif;
        font-size: 20px;
    }

    .region-right__country-bottom{
         background-color: rgb(208, 204, 204);
        width: 320px;
        height: 60px;
        margin: 0 auto;
        border-radius: 5px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .region-rigth__heading-bottom{
        color: black;
        opacity: 0.7;
        font-family: sans-serif;
        font-size: 14px;
        margin-left: -30px
    }

    .region-right__country-bottom p{
        color: #1E2F97;
        font-family: sans-serif;
        font-size: 16px;
        margin-right: 5px;
        font-weight: 700
    }
</style>
