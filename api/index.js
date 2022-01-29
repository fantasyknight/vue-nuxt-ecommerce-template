import axios from 'axios';

const baseDonmain = 'http://localhost:1337';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${baseDonmain}`;
export const currentDemo = "1";

export default axios.create({
    baseUrl,
    headers: customHeader
})