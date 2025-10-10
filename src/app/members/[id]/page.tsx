// Dynamic Route for Member ID

export default async function MemberId({
    params,
}:{
    params: { id: string}
}){
    const memberId = params.id
    return (
        <div className="text-center">
            <h1>Name: {memberId}</h1>
        </div>
    )
}