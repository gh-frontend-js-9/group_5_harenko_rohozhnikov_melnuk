import React from 'react';
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { popularFetchData } from '../../../../store/actions/popularBlock'
import { connect } from 'react-redux';
import { IState, IProps } from '../../../../interfaces'
import '../bottomBlock.scss'

class RightBlock extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }

  render() {
    return (
      <Container className="bottom-block" maxWidth="sm">
        <div className="display-block"></div>
        <div className="bottom-main-block">
          <Box className="bottom-block_subtitle" component="span">BY  <span className="bottom-block_words">TOMAS LAURINAVICIUS</span>   IN   <span className="bottom-block_words">{Object.keys(this.props.fetchData).length
            ? JSON.stringify(this.props.fetchData.docs[3].tags[0]).replace(/"/g, '').toUpperCase()
            : null}</span><br /></Box>
          <Box className="bottom-block_title" component="span">{Object.keys(this.props.fetchData).length
            ? JSON.stringify(this.props.fetchData.docs[3].title).replace(/"/g, '')
            : <div>Loading...</div>}</Box>
          <Box className="bottom-block_txt" component="p">{Object.keys(this.props.fetchData).length
            ? JSON.stringify(this.props.fetchData.docs[3].description).replace(/"/g, '')
            : null}</Box>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    fetchData: state.popular
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRequest: () => dispatch(popularFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBlock);