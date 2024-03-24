import axios from "axios";

const loginHandler = async (username,password) =>{

    try {
        const {data : {token},status} = await axios.post("https://cute-puce-beaver-coat.cyclic.app/auth/login",{username,password});
        console.log(token,status);
        if(status === 200){
            localStorage.setItem("token",token)
        }
        return token;
    } catch (error) {
        console.log(error.message);
    }   
}   

export default loginHandler