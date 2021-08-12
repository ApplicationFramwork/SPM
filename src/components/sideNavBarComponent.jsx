import React, { Component } from 'react'

export default class sideNavBarComponent extends Component {
    render() {
        return (
            <div>

                <input type="checkbox" id="check"></input>
                <header>
                    <label for="check">
                        <i class="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                    <div class="left_area">
                    </div>
                    <div class="right_area">
                        <a href="/" class="logout_btn">Profile</a>
                    </div>
                </header>

                <div class="mobile_nav">
                    <div class="nav_bar">
                        <i class="fa fa-bars nav_btn"></i>
                    </div>
                    <div class="mobile_nav_items">
                        <a href="/"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
                        <a href="/"><i class="fa fa-key"></i><span>Change Password</span></a>

                    </div>
                </div>

                <div class="sidebar">
                    <a href="/"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                    <a href="/"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>

                </div>




            </div>
        )
    }
}
