import { gallery } from '@/app/data/data';

export async function GET() {
    return Response.json(gallery);
    
}