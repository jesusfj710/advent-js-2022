export function wrapping(gifts: string[]) {
  const wrapped = gifts.map((gift) => (
`${'*'.repeat(gift.length+2)}
*${gift}*
${'*'.repeat(gift.length+2)}`
      )
  );
  return wrapped;
}
