import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
        scrollbar-color: ${props => props.theme.primary} ${props => props.theme.backgroundColor};
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme.backgroundColor};
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: ${props => props.theme.primary};
        }
    }

    body {
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.backgroundColor};
    }
`