import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default title: task-tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'yellow',
//     backgroundColor: 'blue'
// }

export default Header