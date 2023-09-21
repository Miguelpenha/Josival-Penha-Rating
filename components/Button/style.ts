import styled, { css } from 'styled-components'

interface IContainer {
    sizeIcon: number
}

export const Container = styled.button<IContainer>`
    width: 17rem;
    border: none;
    display: flex;
    padding: 1rem;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    transform: scale(0.95);
    transition-duration: 0.15s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.backgroundColor};

    ${props => !props.disabled ? css`
        cursor: pointer;
        
        :hover {
            transform: scale(1);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 4px;
        }
    ` : css`
        filter: brightness(0.5);
    `}

    @media screen and (max-width: 900px) {
        max-width: 80%;
        min-width: 10em;
    }

    svg {
        transition-duration: 0.2s;
        transition-timing-function: linear;
        width: ${props => props.sizeIcon}em;
        height: ${props => props.sizeIcon}em;
        fill: ${props => props.theme.primary};
    }
`

export const Text = styled.span`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 1.7em;
    }
`