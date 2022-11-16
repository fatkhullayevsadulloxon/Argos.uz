<template>
        <header class="header">
            <div class="container">
                <div class="header__container">
                    <select class="header__lang-select">
                        <option value="uzb">O'zbekcha</option>
                        <option value="eng">English</option>
                        <option value="rus">Ruscha</option>
                    </select>
                    <div class="header__logo">
                        <a href="#">
                            <img src="../assets/maxresdefault2-removebg-preview.png" alt="" width="300" height="250">
                        </a>
                    </div>
                    <div class="header__link">
                        <a href="https://t.me/murojaat_argos_bot">@murojaat_argos_bot</a>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    .header{
        background-color: aliceblue;
        width: 100%;
        height: 200px;
    }

    .header__container{
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .header__lang-select {
        border: 1px solid rgb(130, 130, 130);
        background-color: transparent;
        font-family: "Mulish" sans-serif;
        width: 100px !important;
        height: 30px;
        border-radius: 5px;
    }

    .header__link a{
        text-decoration: none;
        color: rgb(130, 130, 130);
        font-family: "Mulish" sans-serif;
    }
</style>
