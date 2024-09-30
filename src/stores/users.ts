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
            const url = new URL(`${apiUrl}/users`);
            // url.searchParams.append('sortBy','id')
            // url.searchParams.append('order','desc')
            await axios.get(url.toString())
                .then((result) => {
                    this.users = result?.data
                })
                .catch((error) => {
                    alert(error.message);
                })
        },
        async addUsers(firstName: string, secondName: string) {
            // add new user to database
            await axios.post(`${apiUrl}/users`, {
                firstName: firstName,
                lastName: secondName
            }).then((result) => {
                if (result?.data) {
                    alert("Add new user successfully!")
                    console.log(result?.data);
                    this.users.push(result?.data)
                }
            }).catch((error) => {
                alert(error.message)
            })
        },
        async updateUsers(id: string, firstName: string, secondName: string) {
            await axios.put(`${apiUrl}/users/${id}`,{
                firstName:firstName,
                lastName:secondName
            }).then((result)=>{
                if(result?.data){
                    alert("Updated user successfully!")
                    const index = this.users.findIndex((user: User) => user.id === id)
                    if (index !== -1) {
        
                        this.users[index] = { ...this.users[index], ...result?.data }
                    }
                }

            }).catch((error)=>{
                alert(error.message)
            })
        },
        getCustomDate(_date: string) {
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
        getCurrentDate() {
            const currentDate = new Date()
            const isoDateString = currentDate.toDateString()
            return isoDateString
        }
    }
})