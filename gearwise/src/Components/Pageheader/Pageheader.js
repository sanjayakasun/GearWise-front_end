import React from 'react'
import { useEffect } from 'react';

import { useState } from 'react';

export default function Pageheader() {
    const [pageName, setPageName] = useState('');

    useEffect(() => {
        const pathname = window.location.pathname;
        const parts = pathname.split('/');
        const currentPageName = parts[parts.length - 1];
        setPageName(currentPageName);
    }, []);

    return (
        <div>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>{pageName}</h2>
                        </div>
                        <div class="col-12">
                            <a href="/" style={{textDecorationLine:'none'}}>Home</a>
                            <a href={`/${pageName}`} style={{textDecorationLine:'none'}}>{pageName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

