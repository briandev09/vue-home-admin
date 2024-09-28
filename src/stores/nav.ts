import { defineStore } from "pinia"

export const useNavitationStore = defineStore('navigation', {
    state: () => ({
      isMenuVisible: false,
      isAddUser:false,
      isEditUser:false,
      type:""
    }),
    actions: {
      
      handleToggle(_isMenuVisible:boolean){
        this.isMenuVisible = _isMenuVisible
      },
      handleAddModal(_isAddUser:boolean){
        this.isAddUser = _isAddUser
      },
      handleEditModal(_isEditUser:boolean){
        this.isEditUser = _isEditUser
      },
      updateToggleMenuonViewport(width:number) {
        if (width <= 768) {
          this.isMenuVisible = true  // show toggle menue on mobile view
        } else {
          this.isMenuVisible = false
  
        }
      }
    }
  })