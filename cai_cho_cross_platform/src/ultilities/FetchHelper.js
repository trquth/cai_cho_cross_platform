class FetchHelper {
    constructor() {
        this.defaultHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch(input, init = {}) {
        let initWithDefaultHeaders = {
            ...init,
            headers: mergeWithDefaultHeaders(init.headers, this.defaultHeaders)
        }
        return new Promise((resolve, reject) => {
            fetch.apply(null, [input, initWithDefaultHeaders])
                .then(response => {
                    resolve(response.json())
                }).catch(error => {
                    reject(error)
                })
        })
    }
}

/*** PRIVATE METHODS: ***/

function mergeWithDefaultHeaders(headers = {}, defaultHeaders) {
    var headerObj = {}
    if (headers instanceof Headers) {
        for (let [key, value] of headers) {
            headerObj[key] = value
        }
    } else {
        headerObj = headers
    }

    return Object.assign({}, defaultHeaders, headers)
}

const fetchHelperInstance = new FetchHelper()

export default fetchHelperInstance