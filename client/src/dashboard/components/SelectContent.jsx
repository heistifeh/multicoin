import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import Select, { selectClasses } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.secondary,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

export default function SelectContent() {
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Select
      labelId="company-select"
      id="company-simple-select"
      value={company}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Select company' }}
      fullWidth
      sx={{
        maxHeight: 56,
        width: 215,
        '&.MuiList-root': {
          p: '8px',
        },
        [`& .${selectClasses.select}`]: {
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          pl: 1,
        },
      }}
    >
     <ListSubheader sx={{ pt: 0 }}>Automatic Mining</ListSubheader>
      <MenuItem value="auto_btc">
        <ListItemAvatar>
          <Avatar alt="Bitcoin">
            <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bitcoin (BTC)" secondary="Most profitable" />
      </MenuItem>
      <MenuItem value="auto_eth">
        <ListItemAvatar>
          <Avatar alt="Ethereum">
            <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ethereum (ETH)" secondary="Energy efficient" />
      </MenuItem>
      
      <ListSubheader>Manual Mining</ListSubheader>
      {/* <MenuItem value="manual_btc">
        <ListItemAvatar>
          <Avatar alt="Bitcoin Manual">
            <ConstructionRoundedIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bitcoin (BTC)" secondary="Custom settings" />
      </MenuItem> */}
      {/* <MenuItem value="manual_eth">
        <ListItemAvatar>
          <Avatar alt="Ethereum Manual">
            <ConstructionRoundedIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ethereum (ETH)" secondary="Custom settings" />
      </MenuItem> */}
      <MenuItem value="manual_eth" disabled>
        <ListItemAvatar>
          <Avatar alt="Ethereum Manual">
            <ConstructionRoundedIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Activate Manual Mining" secondary="Contact Support" />
      </MenuItem>
      <Divider sx={{ mx: -1 }} />
      {/* <MenuItem value="add_coin">
        <ListItemIcon>
          <AddRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Add new coin" secondary="Custom configuration" />
      </MenuItem> */}
    </Select>
  );
}
