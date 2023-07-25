import './Portfolio.css'
import IMG1 from '../../assets/vote.jpg'
import IMG2 from '../../assets/TikTok.jpg'
import IMG3 from '../../assets/hotstar.jpg'
import IMG4 from '../../assets/ATM.jpg'
import IMG5 from '../../assets/instagram.jpg'
import IMG6 from '../../assets/netflix.jpg'
import IMG7 from '../../assets/soon.jpg'

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={"container portfolio__container"}>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG1} alt={''} />
                    </div>
                    <h3>Online Voting System </h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/Infinity-anuj/Online-Voting-System-Webapp-"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://online-voting-system-project.000webhostapp.com/"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG2} alt={''} />
                    </div>
                    <h3>TIK TOK GAME </h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a>
                        
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG3} alt={''} />
                    </div>
                    <h3>Hotstar Clone </h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={IMG7} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://thewebdeveloper10-hotstar-clone.netlify.app/"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                        
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG4} alt={''} />
                    </div>
                    <h3>ATM Interface </h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/Infinity-anuj/OIBGRIP"} className={'btn'} target={'_blank'}>Github</a>
                        
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG5} alt={''} />
                    </div>
                    <h3>Instagram Clone</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/Infinity-anuj/Instagram-Clone"} className={'btn'} target={'_blank'}>Github</a>
                        
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG6} alt={''} />
                    </div>
                    <h3>Netflix Clone</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/Infinity-anuj/netflix-clone-React"} className={'btn'} target={'_blank'}>Github</a> 
                        <a href={"https://webdeveloper10-netflix-clone.netlify.app/"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>

            </div>

        </section>
    )
}

export default Portfolio;