import React from 'react';

const GoogelMap = () => {
    return (
        <>
            <iframe className="googel_map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.5724936162067!2d31.440593915726907!3d30.003992973298228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d119c167533%3A0x9f01d03590f95dea!2sMacber%20Egypt!5e0!3m2!1sen!2seg!4v1663524114596!5m2!1sen!2seg"
                    style={{paddingTop:"0px",border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    width="80" height="450"></iframe>
        </>
    );
};

export default GoogelMap;