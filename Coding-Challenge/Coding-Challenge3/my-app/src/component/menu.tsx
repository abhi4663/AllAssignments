import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';



export default function SimpleMenu(props: any) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        setAnchorEl(null);
        props.logOut();
    };

    return (
        <div>
            <Avatar className="Avatar" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.firstLetter}
            </Avatar>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>MyQuestion</MenuItem>
                <MenuItem onClick={handleClose}>My Answers</MenuItem>
                <MenuItem onClick={handleClose}>My upVoted Questions</MenuItem>
                <MenuItem onClick={handleClose}>My upVoted Answers</MenuItem>
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>


            </Menu>
        </div>
    );
}