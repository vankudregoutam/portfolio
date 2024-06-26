import React from 'react'

const Services = () => {
    return (
        <>
            <section className="ftco-service" id="services-section">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12 heading-section text-center ftco-animate mb-5"><br /><br /><br />
                            <span className="subheading">I am grat at</span>
                            <h2 className="mb-4 mt-4">We do awesome services for our clients</h2>
                            <p style={{ color: '#999999' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="container row" style={{marginLeft: '7%'}}>
                        <div className="col-md-6 col-lg-3">
                            <div className="card card-services media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                                <div><img className="icon" src="./img/web-design.png" alt="" /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Web Design</h3>
                                    <p className='description'>The creation of websites and pages to reflect a company's brand and information and
                                        ensure a user-friendly experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card card-services media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                            <div><img className="icon" src="./img/web-application.png" alt="" /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Web Application</h3>
                                    <p className='description'>An application program that is stored on a remote server and delivered over the Internet
                                        through a browser interface.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card card-services media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                            <div><img className="icon" src="./img/web-development.png" alt="" /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Web Development</h3>
                                    <p className='description'>The work involved in developing a website for the Internet (World Wide Web) or an
                                        intranet (a private network).</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card card-services media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                            <div><img className="icon" src="./img/ui-ux-design.png" alt="" /></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">UI/UX Design</h3>
                                    <p className='description'>The UI/UX Design Specialization brings a design-centric approach to user interface and
                                        user experience design.</p>
                                </div>
                            </div>
                        </div>
                    </div><br /><br />
                </div>
            </section>
        </>
    )
}

export default Services
