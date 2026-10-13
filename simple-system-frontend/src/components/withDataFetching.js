import {useState, useEffect} from 'react';

function withDataFetching (WrapedComponent, dataSourceUrl) {
  const WithDataFetchingComponent = (props) => {
    const [data, setData] = useState(() => []);
    const [loading, setLoading] = useState (() => true);
    const [error, setError] = useState (() => null);

    useEffect(() => {
      let isMounted = true;

      async function startFetching () {
        try {
          setLoading(true)
          const response = await fetch(dataSourceUrl);

          if (!response.ok) {
            const backendError = await response.text()
            throw new Error (`
            HTTP error! Status Code: ${response.status}
            Response: ${backendError}
            `)
          }

          const data = await response.json()

          if (isMounted) {
            setData(data)
            setError(null)
          }

        } catch (err) {
          if (isMounted) {
            setError(err.message)
          }

        } finally {
          if (isMounted) {
            setLoading(false)
          }
        }
      }

      startFetching()

      return () => {
        isMounted = false;
      }
    },[])

    return (
      <WrapedComponent
        {...props}
        data = {data}
        loading = {loading}
        error = {error}
      />
    )
  }

  const WrapedComponentName = WrapedComponent.displayName || WrapedComponent.name || 'Component';
  WithDataFetchingComponent.displayName = `WithDataFetching(${WrapedComponentName});`

  return WithDataFetchingComponent;
}

export default withDataFetching;