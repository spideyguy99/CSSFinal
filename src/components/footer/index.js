import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer(){
    return(
        <footer className="footer">
            <a href={"https://www.facebook.com/"} className={"footerIcon"}>
                <FacebookIcon/>
            </a>
            <a href={"https://twitter.com/?lang=en"} className={"footerIcon"}>
                <TwitterIcon/>
            </a>
            <a href={"https://www.instagram.com/"} className={"footerIcon"}>
                <InstagramIcon/>
            </a>
        </footer>
    )
}