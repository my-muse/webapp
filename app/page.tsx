import Image from 'next/image'
// import Button from 'next/button'
import Navbar from '../components/navbar/navbar'
import { Input } from "@/components/ui/input"

const tags = [
  { title: "love song"},
  { title: "rock"},
  { title: "international"},
  { title: "Thai pop"},
  { title: "heartbreaking"},
]


export default function Home()
{
  return (
    <main className="flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]">
      <Navbar/>
      <div className=" flex min-h-screen w-full justify-center items-center">
        <div className = "flex flex-col items-center space-y-10">
          <p className = 'font-bold text-5xl text-white'>Find your perfect song right here</p>
          <p className = 'font-bold text-xl text-white'>Type the lyrics, artist, genre, or context that you long for</p>

          <Input type="text" placeholder={`🔎 Search`}/>

          {/* <ul className="justify-end items-center md:pt-[2rem] space-y-8  md:flex md:space-x-6 md:space-y-0">
            {tags.map((item, idx) => (
              <li key={idx} className="text-white">
                <Button href={item.path}>{item.title}</Button>
              </li>
            ))}
            
          </ul> */}

        </div>

      </div>



    </main>
  )
}
