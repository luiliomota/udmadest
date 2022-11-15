import Api from '../Api';

function Apitest(){
    return (
      Api.get('/api/modelo')
    );
}
export default Apitest;