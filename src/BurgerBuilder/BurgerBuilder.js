import React, { Component } from 'react';
import Wrapper from '../shared/components/Wrapper/Wrapper';
import styles from './BurgerBuilder.module.scss';

class BurgerBuilder extends Component {

    render() {
        return (
            <Wrapper>
                <div>
                    Burger
                </div>
                <div>
                    Burger menu
                </div>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;