<template>
  <div class="container">
    <the-header></the-header>
    <span class="info">Открыто: {{ openRate }} | Прочитано: {{ readRate }}</span>
    <!-- Теперь вместо этих тегов будет подставляться содержимое компонента Header -->
    <app-news 
      v-for="event in news" 
      :key="event.id"
      :title="event.title"
      :id="event.id"
      :wasRead="event.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @cancel-read-news="cancelReadNews">
    </app-news>
    <!-- если написать просто title="event или title="{{event}}" то просто передастся строчка, надо юзать v-bind" -->
     <!-- @open-news – обработка события от дочернего компонента -->
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
          id: 1,
          wasRead: false,
        }, 
        {
          title: "YEEEEEEEEEEES",
          id: 2,
          wasRead: false,
        }
      ],
      openRate: 0,
      readRate: 0,
    }
  },
  components: {
    'app-news': AppNews
    //локальная регистрация компонента
  },
  methods: {
    openNews(data){//передавать эту data из вызова метода не надо!!!!!!!!!!
      this.openRate++;
      //console.log(data)//вывод: "vova krut"
    },
    readNews(data){
      this.readRate++;
      this.news[data-1].wasRead = true;
    },
    cancelReadNews(id){
      this.news[id-1].wasRead = false;
      this.readRate--;
    }
  }
}
</script>

<style>

</style>
