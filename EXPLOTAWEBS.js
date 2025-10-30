fetch('http://localhost:5000/transfer', {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({ to_username:"bbb", amount:1000,note="tonto",submit:"Transferir"}),
  )  
