import PropTypes from 'prop-types';

const ButtonCustom = ({color, text, isActive, onActive, isSubmitButton}) => {
    const buttonStyle = {
        backgroundColor: color,
        color: isSubmitButton ? '#fff' : '#b5b5b5',
        border: 'none',
        borderBottom: isActive ? '2px solid #0ab68b' : 'none',
        margin: '0 5px',
        outline: 'none',
    }

    return (
        <>
            <button
                style={buttonStyle}
                onClick={isSubmitButton ? null : onActive}
            >
                {text}
            </button>
        </>
    )
}

ButtonCustom.defaultProps = {
    color: 'blue',
    text: 'Button'
}

ButtonCustom.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default ButtonCustom
