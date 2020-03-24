'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/test.jpg'
import './index.less'

class Index extends React.Component{
    render(){
        return <div className="search-text">
            Index Text<img src={logo} />
        </div>
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)