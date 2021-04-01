/**
 * Include Font Awesome SVG in the bundle
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

library.add(faStackOverflow, faGithub, faEnvelope, faFile)
