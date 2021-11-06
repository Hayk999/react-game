import React, { useState } from 'react';
import { checkAnswer } from '../redux/actions/gameActions';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import List from '../components/List/List';

const citys = [
    {
        name: "Erevan",
    },
    {
        name: "Tokyo",
    },
    {
        name: "Berlin",
    },
    {
        name: "Moskva",
    },
    {
        name: "Los Angeles",
    }
]

function Home(props) {
    const [activeCity, setActiveCity] = useState(0)
    const [value, setValue] = useState("");

    const { data } = useSelector(state => state.game);
    const dispatch = useDispatch();

    const check = () => {
        dispatch(checkAnswer(value, citys[activeCity].name));
        setActiveCity(activeCity + 1)
        setValue("")
        if (activeCity + 1 === citys.length) {
            props.history.push('/game')
        }
    }

    return <div className="container">
            <h1>{citys[activeCity].name}</h1>
            <Input
                setValue={setValue}
                value={value}
            />
            <Button
                check={check}
            />
            <List data={data}/>
    </div>
}

export default Home;