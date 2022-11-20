<template>
    <section class="media">
        <div class="container">
            <nav class="sitenav">
                <ul class="list">
                    <li class="item">
                        <p @click="mediaModal" class="link">Fotogalareya</p>
                    </li>
                    <li class="item">
                        <p @click="mediaModal" class="link">Videogalereya</p>
                    </li>
                    <li class="item">
                        <p class="link">Audioteka</p>
                    </li>
                    <li class="item">
                        <p  class="link">Siyosiz-marifiy soat</p>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: "media",
    props: {
        mediaModal: {
            type: Function
        }
    },
    data() {
        return {
            isActive: false      
        }
    },
}
</script>

<style scoped>
    .media{
        background-color: rgb(214, 210, 210);
        margin-top: 100px;
    }

    .list{
        display: flex;
        align-items: center;
        list-style: none;
        padding: 30px !important;
    }

    .item{
        margin-left: 50px
    }

    .link{
        font-family: sans-serif;
        color: gray;
        font-size: 26px;
        cursor: pointer;
    }

    .active{
        border-bottom: 2px solid rgb(14, 14, 155)
    }

</style>
