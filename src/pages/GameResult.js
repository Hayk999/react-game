import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List/List';

function GameResult(props) {
    const { data } = useSelector(state => state.game);

    return <div className="container">
            {
                data.filter((item) => item.success).length >= 3
                ?
                <h1>Success</h1>
                :
                <h1>Game Over</h1>
            }
            <List data={data}/>
    </div>
}

export default GameResult;