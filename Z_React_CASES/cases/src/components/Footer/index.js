import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <label>
                    <input type="checkbox" name="" id=""/>
                    <span>已完成0 / 全部3</span>
                </label>
                <button>清楚已完成任务</button>
            </div>
        )
    }
}
