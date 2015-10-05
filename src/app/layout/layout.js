import React from 'react';
import {Components} from '../components/components';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Team';
    }
    render() {
        return (
            <div className="content">
                <Components.Navbar appName={this.props.appName} />
                <div className="wrapper">
                    <Components.Sidebar />
                    <Components.Body>
                        {this.props.children}
                    </Components.Body>
                </div>
            </div>
        );
    }
}

export default Layout;
