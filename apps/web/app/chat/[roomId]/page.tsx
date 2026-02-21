import { TextInput } from "@repo/ui/text-input";

export default function(){
    return <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}>
        <div>Chatroom</div>
        <div>
            <TextInput placeholder="Chat here" size="big" onChange={()=> 0}/>
        </div>
    </div>
}