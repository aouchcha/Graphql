export const Trans = `
{
	transaction(where :{type: {_eq: "xp"}}) {
    id
    type
    amount
  }
}
`