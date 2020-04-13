import styled from 'styled-components';

export default styled.button`
    display: inline-block;
    width: 80%;
    margin: 10px auto 0;
    border-radius: 2px;
    padding: 1em;
    background-color: white;
    text-decoration: none;
    font-size: 14px;
    border: solid 2px #e52d27;
    color: #e52d27;
    transition: color 0.5s ease;
    cursor: pointer;

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    :hover {
        color: #e52d27;
    }

    :before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #e52d27;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    :hover, :focus, :active {
        color: white;
    }
    
    :hover:before, :focus:before, :active:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`