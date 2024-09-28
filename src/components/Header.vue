<script setup lang="ts">
  defineProps<{title:String}>()

</script>

<template>
    <div class="bg-subMain w-full py-4 px-4 md:px-12">
        <h1 class="text-text font-bold text-2xl">{{title}}</h1>
    </div>
</template>