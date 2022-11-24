<template>
    <section class="vacancy">
        <div class="container" >
            <div class="vacancy__container" >
               <div class="ui grid">
                    <div class="five wide column" v-for="vacan in vacancy" :key="vacan.id">
                         <a class="vacan__list" target="_blank"  v-bind:href="vacan.to">
                            <div class="flex">
                                <h4>{{vacan.title}}</h4>
                                <p>{{vacan.data}}</p>
                            </div>
                             <p class="desc">{{vacan.desc}}</p>
                             <hr class="vacan__hr">
                             <div class="flex">
                                <p>{{vacan.locat}}</p>
                                <p>{{vacan.buy}}</p>
                             </div>
                         </a>
                    </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "vacancy",
    props :{
        vacancy: {
            type: Array
        }
    }
}
</script>

<style scoped>
    .column{
        background-color: white;
        margin-top: 20px;
        box-shadow: 2px 2px 10px -5px black;
        height: 200px;
        border-radius: 5px;
         transition: margin-top 0.3s;
    }

    .column:hover{
        margin-top: 1px;
        transition: ease-in-out 0.6s;
        box-shadow: 2px 2px 10px -2px black;
    }

    .grid{
        justify-content: space-between
    }

    .vacancy{
        margin-top: 50px !important;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .flex h4{
        color: rgb(48, 133, 48);
        font-weight: 500
    }

    .flex p{
        color: gray
    }

    .vacan__hr{
        position: relative;
        z-index: 1;
        margin-top: 70px
    }

    .desc{
        color: gray
    }
</style>
