import { User } from "@/types";
import axios from "axios";
import { defineStore } from "pinia";
const apiUrl = import.meta.env.VITE_API_URL
export const useUserStore = defineStore('users', {
    state: () => ({
        users: [

        ] as User[],
        selectedUser: {},
        selectedId: 1
    }),
    actions: {
        async fetchUsers() {
            await axios.get(`${apiUrl}/users`)
                .then((result) => {
                    console.log("result", result?.data)
                    this.users = result?.data
                })
                .catch((error) => {
                    alert(error.message);
                })
        },
        async addUsers(firstName: string, secondName: string) {
            //add new user to user state in the store 
            const currentDate = this.getCurrentDate();
            this.users.push({
                id: (this.users.length + 1).toString(),
                firstName: firstName,
                lastName: secondName,
                createdAt:this.getCustomDate(currentDate)
          })
            // add new user to database
            axios.post(`${apiUrl}/users`, {
                firstName:firstName,
                lastName:secondName
            }).then((result) => {
                if (result?.data) {
                    alert("Add new user successfully!")

                }
            }).catch((error) => {
                alert(error.message)
            })
        },
        updateUsers() {

        },
        removeUsers() {

        },
        getCustomDate(_date:string) {
            const date = new Date(_date)
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        },
        getCurrentDate(){
            const currentDate = new Date()
            const isoDateString = currentDate.toDateString()
            return isoDateString
        }
    }
})