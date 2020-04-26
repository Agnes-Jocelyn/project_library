import axios from 'axios'

const url = 'https://library-api1.herokuapp.com/library'


export const add = (data) => {
    return (dispatch) => {
       axios.post(`${url}/post`, data)
        .then ((res) => {
            dispatch({
                type: 'LIBRARY_ADD',
                payload : res.data,
            });
        })
        .catch((err) => console.log(err));        
    }
}

export const getData = (data) =>{
    return(dispatch) => {
    axios.get(`${url}/get`,data)
    .then ((res)=> {
        dispatch({
            type : 'LIBRARY_GET_DATA',
            payload : res.data
        })
    })
       .catch ((err) => console.log(err));
    }
}

export const deleteData = (data) => {
    return (dispatch) => {
        axios.delete(`${url}/delete/${data._id}`, data)
        .then((_id)=> {
            dispatch({
                type : 'LIBRARY_DELETE_DATA',
                payload : _id    
            })
            dispatch ({
                type : 'LIBRARY_HIDE_DELETE'
            })
        })
        .catch((err) => console.log(err));
    }
}

export const edit = (data) => {
    return (dispatch) => {
        axios.put(`${url}/put/${data._id}`, data)
        .then((res) => {
            dispatch({
                type : 'LIBRARY_EDIT_DATA',
                payload : res.data
            })
            dispatch ({
                type : 'LIBRARY_HIDE_ADD'
            })
        })
       .catch((err) => console.log(err));
    }
}

export const hideEdit = () => {
    return{
        type : 'LIBRARY_HIDE_EDIT'
    }
}

export const hideDelete = () => {
    return {
        type : 'LIBRARY_HIDE_DELETE'
    }
}

export const showDelete = (data) => {
    return{
        type: 'LIBRARY_SHOW_DELETE',
        payload : data
    }
}

export const showEdit = (data) => {
    return{
        type: 'LIBRARY_SHOW_EDIT',
        payload : data
    }
}

export const showAdd = () => {
    return {
        type: 'LIBRARY_SHOW_ADD'
    }
}

export const search = (data) => {
    return (dispatch) => {
        axios.get(`${url}/get`, {   
            params: {
                title: data,
            }
        })
        .then((res) => {
            dispatch({ 
                type: 'LIBRARY_GET_DATA',
                payload: res.data
            })
        })
       .catch((err) => console.log(err));
    }
}
