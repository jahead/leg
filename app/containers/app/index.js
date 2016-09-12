import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import Accused from '../../components/accused';
import Auscrest from '../../components/auscrest';
import Judge from '../../components/judge';
import Jury from '../../components/jury';
import Lawyers from '../../components/lawyers';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

class App extends React.Component {
    static Path = '/';

    static PropTypes = {

    };

    constructor(props, context) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className={styles.view}>
                {this.props.children}
            </div>
        );
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;