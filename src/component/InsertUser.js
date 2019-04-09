import React, { Component } from 'react';

class InsertUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:"",
        }
    }
    
    isChange=(event) => {
        const name=event.target.name;
        const value=event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });
        // var item={};
        // item.id=this.state.id;
        // item.name=this.state.name;
        // item.tel=this.state.tel;
        // item.permission=this.state.permission;
        // console.log(item);
        
    }
   
   hienthiform=()=>{
       if(this.props.trangthaiform===true){
        return(
            
            <div className="col">
            <form>
                    <div className="card border-info mb-3" >
            
                    <div className="card-header">Thêm mới user</div>
                    <div className="card-body text-success">
                    <div className="form-group">
                        <input type="text" name="name" id="name" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên:" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="tel" id="tel" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Số điện thoại: " aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                    
                        <select className="custom-select" onChange={(event)=>this.isChange(event)} name="permission" id="permission">
                            <option>Chọn mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modration</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-success btn-block"  name="btnThemUser" defaultValue="Thêm" 
                        onClick={(name,tel,permission)=>this.props.xlyThemUser(this.state.name,this.state.tel,this.state.permission)}/>
                    </div>
                    </div>
                </div>
                </form>
                </div> 
               
           )

       }
       
   }
  
    render() {
        // console.log(this.state);
       
        
        
        return (
           <div>
                {this.hienthiform()}
           </div>
             
        );
    }
}

export default InsertUser;