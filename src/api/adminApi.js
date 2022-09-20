import axiosClient from "./axiosCilent";


const adminApi={

    Register(data){
        const url = '/admins/register';
        return axiosClient.post(url , data)
    },
    LoginAdmin(data){
        const url = '/admins/login';
        return axiosClient.post(url , data)
    }, 
    SendMail(data){
        const url = '/admins/forgot-password';
        return axiosClient.post(url , data)
    },
    AccessToken(data){
        const url = '/admins/access-token';
        return axiosClient.post(url , data)
    },
    NewPass(data){
        const url = '/admins/newpass';
        return axiosClient.post(url , data)
    }
};

export default adminApi; 