import Text from '../components/Text'
import './css/NewsPage.css';
import SingleNews from '../components/SingleNews';
import Header from '../components/Header';

export default function NewsPage() {
    return (
        <div className='main-content main-content-form'>
            <Header t d>News</Header>

            <h1 className='text-center color-red'><Text word="News" /></h1>


            <SingleNews title="Schedule" content="ScheduleContent"/>
            <SingleNews title="Payment" content="PaymentContent"/>
        </div>
    )
}