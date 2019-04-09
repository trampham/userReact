import React, { Component } from 'react';

class TableRow extends Component {
    showpermisson=()=>{
        // console.log(typeof(this.props.permission)
        // );// xem kiểu dữ liệu 
      
        if(parseInt(this.props.permission)===1){// === ss đồng nhất là giống nhau và cùng kiểu dữ liệu
            return "Admin"
        }
        else if(parseInt(this.props.permission)===2){
            return "Moderation user"
        }
        else{
            return "Normal user"
        }
    }
  isEditUser=() => {
    this.props.editUser();
   this.props.changetrangthaiEditUser();
   
//    console.log(this.props.changetrangthaiEditUser());
   
      
  }
  deleteUser=(idUser) => {
    //   console.log("Id của User là :"+ idUser);
      this.props.deleteUserClick(idUser);//nhận props từ table data
  }
    render() {
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.showpermisson()}</td>
                <td>
                <div className="btn-group">
                    <div onClick={()=>this.isEditUser()} className="btn btn-warning sua">Sữa</div>
                    <div onClick={(idUser)=>this.deleteUser(this.props.id)} className="btn btn-danger xoa">Xóa</div>
                </div>
                </td>
             </tr>
    );
    }
}

export default TableRow;