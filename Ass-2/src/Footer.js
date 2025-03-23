import './Footer.css';

function Footer(props){
    return (
        <div className = "footer_section">
           {props.SocialMedia && props.SocialMedia.map((social_media,index) => (
            <p id="footer_p" key = {index}>
                {social_media.name}: {social_media.link}
            </p>
           ))}

        </div>
    )
}
export default Footer;