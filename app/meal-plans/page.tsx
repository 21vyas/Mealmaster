"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define types for our meal plan structure
type Meal = string
type DailyMeals = {
  [mealType: string]: Meal
}
type MealPlan = {
  [day: string]: DailyMeals
}

export default function MealPlans() {
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null)

  const generateMealPlan = async () => {
    try {
      const response = await fetch('/api/generate-meal-plan', { method: 'POST' })
      if (response.ok) {
        const data = await response.json()
        setMealPlan(data.mealPlan)
      } else {
        throw new Error('Failed to generate meal plan')
      }
    } catch (error) {
      if (error instanceof Error) {
        alert('Error: ' + error.message)
      } else {
        alert('An unknown error occurred while generating the meal plan')
      }
    }
  }

  // Helper function to safely render meal plan
  const renderMealPlan = (plan: MealPlan | null) => {
    if (!plan) return null

    return Object.entries(plan).map(([day, meals]) => (
      <li key={day} className="mb-2">
        <strong>{day}:</strong>
        <ul className="list-disc list-inside ml-4">
          {Object.entries(meals).map(([mealType, meal]) => (
            <li key={mealType}>{mealType}: {meal}</li>
          ))}
        </ul>
      </li>
    ))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Plans</h1>
      <Button onClick={generateMealPlan} className="mb-4">Generate Meal Plan</Button>
      {mealPlan && (
        <Card>
          <CardHeader>
            <CardTitle>Your Meal Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {renderMealPlan(mealPlan)}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
