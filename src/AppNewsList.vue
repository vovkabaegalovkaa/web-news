<template>
    <hr/>
    <h4>{{ title }}</h4>
    <ul>
        <li v-for="item in newsList" :key="item.id">{{ item.title }} <span v-if="item.wasRead"> (Прочитано)</span></li>
    </ul>
</template>

<script>
/*это щас просто будет тестовый пример для демонстарции нового метода передачи данных: будем передавать данные их App.vue(news)
в AppNewsList, но дело в том что цепочка компонентов такая App->AppNews->AppNewsList и в AppNews мы news не передавали*/
export default {
    // props: {
    //     news: Array,
    // },
    //inject служит для приема от всех предков данных, переданных в provide
    inject: ['newsList', 'title']
}
</script>