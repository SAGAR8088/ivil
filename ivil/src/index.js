import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






window.addEventListener('scroll',()=>{

	let content = document.querySelector('.box');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight /1.5 ;
	if(contentPosition < screenPosition){
		
		content.classList.add('active');


	}else{
		content.classList.remove('active');
	}
}

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
