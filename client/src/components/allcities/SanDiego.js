import Concert from "./Concert.js"

export default function SanDiego({concerts}){

    return (
        <div>
            <h1 className="title">Hi, San Diego</h1>
            <h1 className="title2">UpComing Shows</h1>
            {concerts?.map((concert) => {
                return <Concert key={concert.id} concert={concert}/>;
              })}

        </div>
    )
    
}