<template>
    <section class="vacancy-bottom">
        <div class="container">
            <div class="vacancy-bottom__container">
                <div class="vacancy-bottom__list" v-for="vacansy in vacancyBottom" :key="vacansy.id">
                    <div class="vacancy-bottom__block">
                        <img class="vacansy__img" v-bind:src="vacansy.img" alt="" width="70" height="70">
                        <h3 class="vacancy-bottom__heading">{{vacansy.title}}</h3>
                        <a v-bind:href="vacansy.href" class="vacansy__desc">{{vacansy.domen}}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "vacancy-bottom",
    props: {
        vacancyBottom: {
            type: Array
        }
    }
}
</script>

<style scoped>
    .vacancy-bottom__container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #1E2F97;
        border-radius: 5px;
        margin-top: 60px
    }

    .vacancy-bottom__list{
        height: 250px;
    }

    .vacancy-bottom__heading{
        max-width: 250px;
        text-align: center;
        color: white;
        margin: 0;
        padding: 0;
        margin-bottom: 50px
    }

    .vacancy-bottom__block{
        margin-left: 20px;
    }

    .vacansy__img{
        margin-left: 90px;
        margin-top: 20px;
        border-radius: 5px
    }

    .vacansy__desc{
        color: white;
        text-align: center;
        margin-left: 50px;
        margin-top: 50px;

    }
</style>
