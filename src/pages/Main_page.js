import React from 'react';
//import { Helmet } from 'react-helmet';
import {Container,Button,Typography,Box,TextField} from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const styles = theme => ({
    paper: {
        height: "97%",
        width: '100%',
        marginTop:'1%',
		backgroundColor:'red',
        backgroundSize: 'cover'
    },
});

class Main_page extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
            page_title:'Search Github Repository',
			phrase:'faizabdulchakim'
		};
  }

  componentDidMount(){
		
  }
  
  search(){
	  alert(this.state.phrase);
  }

  render() {
    const { classes } = this.props;
		return(
            
            <Container  style={{height:window.innerHeight,overflow:'hidden'}}>
               
                <Box className={classes.paper} >
                    <Box style={{textAlign:'center',paddingTop:0,backgroundColor:'green'}}>
                      <Typography variant="h5" component="h5" gutterBottom>{this.state.page_title}</Typography>
                    </Box>
                    <Box style={{textAlign:'center'}}>
						<TextField id="outlined-basic" style={{backgroundColor:'white'}}  variant="outlined" value={this.state.phrase}
						onChange={(e) => {
						  this.setState({"phrase":e.target.value},function(){
							this.search()
						  })
						}}
						/>
                    </Box>
					<Box style={{textAlign:'left',paddingTop:0,backgroundColor:'green'}}>
                      <Typography >Result</Typography>
                    </Box>
                </Box>
            </Container>
        )
  }

}

Main_page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main_page);
