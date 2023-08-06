import Link from 'next/link'
export default function Page() {
    return (
    <>
    <h1>Welcome to Globalmantics Conference</h1>
    <Link href='/conference/sessions'>Sessions</Link>
    <Link href='/conference/speakers'>Speaker</Link>
    </>
    )
  }
  