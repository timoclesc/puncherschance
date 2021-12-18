import Link from 'next/link'

export default function Header() {
  return (
    <p className="text-2xl tracking-tight leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">&larr; Back Home</a>
      </Link>
    </p>
  )
}
