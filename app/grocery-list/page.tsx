"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type GroceryItem = string

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState<GroceryItem[]>([])

  const fetchGroceryList = async () => {
    try {
      const response = await fetch('/api/grocery-list')
      if (!response.ok) {
        throw new Error('Failed to fetch grocery list')
      }
      const data = await response.json()
      setGroceryList(data.groceryList)
    } catch (error) {
      if (error instanceof Error) {
        alert('Error: ' + error.message)
      } else {
        alert('An unknown error occurred while fetching the grocery list')
      }
    }
  }

  useEffect(() => {
    fetchGroceryList()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Grocery List</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Grocery List</CardTitle>
        </CardHeader>
        <CardContent>
          {groceryList.length > 0 ? (
            <ul className="list-disc list-inside">
              {groceryList.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your grocery list is empty.</p>
          )}
        </CardContent>
      </Card>
      <Button onClick={fetchGroceryList} className="mt-4">Refresh List</Button>
    </div>
  )
}

