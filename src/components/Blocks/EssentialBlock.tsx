import React from 'react';
// import { Container } from '@material-ui/core'
// import { Box } from '@material-ui/core';
import { essentialFetchData } from '../../store/actions/essentialBlock'
import { connect } from 'react-redux';
import '../articlesBlock.scss'

class EssentialBlock extends React.Component<any, any> {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return (
                <div className="articles-area">
                    {Object.keys(this.props.essentialInfo).length
                        ? JSON.stringify(this.props.essentialInfo.docs)
                        : null
                    }
                </div>
            );
        }
    }

const mapStateToProps = (state: any) => {
    return {
        essentialInfo: state.essential
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: () => dispatch(essentialFetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EssentialBlock);