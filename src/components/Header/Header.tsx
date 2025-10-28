import Link from "next/link";


export default function Header() {

  const link = ("p-4 text-2xl text-black-800 hover:text-yellow-400 justify-items-center");
  return (
    
    <div>
      <nav className="bg-blue-300 p-4 h-14 text-center">
      {/* <nav className={link}> */}
        <Link className={link} href="/blog">Blog</Link>
        <Link className={link} href="/about">About</Link>
        <Link className={link} href="/blog/post">Post</Link>
        <Link className={link} href="/playground/find-play">Find & Play</Link>
        <Link className={link} href="/help">FAQ</Link>
      </nav>
    </div>
  )
}




