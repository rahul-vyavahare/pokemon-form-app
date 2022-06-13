import logo from './images/bg.png';
import './App.css';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import bulbasaur from './images/bulbasaur.png';
import charmander from './images/charmander.png';
import squirtle from './images/squirtle.png';
import chikorita from './images/chikorita.png';
import cyndaquil from './images/cyndaquil.png';
import mudkip from './images/mudkip.png';
import torchic from './images/torchic.png';
import totodile from './images/totodile.png';
import treecko from './images/treecko.png';
import { loadCSS } from "fg-loadcss";
import  React from "react";
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Modalclass from './Modalclass.js';
import Switch from '@mui/material/Switch';
import $ from 'jquery';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 488,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
   
    height: '80vh',
    borderRadius:'16px'
    
};
function App() {
    const [fullname, setFullname] = React.useState('');
    const [codename, setCodename] = React.useState('');
    const [slidervalue, setSlidervalue] = React.useState(0);
    const [modalSlidervalue, setModalSlidervalue] = React.useState(0);
    const [region, setRegion] = React.useState('');
    const [item, setItem] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [bag, setBag] = React.useState(false);
    const [modalCost, setModalcost] = React.useState(0);
    const [itemValue, setItemvalue] = React.useState(0);
    const [itemData, setItemdata] = React.useState([]);
    const [totalCost, setTotalcost] = React.useState(0);
    const [edit, setEdit] = React.useState(false);
    const [editId, setEditid] = React.useState(null);
    const [poke, setPoke] = React.useState(charmander);
    const [final, setFinal] = React.useState(false);
    React.useEffect(() => {
        const node = loadCSS(
            "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
            // Inject before JSS
            document.querySelector("#font-awesome-css") || document.head.firstChild
        );
        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);
    React.useEffect(() => { setModalcost(bag ? 2 + (modalSlidervalue * itemValue) : (modalSlidervalue * itemValue)); }, [bag, modalSlidervalue, itemValue,item])
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'modal-select') {
            setItem(value);
            if (value == 'Poke Ball') {
                setItemvalue(5);
            }
            else if (value == 'Great Ball') {
                setItemvalue(10);
            }
            else if (value == 'Super Potion') {
                setItemvalue(10);
            }
            else if (value == 'Hyper Potion') {
                setItemvalue(20);
            }
           // setModalcost(bag ? 2 + (modalSlidervalue * itemValue) : (modalSlidervalue * itemValue));
        }
        if (name == 'modal-slider') {
            setModalSlidervalue(value);
           // setModalcost(bag ? 2 + (modalSlidervalue * itemValue) : modalSlidervalue * itemValue);
        }
        if (name == 'modal-switch') {
            setBag(!bag);
            //setModalcost(bag ? 2 + (modalSlidervalue * itemValue) : modalSlidervalue * itemValue);
        }
        if (bag || modalSlidervalue > 0) {
            //setModalcost(bag ? 2 +( modalSlidervalue * itemValue) : modalSlidervalue * itemValue);
        }
    }
    const handleClick = (id) => {
        setOpen(true);
        setEdit(true);
        setEditid(id);
        let temp = [...itemData];
        let tt = temp.filter(el => el.id == id);
        setModalcost(tt[0].cost);
        setItem(tt[0].item);
        setModalSlidervalue(tt[0].quantity);
        setBag(tt[0].bag);
        if (tt[0].item == 'Poke Ball') {
            setItemvalue(5);
        }
        else if (tt[0].item == 'Great Ball') {
            setItemvalue(10);
        }
        else if (tt[0].item == 'Super Potion') {
            setItemvalue(10);
        }
        else if (tt[0].item == 'Hyper Potion') {
            setItemvalue(20);
        }
        
    }
    const handleDelete = (id) => {
        let temp = [...itemData];
        let tt = temp.filter(el => el.id == id);
        temp = temp.filter(el => el.id !== id);
        setItemdata(temp);
        setTotalcost(totalCost -(tt[0].cost));
    }
    const handleClose = () => {

        setOpen(false);
        setFinal(false);
    }
    const handleOpen = (e) => {
        
        e.preventDefault(); setOpen(true);
    }
    const handleCart = () => {
        if (item !== "" && modalSlidervalue > 0 && edit == false) {
            var data = { id: '' + item[0] + (itemData.length + 1), bag: bag, item: item, cost: modalCost, quantity: modalSlidervalue };
            let temp = [...itemData];
            temp.push(data);
            setItemdata(temp);
            setModalcost(0);
            setItemvalue(0);
            setItem('');
            setModalSlidervalue(0);
            setBag(false);
            setTotalcost(totalCost + modalCost)
            handleClose();
        }
        else if (edit) {
            let temp = [...itemData];
            let tt = temp.filter(el => el.id == editId);
            setTotalcost(totalCost + modalCost - tt[0].cost)

            temp = temp.filter(el => el.id !== editId);
            var data = { id: '' + item[0] + (itemData.length + 1), bag: bag, item: item, cost: modalCost, quantity: modalSlidervalue };
            temp.push(data);
            setItemdata(temp);
            setModalcost(0);
            setItemvalue(0);
            setItem('');
            setModalSlidervalue(0);
            setBag(false);
            handleClose();
        }
        else {
            alert('Please choose item/quantity');
        }
    }
    const handlePokemon = (type) => {
        //selected selected - outer'
        //unselected - outer' onCli
        if ($('.tp').hasClass('selected-outer'))
            {
            $('.tp').removeClass('selected-outer');
            $('.tp').removeClass('selected');
            $('.tp').removeClass('unselected-outer');
            $('.ttp').removeClass('selected-inner');
            
            $('.ttp').removeClass('unselcted-inner');
            $('#' + type).addClass('selected-outer');
            $('#' + type).addClass('selected');
            $('#' + type + '-inner').addClass('selected-inner');
            if (type == 'grass') {
                $('#fire').addClass('unselected-outer');
                $('#water').addClass('unselected-outer');
                $('#fire-inner').addClass('unselcted-inner');
                $('#water-inner').addClass('unselcted-inner');
                setPoke(region == 'Kanto' ? bulbasaur : region == 'Jhoto' ? chikorita : region == 'Hoenn' ? treecko : bulbasaur);
            }
            else if (type == 'water') {
                $('#fire').addClass('unselected-outer');
                $('#grass').addClass('unselected-outer');
                $('#fire-inner').addClass('unselcted-inner');
                $('#grass-inner').addClass('unselcted-inner');
                setPoke(region == 'Kanto' ? squirtle : region == 'Jhoto' ? totodile : region == 'Hoenn' ? mudkip : squirtle);
            }
            else if (type == 'fire') {
                $('#water').addClass('unselected-outer');
                $('#grass').addClass('unselected-outer');
                $('#water-inner').addClass('unselcted-inner');
                $('#grass-inner').addClass('unselcted-inner');
                setPoke(region == 'Kanto' ? charmander : region == 'Jhoto' ? cyndaquil : region == 'Hoenn' ? torchic : charmander);

            }

        }
        
    }
    const handleSubmit = () => {
        if (fullname.length <3) {
            alert("Please enter full name feild");
        }
        else if (codename.length <3) {
            alert("Please enter code name feild");
        }
        else {
            setFinal(true);
        }
    }
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
                          helperText= {fullname.length < 3 ? "We know that's not yo name!!" :" "}
                      onChange={(e) => setFullname(e.target.value)}
                          value={fullname}
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
                          onChange={(e) => setCodename(e.target.value)}
                          value={codename}
                      helperText={codename.length < 3 ? "We know that's not yo code name!!" : " "}                  variant="filled"
              /></Box></div>
                  <div style={{ marginTop: 40, width: 328, height: 80 }}><Box width={328}><Slider sx={{
                      color: '#FE5454', '& .css-1xff9fg-MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
                          borderRadius: '10px', backgroundColor: '#FE5454'
                      }
                  }}
                      size="small" value={slidervalue} onChange={(e) => setSlidervalue(e.target.value)} min={0}
                      max={
                          10}
                  
                  aria-label="Small"
                  valueLabelDisplay="on"
              /></Box>
                  <label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 14px/17px Roboto' }}>How far is your nearest pokemon center? (In KMs)</label>
              </div>
                  <div style={{ marginTop: 0, width: 328, height: 70 }}>
                  <FormControl  sx={{  minWidth: 328 }}>
                          <InputLabel id="label" >What's your starting region?</InputLabel>
                      <Select  
                          labelId="label"
                              id="demo-simple-select-filled"
                              value={region}
                              onChange={(e) => {
                                  setRegion(e.target.value);
                                  setPoke(e.target.value == 'Kanto' ? charmander : e.target.value == 'Jhoto' ? cyndaquil : e.target.value == 'Hoenn' ? torchic : charmander);
                              }} autoWidth sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none', } }}
                      >
                          
                          <MenuItem value={'Kanto'}>Kanto</MenuItem>
                          <MenuItem value={'Jhoto'}>Jhoto</MenuItem>
                          <MenuItem value={'Hoenn'}>Hoenn</MenuItem>
                      </Select>
                  </FormControl>
              </div>
                  <div style={{ minWidth: 338, minHeight: 139, marginTop: 40 }}><label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 16px/19px Roboto' }}>Choose your starter pokemon</label>
                      <div style={{ display: 'flex', marginTop: 20, alignItems: 'center' }}>  <div id='grass' onClick={() => handlePokemon('grass')} className='tp unselected-outer' style={{ marginRight: 34, borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box' }}><img id='grass-inner' src={region == 'Kanto' ? bulbasaur : region == 'Jhoto' ? chikorita : region == 'Hoenn' ? treecko : bulbasaur} alt="" className='ttp unselcted-inner' style={{ background: 'transparent  0% 0% no-repeat padding-box' }} /></div>
                          <div id='fire' className='tp selected selected-outer' onClick={() => handlePokemon('fire')} style={{ marginRight: 34, borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box' }}><img id='fire-inner' src={region == 'Kanto' ? charmander : region == 'Jhoto' ? cyndaquil : region == 'Hoenn' ? torchic : charmander} alt="" className='ttp selected-inner' style={{ background: 'transparent  0% 0% no-repeat padding-box' }} /></div>
                          <div id='water' className='tp unselected-outer' onClick={() => handlePokemon('water')} style={{ borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box' }}><img id='water-inner' src={region == 'Kanto' ? squirtle : region == 'Jhoto' ? totodile : region == 'Hoenn' ? mudkip : squirtle} alt="" className='ttp unselcted-inner' style={{ background: 'transparent  0% 0% no-repeat padding-box' }} /></div>
              </div></div>
                  <div style={{ minWidth: 338, minHeight: 139, marginTop: 40 }}>
                      <div style={{ height: 40, width: 328, display: 'flex', alignItems: 'center' }}><label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 16px/19px Roboto', height: 19, width: 215 }}>What do you want to pack?</label>
                          <div style={{ marginLeft: 93 }} ><button style={{ width: 40, height: 40, backgroundColor: '#FE5454', borderRadius: 60, cursor: 'pointer', border: 'none' }} ><i className="fas fa-plus" style={{ margin: 7, color: '#FFFFFF' }} onClick={handleOpen}></i></button>
                              <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description" sx={{ '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': { background:'grey 0% 0% no-repeat padding-box'}}}
                              >
                                  <Box sx={ style }>
                                      <div className="container-t" style={{ height: '80vh' }}>
                                          <div className="main-container-t">
                                      <div style={{ textAlign: 'center', marginTop: '50px' }}><label style={{ opacity: 1, color: '#FE5454', font: ' normal normal bold 32px/38px Roboto' }}>Place Your Order</label></div>
                                      <div style={{ marginLeft: 80, marginRight: 80 }}><div style={{ textAlign: 'center', marginTop: '40px', width: 319, height: 59 }}><label style={{ font: 'normal normal bold 18px/22px Roboto', opacity: 1, color: '#889296' }}>We'll use this info to pack your order! Muhahahahahaha</label></div>
                                          <div style={{ marginTop: 40, width: 319, height: 70 }}>
                                              <FormControl  sx={{ minWidth: 319 }}>
                                                  <InputLabel id="modal-label" >Choose Item</InputLabel>
                                                  <Select  name='modal-select'
                                                      labelId="modal-label"
                                                              id="modal-select"
                                                              value={item} className='for-select'
                                                              onChange={handleChange} autoWidth sx={{ fontColor: 'red', '& .MuiOutlinedInput-notchedOutline': { border: 'none',   } }}
                                                  >

                                                              <MenuItem value={'Poke Ball'}>Poke Ball</MenuItem>
                                                              <MenuItem value={'Great Ball'}>Great Ball</MenuItem>
                                                              <MenuItem value={'Super Potion'}>Super Potion</MenuItem>
                                                              <MenuItem value={'Hyper Potion'}>Hyper Potion</MenuItem>
                                                  </Select>
                                              </FormControl>
                                          </div> <div style={{ marginTop: 40, width: 319, height: 80 }}><Box width={319}><Slider sx={{
                                              color: '#FE5454', '& .css-1xff9fg-MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
                                                  borderRadius: '10px', backgroundColor: '#FE5454'
                                              }
                                          }}
                                                      size="small" value={modalSlidervalue} onChange={handleChange}

                                              aria-label="Small"
                                              valueLabelDisplay="on" name='modal-slider'
                                          /></Box>
                                              <label style={{ opacity: 1, color: '#000000DE', font: ' normal normal normal 14px/17px Roboto' }}>Select Quantity</label>
                                          </div>
                                          <div style={{ marginTop: 40, width: 319, height: 29 }}>
                                              <label style={{ marginTop:10,opacity: 1, color: '#00000099', font: ' normal normal normal 16px/19px Roboto' }}>I need a bag for that!</label>
                                                      <Switch checked={bag} name='modal-switch'
                                                          onChange={handleChange} sx={{
                                                  '& .MuiSwitch-switchBase.Mui-checked': {
                                                      color: '#FE5454',
                                                      
                                                  },
                                                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                      backgroundColor: '#FE5454',
                                                  }, color: '#FE5454', float: 'right',
                                              }} />
                                          </div>
                                                  <div style={{ marginTop: 40, width: 319, height: 22 }}>
                                                      <label style={{ opacity: 1, color: '#889296', font: ' normal normal bold 18px/22px Roboto' }}>Cost</label><label style={{ opacity: 1, color: '#393B3B', font: ' normal normal bold 18px/22px Roboto', float: 'right' }}>${modalCost}</label>
                                                  </div>
                                                  <div style={{ alignItems: "center", justifyContent: 'center', display: 'flex', marginBottom: 80 }}><button style={{ cursor: 'pointer', width: 200, height: 36, marginTop: 79.5, background: '#FE5454 0% 0 % no - repeat padding- box', boxShadow: '0px 1px 3px #00000033', borderRadius: 4, backgroundColor: '#FE5454', color: '#FFFFFF', border: 'none' }} onClick={handleCart}>ADD TO CART</button></div>

                                      </div></div></div>
                                  </Box>
                              </Modal>
                          </div></div>
                      <div>

                          {[...itemData].map((item,count) =>
                              < Chip name={item.id} key={item.id} id={item.id} label={'' + item.quantity + ' ' + item.item} sx={{ backgroundColor: item.bag ? "#75F4FE" : "", marginLeft: count > 0 ? '5px' : 0, marginTop: count > 1 ? '10px' : 0 }} onClick={()=>handleClick(item.id)}
                                  onDelete={() => handleDelete(item.id)} />
                          )}


                      </div>
                  </div>
                  <div style={{ minWidth: 338, minHeight: 22, marginTop: 40 }}><label style={{ opacity: 1, color: '#889296', font: ' normal normal bold 18px/22px Roboto' }}>Total Cost</label><label style={{ opacity: 1, color: '#393B3B', font: ' normal normal bold 18px/22px Roboto', float: 'right' }}>${totalCost}</label></div>
                  <div style={{ alignItems: "center", justifyContent: 'center', display: 'flex', marginBottom: 80 }}><button style={{ cursor: 'pointer', width: 200, height: 36, marginTop: 49.5, background: '#FE5454 0% 0 % no - repeat padding- box', boxShadow: '0px 1px 3px #00000033', borderRadius: 4, backgroundColor: '#FE5454', color: '#FFFFFF', border: 'none' }} onClick={ handleSubmit}>START MY JOURNEY</button>
                      <Modal
                          open={final}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description">
                          <Box sx={style}>
                              <div className="container-t" style={{ height: '80vh' }}>
                                  <div className="main-container-t">
                                      <div style={{ textAlign: 'center', marginTop: '50px' }}><label style={{ opacity: 1, color: '#FE5454', font: ' normal normal bold 32px/38px Roboto' }}>Collected Data</label></div>
                                      <div style={{ marginLeft: 80, marginRight: 89, marginTop: 40 }}><div><label>Full name :</label> <label style={{ marginLeft: 15 }}>{fullname} </label>                  </div>
                                          <div style={{ marginTop: 20 }}><label>Code name: </label>     <label style={{ marginLeft: 15 }}>{codename} </label>               </div>
                                          <div style={{ marginTop: 20 }}><label>Nearest Pokemon center:</label>         <label style={{ marginLeft: 20 }}>{slidervalue} KM </label>               </div>
                                          <div style={{ marginTop: 20 }}><label>Region:</label>         <label style={{ marginLeft: 20 }}>{ region} </label>               </div>
                                          <div style={{ marginTop: 20 ,display:'flex',alignItems:'center'}}><label>Starter pokemon: </label>                             <div   style={{ marginLeft: 14, borderRadius: '60px', opacity: 1, background: '#F0F0F0 0% 0% no-repeat padding-box',height:100,width:100 }}><img  src={poke} alt="" className='' style={{ background: 'transparent  0% 0% no-repeat padding-box',width:80,height:80,margin:12 }} /></div>
           </div>
                                          <div style={{ marginTop: 20 }}><label>Packed items</label>   <div>

                                              {[...itemData].map((item, count) =>
                                                  < Chip name={item.id} key={item.id} id={item.id} label={'' + item.quantity + ' ' + item.item} sx={{ backgroundColor: item.bag ? "#75F4FE" : "", marginLeft: count > 0 ? '5px' : 0, marginTop: count > 1 ? '10px' : 0 }} 
                                                       />
                                              )}


                                          </div>                </div>
                                          <div style={{ marginTop: 20 }}><label>Total Cost :</label> <label style={{ marginLeft: 15 }}> $ {totalCost}</label></div>
                                  </div></div></div>
                          </Box>
                      </Modal>
                  </div>
          </div></div>
    </div>
  );
}

export default App;
