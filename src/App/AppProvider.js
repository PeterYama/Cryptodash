import React, { Component } from 'react'

const cc = require('cryptocompare')
cc.setApiKey('73be884d840dcda06ffa9b785a3bb92c3554bac2be941fc2c6b1567b08444c82')
// Create context
// Providers will notify consumers when the states updates
// App Context imports AppContext
export const AppContext = React.createContext();

// The Application must be wrapped with AppProvider
export default class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state={
            page:'Dashboard',
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
    }

    // to uset this.properties you must use arrow functions
    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'Dashboard'
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
