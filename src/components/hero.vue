<template>
    <div class="hero">
        <div class="container">
            <div class="hero__list">
                <h1>Davlat fuqarolik xizmatchilari vakant lavozimlarining yagona ochiq portali</h1>
                <a target="_blank" href="https://my.argos.uz/">
                    my.argos.uz
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "hero"
}
</script>

<style scoped>
    .hero{
        background-image: url("../assets/img/back.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 670px;
    }

    .hero__list h1{
        color: white;
        font-family: sans-serif;
        max-width: 800px;
        padding-top: 350px;
        font-size: 40px;
        margin-bottom: 24px
    }

    .hero__list a{
        text-decoration: none;
        background-color:  rgb(57, 57, 198);
        color: white;
        padding: 14px 33px;
        border-radius: 8px;
        font-family: sans-serif;
        border: 1px solid  rgb(57, 57, 198)
    }
    
    .hero__list a:hover{
        background-color: white;
        color:  rgb(57, 57, 198);
        transition: all 0.4s;

    }
</style>

