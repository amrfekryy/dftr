export async function POST(req: Request) {
    try {
      const { id, from = undefined, to = undefined } = await req.json();
      
      if (!id || from === undefined || to === undefined) {
        return Response.json({ error: "Bad Request" }, { status: 400 });
      }
      
      return new Response(null, { status: 204 }); // No Content
    } catch (error) {
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  