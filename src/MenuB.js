import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class MenuB extends Component {
    render() {
        return (
            <div>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
            </div>
        )
    }
}
