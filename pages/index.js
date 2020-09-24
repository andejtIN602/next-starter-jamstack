import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
    <ul>
        <li>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>About</a>
            </Link>
        </li>
    </ul>
)

export default Home
