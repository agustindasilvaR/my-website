import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SocialMedia() {
    return (

    <div className="social-media">
        <a href="https://github.com/agustindasilvaR" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /> github </a>
        ·
        <a href="https://www.linkedin.com/in/agust%C3%ADn-da-silva-91933a230/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> linkedin </a>
        ·
        <a href="https://twitter.com/aguchinn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> twitter  </a>
        ·
        <a href="mailto:contact@agustindasilva.me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faEnvelope } /> contact </a>
    </div>

    )
}