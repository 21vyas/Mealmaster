import { NextResponse } from 'next/server'

export async function GET() {
  // This is a mock grocery list. In a real application, you would generate this based on the meal plan
  const groceryList = [
    'Oatmeal',
    'Berries',
    'Chicken',
    'Salad greens',
    'Salmon',
    'Mixed vegetables',
    'Eggs',
    'Vegetable soup ingredients',
    'Beef',
    'Stir fry vegetables',
    // ... add more items
  ]
  
  return NextResponse.json({ groceryList })
}

