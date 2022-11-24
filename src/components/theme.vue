<template>
    <section class="theme">
        <div class="container">
            <h1 class="theme__heading">Dolzarb mavzu</h1>
            <div class="theme__container">
                <div class="theme__list" v-for="theme in themes" :key="theme.id">
                   <router-link v-bind:to="theme.href" class="theme__block">
                         <img v-bind:src="theme.img" alt="bu" width="250" height="200">
                    <p>{{theme.data}}</p>
                    <h4>{{theme.title}}</h4>
                   </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "theme",
    props: {
        themes: {
            type: Array
        }
    }
}
</script>

<style scoped>
    .theme{
        background-color: rgb(214, 210, 210);
        margin-top: 50px;
        height: 500px;
    }

    .theme__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .theme__heading{
        padding-top: 40px;
        padding-bottom: 40px
    }

    .theme__list{
        border-radius: 5px;
        width: 280px;
        height: 320px;
        cursor: pointer;
        transition: background-color 0.3s;
        transition: margin-top 0.3s;
    }

    .theme__list:hover {
        background-color: white;
        transition: all 0.4s;
        box-shadow: 2px 2px 10px -5px black;
        margin-top: -20px
    }

    .theme__list:hover h4{
        color: #1E2F97
    }

    .theme__block{
        margin-left: 10px !important;
    }
    
    .theme__block p{
        padding: 0;
        margin: 0;
        margin-left: 10px;
        color: gray
    }

    .theme__block h4{
        margin: 0;
        padding: 0;
        margin-left: 10px;
        color: black
    }

    .theme__list img{
        border-radius: 8px;
        margin-top: 20px;
    }
</style>
