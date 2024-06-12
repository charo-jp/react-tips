import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function createObject() {
    console.log("outermost this", this);

    return {
        arrowFunction: () => {
            console.log("arrowFunction this,", this)
        },

        functionKeywordFunction: function() { // use function keyword if you want to use this keyword.
            console.log("functionkeyword this", this)
        }
    }
}

const obj = createObject();
obj.arrowFunction();
obj.functionKeywordFunction();