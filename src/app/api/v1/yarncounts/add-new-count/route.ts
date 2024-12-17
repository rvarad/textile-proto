export async function POST(req: Request) {
    try {
        const data = await req.json()

        if (!data) return new Response("No data")

        console.log("sent data", data)

        return new Response(
            JSON.stringify({
                message: "Data added",
                data: data
            })
        )
    } catch(error) {
        return new Response(
            JSON.stringify(
                {
                    message: "Oops, there was an error",
                    error: error
                }
            )
        )
    }
}