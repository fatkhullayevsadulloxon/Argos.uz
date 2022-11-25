<template>
    <section class="link">
            <div class="container">
            <h1 class="link__heading">Foydali Havolalar</h1>
                <div class="link__container" >
                        <a class="link__block" v-for="link in links" :key="link.id" v-bind:href="link.href">
                            <img v-bind:src="link.img" alt="" width="50" height="50">
                            <h4>{{link.title}}</h4>
                            <p>{{link.domen}}</p>
                        </a>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    name: "links",
    props: {
        links:{
            type: Array
        }
    }
}
</script>

<style scoped>
    .link{
        margin-top: 50px
    }

    .link__heading{
        margin-top: 40px;
        margin-bottom: 40px
    }

    .link__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .link__block{
        background-color: white;
        margin-left: 20px;
        width: 160px;
        height: 200px;
        border-radius: 5px;
        transition: margin-top 0.4s, box-shadow 0.4s, color 0.4s;
    }

    .link__block:hover{
        margin-top: -20px;
        transition: all 0.4s;
        box-shadow: 2px 2px 16px -5px black;
    }

    .link__block:hover h4{
        color: green
    }
    .link__block:hover p{
        color: green
    }

    .link__block img{
        margin-left: 50px;
        margin-top: 20px
    }

    .link__block h4{
        text-align: center;
        margin-left: 10px;
        margin-top: 20px !important;
        margin-right: 10px;
        padding: 0;
        margin: 0;
        position: absolute;
        max-width: 150px;
        color: black
    }

    .link__block p{
        margin: 0 auto;
        margin-top: 100px;
        position: absolute;
        text-align: center;
        margin-left: 30px;
    }
</style>
