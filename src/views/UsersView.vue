<script setup>
import {Bars3Icon} from '@heroicons/vue/24/outline'
import HeaderBar from '@/components/HeaderBar.vue'
import UserInfo from '@/components/UserInfo.vue'
import UserList from '@/components/UserList.vue'
import { useUserStore } from '@/stores/users'
import { useNavitationStore } from '@/stores/nav'
const userStore = useUserStore()
const navStore = useNavitationStore()

</script>
<template lang="">
  <div class="bg-main w-full h-full">
    <HeaderBar title="Users"/>
    <div class="w-full h-screen px-4 md:p-12">
    <!--Menu bar in mobile view-->
    <div class="pt-8 mb-4 md:hidden cursor-pointer" @click="navStore.handleToggle(true)">
        <Bars3Icon class="w-6 h-6 text-text font-bold" aria-hidden="true"/>
    </div>
    <div class="md:grid md:grid-cols-12 md:gap-8">
    <!--User list-->
    <div class="md:col-span-4">
    <UserList/>
    </div>
    <!--User info-->
    <div v-if="userStore.users.length != 0" class="md:col-span-8">
      <UserInfo/>
    </div>
    </div>
    </div>

  </div>
</template>