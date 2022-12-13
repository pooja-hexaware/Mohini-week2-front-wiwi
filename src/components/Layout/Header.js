import { Fragment } from 'react';
import {Search} from 'react-bootstrap-icons';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/pic6.jpg';
import classes from './Header.module.css';
//import SearchOutlined from '@mui/icons-material';


// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>Wiwi food delivery app(Capestone)</h3>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* <SearchOutlined>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchOutlined>*/}
                     <div> 
                  <Search />
        </div>
      <div className={classes['main-image']}> 
        <img src={mealsImage} alt='Delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
