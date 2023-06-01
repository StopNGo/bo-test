import { useEffect, useState } from 'react'

interface IFetchReturn<T = unknown> {
  data: T[] | null
  loading: boolean
  error: string
}

const useFetch = <T = unknown>(url: string): IFetchReturn<T> => {
  const [data, setData] = useState<T[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
      .then(async (res) => await res.json())
      .then((data) => {
        setError(data.error)
        setData(data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [url])

  return { data, loading, error }
}

export { useFetch }
