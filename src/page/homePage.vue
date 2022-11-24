<template>
    <div class="">
          <hero/> 
          <news/>
          <services :images="images" :comments="comments" :services="services"/>
          <books :books="books"/>
          <media :mediaModal="mediaModal"/>
          <media-modal-slot v-model:media="modalVisible" >
              <media-content-modal/>
          </media-modal-slot>
          <region/>
          <vacancy :vacancy="vacancy"/>
          <theme :themes="themes"/>
          <winner :winners="winners"/>
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
  import region from "../components/region"
  import vacancy from "../components/vacancy"
  import theme from "../components/theme"
  import winner from "../components/winner"
  import link from "../components/link"
export default {
    name: "homePage",
    components : {
      hero,
      news,
      services,
      books,
      media,
      mediaModalSlot,
      mediaContentModal,
      region,
      vacancy,
      theme,
      winner,
      link
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
          services: [
            {img: 'https://cdn-icons-png.flaticon.com/512/8971/8971724.png', href: "/documents/generator", title: "CV generator", text: "CV tayyorlang"},
            {img: 'https://cdn-icons-png.flaticon.com/512/4283/4283324.png', href: "/services/faq", title: "FAQ", text: "Ma'lumotarni olish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/1321/1321977.png', href: "/services/quiz", title: "So'rovnoma", text: "Ma'lumotlarni olish"},
            {img: 'https://cdn-icons-png.flaticon.com/512/1034/1034619.png', href: "/appeal", title: "Murojaat yuborish", text: "Taklifingizni yo'llang"},
          ],
          books: [
            {img: "https://cdn-icons-png.flaticon.com/512/32/32354.png", href: "https://argos.uz/media/book/%D0%A1%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2_%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D1%81%D0%B8..pdf", title: "Davlat dasturi: Iqtisodiyotni rivojlantirish bo'yicha yarim yillik...", text: "11:46 - 08.09.2021"},
            {img: "https://cdn-icons-png.flaticon.com/512/32/32354.png", href: "https://argos.uz/media/book/3-yon.pdf", title: "Davlat dasturi: Iqtisodiyotni rivojlantirish bo'yicha yarim yillik...", text: "12:08 - 18.03.2021"},
            {img: "https://cdn-icons-png.flaticon.com/512/32/32354.png", href: "https://argos.uz/media/book/2_%D0%B9%D1%9E%D0%BD%D0%B0%D0%BB%D0%B8%D1%88_2019_%D0%B4%D0%B0%D1%81%D1%82%D1%83%D1%80_%D0%B8%D0%B6%D1%80%D0%BE%D1%81%D0%B8_%D0%9F%D0%94%D0%A4_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB.pdf", title: "Davlat dasturi: Qonun ustuvorligini ta'minlash va sud huquq tizimini ", text: "12:07 - 18.03.2021"},
          ],
          vacancy: [
            {img: "", to: "http://vacancy.argos.uz/vacancies/vacancy-detail/166191", title: "Davlat mexnat huquq inspektori", desc: "Ma'muriy-boshqaruv xodimlar", data: "20.11.2022", locat: "Manzil", buy: "3 112 838"},
            {img: "", to: "http://vacancy.argos.uz/vacancies/vacancy-detail/174822", title: "Бўлим бошлиғи (қишлоқ хўжалигида)", desc: "Йиғма-ахборот ва стратегик таҳлил масалалари", data: "20.11.2022", locat: "Manzil", buy: "3 112 838"},
            {img: "", to: "http://vacancy.argos.uz/vacancies/vacancy-detail/182871", title: "Davlat mexnat huquq inspektori", desc: "Ma'muriy-boshqaruv xodimlar", data: "20.11.2022", locat: "Manzil", buy: "3 112 838"},
            {img: "", to: "http://vacancy.argos.uz/vacancies/vacancy-detail/184559", title: "Бўлим мудири (бошлиғи)", desc: "Бўлинма мавжуд эмас", data: "20.11.2022", locat: "Manzil", buy: "3 112 838"},
            {img: "", to: "http://vacancy.argos.uz/vacancies/vacancy-detail/184561", title: "Davlat mexnat huquq inspektori", desc: "Ma'muriy-boshqaruv xodimlar", data: "20.11.2022", locat: "Manzil", buy: "3 112 838"},
            {img: "", to: "http://vacancy.argos.uz/vacancies/vacancy-detail/187290", title: "Бўлим бошлиғи (қишлоқ хўжалигида)", desc: "Йиғма-ахборот ва стратегик таҳлил масалалари ", data: "20.11.2022", locat: "Manzil", buy: "3 112 838"},
          ],
          themes: [
            {img: "https://argos.uz/media/interview/photo_2022-10-06_15-33-57.jpg", href: "/press-center/topic/24", data: "10:53 - 06 oktabr", title: "FDI and administrative decentralization: The importance of empowering local governments",},
            {img: "https://avatars.mds.yandex.net/i?id=f015d92481378a867369fc9d8478334c1b00dd69-6917174-images-thumbs&n=13", href: "/press-center/topic/25", data: "09:39 - 23 sentabr", title: "Salohiyatli rahbar xotin-qizlar korpusini shakllantirish – kadrlar siyosatining ustuvor yo‘nalishi",},
            {img: "https://avatars.mds.yandex.net/i?id=3d091561bb39878dfe633582ffe73482fcf8d9f6-6605286-images-thumbs&n=13", href: "/press-center/topic/26", data: "11:33 - 21 sentabr", title: "Yosh kadrlarni ijtimoiy-psixologik saralash — davlat boshqaruvida muhim",},
            {img: "https://avatars.mds.yandex.net/i?id=20c22884e9b4b1fca18af92c7f26d3d159ffcfe0-6274710-images-thumbs&n=13", href: "/press-center/topic/27", data: "10:04 - 21 sentabr", title: "Eronning SHHTdagi tashabbusi va imkoniyatlari",},
         
          ],
          winners: [
            {href: "/press-center/winner/18",img: "https://argos.uz/media/winner/321_00000_8UuGVcY.jpg", desc: "Tanlov g'olibi", name: "Maftuna Normatova", motiv: "O'z ustimda ishladim, rivojlandim"},
            {href: "/press-center/winner/19",img: "https://avatars.mds.yandex.net/i?id=253c58bf6a4c6b90a3dd39ea91951caf615d9525-5987336-images-thumbs&n=13", desc: "Tanlov g'olibi", name: "Madina Nosirova", motiv: "Endi biz vazirlik, idoralardagi barcha bo‘sh ish o‘rinlari haqida maʼlumotga egamiz"},
            {href: "/press-center/winner/20",img: "https://argos.uz/media/winner/image_2021-12-23_16-08-55_0O0k8Rn.jpg", desc: "Tanlov g'olibi", name: "Nurali Atajanov", motiv: "Bu amaliyot biz uchun yangi"},
            {href: "/press-center/winner/21",img: "https://argos.uz/media/winner/image_2021-12-23_17-06-03_UeHUk1z.jpg", desc: "Tanlov g'olibi", name: "Bobur Xasanov", motiv: "O'z ustimda ishladim, rivojlandim"},
          ],
          links: [
            {img: "https://static.wixstatic.com/media/f6a2ad_5e0bce7a6f804dfcb3c500aa96a04972~mv2.png/v1/fill/w_1000,h_1015,al_c,usm_0.66_1.00_0.01/f6a2ad_5e0bce7a6f804dfcb3c500aa96a04972~mv2.png", title: "Ozbekiston Respublikasi Prezidentining matbuot xizmati", href: "https://president.uz/"},
            {img: "https://centertsul.uz/files/polezniye_ssilki/logo_data_gov_uz_2.png", title: "Ozbekiston Respublikasi Ochiq ma'lumotlar portali", href: "https://data.gov.uz/uz"},
            {img: "https://statefund.uz/core/views/47a62d302c/media/img/uploads/mygovuz_icon.png", title: "Yagona Interaktiv davlat xizmat portali", href: "https://my.gov.uz/ru"},
            {img: "https://static.wixstatic.com/media/f6a2ad_5e0bce7a6f804dfcb3c500aa96a04972~mv2.png/v1/fill/w_1000,h_1015,al_c,usm_0.66_1.00_0.01/f6a2ad_5e0bce7a6f804dfcb3c500aa96a04972~mv2.png", title: "Ozbekiston Respublikasi Oliy Majlis Senati", href: "https://senat.uz/ru"},
            {img: "https://nbuig.uz/wp-content/uploads/2021/09/LEX.UZ-Zakonodatelstvo-Uzbekistana.png", title: "Ozbekiston Respublikasi Qonun hujjatlari ma'lumotlar ba'zasi", href: "https://lex.uz/"},
            {img: "https://static.wixstatic.com/media/f6a2ad_5e0bce7a6f804dfcb3c500aa96a04972~mv2.png/v1/fill/w_1000,h_1015,al_c,usm_0.66_1.00_0.01/f6a2ad_5e0bce7a6f804dfcb3c500aa96a04972~mv2.png", title: "Ozbekiston Respublikasi hukumat portali", href: "https://www.gov.uz/uz"},
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



