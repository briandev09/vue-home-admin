<script setup lang="ts">
import {PencilIcon} from '@heroicons/vue/24/outline'
import UserDetail from './UserDetail.vue';
import { useUserStore } from '@/stores/users';
import { User } from '@/types';
import { useNavitationStore } from '@/stores/nav';
import UserEditModal from '@/components/UserEditModal.vue'

const userStore = useUserStore()
const navStore = useNavitationStore()

</script>

<template>
 <div class="w-full px-8 bg-white border border-gray-200 rounded-lg">
   <div class="grid grid-rows-2 gap-1 divide-y-[1px]">
    <div class="justify-between flex items-center">
     <h1 class="text-text">{{(userStore.selectedUser as User).firstName || (userStore.users[0] as User).firstName || ''}}</h1>
     <button class="bg-button px-4 py-2 flex items-center gap-2 rounded-md text-sm font-normal text-text hover:bg-hover" @click="navStore.handleEditModal(true)">
   <PencilIcon class="w-4 h-4 text-text font-bold" aria-hidden="true"/>
        Edit</button>
   </div>
   <UserDetail/>
   </div>
 
 </div>
 <!-- <User Edit Modal/> -->
 <UserEditModal :userId="(userStore.selectedUser as User).id"/>
 
</template>