import React from 'react'

const About = () => {
    return (
        <>
            <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                <div className="container">
                    <div className="row d-flex no-gutters">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="img-about img d-flex align-items-stretch">
                                <div className="overlay"></div>
                                <img className="img d-flex align-self-stretch align-items-center" src='./img/goutam_vankudre.png' alt='' />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
                            <div className="py-md-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ftco-animate">
                                        <span className="subheading">My Intro</span>
                                        <h2 className="mb-4" style={{ fontSize: '34px', textTransform: 'capitalize' }}>About Me</h2>
                                        <p>Hello and welcome! I graduated from DKTES Textile and Engineering Institute, Ichalkaranji, as a vibrant and brilliant computer science student. My academic studies have provided me with in-depth knowledge of several programming languages, web technologies, and software engineering ideas. Front-end skills include HTML5, CSS, JS, and Bootstrap, as well as SQL, PHP, React JS, Node JS, and MongoDB for full-stack development. Knowledgeable in Git, AWS, UI/UX, and familiar with Python, C, C++, and Data Structures. An eager learner exploring cloud computing. Team player who enjoys collaborating and finding innovative solutions. As a newcomer, I'm looking for work where I can contribute my abilities to a vibrant team.</p>

                                        <ul className="mt-4 px-md-0 px-2">
                                            <li className="d-flex"><strong>Name:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>Vankudre Goutam Sunil</strong></span></li>
                                            <li className="d-flex"><strong>Date of birth:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>March 15, 2001</strong></span></li>
                                            <li className="d-flex"><strong>Address:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>Zenda Chowk, Ichalkaranji</strong></span></li>
                                            <li className="d-flex"><strong>Zip code:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>416 115</strong></span></li>
                                            <li className="d-flex"><strong>Email:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>vankudregoutam15@gmail.com</strong></span></li>
                                            <li className="d-flex"><strong>Phone: </strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>+91 77984 12022</strong></span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="my-interest d-lg-flex w-100">
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-listening"></span>
                                                </div>
                                                <div className="text">Music</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-suitcases"></span>
                                                </div>
                                                <div className="text">Travel</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-video-player"></span>
                                                </div>
                                                <div className="text">Movie</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-football"></span>
                                                </div>
                                                <div className="text">Sports</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fas fa-camera-retro"></span>
                                                </div>
                                                <div className="text">Photography</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
