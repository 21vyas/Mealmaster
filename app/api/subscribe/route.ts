import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()
  
  // Here you would typically save the email to your database
  // and initiate the subscription process
  
  console.log('New subscription:', email)
  
  return NextResponse.json({ message: 'Subscription successful' })
}

