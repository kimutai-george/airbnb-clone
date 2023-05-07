import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";


interface IParams {
    listingId?:string
}
export async function DELETE(request: Request,{params}: {params:IParams})
{
    const curentUser = await getCurrentUser()

    if(!curentUser)
    {
        return NextResponse.error()
    }

    const { listingId } = params

    if(!listingId || typeof listingId !== 'string')
    {
        throw new Error('Invalid ID')
    }

    const listing = await prisma.listing.deleteMany({
        where: {
            id: listingId,
            userId: curentUser.id
        }
    })

    return NextResponse.json(listing)

}