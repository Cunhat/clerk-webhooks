import { NextRequest, NextResponse } from "next/server";

 async function handler(req: NextRequest, res: NextResponse) {
    //   const data = await res.json()

    console.log(req)
 
  return NextResponse.json( {"teste": "uheuheuhueh"} )
  }

export const GET = handler;
export const POST = handler;