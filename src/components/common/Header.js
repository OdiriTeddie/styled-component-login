import { useState, useContext } from 'react';
import styled, {ThemeContext} from 'styled-components'
import { Link as RRDomLink, useLocation} from 'react-router-dom'
import Toggle from './Toggle';

const HeaderWrapper = styled.header`
    height: 3.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`;

const Menu = styled.nav`
    display: ${props => props.open ? 'block' :  'none'};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
    background-color: ${p => p.theme.bodyBackgroundColor};
    
    
    @media(min-width: 768px) {
        display: flex;
        background-color: transparent;
        left: initial;
        top: initial;
        justify-content: flex-end;
        position: relative;
        width: initial;
        border-bottom : none;
    }
`;


const Link = ({isActive, children, ...props}) => {
    return (
        <RRDomLink {...props}>
            {children}
        </RRDomLink>
    )
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${props => props.isActive ? 'bold' : 'normal'};
    color: ${p => p.theme.bodyFontColor};
`

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    > div {
        height: 3px;
        background-color: ${p => p.theme.bodyFontColor};
        margin: 5px 0;
        width: 100%;
    }

    @media(min-width: 768px) {
        display: none;
    }
`


const Header = () => {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)
    const {id, setTheme} = useContext(ThemeContext);


  return (
    <HeaderWrapper>
        <MobileMenuIcon onClick = {() => setMenuOpen(o => !o)}>
            <div />
            <div />
            <div />
        </MobileMenuIcon>
        <Menu open={menuOpen}>
            <StyledLink to="/" isActive={pathname === '/'}>
                Home
            </StyledLink>

            <StyledLink to="/login" isActive={pathname === '/login'}>
                Login
            </StyledLink>
            <Toggle isActive={id === 'dark'} onToggle={setTheme} />
        </Menu>
    </HeaderWrapper>
  )
}

export default Header