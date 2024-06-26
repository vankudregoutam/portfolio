// import React from 'react'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const skills = [
//     { skill: 'HTML', percentage: 95, lastWeek: 30, lastMonth: 60 },
//     { skill: 'CSS', percentage: 90, lastWeek: 25, lastMonth: 65 },
//     { skill: 'Bootstrap', percentage: 85, lastWeek: 25, lastMonth: 50 },
//     { skill: 'UI/UX', percentage: 90, lastWeek: 20, lastMonth: 67 },
//     { skill: 'SQL', percentage: 80, lastWeek: 30, lastMonth: 40 },
//     { skill: 'JavaScript', percentage: 85, lastWeek: 30, lastMonth: 50 },
//     { skill: 'ReactJS', percentage: 95, lastWeek: 30, lastMonth: 50 },
//     { skill: 'NodeJS', percentage: 87, lastWeek: 30, lastMonth: 50 },
//     { skill: 'MongoDB', percentage: 90, lastWeek: 30, lastMonth: 50 },
//     { skill: 'Rest API', percentage: 80, lastWeek: 30, lastMonth: 50 },
//     { skill: 'Git', percentage: 80, lastWeek: 30, lastMonth: 50 },
//     { skill: 'AWS', percentage: 85, lastWeek: 30, lastMonth: 50 },
// ];

// const Skills = () => {

//     return (
//         <>
//             <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id='skills-section'>
//                 <div className="overlay"></div>
//                 <div className="row justify-content-center pb-5" style={{ marginTop: '50px' }}>
//                     <div className="col-md-12 heading-section text-center ftco-animate">
//                         <span className="subheading" style={{color: '#b1b493'}}>Skills</span>
//                         <h2 className="mb-4">My Skills</h2>
//                         <p>As per my knowledge my skills are as follows:</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className='mb-4' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//                         {skills.map((skill, index) => (
//                             <div className="col-3">
//                                 <div className='card' key={index} style={{ boxShadow: '#999999', width: 350, height: 250, textAlign: 'center' }}>
//                                     <h4 className='m-3'>{skill.skill}</h4>
//                                     <CircularProgressbar className='mb-3'
//                                         value={skill.percentage}
//                                         text={`${skill.percentage}%`}
//                                         styles={buildStyles({
//                                             textSize: '16px',
//                                             pathColor: `rgba(177, 180, 147, ${skill.percentage / 100})`,
//                                             textColor: '#f88',
//                                             trailColor: 'whitesmoke',
//                                             backgroundColor: '#3e98c7',
//                                         })}
//                                     />
//                                     {/* <div style={{ marginTop: 10 }}>
//                                     <p>Last Week: {skill.lastWeek}%</p>
//                                     <p>Last Month: {skill.lastMonth}%</p>
//                                 </div> */}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Skills

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
    { skill: 'HTML', percentage: 95, lastWeek: 30, lastMonth: 60 },
    { skill: 'CSS', percentage: 90, lastWeek: 25, lastMonth: 65 },
    { skill: 'Bootstrap', percentage: 85, lastWeek: 25, lastMonth: 50 },
    { skill: 'UI/UX', percentage: 90, lastWeek: 20, lastMonth: 67 },
    { skill: 'SQL', percentage: 80, lastWeek: 30, lastMonth: 40 },
    { skill: 'JavaScript', percentage: 85, lastWeek: 30, lastMonth: 50 },
    { skill: 'ReactJS', percentage: 95, lastWeek: 30, lastMonth: 50 },
    { skill: 'NodeJS', percentage: 87, lastWeek: 30, lastMonth: 50 },
    { skill: 'MongoDB', percentage: 90, lastWeek: 30, lastMonth: 50 },
    { skill: 'Rest API', percentage: 80, lastWeek: 30, lastMonth: 50 },
    { skill: 'Git', percentage: 80, lastWeek: 30, lastMonth: 50 },
    { skill: 'AWS', percentage: 85, lastWeek: 30, lastMonth: 50 },
];

const Skills = () => {
    return (
        <>
            <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id='skills-section'>
                {/* <div className="overlay"></div> */}
                <div className="row justify-content-center pb-5" style={{ marginTop: '50px' }}>
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <span className="subheading" style={{ color: '#b1b493' }}>Skills</span>
                        <h2 className="mb-4">My Skills</h2>
                        <p>As per my knowledge my skills are as follows:</p>
                    </div>
                </div>
                <div className="row">
                    <div className='mb-4' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                        {skills.map((skill, index) => (
                            <div key={index} className="col-3">
                                <div className='card' style={{ boxShadow: '#999999', width: 350, height: 250, textAlign: 'center' }}>
                                    <h4 className='m-3'>{skill.skill}</h4>
                                    <CircularProgressbar className='mb-3'
                                        value={skill.percentage}
                                        text={`${skill.percentage}%`}
                                        styles={buildStyles({
                                            textSize: '16px',
                                            pathColor: `rgba(177, 180, 147, ${skill.percentage / 100})`,
                                            textColor: '#f88',
                                            trailColor: 'whitesmoke',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
