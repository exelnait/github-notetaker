import React from 'react';
import {Router, RouteHandler} from 'react-router';
import Search from './Search';

var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <Search />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

export default Main;