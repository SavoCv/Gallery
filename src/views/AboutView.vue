<template>
  <div class="about">
    <h1 v-if="lang == 'uk'">About Gallery</h1>
    <h1 v-if="lang == 'srb'">O Gallery</h1>
    <p v-if="lang == 'uk'">Gallery is product of project task for Web Design subject. This site didn't get any awards, and most likely won't. This site is different from others because we didn't looked up to any other site.</p>
    <p v-if="lang == 'srb'">Galerija je proizvod projektnog zadatka za predmet Veb dizajn. Ovaj sajt nije dobio nijednu nagradu, a verovatno i neće. Ovaj sajt se razlikuje od drugih jer se nismo ugledali ni na jedan drugi sajt.</p>
    <p v-if="lang == 'uk'">Contact number: 061 234 57 89</p>
    <p v-if="lang == 'srb'">Kontakt telefon: 061 234 57 89</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357.119666932863!2d19.886151894321664!3d44.26969733394521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759eda77d683717%3A0x330ac468cdbf06ec!2z0JLRg9C60LAg0JrQsNGA0LDRn9C40ZvQsCAzLCDQktCw0ZnQtdCy0L4!5e0!3m2!1ssr!2srs!4v1687811182117!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>


<style scoped>

.about{
  padding-top: 20px;
}

</style>

<script>

export default {
  name: "AboutView",
  data(){
    return {
      'lang': localStorage.getItem('language'),
    }
  },
}
</script>
