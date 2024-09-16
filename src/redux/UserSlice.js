import { createSlice , nanoid} from "@reduxjs/toolkit";
import User from "../screens/User";
import Adduser from "../screens/Adduser";


export const Userslice = createSlice(
    {
        name :'Userdata',
        initialState : {
            data :[]
        },
        reducers:{
            adduser(state , action){
                state.data.push(action.payload)
            },
            updateuser(state, action) {
                const { index, name, mobile, email, address } = action.payload;
                const user = state.data[index];
                if (user) {
                  user.name = name;
                  user.mobile = mobile;
                  user.email = email;
                  user.address = address;
                }
              },
            deleteuser(state , action){
                let temp = state.data
                let final = temp.filter((item ,index)=>{
                    return index!= action.payload
                })
                state.data= final
            }
        }
    }
)
export const {adduser , updateuser , deleteuser} = Userslice.actions
export default Userslice.reducer