import React from "react";

export class WelcomeComponent extends React.Component{
    render(){
        return (
            <p>This is the first react file</p>
        )
    }
}

export default class App extends React.Component{
    render(){
        return (
            <div className="bg-body">
                <p className="fs-25">Reusable Component</p>
                <WelcomeComponent />
                <WelcomeComponent />
                <WelcomeComponent />
            </div>
        )
    }
}