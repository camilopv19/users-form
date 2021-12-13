import React from 'react';
import styles from './Card.module.css';

type Props = {
    className: string;
    children: any;
};

const Card: React.FC<Props> = (props) => {
    return (<div className={`${props.className} ${styles.card}`}>{ props.children }</div>);
}

export default Card;