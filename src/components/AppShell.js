import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom' // material-ui에도 중복명이 존재하므로, 충돌방지를 위해 alias 추가
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles'; // 디자인 관련
import AppBar from '@material-ui/core/AppBar'; // 네비게이션바 관련
import Drawer from '@material-ui/core/Drawer'; // 네비게이션바 그리는 것 관련
import MenuItem from '@material-ui/core/MenuItem'; // 네비게이션 내 각각의 아이템 관련
import IconButton from '@material-ui/core/IconButton'; // 아이콘 버튼 관련
import MenuIcon from '@material-ui/icons/Menu'; // 메뉴관련

// 사용자 별도 스타일
const styles = {
    root : {
        flexGrow : 1
    },
    menuButton : {
        marginRight : 'auto' // 왼쪽정렬
    }
}

class AppShell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle : false // 네비게이션 바의 open/close 상태
        }
    }

    // 익명함수의 경우, state 선언 더 간결해짐 위의 주석과 같은 의미
    /* state = {
        toggle : false
    }
    */
   
    handleDrawerToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {
        const { classes } = this.props; // 사용자용 스타일 적용 목적
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>
                    </AppBar>
                    <Drawer open={this.state.toggle}>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/texts">
                                Tests
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/words">
                                Words
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div id="content" style={{margin:'auto', marginTop:'20px'}}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);