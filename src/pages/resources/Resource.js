import React from 'react';
import './Resource.css';

const Resource = () => {
    return (
        <div>
            <h2>Resources</h2><br />
            <p className='res__1'>Complete article on creating API Service calls in React with example</p>

            <a href='https://www.javaguides.net/2020/07/react-js-crud-application-example.html' className='res__link' target='_blank' rel="noreferrer" >
                https://www.javaguides.net/2020/07/react-js-crud-application-example.html
            </a>

            <p className='res__2'>Create json-server to test API calls and response</p>
            <a href='https://www.digitalocean.com/community/tutorials/json-server#installing-json-server' className='res__link' target='_blank' rel="noreferrer" >
                https://www.digitalocean.com/community/tutorials/json-server#installing-json-server
            </a>

        </div>
    )
}

export default Resource;