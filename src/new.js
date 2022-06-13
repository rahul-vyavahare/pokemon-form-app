import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './App.css';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import bulbasaur from './images/bulbasaur.png';
import charmander from './images/charmander.png';
import squirtle from './images/squirtle.png';
import Icon from '@mui/material/Icon';
import { loadCSS } from "fg-loadcss";
import Chip from '@mui/material/Chip';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            fullname:'',
            codename: '',
            slidervalue: 0,
            region:''
        };
    }
    componentDidMount() {
        const node = loadCSS(
            "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
            // Inject before JSS
            document.querySelector("#font-awesome-css") || document.head.firstChild
        );
        
        return () => {
            node.parentNode.removeChild(node);
        };
       
    }
     handleChange = (e) => {
        const { name, value } = e.target;

    }
     handleClick = () => {

    }
     handleDelete = () => {

    }
     handleClose = () => {

         this.setState({ open: false });
    }
     handleOpen = () => {
        debugger



          this.setState({open:true});
    }

    render() {
        return (
            <div className="container-t" >
          <div className="main-container-t">
              <div style={{ textAlign: 'center', marginTop: '50px' }}><label style={{ opacity: 1, color: '#FE5454', font: ' normal normal bold 32px/38px Roboto' }}>Fill This Form</label></div>
              <div style={{ marginLeft: 80, marginRight: 80 }}><div style={{ textAlign: 'center', marginTop: '40px', width: 338, height: 59 }}><label style={{ font: 'normal normal bold 18px/22px Roboto', opacity: 1, color: '#889296' }}>We'll use this info to dominate the poke world! Muhahahahah</label></div>
                  <div style={{ marginTop:24 }}><Box
                      sx={{
                          width: 328,
                          maxWidth: '100%',
                      }}
                  ><TextField fullWidth
                      error
                      id="fullName"
                      label="Full Name"
                       name='fullname'
                                helperText={this.state.fullname.length < 3 ? "We know that's not yo name!!" : " "}
                                onChange={(e) => this.handleChange}
                          value={this.state.fullname}
                          variant="filled" 
                      /></Box></div>
                  <div style={{ marginTop:24 }}><Box
                      sx={{
                          width: 328,
                          maxWidth: '100%',
                      }}
                  ><TextField fullWidth
                          error
                          name='codename'
                  id="codeName"
                          label="Code Name"
                                onChange={(e) => this.handleChange}
                                value={this.state.codename}
                                helperText={this.state.codename.length < 3 ? "We know that's not yo code name!!" : " "}                  variant="filled"
              /></Box></div>
                  <div style={{ marginTop: 40, width: 328, height: 80 }}><Box width={328}><Slider sx={{
                      color: '#FE5454', '& .css-1xff9fg-MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
                          borderRadius: '10px', backgroundColor: '#FE5454'
                      }
                  }}
                            size="small" value={this.state.slidervalue} onChange={(e) => this.handleChange}
                  
                  aria-label="Small"
                  valueLabelDisplay="on"
              /></Box>
                  <label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 14px/17px Roboto' }}>How far is your nearest pokemon center? (In KMs)</label>
              </div>
                  <div style={{ marginTop: 0, width: 328, height: 70 }}>
                  <FormControl variant="filled" sx={{  minWidth: 328 }}>
                          <InputLabel id="demo-simple-select-filled-label" >What's your starting region?</InputLabel>
                      <Select error 
                          labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                                    value={this.state.region}
                                    onChange={(e) => this.handleChange} autoWidth sx={{ fontColor: 'red' }}
                      >
                          
                          <MenuItem value={'Kanto'}>Kanto</MenuItem>
                          <MenuItem value={'Jhoto'}>Jhoto</MenuItem>
                          <MenuItem value={'Hoenn'}>Hoenn</MenuItem>
                      </Select>
                  </FormControl>
              </div>
                  <div style={{ minWidth: 338, minHeight: 139, marginTop: 40 }}><label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 16px/19px Roboto' }}>Choose your starter pokemon</label>
                      <div style={{ display: 'flex', marginTop: 20, alignItems: 'center' }}>  <div className='unselected-outer' style={{ marginRight: 34,  borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box' }}><img src={bulbasaur} alt="" className='unselcted-inner' style={{ background: 'transparent  0% 0% no-repeat padding-box' }} /></div>
                          <div className='selected selected-outer' style={{ marginRight: 34, borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box' }}><img src={charmander} alt="" className='selected-inner' style={{  background: 'transparent  0% 0% no-repeat padding-box' }} /></div>
                          <div className='unselected-outer' style={{  borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box' }}><img src={squirtle} alt="" className='unselcted-inner' style={{  background: 'transparent  0% 0% no-repeat padding-box' }} /></div>
              </div></div>
                  <div style={{ minWidth: 338, minHeight: 139, marginTop: 40 }}>
                      <div style={{ height: 40, width: 328, display: 'flex', alignItems: 'center' }}><label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 16px/19px Roboto', height: 19, width: 215 }}>What do you want to pack?</label>
                                <div style={{ marginLeft: 93, width: 40, height: 40, backgroundColor: '#FE5454', borderRadius: 60, cursor: 'pointer' }} ><button style={{  width: 40, height: 40, backgroundColor: '#FE5454', borderRadius: 60, cursor: 'pointer' }} ><i className="fas fa-plus" style={{ margin: 12, color: '#FFFFFF' }} onClick={() => this.handleOpen()}></i></button>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={()=>this.handleClose()}
                                        
                                    >
                                        <div className="main-container-t">

                                        </div>
                                    </Dialog>
                          </div></div>
                      <div>

                          <Chip label="success" sx={{ backgroundColor: "#75F4FE" }} onClick={this.handleClick}
                              onDelete={this.handleDelete} />


                      </div>
                  </div>
                  <div style={{ minWidth: 338, minHeight: 22, marginTop: 40 }}><label style={{ opacity: 1, color: '#889296', font: ' normal normal bold 18px/22px Roboto' }}>Total Cost</label><label style={{ opacity: 1, color: '#393B3B', font: ' normal normal bold 18px/22px Roboto', float: 'right' }}>$232</label></div>
                  <div style={{ alignItems: "center", justifyContent: 'center', display: 'flex', marginBottom:80 }}><button style={{cursor:'pointer', width: 200, height: 36, marginTop: 49.5, background: '#FE5454 0% 0 % no - repeat padding- box', boxShadow: '0px 1px 3px #00000033', borderRadius: 4, backgroundColor: '#FE5454', color: '#FFFFFF', border: 'none' }}>START MY JOURNEY</button></div>
          </div></div>
    </div>
            );
    }
}