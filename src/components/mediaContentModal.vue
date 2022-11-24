<template>
    <div class="container">
    <div class="flex">
               <iframe class="iframe" width="380" height="215" src="https://www.youtube.com/embed/Ao0TtyrTi1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe class="iframe" width="380" height="215" src="https://www.youtube.com/embed/UhiWgCYud2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe class="iframe" width="380" height="215" src="https://www.youtube.com/embed/rtxlSAFLbWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
</template>

<script>
export default {
    name: "mediaContentModal"
}
</script>

<style scoped>
    .flex{
        display: flex !important;
        align-items: center;
        justify-content: space-between;

    }

    .back{
        background-color: transparent;
    }

</style>

