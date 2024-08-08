<template>
    <div class="newsSection">
        <p class="news"> #{{id}} {{title}}</p>
        <app-button :btnClass="''" :text="isOpen ? 'Закрыть' : 'Открыть'" @action="btnClicked"></app-button>
        <div v-if="isOpen">
            <p class="event" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil delectus soluta illo facilis officia!</p>
            <app-button :btnClass="'readEvent'" :text="readStatus" @action="readNews" v-if="wasRead == false"></app-button>
            <app-button :btnClass="'cancelReadEvent'" :text="readStatus" @action="cancelReadNews" v-if="wasRead == true"></app-button>
            <app-news-list></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';
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
        //     validator(value){
        //         return value === true || value === false//проверка на boolean, просто для примера(она уже есть в поле type)
        //     }
        // }
        wasRead:{
            type: Boolean,
            required: true,
        },
    },
    //emits:["open-news"],//больше служит для других разрабов, чтобы они понимали какие эмиты существуют(просто вписываем названия)
    emits: {
        //для валидации сообытий
        'open-news'(message){
            if(message){
                return true;
            }
            else{
                console.log("No data im emit 'open-news'");
            }
            //eсли в эмите не будет передано никаких данных, выдаст лог и так же предупрждение о провале валидации от Vue
        },
        //'read-news': null,//если валидатор не нужен
        'read-news'(id){
            if(id>0){
                return true;
            }
            else{
                console.warn("Id is incorrect")
            }
        },
        'cancel-read-news'(id){
            if(id>0){
                return true;
            }
            else{
                console.warn("Id is incorrect")
            }
        }
    },
    data(){
        return {
            //event: this.title – мы имеем доступ к title во всем объекте 
            isOpen: false,
            readStatus: "Читать новость",
        }
    },
    methods:{
        btnClicked(){
            this.isOpen = !this.isOpen;
            if(this.isOpen){
                this.$emit("open-news", "vova krut");
                //метод для сообщения о чем-то родительскому компоненту, 1-ый параметр название события для обработки, потом бесконечность
                //параметров с данными
            }
        },
        readNews(){
            this.$emit('read-news', this.id);
            this.isOpen = !this.isOpen;
            this.readStatus = "Отменить"
        },
        cancelReadNews(){
            this.$emit('cancel-read-news', this.id);
            this.readStatus = "Читать новость";
        }
    },
    components: {
        'app-button': AppButton,
        'app-news-list': AppNewsList,
    }
}
</script>