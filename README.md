`npm run json:server`
to serve db.json as a server and get the data from our graphql app

`localhost:4000/graphql`
<p>and run the queries below</p>

{
	user(id: "23") {
	  id,
    firstName
	}
}

{
	user(age: 21) {
	  id,
    firstName
	}
}