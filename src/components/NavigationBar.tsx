import {useState} from "react";
import {LinkedinFilled, TwitterOutlined, GithubOutlined, MailFilled} from '@ant-design/icons'

function NavigationBar() {
    const [isShow, setShow] = useState(false);

    return (
        <>
            <nav>
                <div>
                    <div >
                        <button
                            onClick={() => {setShow((current) => !current)}}
                            className={`hamburger ${isShow ? 'active':''}`}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                        {/*<h1>hamburger</h1>*/}
                    </div>

                    <a href={''} className={"resume"}>
                        <h1>Resume</h1>
                    </a>
                </div>
            </nav>

            <div className={`sideBar ${isShow ? 'active':''}`}>
                <ul>
                    <li><a href="">
                        <h2>01</h2><h2>//&nbsp;home</h2>
                    </a></li>
                    <li><a href="">
                        <h2>02</h2><h2>//&nbsp;projects</h2>
                    </a></li>
                    <li><a href="">
                        <h2>03</h2><h2>//&nbsp;playground</h2>
                    </a></li>
                    <li><a href="">
                        <h2>04</h2><h2>//&nbsp;contact</h2>
                    </a></li>
                </ul>

                <div className={'contact-icons'}>
                    <div>
                    <a>
                        <LinkedinFilled />
                    </a>
                    <a>
                        <TwitterOutlined />
                    </a>
                    <a>
                        <GithubOutlined />
                    </a>
                    <a>
                        <MailFilled />
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationBar;




