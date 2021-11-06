import Axios from "axios";
import { 
    CHECK_ANSWER_P, 
    CHECK_ANSWER_F, 
    CHECK_ANSWER_R, 
} from "../constants/gameConstants";
import config from '../../config/app'

const checkAnswer = (value, city) => async (dispatch, getState) => {
    try {

        dispatch({
            type: CHECK_ANSWER_P
        })

        const { data } = await Axios.get(`${config["API_URL"]}?appid=${config["API_KEY"]}&q=${city}`);

        const temperatureToCelsius = Number(data.main.temp - 273).toFixed(2)
        let differentValue = value - temperatureToCelsius
        differentValue = (differentValue < 0) ? differentValue * -1 : differentValue

        dispatch({
            type: CHECK_ANSWER_F, 
            payload: {
                inputValue: value,
                currectValue: temperatureToCelsius,
                success: differentValue < 5 ? true : false,
                city: city
            }
        });

    } catch (error) {
        console.log(error)
        dispatch({
            type: CHECK_ANSWER_R,
            payload: error
        })
    }
}

export { 
    checkAnswer
}
