import {User} from '../types'
import MapStore from './_MapStore';

class UserStore extends MapStore<User> {

}

export default new UserStore();
