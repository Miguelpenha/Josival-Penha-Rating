import styled from 'styled-components'
import LoadingRaw from '../Loading'

export const Container = styled.div`
    gap: 1em;
    display: flex;
    margin-top: 1em;
    margin-bottom: 3em;
    align-items: center;
    flex-direction: column;
`

export const Loading = styled(LoadingRaw)`
    margin-top: 2.5em;
    margin-bottom: 2.5em;
`