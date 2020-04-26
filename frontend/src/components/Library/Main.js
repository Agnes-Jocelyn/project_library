import React, {useEffect} from 'react'

import {connect} from 'react-redux'
import {getData} from './../../actioncreators/library'

import Item from './Item'
import Delete from './Delete'
import Edit from './Edit'
import './Style.css'

const Main = (props) => {
    useEffect(() => {
        if(!props.data.length)
        props.getData()
    },[])

    return(
        <div>
            <table className="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Book Title</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map ((item,index) => <Item key={index} data={item}/>)
                    }

                </tbody>
            </table>
        <Delete/>
        <Edit/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        data : state.library.data
    }
}
const mapDispatchToProps = {getData}

export default connect(mapStateToProps, mapDispatchToProps)(Main)