import React, { Component } from 'react';

class EditUser extends Component {
   constructor(props, context) {
       super(props, context);
       this.state={
           id:this.props.dataEditUser.id,
           name:this.props.dataEditUser.name,
           tel:this.props.dataEditUser.tel,
           permission:this.props.dataEditUser.permission
       }
   }
   isChange=(event) => {
       const name= event.target.name;
       const value=event.target.value;
       this.setState({[name]:value});
       
   }
   buttonSave=() => {
       var info={};// tạo ra ob để luu dữ liệu
       info.id=this.state.id;
       info.name=this.state.name;
       info.tel=this.state.tel;
       info.permission=this.state.permission;
        this.props.getUserEditInfo(info);
    this.props.changetrangthaiEditUser();//ẩn form

       
   }
    render() {
        return (
            <div className="col-12">
            <div className="row">

                    <div className="card text-white bg-warning mb-3 w-100" >
            
                    <div className="card-header">Thêm mới user</div>
                    <div className="card-body text-success">
                    <div className="form-group">
                        <input type="text" onChange={(event) =>this.isChange(event)} defaultValue={this.props.dataEditUser.name} name="name" id="name"  className="form-control" placeholder="Tên:" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={(event) =>this.isChange(event)} defaultValue={this.props.dataEditUser.tel} name="tel" id="tel"className="form-control" placeholder="Số điện thoại: " aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                    
                        <select  defaultValue={this.props.dataEditUser.permission}
                        className="custom-select" onChange={(event)=>this.isChange(event)} name="permission" id="permission">
                            <option>Chọn mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modration</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="Button" className="btn btn-info btn-block" name="btnThemUser" defaultValue="Lưu"
                        
                        onClick= {()=>this.buttonSave()} />
                    </div>
                    </div>
                </div>
                
                </div> 
                </div>
        );
    }
}

export default EditUser;