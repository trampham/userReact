import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className=" display-2 px-xl-5">Project quản lý thành viên bằng </h1>
                <p className="lead mt-5">Thêm xóa sữa với dữ liệu json</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;