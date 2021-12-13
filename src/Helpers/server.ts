import axios from 'axios';
import { IUser } from './IUser';
const BASE_URL: string = 'http://localhost:3004/users';

export const getUsers = (): Promise<IUser[]> => {
    return axios.get<Promise<IUser[]>>(BASE_URL).then((response) => {
        return response.data;
    });
};

export const saveUser = async (user: IUser) => {
    let success: boolean = false;
    success = await axios.post(BASE_URL, user).then((_) => {
        console.log('response',_);
        
        return true;
    });
    console.log('success', success);
    return success;
};