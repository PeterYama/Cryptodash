import React from 'react'
import Welcome from './welcome'
import ConfirmButtom from './ConfirmButtom'
import Page from './Shared/Page'
import CoinGrid from './CoinGrid'

export default function index() {
    return (
        <Page name='Settings'>
            <Welcome />
            <ConfirmButtom />
            <CoinGrid />
        </Page>
    )
}
