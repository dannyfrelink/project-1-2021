/* Fetch */
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const pagesize = '15';
const config = {
    Authorization: `Bearer ${secret}`
};

/* Render */
const section = document.querySelector('section');

export { cors, endpoint, key, detail, pagesize, config, section }