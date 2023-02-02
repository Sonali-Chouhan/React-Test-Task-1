import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const serchNow = (e) => {
    e.preventDefault()
    const filtered = user.filter((item) =>
      search
        ? item.title === search
        : item.title !== search && searchTerm
        ? item?.body === searchTerm
        : item?.body !== searchTerm,
    )
    setUser(filtered)
  }

  const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setUser(data))
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      Title:
      <input type="text" onChange={(e) => handleChange(e)} />
      Body:
      <input
        type="text"
        placeholder="enter search term ....."
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
      />
      <button onClick={serchNow}>filter</button>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {user.length >0 ?
            user?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )
            }
          
            )
            :
            <p>Not record found</p>
            }
        </tbody>
      </table>
    </div>
  )
}

export default Profile
