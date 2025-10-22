import { specials } from "@/app/data/data";

export async function GET () {
    return Response.json(specials);
    
}