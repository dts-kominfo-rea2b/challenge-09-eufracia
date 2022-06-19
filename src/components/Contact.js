// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './contact.css';

const Contact = ({ data }) => {
    return (
        <div class="row">
            <img src={ data.photo } alt='profile-pic'/>
            <div class="desc">
                <p>{ data.name }</p>
                <p>{ data.phone }</p>
                <p>{ data.email }</p>
            </div>
        </div>
    )
}

export default Contact;