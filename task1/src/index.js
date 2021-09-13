import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import avatar from './assets/avatar.jpg'

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  },
  avatar: avatar,
  description: `Top performing IT professional with 5 years’ successful 
    experience in Information Technology field. Proficient in hardware and 
    software maintenance. Solid track record of providing the timely positive 
    response to requests regarding computer-related assistance. A deep 
    understanding of the general organizational confidentiality policies associated with IT specialist position.`
};

ReactDOM.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>,
  document.getElementById('root')
);

