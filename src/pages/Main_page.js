import React from 'react';
//import { Helmet } from 'react-helmet';
import {Container,Button,Typography,Box,TextField} from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
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
		backgroundColor:'#f7f7f7',
        backgroundSize: 'cover'
    },
});

class Main_page extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
            page_title:'Search Github Repository',
			phrase:'',
			repositories:[]
		};
  }

  componentDidMount(){
		
  }
  
  search(){
		var url = 'https://api.github.com/users/'+this.state.phrase+'/repos';
		axios.get(url).then(response=>response.data)
		.then((data)=>{
			let repositories_ = [];
			for(var x=0;x<data.length;x++){
				let buff = {};
				buff.name = data[x].name;
				repositories_.push(buff);
			}
			this.setState({"repositories":repositories_});
		}).catch(function (error) {
        })
  }

  render() {
    const { classes } = this.props;
		return(
            
            <Container  style={{height:window.innerHeight,overflow:'hidden'}}>
               
                <Box className={classes.paper} >
                    <Box style={{textAlign:'center',paddingTop:0,backgroundColor:'#aabbcc'}}>
                      <Typography variant="h5" component="h5" gutterBottom>{this.state.page_title}</Typography>
                    </Box>
                    <Box style={{textAlign:'center'}}>
						<TextField id="outlined-basic" style={{backgroundColor:'white'}}  variant="outlined" value={this.state.phrase}
						placeholder="Username"
						onChange={(e) => {
						  this.setState({"phrase":e.target.value},function(){
							this.search()
						  })
						}}
						/>
                    </Box>
					<Box style={{textAlign:'left',paddingTop:0}}>
						{
							this.state.repositories.map((x,index_)=>{
								return(
								<Box style={{paddingTop:10,textAlign:'left',marginLeft:10}}>
									<Typography >
									{x.name}
									</Typography>
                                </Box>
								)
							})
						}
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
