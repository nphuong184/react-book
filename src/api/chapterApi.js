import axiosClient from "./axiosCilent";
import axiosClientAuth from "./axiosClientAuth";


const ChapterApi={

    GetChapter(){
        const url = '/chapter';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetCataById (id){
        const url = `/chapter/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },

    GetChapterByIdProduct (id){
        const url = `/chapter/idProduct/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res;
    },

    UpdateCata(data){
        const url = '/chapter/edit';
        return axiosClient.put(url , data)
    },
    AddCata(data){
        const url = '/chapter/create';
        return axiosClient.post(url , data)
    },
    DelCata(id){
        const url = `/chapter/del/${id}`;
        return axiosClientAuth.delete(url)
    },
};

export default ChapterApi; 