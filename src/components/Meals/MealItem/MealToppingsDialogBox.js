import React,{ useState, useEffect } from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
//import PersonIcon from '@mui/icons-material/Person';
import Checkbox from '@mui/material/Checkbox';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';

const toppings = [
    'Oil',
    'Vinger',
    'Ranch',
    'Ketchap',
    'Sun dreied -tomoto']
class MealBox extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }


//   const [checked, setChecked] = React.useState([1]);

//     const handleToggle = (value) => () => {
//       const currentIndex = checked.indexOf(value);
//       const newChecked = [...checked];
  
//       if (currentIndex === -1) {
//         newChecked.push(value);
//       } else {
//         newChecked.splice(currentIndex, 1);
//       }
  
//       setChecked(newChecked);
//     };


  render() {
    return (
      <div>
        <button onClick={this.openBox}>+toppings </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
            //   headerBackgroundColor='red'
            //   headerTextColor='white'
            //   headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              //headerText='Title'
            >
              <div>
              <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {toppings.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
              //  checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                {/* <Avatar
                alt={`Avatar n°${value + 1}`}
                 src={`/static/images/avatar/${value + 1}.jpg`}
                  
                /> */}
                   <Avatar >
                {/* <PersonIcon /> */}
              </Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={` ${value }`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>  
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default MealBox