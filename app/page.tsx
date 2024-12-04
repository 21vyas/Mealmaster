"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MealMaster() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        alert('Subscription successful!')
        setEmail('')
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      if (error instanceof Error) {
        alert('Error: ' + error.message)
      } else {
        alert('An unknown error occurred')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <nav className="w-full max-w-md mb-8">
        <ul className="flex justify-around">
          <li><Link href="/meal-plans" className="text-green-700 hover:text-green-900">Meal Plans</Link></li>
          <li><Link href="/grocery-list" className="text-green-700 hover:text-green-900">Grocery List</Link></li>
          <li><Link href="/settings" className="text-green-700 hover:text-green-900">Settings</Link></li>
        </ul>
      </nav>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-800">MealMaster</CardTitle>
          <CardDescription className="text-center text-green-600">Your personal meal planner and grocery list assistant</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>Personalized weekly meal plans</li>
                <li>Automatic grocery list generation</li>
                <li>Diverse recipe suggestions</li>
                <li>Nutritional information for all meals</li>
                <li>Integration with grocery delivery services</li>
              </ul>
            </TabsContent>
            <TabsContent value="pricing">
              <div className="text-center space-y-2 text-green-700">
                <p className="font-semibold">Monthly Plan: $4.99/month</p>
                <p className="font-semibold">Yearly Plan: $49.99/year</p>
                <p className="text-sm">(Save 16% with yearly plan)</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <Label htmlFor="email" className="text-green-700">Subscribe now:</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Start Free Trial
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

