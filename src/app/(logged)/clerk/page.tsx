
import { auth } from '@clerk/nextjs/server'

export default async function Example() {
  const { getToken } = auth()
  const token = await getToken()

  return (
    <div>
      <p>Your toke is {token}</p>
    </div>
  )
}
