import Stripe from "stripe";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { CartProductType } from "@/components/Product/productDetails";
import { getCurrentUser } from "@/actions/getCurrentUser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});

const calculateOrderAmount = (items: CartProductType[]) => {
    const totalPrice = items.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;

        return acc + itemTotal;
    }, 0);

    return totalPrice;
};

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json();
    const { items, payment_intent_id } = body;
}