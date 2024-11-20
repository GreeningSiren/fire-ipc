import Header from "../components/Header";
import Text from "../components/Text";
import './css/Documents.css';

export default function Documents() {
    return (
        <div className="main-content">
            <Header t d>Documents</Header>
            <div className="documents-wrapper">
            <h1 className="text-center color-red"><Text word="Terminology" /></h1>
            <div className="documents display-flex">
                <ul className="technics-wrapper">
                    <li>
                        <a className="document-li color-red" href="/technics/Бавни и символизиращи техники.pdf" target="_blank"><Text word="SlowTechnics"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Майсторски пумсе форми.pdf" target="_blank"><Text word="PoomsaeForms"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Поздрави- обръщения- етикет.pdf" target="_blank"><Text word="Greetings"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/ПОЗИЦИИ.pdf" target="_blank"><Text word="Positions"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Ритници.pdf" target="_blank"><Text word="Kicks"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Свободен спаринг.pdf" target="_blank"><Text word="FreeSparing"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Символика на добока.pdf" target="_blank"><Text word="DobokMeans"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Символика на коланите.pdf" target="_blank"><Text word="BeltMeans"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Символика на националните флагове на Р България и Р Южна Корея.pdf" target="_blank"><Text word="FlagMeans"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Техники с лакти и колянo.pdf" target="_blank"><Text word="ElbowTechnics"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Уговорен спаринг.pdf" target="_blank"><Text word="Deriany"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Ударни и блокиращи части на тялото.pdf" target="_blank"><Text word="BlockingParts"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Ученически пумсе форми.pdf" target="_blank"><Text word="SchoolPoomsae"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Че Чируги.pdf" target="_blank"><Text word="CheChirugy"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Чируги.pdf" target="_blank"><Text word="Chirugy"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                    <li>
                        <a className="document-li color-red" href="/technics/Чиги.pdf" target="_blank"><Text word="Chigy"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                    </li>
                </ul>
            </div>
            <h1 className="text-center color-red"><Text word="Documents" /></h1>

                <div className="documents display-flex">
                    <div className="document-warpper">
                        <h3 className="document-title"><Text word="InternalRules"/></h3>
                        <ul>
                            <li>
                                <a className="document-li color-red" href="/documents/policy-rules-fire.pdf" target="_blank"><Text word="PolicyRulesFire"/></a>
                                <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                            </li>
                        </ul>
                    </div>
                    <div className="document-warpper">
                        <h3 className="document-title"><Text word="CardIndex"/></h3>
                        <ul>
                            <li><a className="document-li color-red" href="/documents/declaration-adult-cartindex.pdf" target="_blank"><Text word="AdultDeclaration"/></a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                            <li><a className="document-li color-red" href="/documents/declaration-childs-cardindex.pdf" target="_blank"><Text word="ChildDeclaration"/></a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        </ul>
                    </div>
                    <div className="document-warpper">
                        <h3 className="document-title"><Text word="CompetitionDocuments"/></h3>
                        <ul>
                            <li><a className="document-li color-red" href="/documents/declaration-adult.pdf" target="_blank"><Text word="AdultDeclaration"/></a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                            <li><a className="document-li color-red" href="/documents/declaration-parents.pdf" target="_blank"><Text word="ParentDeclaration"/></a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        </ul>
                    </div>
                    <div className="document-warpper">
                        <h3 className="document-title"><Text word="ExamProgram"/></h3>
                        <ul>
                            <li> <a className="document-li color-red" href="/documents/exam-program.pdf" target="_blank"><Text word="ExamProgram"/></a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        </ul>
                    </div>
                    <div className="document-warpper">
                        <h3 className="document-title"><Text word="CompetitionRulesPoomsae"/></h3>
                        <ul>
                            <li> <a className="document-li color-red" href="/documents/policy-poomsae-01.01.2014.pdf" target="_blank"><Text word="CompetitionRulesPoomsae"/> 2014</a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                            <li> <a className="document-li color-red" href="/documents/poomsae-scoring-guidelines-2014.pdf" target="_blank"><Text word="ScoringGuidelines"/> 2014</a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        </ul>
                    </div>
                    <div className="document-warpper">
                        <h3 className="document-title"><Text word="CompetitionRulesSparing"/></h3>
                        <ul>
                            <li> <a className="document-li color-red" href="/documents/WTF-Competition-Rules-Interpretation-Nov-15-2016-Burnaby-Canada.pdf" target="_blank"><Text word="CompetitionRulesPoomsae"/> 2016</a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}