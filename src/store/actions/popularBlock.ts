export function popularFetchDataSuccess(popularBlockInfo: object) {
    return {
        type: 'POPULAR_FETCH_DATA_SUCCESS',
        payload: popularBlockInfo
    }
}

export function popularFetchData() {
    return (dispatch: any) => {
        fetch('https://ghblogs.herokuapp.com/posts/?category=popular&page=1&limit=10&fields=title,category,author,description,tags', {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    alert('Error. Status code: ' + response.status)
                }
                return response
            })
            .then(response => response.json())
            .then(popularBlockInfo => dispatch(popularFetchDataSuccess(popularBlockInfo)))
    }
}