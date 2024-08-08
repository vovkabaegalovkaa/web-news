<template>
    <button class="btn" :class="btnClass" @click="$emit('action')">{{ text }}</button>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    emits: ["action"],
    props: {    
        btnClass: { 
            type: String,
            required: true,
            default: "",
            validator(value){
                return ['', 'readEvent', 'cancelReadEvent'].includes(value);
            }
        },
        text: {
            type: String,
            required: true,
            default: "",
            validator(value){
                return ['Открыть', 'Закрыть', 'Читать новость', 'Отменить'];
            }
        }
    }
}
</script>