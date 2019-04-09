import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            trangthaiAddUser:false
        }
    }
    thaidoitrangthai=()=>{
        this.setState({
            trangthaiAddUser:!this.state.trangthaiAddUser
        })
    }
    hienthinut=()=>{
        if(this.state.trangthaiAddUser===true){
            return(
                <div className="btn btn-block btn-outline-secondary mb-3" onClick={()=>this.thaidoitrangthai()}>Đóng tab thêm mới</div>
            )
        }else{
            return(
                <div className="btn btn-block btn-outline-info mb-3" onClick={()=>this.thaidoitrangthai()}>Thêm mới user</div>
            )
        }
    }
    hienthiformthemuser=()=>{
        if(this.state.trangthaiAddUser===true){
            return(
                <div className="card border-info mb-3" >

                    <div className="card-header">Thêm mới user</div>
                    <div className="card-body text-success">
                    <div className="form-group">
                        <input type="text" name="TenUser" id="tenuser" className="form-control" placeholder="Tên:" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="TenUser" id="sdt" className="form-control" placeholder="Số điện thoại: " aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                    
                        <select className="custom-select" name="chonquyen" id="chonquyen">
                            <option>Chọn mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modration</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-success btn-block" type="submit" name="btnThemUser" defaultValue="Thêm" />
                    </div>
                    </div>
                </div>
               
            )
        }
    }
    
    render() {
        return (
            <div className="col-3">
               {this.hienthinut()}
               {this.hienthiformthemuser()}
            </div> 
               

        );
    }
}

export default AddUser;