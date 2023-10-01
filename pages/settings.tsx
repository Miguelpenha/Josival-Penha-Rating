import useHandleLogout from '../components/useHandleLogout'
import handleCreateSpreadsheet from '../components/handleCreateSpreadsheet'
import Head from 'next/head'
import { Container, Title, LoggedAs, ButtonSpreadsheet, ButtonLogout } from '../styles/pages/settings'
import ButtonBack from '../components/ButtonBack'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'
import useUser from '../components/useUser'

function Settings() {
    const handleLogout = useHandleLogout()
    const user = useUser()

    return <>
        <Head>
            <title>Configurações - Josival Penha</title>
        </Head>
        <Container>
            <ButtonBack/>
            <Title>Configurações</Title>
            <LoggedAs>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                    <g>
                        <rect fill="none" height="24" width="24"/>
                    </g>
                    <g>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/>
                    </g>
                </svg>
                <span>{user?.user}</span>
            </LoggedAs>
            <ButtonSpreadsheet title="Gerar planilha" onClick={handleCreateSpreadsheet}>
                <svg viewBox="0 0 24 24">
                    <path d="M19,11V9H11V5H9V9H5V11H9V19H11V11H19M19,3C19.5,3 20,3.2 20.39,3.61C20.8,4 21,4.5 21,5V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H19Z"/>
                </svg>
            </ButtonSpreadsheet>
            <ButtonLogout title="Logout" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
            </ButtonLogout>
        </Container>
    </>
}

export default Settings

export const getServerSideProps = getServerSidePropsAuth