import Header from "../components/Header";
import Text from "../components/Text";

export default function Contacts() {
    return (
        <div className="main-content">
            <Header t d>Contacts</Header>
            <h1><Text word="Contacts" /></h1>
            <p>Адрес: гр.София</p>

            <p>Христо Върбанов - V дан: <a href="tel:+359896865981">✆ <Text word="Phone" /></a></p>

            <p>Ирена Върбанова - II дан: <a href="tel:+359889933903">✆ <Text word="+359889933903" /></a></p>

            <p>E-mail: <a href="mailto:firetkd@yahoo.com">firetkd@yahoo.com</a></p>
        </div>
    )
}