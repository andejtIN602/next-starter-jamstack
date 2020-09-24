import Link from 'next/link'

export default function About() {
  return (
    <ul>
    <li>
        <Link href="/">
            <a>Home</a>
        </Link>
    </li>
    <li>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
    </li>
</ul>
)
}