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

    .Toastify__toast {
        color: ${props => props.theme.primary};
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2.5px 12px 4px;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    .Toastify__progress-bar {
        background-color: ${props => props.theme.primary};
    }

    .Toastify__progress-bar--error {
        background-color: red;
    }

    .Toastify__toast-theme--light.Toastify__toast--error {
        color: red;
    }

    .Toastify__progress-bar--success {
        background-color: green;
    }

    .Toastify__toast-theme--light.Toastify__toast--success {
        color: green;
    }

    .Toastify__close-button {
        color: ${props => props.theme.primary};
    }
`