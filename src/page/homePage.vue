<template>
    <div class="">
          <hero/> 
          <news/>
          <services :images="images" :comments="comments" :links="links"/>
          <books :books="books"/>
          <media :mediaModal="mediaModal"/>
          <media-modal-slot v-model:media="modalVisible">
              <media-content-modal/>
          </media-modal-slot>
    </div>
   
</template>

<script>
  import hero from "../components/hero"
  import news from "../components/news"
  import services from "../components/services"
  import books from "../components/books"
  import media from "../components/media"
  import mediaModalSlot from "../components/mediaModalSlot"
  import mediaContentModal from "../components/mediaContentModal"
export default {
    name: "homePage",
    components : {
      hero,
      news,
      services,
      books,
      media,
      mediaModalSlot,
      mediaContentModal
    },
    data() {
      return {     
        modalVisible: false,
          comments: [
            {img: 'https://cdn-icons-png.flaticon.com/512/8971/8971724.png', href: "https://my.argos.uz/", title: "Yagona elektron axborot portali", text: "Ma'lumotlarni olish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/4283/4283324.png', href: "https://vacancy.argos.uz/", title: "Bo'sh ish o'rinlari", text: "Vakansiyalarni ko'rish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/1321/1321977.png', href: "https://ilm.argos.uz/", title: "Malaka oshirish", text: "Ma'lumotlarni olish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/1034/1034619.png', href: "https://old.argos.uz/otm/", title: "Ma'lumotlar bazasi", text: "Ma'lumotlarni tekshirish"},
          ],
          links: [
            {img: 'https://cdn-icons-png.flaticon.com/512/8971/8971724.png', href: "/documents/generator", title: "CV generator", text: "CV tayyorlang"},
            {img: 'https://cdn-icons-png.flaticon.com/512/4283/4283324.png', href: "/services/faq", title: "FAQ", text: "Ma'lumotarni olish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/1321/1321977.png', href: "/services/quiz", title: "So'rovnoma", text: "Ma'lumotlarni olish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/1034/1034619.png', href: "/appeal", title: "Murojaat yuborish", text: "Taklifingizni yo'llang"},
          ],
          books: [
            {img: "https://cdn-icons-png.flaticon.com/512/32/32354.png", href: "https://argos.uz/media/book/%D0%A1%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2_%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D1%81%D0%B8..pdf", title: "Davlat dasturi: Iqtisodiyotni rivojlantirish bo'yicha yarim yillik...", text: "11:46 - 08.09.2021"},
            {img: "https://cdn-icons-png.flaticon.com/512/32/32354.png", href: "https://argos.uz/media/book/3-yon.pdf", title: "Davlat dasturi: Iqtisodiyotni rivojlantirish bo'yicha yarim yillik...", text: "12:08 - 18.03.2021"},
            {img: "https://cdn-icons-png.flaticon.com/512/32/32354.png", href: "https://argos.uz/media/book/2_%D0%B9%D1%9E%D0%BD%D0%B0%D0%BB%D0%B8%D1%88_2019_%D0%B4%D0%B0%D1%81%D1%82%D1%83%D1%80_%D0%B8%D0%B6%D1%80%D0%BE%D1%81%D0%B8_%D0%9F%D0%94%D0%A4_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB.pdf", title: "Davlat dasturi: Qonun ustuvorligini ta'minlash va sud huquq tizimini yanada...", text: "12:07 - 18.03.2021"},
          ]
      }
    },
    methods: {
      mediaModal(){
        this.modalVisible = true
      },
    },
}
</script>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

  *{
    margin: 0;
    padding: 0
  }
  

  .container{
    width: 1250px;
    margin: 0 auto;
    padding: 0 20px
  }
</style>



