import React, { Component } from 'react';

import '../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';

//cách 2 : giao diện add user được thực hiện trên 2 component thông qua app.js
import InsertUser from './InsertUser';
//cách 1 : giao diện user dc thực hiện trên cùng 1 component
// import AddUser from './AddUser';
import DataUser from './data.json'
//tạo id tự động
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      trangthaiform:false,
      data:[],
      //gán searchText="" để xuất hiện bảng dữ liệu
      searchText:"",
      trangthaiEditUser:false,
      dataEditUser:{}
    }
  }
  
  componentWillMount() {
    //kiểm tra đã có dữ dlieu trong localStorage
  
    
    if(localStorage.getItem('DataUser')===null){
      localStorage.setItem('DataUser',JSON.stringify(DataUser));
    }else{
      localStorage.removeItem('DataUser1')
      var temp = JSON.parse(localStorage.getItem('DataUser'));
      this.setState({
        data:temp
      });
      console.log(this.state.data);
      
      localStorage.setItem('DataUser',JSON.stringify(temp));
    }
  }
  
  //Xóa user
  xoaUser=(idUser) => {
    console.log(idUser);
    // dùng hàm fliter để lọc ra những id ko trùng với iduser cần xóa r tiến hành cập nhật lại state 
    var tempdata=this.state.data.filter(item=>item.id !==idUser);
    //cập nhật lại state
    this.setState({
      data:tempdata
    });
    localStorage.setItem('DataUser',JSON.stringify(tempdata));
    
  }
  //sửa thông tin user
  getUserEditInfoApp=(info)=>{
    console.log("sửa thành công");
    console.log(info);
    console.log(this.state.data);
    
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permission=info.permission;
      }
    })
    localStorage.setItem('DataUser',JSON.stringify(this.state.data))
    
  }
  thaydoitrangthaifrom=()=>{
    this.setState({
      trangthaiform:!this.state.trangthaiform

    });
  }
  xulyTimKiem=(textTimKiem)=>{
    this.setState({
      searchText:textTimKiem
    });
    
  }
  //lấy thông tin và từ form table row và tiến hành đua vào form Edituser và tiến hành cấp nhật dữ diệu
  xulysua=(user)=>{
    //alert("kết nối ok");
    console.log(user);
    this.setState({
      dataEditUser:user
    });
    
  }
  xulyThemUser=(name, tel,permission) => {
    var item={};
    item.id=uuidv1();
    item.name=name;
    item.tel=tel;
    item.permission=permission;
    var items=this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
     //console.log(this.state.data);
     localStorage.setItem('DataUser',JSON.stringify(items));
    
  }
  changetrangthaiEditUser=() => {
    this.setState({
      trangthaiEditUser:!this.state.trangthaiEditUser
    });
    //console.log(this.state.trangthaiEditUser);
  }
  render() {
    // console.log(this.state.data);// kiểm tra data trong state
    //lấy kết quả tìm kiếm dc lưu vào một mảng 
    var ketquaTimKiem=[];
    //duyệt bảng dữ liệu data lấy ra kết quả 
    this.state.data.forEach((item)=>{
      //xét điều kiện để lấy ra kết quả như mong muốn bằng hàm indexOf() trả về kqua -1 nếu tìm không thấy
      // và 0 là all dữ liệu
      // con số bất kì theo tứ tự trong câu là có dữ liệu
      if(item.name.indexOf(this.state.searchText) !== -1){
        // đưa dữ liệu vào mảng bằng hàm push 
          ketquaTimKiem.push(item);
      }
    })
    // console.log(ketquaTimKiem);
    
    return (
      <div >
          <Header></Header>
          <div className="container">
           {/* vì chuyền  biến vào là hàm nên khi InsertUser nhận dc this.prop.ketnoi() cũng là hàm */}
              <SearchForm ttEditUser={this.state.trangthaiEditUser}
              getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
              dataEditUser={this.state.dataEditUser}
              changetrangthaiEditUser={()=>this.changetrangthaiEditUser()}
              xlytimkiem={(textTimKiem)=>this.xulyTimKiem(textTimKiem)} trangthainut={()=>this.thaydoitrangthaifrom()} trangthaiform={this.state.trangthaiform}></SearchForm>
              <div className="col-12">
              <div className="row">
                  <TableData 
                  xoaUser={(idUser)=>this.xoaUser(idUser)}
                  xlySua={(user)=>this.xulysua(user)}
                  changetrangthaiEditUser={()=>this.changetrangthaiEditUser()}
                  datapropsUser={ketquaTimKiem}></TableData>
                  {/* //cách 1 : giao diện user dc thực hiện trên cùng 1 component */}
                  {/* <AddUser></AddUser> */}
                  {/* cách 2 : giao diện add user được thực hiện trên 2 component thông qua app.js */}
                 
                  <InsertUser
                  xlyThemUser={(name,tel,permission) => this.xulyThemUser(name,tel,permission)}
                  trangthaiform={this.state.trangthaiform}></InsertUser>
 
              </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
