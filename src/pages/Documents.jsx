import Header from "../components/Header";
import Text from "../components/Text";
import './css/Documents.css';

export default function Documents() {
    return (
        <div className="main-content">
            <Header t d>Documents</Header>
            <h1 className="text-center color-red"><Text word="Documents" /></h1>

            <div className="documents-wrapper">
                <div className="documents main-content-form">
                    <h3 className="document-title"><Text word="InternalRules"/></h3>
                    <ul>
                        <li>
                            <a className="document-li color-red" href="/documents/policy-rules-fire.pdf" target="_blank"><Text word="PolicyRulesFire"/></a>
                            <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" />
                        </li>
                    </ul>

                    <h3 className="document-title"><Text word="CardIndex"/></h3>
                    <ul>
                        <li><a className="document-li color-red" href="/documents/declaration-adult-cartindex.pdf" target="_blank"><Text word="AdultDeclaration"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        <li><a className="document-li color-red" href="/documents/declaration-childs-cardindex.pdf" target="_blank"><Text word="ChildDeclaration"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                    </ul>

                    <h3 className="document-title"><Text word="CompetitionDocuments"/></h3>
                    <ul>
                        <li><a className="document-li color-red" href="/documents/declaration-adult.pdf" target="_blank"><Text word="AdultDeclaration"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        <li><a className="document-li color-red" href="/documents/declaration-parents.pdf" target="_blank"><Text word="ParentDeclaration"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                    </ul>

                    <h3 className="document-title"><Text word="ExamProgram"/></h3>
                    <ul>
                        <li> <a className="document-li color-red" href="/documents/exam-program.pdf" target="_blank"><Text word="ExamProgram"/></a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                    </ul>

                    <h3 className="document-title"><Text word="CompetitionRulesPoomsae"/></h3>
                    <ul>
                        <li> <a className="document-li color-red" href="/documents/policy-poomsae-01.01.2014.pdf" target="_blank"><Text word="CompetitionRulesPoomsae"/> 2014</a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                        <li> <a className="document-li color-red" href="/documents/poomsae-scoring-guidelines-2014.pdf" target="_blank"><Text word="ScoringGuidelines"/> 2014</a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                    </ul>

                    <h3 className="document-title"><Text word="CompetitionRulesSparing"/></h3>
                    <ul>
                        <li> <a className="document-li color-red" href="/documents/WTF-Competition-Rules-Interpretation-Nov-15-2016-Burnaby-Canada.pdf" target="_blank"><Text word="CompetitionRulesPoomsae"/> 2016</a>
                        <img src="/images/con_pdf.gif" alt="PDF Logo" className="pdf-logo" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}