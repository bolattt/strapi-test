```
const useFetch = (url) => { 

    useEffect( () => { 
        const fetchData = async () = { 
            try { 
                const res = await fetch(url)
                const json = await res.json();
            } catch (error) { 

            }
        }
    })

}
```


### setting the rating 

``` 
    <div class='review-card'>
        <div class='rating'> 9 </div>
    </div>

    css 

    .review-card {
        position : relative;
    }

    .rating { 
        position : absolute;
        top : -20px;
        left : -20px;
    }
```

