import React from 'react'
import Welcome from './welcome'
import ConfirmButtom from './ConfirmButtom'
import Page from './Shared/Page'

export default function index() {
    return (
        <Page name='Settings'>
            <Welcome />
            <ConfirmButtom />
        </Page>
    )
}
