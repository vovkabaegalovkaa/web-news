<template>
  <div class="container">
    <the-header></the-header>
    <!-- Теперь вместо этих тегов будет подставляться содержимое компонента Header -->
    <app-news 
      v-for="event in news" 
      :key="event.id"
      :title="event.title"
      :id="event.id">
    </app-news>
    <!-- если написать просто title="event или title="{{event}}" то просто передастся строчка, надо юзать v-bind" -->
  </div>
</template>

<script>
import AppNews from './AppNews.vue'

export default {
  name: 'App',
  data(){
    return {
      news: [
        {
          title: "NOOOOOOOOOOO!",
          id: 1
        }, 
        {
          title: "YEEEEEEEEEEES",
          id: 2
        }
      ]
    }
  },
  components: {
    'app-news': AppNews
    //локальная регистрация компонента
  }
}
</script>

<style>

</style>
