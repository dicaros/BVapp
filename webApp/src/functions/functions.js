
export function handleDelete(deleteurl, props, url) {
                  fetch(deleteurl,
                  {
                    method: 'DELETE',
                    headers: {'content-type': 'application/json'},
                    credentials: 'include'
                  })
                  .then(res => {
                        res.json();
                        props.fetchData(url, props.page, 10);
                  })
                  .then(res => {
                     console.log()
                    })                  

};