import React from 'react'

export default function () {
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div id = "userId">
                  User Id : {userInfo[0].phoneNumber}
              </div>
  )
}
