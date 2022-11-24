<template>
    <section class="winner">
        <div class="container">
            <div class="winner__flex">
                <h1 class="winner__heading">Tanlov G'oliblari</h1>
                <router-link to="/press-center/winner">Barcha g'oliblar</router-link>
            </div>
            <div class="winner__container">
                <div class="winner__list" v-for="winner in winners" :key="winner.id">
                    <router-link v-bind:to="winner.href" class="winner__block">
                        <img class="winner__img" v-bind:src="winner.img" alt="bu" width="270" height="350">
                        <div class="flex">
                            <p class="flex__desc">{{winner.desc}}</p>
                        <h3 class="flex__heading">{{winner.name}}</h3>
                        <p class="flex__motiv">{{winner.motiv}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "winner",
    props: {
        winners: {
            type: Array
        }
    }
}
</script>

<style scoped>
    .winner__img{
        z-index: -3;
        border-radius: 5px;
        background: linear-gradient(#e66465, #9198e5);
    }

    .winner__block:hover{
            transition: all 0.4s;
        box-shadow: 2px 2px 10px -5px black;
    }

    .winner__heading{
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .winner__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .winner__flex{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .flex{
        margin-top: -90px;
        position: absolute
    }

    .flex__desc{
        margin: 0;
        padding: 0;
        color: black
    }

    .flex__heading{
        padding: 0;
        margin: 0;
        color: black
    }

    .flex__motiv{
        max-width: 320px;
        color: black
    }
    
</style>
