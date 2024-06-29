import React from 'react'

const HireMe = () => {
    return (
        <>
            <section className="ftco-hireme">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-8 col-lg-8 d-flex align-items-center">
                            <div className="w-100 py-4">
                                <h2 style={{ color: 'white' }}>Have a project on your mind.</h2>
                                <p style={{ color: 'white' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly.</p>
                                <button className=" btn btn-color mb-0 mx-1"><a href="#contact-section" className="btn" style={{ color: '#b1b493' }}>Contact me</a></button>
                                <button className=" btn btn-color mb-0 mx-1"><a href="/" className="btn" rel="noreferrer" style={{ color: '#b1b493' }}>Resume</a></button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 d-flex align-items-end">
                            <img src="./img/goutam_vankudre.png" className="img-fluid" alt="abc" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HireMe
