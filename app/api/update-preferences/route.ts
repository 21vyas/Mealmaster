import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { dietaryPreferences } = await req.json()
  
  // Here you would typically save the preferences to your database
  
  console.log('Updated preferences:', dietaryPreferences)
  
  return NextResponse.json({ message: 'Preferences updated successfully' })
}

