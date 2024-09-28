<script setup lang="ts">
import { UserIcon, ChevronRightIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useUserStore } from '@/stores/users';
import { useNavitationStore } from '@/stores/nav';
import { User } from '@/types';
import UserAddModal from '@/components/UserAddModal.vue'

const navStore = useNavitationStore()
const userStore = useUserStore()

</script>

<template>

    <TransitionRoot as="template" :show="navStore.isMenuVisible">
        <Dialog class="relative z-10" @close="navStore.handleToggle(false)">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[308px] p-2">
                            <div class="flex flex-col divide-y px-2">
                                <!--No data-->
                                <div class="w-full overflow-y-scroll p-2" :class="userStore.users.length ==0?`h-auto`:`h-[400px]`">
                                    <h1 v-if="userStore.users.length == 0" class="text-xl text-text">No users yet</h1>
                                    <!--With userdata-->
                                    <div class="flex p-2 justify-between items-center hover:bg-hover rounded-md cursor-pointer"
                                        v-for="user of userStore.users" :key="user.id as string" @click="userStore.selectedUser = user">
                                        <div class="flex gap-2">
                                            <UserIcon class="w-5 h-5 text-subMain font-bold" />
                                            <h2 class="font-medium text-subText">{{ (user as User).firstName }} {{ (user as User).lastName
                                                }}</h2>
                                        </div>

                                        <ChevronRightIcon class="w-4 h-4 text-text font-bold" aria-hidden="true" />
                                    </div>

                                </div>
                                <!--Add button-->
                                <button
                                    class="flex py-2 px-4 mt-2 bg-button rounded-md text-sm font-normal text-text items-center gap-2 hover:bg-hover cursor-pointer w-[120px]"
                                    @click="navStore.handleAddModal(true)">
                                    <PlusIcon class="w-4 h-4 text-text" aria-hidden="true" />
                                    Add User
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <div class="hidden w-full p-4 bg-white border border-gray-200 rounded-lg md:block">
        <div class="overflow-y-scroll w-full p-2" :class="userStore.users.length ==0?`h-auto`:`h-[400px]`">
            <!--No data-->
            <h1 v-if="userStore.users.length == 0" class="text-xl text-text">No users yet</h1>
            <div>
                <!--With userdata-->
                <div class="flex p-2 justify-between items-center hover:bg-hover rounded-md cursor-pointer"
                    v-for="user of userStore.users" :key="user.id as string" @click="userStore.selectedUser = user">
                    <div class="flex gap-2">
                        <UserIcon class="w-5 h-5 text-subMain font-bold" />
                        <h2 class="font-medium text-subText">{{ (user as User).firstName }} {{ (user as User).lastName }}</h2>
                    </div>

                    <ChevronRightIcon class="w-4 h-4 text-text font-bold" aria-hidden="true" />
                </div>


            </div>
        </div>

        <!--Add button-->
        <button
            class="flex py-2 px-4 mt-2 bg-button rounded-md text-sm font-normal text-text items-center gap-2 hover:bg-hover cursor-pointer outline-none w-[120px]"
            @click="navStore.handleAddModal(true)">
            <PlusIcon class="w-4 h-4 text-text" aria-hidden="true" />
            Add User
        </button>
    </div>
    <UserAddModal/>
</template>