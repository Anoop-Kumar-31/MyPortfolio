import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import skills from './Sinfo';

export default function Skills() {
    const [visibleSkills, setVisibleSkills] = useState([]);
    const skillRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSkills(prev => [...prev, entry.target.id]);
                } else {
                    setVisibleSkills(prev => prev.filter(id => id !== entry.target.id));
                }
            });
        }, { threshold: 0.4 });

        skillRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            skillRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className='skillsection' id='skillsSection'>
            <b style={{ fontSize: '10vh' }}>Skills</b><hr /><br/>
            <section >
                {skills.map((instance, index) =>
                    <div key={index} id={`skill-${index}`} ref={el => skillRefs.current
                    [index] = el} className='skillbox' >
                        <h1 >{instance.name}</h1>
                        <p className='description' style={{marginBottom:'8px'}}>{instance.des}</p>
                        <div id="progressDiv">
                            <p style={{ fontWeight: '700', marginBottom: '1vh' }}>Self Evaluation:</p>
                            <div className="progress-bar">
                                <div className={`progress-fill ${visibleSkills.includes(`skill-${index}`) ? 'added' : ''}`} style={{ width: `${instance.progress}%` }}></div>
                                <p>{instance.progress}%</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
