import React from 'react';
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { essentialFetchData } from '../../../store/actions/essentialBlock'
import { connect } from 'react-redux';
import { IState, IProps } from '../../../interfaces'
import '../articlesBlock.scss'

class EssentialBlock extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }

  render() {
    console.log(this.props.fetchData)
    return (
      <div className="articles-area">
        <Container className="title-block" maxWidth="lg">
          <Box className="title-block_title" component="h2">{Object.keys(this.props.fetchData).length
            ? JSON.stringify(this.props.fetchData.docs[0].category[0]).replace(/"/g, '')
            : <div>Loading...</div>}</Box>
          <Box className="title-block_txt" component="a">View all</Box>
        </Container>
        <Container className="articles-block" maxWidth="lg">
          <div className="main-block">
            <Box className="main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
            <Box className="main-block_title" component="span">{Object.keys(this.props.fetchData).length
              ? JSON.stringify(this.props.fetchData.docs[0].title).replace(/"/g, '')
              : null}</Box>
            <Box className="main-block_txt" component="p">{Object.keys(this.props.fetchData).length
              ? JSON.stringify(this.props.fetchData.docs[0].description).replace(/"/g, '')
              : null}</Box>
          </div>
          <div>
            <div className="small-blocks-area">
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[1].tags[0]).replace(/"/g, '').toUpperCase()
                  : null}</Box>
                <Box className="small-articles-block_title" component="p">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[1].title).replace(/"/g, '')
                  : null}</Box>
              </div>
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[2].tags[0]).replace(/"/g, '').toUpperCase()
                  : null}</Box>
                <Box className="small-articles-block_title" component="p">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[2].title).replace(/"/g, '')
                  : null}</Box>
              </div>
            </div>
            <div className="small-blocks-area">
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[3].tags[0]).replace(/"/g, '').toUpperCase()
                  : null}</Box>
                <Box className="small-articles-block_title" component="p">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[3].title).replace(/"/g, '')
                  : null}</Box>
              </div>
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[4].tags[0]).replace(/"/g, '').toUpperCase()
                  : null}</Box>
                <Box className="small-articles-block_title" component="p">{Object.keys(this.props.fetchData).length
                  ? JSON.stringify(this.props.fetchData.docs[4].title).replace(/"/g, '')
                  : null}</Box>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    fetchData: state.essential
  }
}

const mapDispatchToProps = (dispatch: any) => {
  console.log(dispatch)
  return {
    fetchRequest: () => dispatch(essentialFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EssentialBlock);