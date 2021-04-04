import React, { Component } from 'react'

const cc = require('cryptocompare')
// Create context
// Providers will notify consumers when the states updates
// App Context imports AppContext
export const AppContext = React.createContext();

// The Application must be wrapped with AppProvider
export default class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state={
            page:'dashboard',
            firstVisit: false,
            ...this.savedSettings(),
            coinList:{},
            setPage:this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinsList = (await cc.coinList()).Data;
        this.setState({coinList:coinsList});
        console.log(this.state.coinList);
    }
    // to uset this.properties you must use arrow functions
    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });

        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'Hello'
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))
        if(!cryptoDashData){
            return {page: 'settings', firstVisit: true}
        }
        return {}
    }

    setPage = page => this.setState({page})

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
