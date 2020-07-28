import api from '../../services/api';
import { loadLanches } from '../ducks/lanches';


export const getLanches = () => {
	return (dispatch) => {
		api
			.get('/lanches')
			.then((res) => {
				dispatch(loadLanches(res.data));
			})
			.catch(console.log);
	};
};