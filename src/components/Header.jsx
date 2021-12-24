// import { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonCustom from './ButtonCustom';

const Header = ({ title, isActive, handleActive }) => {
    return (
        <header className='text-center'>
            <h1 className='mt-3'>{title}</h1> 

            <ButtonCustom
                text='Todo' 
                color='unset' 
                isActive={isActive === 'todo' && true}
                onActive={() => handleActive('todo')}
            />
            <ButtonCustom
                text='Done' 
                color='unset' 
                isActive={isActive === 'done' && true}
                onActive={() => handleActive('done')}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo List App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
