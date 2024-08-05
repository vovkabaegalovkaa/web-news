<template>
    <div class="newsSection">
      <p class="news"> #{{id}} {{title}}</p>
      <p class="event" v-if="isOpen">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil delectus soluta illo facilis officia!</p>
      <button class="showEvent" @click="isOpen = !isOpen">Показать новость</button>
    </div>
</template>

<script>
export default{
    //props: ["title"],
    //props служит для принятия свойств переданных в параметрах, информация передается через название параметра
    props: {//такой props служит для валидации данных
        title: {
            //пример еще более тонкой настройки
            type: String,
            required: true, //обязателен ли параметр
        },
        id: Number,
        // isOpen: { короче почему то нельзя изменить то что пришло в пропсах, так что isOpen будет в дате
        //     type: Boolean,
        //     required: false,//если reqired false, то мы можем установить значение по умолчанию  при помощи default
        //     default: false,
        //     //так же существует функция validator, принимающая значение и возвращающая fasle или true, если false-выдаст ошибку
        //     validatro(value){
        //         return value === true || value === false//проверка на boolean, просто для примера(она уже есть в поле type)
        //     }
        // }
    },
    data(){
        return {
            //event: this.title – мы имеем доступ к title во всем объекте 
            isOpen: false
        }
    }
}
</script>