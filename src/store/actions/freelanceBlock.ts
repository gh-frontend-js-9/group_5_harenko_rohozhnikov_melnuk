export function freelanceFetchDataSuccess(freelanceBlockInfo: object) {
    return {
        type: 'FREELANCE_FETCH_DATA_SUCCESS',
        payload: freelanceBlockInfo
    }
}

export function freelanceFetchData() {
    return (dispatch: any) => {
        fetch('https://ghblogs.herokuapp.com/posts/?category=freelance&page=1&limit=10&fields=title,category,author,description,tags', {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    alert('Error. Status code: ' + response.status)
                }
                return response
            })
            .then(response => response.json())
            .then(freelanceBlockInfo => dispatch(freelanceFetchDataSuccess(freelanceBlockInfo)))
    }
}