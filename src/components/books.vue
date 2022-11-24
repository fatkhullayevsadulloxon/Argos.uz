<template>
    <div>
        <section class="books">
            <div class="container">
                <h1 class="books__heading">Elektron Kitoblar</h1>
                <div class="books__container">
                    <div class="books__list" v-for="book in books" :key="book.id">
                    <a class="books__link" v-bind:href="book.href">
                            <div class="books__img">
                                <img v-bind:src="book.img" alt="" width="40" height="40">
                            </div>
                        <div class="flex">
                            <h4>{{book.title}}</h4>
                        <p>{{book.text}}</p>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "books",
    props: {
        books :{
            type: Array
        }
    }
}
</script>

<style scoped>
    .books__heading{
        padding-top: 26px !important;
        padding-bottom: 26px !important;
        font-family: sans-serif !important;
    }

    .books__container{
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important
    }

    .books__list{
        width: 370px !important;
        background-color: white !important;
        height: 95px !important;
        border-radius: 5px !important;
        transition: background-color 0.3s;
    }

    .books__list:hover{
        background-color: rgb(213, 213, 213) !important;
        transition: ease-in-out 0.2s !important
    }

    .books__link{
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        text-decoration: none !important
    }

    .books__link h4{
        font-family: sans-serif !important;
        color: gray !important;
        opacity: 0.9 !important;
    }

    .books__link p{
        color: gray !important;
        opacity: 0.7!important;
        margin-top: 5px !important
    }

    .books__link img{
        margin-left: 5px !important;
        margin-top: 10px !important
    }

    .flex{
        margin-left: 10px !important;
        margin-top: 20px !important
    }

    .books__img{
        background-color: white !important;
         box-shadow: 5px 5px 10px -5px black !important;
         width: 90px !important;
         height: 60px !important;
         margin-left: 20px !important
    }
</style>

