import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { getTitles, postTitles } from "./Api"


export default function Dashboard() {
    const [title, setTtile] = useState('')
    const queryClient = useQueryClient()
    const {data : titles,isPending , status} = useQuery({
        queryFn: () => getTitles(),
        queryKey : ['getTitles'],
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        gcTime:0
    })

    const {mutateAsync : addTitleMutation} = useMutation({
        mutationFn: postTitles,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['getTitles']})
        }
    })
    console.log(status)
    if(isPending){
        return <div>...Loading</div>
    }
    return (
        <div>
            <input type="text"
                onChange={(e) => setTtile(e.target.value)}
                value={title} />
            <button 
            onClick={ async () => {
                addTitleMutation({title})
                setTtile('')
            }}
            >add titlte</button>
            <div>
            </div>
            <ul>
                {
                    titles?.map((data:any) => {
                        return <li key={data.title}>{data.title}</li>
                    })
                }
            </ul>
        </div>
    )
}