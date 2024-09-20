import Text from './Text';
import './css/SingleNews.css';

export default function SingleNews({ title, content }) {
    // const toggleReadMode = (e) => {
    //     const card = e.currentTarget.parentElement; // Get the parent competition-wrapper
    //     const textElement = card.querySelector('.competition-info'); // Scope to the current card
    //     const button = e.currentTarget; // Reference the clicked button directly

    //     if (textElement.classList.contains('expanded')) {
    //         textElement.classList.remove('expanded');
    //         button.textContent = 'Read More';
    //     } else {
    //         textElement.classList.add('expanded');
    //         button.textContent = 'Read Less';
    //     }
    // };

    return (
        <div className='news-wrapper'>
            <h2 className='news-title text-center'><Text word={title} /></h2>
            <div className='news-content text-center'><Text word={content} /></div>
        </div>
    );
}

import PropTypes from 'prop-types';
SingleNews.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}