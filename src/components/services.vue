<template>
    <div>
        <section class="servis">
            <div class="container">
               <div class="heading">
                 <h1 class="servis__heading">Interaktiv xizmatlar</h1>
                 <router-link to="/services">Barcha xizmatlarimiz</router-link>
               </div>
                <ul class="list">
                    <li class="item" v-for="comment in comments" :key="comment.id">
                       <div class="servis__link-block wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.6s">
                         <a class="servis__link" v-bind:href="comment.href">
                            <div class="flex">
                                 <img class="img" width="60" v-bind:src="comment.img" :key="comment.id" alt="">
                            <h3 >{{comment.title}}</h3>
                            </div>
                            <hr>
                        <p>{{comment.text}}</p>
                        </a>
                       </div>
                    </li>
                </ul>
                <ul class="list">
                    <li class="item" v-for="servis in services" :key="servis.id">
                       <div class="servis__link-block">
                         <router-link class="servis__link" v-bind:to="servis.href">
                            <div class="flex">
                                 <img class="img" width="60" v-bind:src="servis.img" :key="servis.id" alt="">
                            <h3 >{{servis.title}}</h3>
                            </div>
                            <hr>
                        <p>{{servis.text}}</p>
                         </router-link>
                       </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "services",
    props: {
        comments: {
            type: Array
        },
        services: {
            type: Array
        }
    }
}
</script>

<style scoped>

        .servis{
            background-image: url('../assets/img/servis-bg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 500px;
            margin-top: 50px
        }

        .servis__heading{
            font-family: sans-serif;
            font-size: 36px;
            color: white;
            padding-top: 40px
        }

        .heading{
            display: flex;
            align-items: center;
            justify-content: space-between
        }

        .flex{
            display: flex;
            align-items: center;
        }

        .heading a{
            text-decoration: none;
            font-family: sans-serif;
            color:  white;
            opacity: 0.8;
        }

        .list{
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
        }

        .servis__link-block{
            background-color: #1E2F97;
            width: 280px !important;
            height: 150px;
            cursor: pointer;
            border-radius: 8px;
             box-shadow: 16px 16px 16px -20px black;
             border-top: 8px solid  rgb(7, 7, 177);
             position: relative;
             z-index: 2;
             margin-top: 20px;
              transition: margin-top 0.5s;
        }


        .servis__link-block:hover{
            margin-top: -15px;
            transition: all 0.3s ease 0s;
            width: 300px;
        }

        .servis__link-block::after{
            content: "";
            height: 0; 
            left: 0; 
            top: 0; 
            width: 100%;  
            position: absolute; 
            transition: all 0.3s ease 0s; 
            -webkit-transition: all 0.3s ease 0s; 
            z-index: -1;
        }

        .servis__link-block:hover::after{ height: 100%; }
        .servis__link-block::after{ background:#fff; }

        .servis__link-block p{
            color:  white;
            font-family: sans-serif;
            margin-left: 20px;
            margin-top: 15px;
        }

        .servis__link-block:hover h3{
            color: #1E2F97
        }

        .servis__link-block:hover p{
            color: #1E2F97
        }

        .servis__link-block h3{
            color:  white;
            font-family: sans-serif;
            margin-top: 10px;
            margin-left: 5px
        }

        .servis__link-block hr{
            color:  white;
            margin-left: 20px;
            margin-right: 20px;
            margin-top: 5px
        }

        .servis__link-block img{
            margin-left: 20px;
            margin-top: 20px
        }

        .servis__link{
            text-decoration: none;
        }

</style>
