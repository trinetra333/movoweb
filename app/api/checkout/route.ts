import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductBySlug } from "../../../data/products";

export async function POST(req: NextRequest) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured yet. Add STRIPE_SECRET_KEY to your environment variables.",
        },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const body = await req.json();
    const cartItems: { slug: string; quantity: number }[] = body.items ?? [];

    if (!cartItems.length) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    // Re-derive price and product details server-side from trusted data —
    // never trust prices sent from the client.
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    for (const cartItem of cartItems) {
      const product = getProductBySlug(cartItem.slug);
      if (!product) continue;

      line_items.push({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name,
            description: product.description,
            images: [],
          },
          unit_amount: Math.round(product.price * 100), // paise
        },
        quantity: cartItem.quantity,
      });
    }

    if (!line_items.length) {
      return NextResponse.json(
        { error: "No valid items in cart." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      `${req.nextUrl.protocol}//${req.nextUrl.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      billing_address_collection: "auto",
      custom_text: {
        submit: {
          message: "We'll send you a confirmation email once your order is placed.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong creating your checkout session." },
      { status: 500 }
    );
  }
}
