// import { Key } from 'protractor';

interface Dictionary<T> {
    [Key: string]: T;
}
export class ServiceUrl {
    public static APIURL = {
        'Product': {
            GetAll: 'Product',
            Create: 'Product',
            Update: 'Product',
            GetById: 'Product',
            DeleteMulti: 'Product',
            Search: 'Product/Search'
        }
    }
}