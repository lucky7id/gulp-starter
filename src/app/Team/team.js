import React from 'react';
import {Components} from '../components/components';
import Layout from '../layout/layout';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Team';
    }
    render() {
        return (
            <Layout appName={this.props.appName}>
                <Components.Table />
            </Layout>
        );
    }
}

export default Team;
