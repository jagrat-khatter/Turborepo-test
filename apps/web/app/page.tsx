'use client'
import {TextInput} from "@repo/ui/text-input"
import { register } from "module";
import { useRouter } from "next/navigation";
import { useRef } from "react";
export default async function Home() {
  const ref = useRef(0);
  const router = useRouter();
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center'
    }}>
      <div style={{display:"flex",justifyContent: "center",flexDirection: "column"}}>
        <TextInput onChange={(e:any) => ref.current = e.target.value} placeholder="Room name" size="big"/>
          
        <button onClick={()=>router.push(`/chat/${ref.current}`)}>Join room</button>
      </div>
    </div>
  );
}
