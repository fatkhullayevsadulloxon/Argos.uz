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
        padding-top: 26px;
        padding-bottom: 26px;
        font-family: sans-serif;
        font-size: 30px
    }

    .books__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .books__list{
        width: 370px;
        background-color: white;
        height: 95px;
        border-radius: 5px
    }

    .books__list:hover{
        background-color: rgb(213, 213, 213);
        transition: ease-in-out 0.2s
    }

    .books__link{
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none
    }

    .books__link h4{
        font-family: sans-serif;
        color: gray;
        opacity: 0.9;
    }

    .books__link p{
        color: gray;
        opacity: 0.7;
        margin-top: 5px
    }

    .books__link img{
        margin-left: 5px;
        margin-top: 10px
    }

    .flex{
        margin-left: 10px;
        margin-top: 20px
    }

    .books__img{
        background-color: white;
         box-shadow: 5px 5px 10px -5px black;
         width: 90px;
         height: 60px;
         margin-left: 20px
    }
</style>

