<template>
    <div class="modal" v-if="media" @click.stop="hideModal">
        <div @click.stop="" class="modal_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "mediaModalSlot",
   props: {
     media: {
        type: Boolean,
        default: false
    }
   },
   methods: {
    hideModal(){
        this.$emit("update-show", false)
    }
   },
}
</script>

<style scoped>
    .modal{

        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
    }

    .modal_content{
       margin: 0 auto;
       background:   rgb(214, 210, 210);
       padding: 20px;
        height: 300px;
    }
</style>
