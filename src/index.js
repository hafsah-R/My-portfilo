import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{Dropdown} from 'rsuite';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div>
<header>
<ul>
<li>Home</li>
<li>
<Dropdown title="Skill">
<Dropdown.Item>work</Dropdown.Item>
<Dropdown.Item>skill</Dropdown.Item>
</Dropdown>
</li>
<ul>
<li>Contact</li>
</ul>
</ul> 
</header>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
