import {Helmet} from 'react-helmet'

// Как ползва хелмет?
// викаш <Header t (title) d (description)>TITLE/DESCRIPTION</Header>
// Когато искаш да промениш само титле <Header t>NEW TITLE</Header>
// Това ще направи титлето "NEW TITLE | Таекуондо клуб „Файър-София“"
// Когато искаш да промениш само дескрипшн <Header d>NEW DESCRIPTION</Header>
// Това ще направи дескрипшното "NEW DESCRIPTION"
//
// Ако не виждаш мета тага в хеад-а, скролни надолу в хеад-а :>
export default function Header({ t, d, children}) {
    return (
        <Helmet
        titleTemplate="%s | Таекуондо клуб „Файър-София“" defaultTitle="Таекуондо клуб „Файър-София“">
            {t && <title>{children}</title>}
            {d && <meta name="description" content={children + " | Таекуондо клуб „Файър-София“"} />}
        </Helmet>
    )
}

import PropTypes from 'prop-types'
Header.propTypes = {
    t: PropTypes.bool,
    d: PropTypes.bool,
    children: PropTypes.string.isRequired
}