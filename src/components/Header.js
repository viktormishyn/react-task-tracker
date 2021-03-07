import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title}) => {
    const onClick = () => {console.log('Click')}
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" color="green" onClick={onClick}/>
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