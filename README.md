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