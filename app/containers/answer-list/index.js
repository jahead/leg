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

class AnswerList extends React.Component {
    static Path = '/answerList/:id';

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
                <Auscrest/>
                <Judge/>
                <div>
                    <Jury/>
                    <Accused/>
                </div>
                <Lawyers/>
            </div>
        );
    }
}

AnswerList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerList);

export default AnswerList;