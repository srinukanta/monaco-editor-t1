

import React, { Component, PropTypes, } from 'react'

class SimpleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMouseDown: false,
            isMouseOver: false,
            styleSelector: 'defaultStyle',
        }
        this._bindMouseEvent('_onMouseDown', 'onMouseDown', {
            isMouseDown: true,
            styleSelector: 'activeStyle',
        })
        this._bindMouseEvent('_onMouseUp', 'onMouseUp', {
            isMouseDown: false,
            styleSelector: 'defaultStyle',
        })
        this._bindMouseEvent('_onMouseOver', 'onMouseOver', {
            isMouseOver: true,
            styleSelector: 'hoverStyle',
        })
        this._bindMouseEvent('_onMouseOut', 'onMouseOut', {
            isMouseOver: false,
            styleSelector: 'defaultStyle',
        })
    }

    _bindMouseEvent(fnName, propName, newState) {
        this[fnName] = (e) => {
            this.setState(newState)
            if (this.props[propName]) {
                this.props[propName](e)
            }
        }
    }

    render() {
        const buttonStyle = this.props[this.state.styleSelector]
        return (
            <div {...this.props}
                 style={buttonStyle}
                 onMouseDown={this._onMouseDown}
                 onMouseUp={this._onMouseUp}
                 onMouseOver={this._onMouseOver}
                 onMouseOut={this._onMouseOut}>
                <div style={this.props.innerStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }


}

SimpleButton.propTypes = {
    defaultStyle: PropTypes.object.isRequired,
    activeStyle: PropTypes.object.isRequired,
    hoverStyle: PropTypes.object.isRequired,
    innerStyle: PropTypes.object.isRequired,
}

export default SimpleButton
