export function essentialFetchDataSuccess(essentialBlockInfo: object) {
    return {
        type: 'ESSENTIAL_FETCH_DATA_SUCCESS',
        payload: essentialBlockInfo
    }
}

export function essentialFetchData() {
    return (dispatch: any) => {
        fetch('https://ghblogs.herokuapp.com/posts/?category=essential&page=1&limit=10&fields=title,category,description,tags', {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    alert('Error. Status code: ' + response.status)
                }
                return response
            })
            .then(response => response.json())
            .then(essentialBlockInfo => dispatch(essentialFetchDataSuccess(essentialBlockInfo)))
    }
}