import React from 'react';

export default function Header(props) {

    return (
        <div className="header-container">
            <div className='header-main-full'>
                <div className='icon-container' onClick={() => {
                    document.getElementById('content-pane').scroll({ top: document.getElementById('section-1').offsetTop - 50, behavior: "smooth" });
                }} />
                <nav className='header-links'>
                    <a className="link-text" onClick={() => {

                        //document.getElementById('section-2').scrollIntoView();
                        document.getElementById('content-pane').scroll({ top: document.getElementById('section-2').offsetTop - 50, behavior: "smooth" });
                    }} >Item 1</a>
                    <a className="link-text" onClick={() => {

                        document.getElementById('content-pane').scroll({ top: document.getElementById('section-3').offsetTop - 50, behavior: "smooth" });
                    }} >Item 2</a>
                    <a className="link-text" onClick={() => {

                        document.getElementById('content-pane').scroll({ top: document.getElementById('section-4').offsetTop - 50, behavior: "smooth" });
                    }} >Item 3</a>
                    <a className="link-text" onClick={() => {

                        document.getElementById('content-pane').scroll({ top: document.getElementById('section-5').offsetTop - 50, behavior: "smooth" });
                    }} >Item 4</a>
                </nav>
                <a href="https://test.bcypher.net" target="_blank" className='product-link'>Outbound Link
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                    </svg>
                </a>
            </div>

            <div className="header-main-mobile" >
                <div className='icon-container' onClick={() => {
                    document.getElementById('content-pane').scroll({ top: document.getElementById('section-1').offsetTop - 50, behavior: "smooth" });
                }} />
                <div onClick={e => {
                    e.preventDefault();
                    props.toggle();
                }} className={"menu-button"}>
                    {props.open ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#eefcff" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#eefcff" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    }
                </div>
            </div>


        </div>
    )
}
