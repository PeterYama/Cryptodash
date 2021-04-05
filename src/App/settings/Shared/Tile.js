import {subtleBoxShadow, lightBlueBackground} from '../Shared/Styles'
import styled from 'styled-components'

export const Tile = styled.div`
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding:10px;
`

export const SelectableTyle = styled(Tile)`
    &hover {
        cursor: pointer;
        &{greenBoxShadow}
    }
`