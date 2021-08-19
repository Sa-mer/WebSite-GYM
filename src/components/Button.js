import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 2px;
    background: ${({ primary }) => (primary ? 'transparent' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#fff' : '#fff')};
    font-size: ${({ fontBig}) => (fontBig ? ' 20px' : '16px')};
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
        color: ${({ dark}) => (dark ? '#242424' : '#fff')};
    }
`

export const Button2 = styled(Link)`
    border-radius: 2px;
    background: ${({ primary }) => (primary ? '#fff' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? 'black' : '#fff')};
    font-size: ${({ fontBig}) => (fontBig ? ' 20px' : '16px')};
    outline: none;
    border: 1px solid #242424;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#242424' : '#01BF71')};
        color: ${({ dark}) => (dark ? '#fff' : '#fff')};
    }
`