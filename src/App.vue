<script setup>
import {onBeforeMount, onMounted } from 'vue';
import {RouterView} from 'vue-router'
import { useNavitationStore } from './stores/nav';
import { useUserStore } from './stores/users';
const navStore = useNavitationStore()
const userStore = useUserStore()


onMounted(async()=>{
    // load user data
    await userStore.fetchUsers()
    window.addEventListener('resize',()=>{
        const width = window.innerWidth;
        navStore.updateToggleMenuonViewport(width)
    })
})

onBeforeMount(()=>{
    window.removeEventListener('resize',()=>{})
})

</script>

<template>
 <RouterView/>
</template>

<script>

</script>
