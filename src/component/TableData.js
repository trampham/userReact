import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
    deleteUserClick=(idUser) => {
        this.props.xoaUser(idUser);//nhận props dc gọi từ app để tiến hành xóa user
        
    }
    mappingdatapropsUser=()=>(
       
        this.props.datapropsUser.map((value,key)=>(
            <TableRow
            deleteUserClick={(idUser)=>this.deleteUserClick(idUser)}
            changetrangthaiEditUser={()=>this.props.changetrangthaiEditUser()} editUser={(user)=>this.props.xlySua(value)}key={key} stt={key} name={value.name} tel={value.tel} id={value.id} permission={value.permission} ></TableRow>
            
        ))
    )
      // this.props.xlySua
    render() {
      
        return (
            <div className="col">
            <table className="table table-striped table-hover table-inverse table-bordered">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Tên </th>
                    <th>SDT</th>
                    <th>Quyền</th>
                    <th>Tác vụ</th>
                </tr>
                </thead>
                <tbody>
                    {this.mappingdatapropsUser()}
                </tbody>
            </table>
            </div>

        );
    }
}

export default TableData;