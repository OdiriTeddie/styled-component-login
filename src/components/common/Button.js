import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const largeStyles = ({large}) => {
    if(large) {
        return  css`
            padding: 10px;
            border-radius: 5px;
            font-size: 1.5rem;
    ` 
    } else {
       return css`
        padding: 8px;
        border-radius: 4px;
        font-size: 1rem;
    ` 
    }
}

const Button = styled.button`
    color: #fff;
    background-color: ${props => props.secondary ? p => p.theme.secondaryColor : p => p.theme.primaryColor};
    font-weight: bold;

    /* ${largeStyles} */

    ${p => p.large ? css`
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
    ` 
    : css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1rem;
    `}

    box-shadow: none;
    width: 100%;
    display: block;
    white-space: none;
    outline: none;

    &:disabled{
        background-color: #eee;
        color: #666;
    }
`;

Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export {Button}