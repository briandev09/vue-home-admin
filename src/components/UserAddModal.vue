<script setup>
import { useNavitationStore } from '@/stores/nav';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PlusIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import { useUserStore } from '@/stores/users';

const navStore = useNavitationStore()
const userStore = useUserStore()
const firstName = ref('')
const secondName = ref('')
const handleSubmit =async()=>{

  await userStore.addUsers(firstName.value,secondName.value);

   // clear input fields
   firstName.value = ''
   secondName.value = ''
   navStore.handleAddModal(false)
}
</script>


<template>
    <TransitionRoot as="template" :show="navStore.isAddUser">
        <Dialog class="relative z-10" @close="navStore.handleAddModal(false)">
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
                                <div class="py-4">
                                    <div class="flex justify-between items-center">
                                        <DialogTitle class="text-text">Add User</DialogTitle>
                                        <button @click="navStore.handleAddModal(false)">
                                            <XMarkIcon class="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <form @submit.prevent="handleSubmit">
                                <div class="py-8">
                                    <div>
                                        <h2 class="text-text font-normal pb-2">First Name</h2>
                                        <input v-model="firstName" type="text"
                                            class="w-full border border-hover rounded-sm p-1 outline-none text-sm text-text font-normal" />
                                    </div>
                                    <div>
                                        <h2 class="text-text font-normal py-2">Second Name</h2>
                                        <input v-model="secondName" type="text"
                                            class="w-full border border-hover rounded-sm p-1 outline-none text-sm text-text font-normal" />
                                    </div>
                                </div>
                                <div class="py-2 flex gap-2 w-full justify-end items-center">
                                    <button
                                        type="button"
                                        class="bg-button px-4 py-2 rounded-md flex gap-2 items-center font-normal text-text" @click="navStore.handleAddModal(false)">
                                        <XMarkIcon class="w-4 h-4" />
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        class="bg-button px-4 py-2 rounded-md flex gap-2 items-center font-normal text-text">
                                        <PlusIcon class="w-4 h-4 text-subMain font-bold" @click="handleSubmit"/>
                                        Submit
                                    </button>
                                </div>
                               </form>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>