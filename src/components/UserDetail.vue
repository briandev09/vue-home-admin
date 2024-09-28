<script setup lang="ts">
import { useUserStore } from '@/stores/users'
import { User } from '@/types'
const userStore = useUserStore()
</script>

<template>
  <div class="w-full py-3">
    <div class="flex w-full justify-between">
      <div class="w-[50%] lg:w-[30%]">
        <h3 class="text-text font-normal py-1">First Name</h3>
        <h3 class="text-text font-normal py-1">Last Name</h3>
        <h3 class="text-text font-normal py-1">Date Added</h3>
        <h3 class="text-text font-normal py-1">ID</h3>
      </div>
      <div class="w-[50%] lg:w-[70%]">
        <h3 class="text-text py-1">{{ (userStore.selectedUser as User).firstName || (userStore.users[0] as User).firstName || ''
          }}</h3>
        <h3 class="text-text py-1">{{ (userStore.selectedUser as User).lastName || (userStore.users[0] as User).lastName || '' }}
        </h3>
        <h3 class="text-text py-1">{{userStore.getCustomDate((userStore.selectedUser as User).createdAt as string) ||  userStore.getCustomDate(userStore.users[0].createdAt as string)  }}</h3>
        <h3 class="text-text py-1">{{ (userStore.selectedUser as User).id || (userStore.users[0] as User).id || '' }}</h3>
      </div>
    </div>
  </div>
</template>