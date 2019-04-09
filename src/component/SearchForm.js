import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            tempvalue:"",
            userObj:{}
        }
    }
    isshowEditUser=()=>{
        if(this.props.ttEditUser===true){
           return <EditUser 
           getUserEditInfo={(info)=>this.getUserEditInfo(info)}
           dataEditUser={this.props.dataEditUser}
           changetrangthaiEditUser={()=>this.props.changetrangthaiEditUser()}/>
        }
    //    return console.log(this.props.ttEditUser);
        
    }
    isChangetim=(event)=>{
        this.setState({
            tempvalue:event.target.value
        });
        //để tìm kiếm có kết quả liền thì hãy gọi gàm ở app để chạy lun
        this.props.xlytimkiem(this.state.tempvalue);
    }
    hienthinut=()=>{
        if(this.props.trangthaiform===true){
            return(
                <div className="btn btn-block btn-outline-secondary mb-3" onClick={()=>this.props.trangthainut()}>Đóng tab thêm mới</div>
            )
        }else{
            return(
                <div className="btn btn-block btn-outline-info mt-0 mb-3" onClick={()=>this.props.trangthainut()}>Thêm mới user</div>
            )
        }
    }

    //lấy thông đã sữa
    getUserEditInfo=(info) => {
        this.setState({
            userObj:info
        });
        console.log(info);
        this.props.getUserEditInfoApp(info);
    }
    render() {
        return (
            <div className="col-12">
               <div className="row">
               <div className="form-group w-100">
                    <div className="btn-group w-50">
                    <input type="text" name="timkiem" onChange={(event)=>this.isChangetim(event)} className="form-control" placeholder="Nhập tên tìm kiếm" />
                    <div className="btn btn-info" onClick={(textTimKiem)=>this.props.xlytimkiem(this.state.tempvalue)}>Tìm </div>
                    </div>
                    <div className="btn-group ml-5">
                        {this.hienthinut()}
                        
                    </div>
                </div> 
                <hr className="my-2" />
               </div>
               
                <div className="row">
               
                </div>
                
                {this.isshowEditUser()}
                 
            </div>
            
       
        

        );
    }
}

export default SearchForm;