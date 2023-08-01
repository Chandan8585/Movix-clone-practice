import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [Loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=>(
      setLoading(true)
      setError(false)
      setData()
    ), [])

  return (
    <div>
      
    </div>
  )
}

export default useFetch
