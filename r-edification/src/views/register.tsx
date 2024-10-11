"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BulkEnrollmentForm() {
  const [students, setStudents] = useState([{ name: "", email: "" }])
  const [course, setCourse] = useState("0")
  const [coursePrice, setCoursePrice] = useState(0) // Track selected course price

  const courseDetails = [
    {
      Id: '0',
      courseName: 'Select course',
      coursePrice: '0'
    },
    {
      Id: '1',
      courseName: '12th Physics',
      coursePrice: '400'
    },
    {
      Id: '2',
      courseName: 'HTML / CSS',
      coursePrice: '500'
    },
    {
      Id: '3',
      courseName: 'SQL',
      coursePrice: '500'
    }
  ]

  const addStudent = () => {
    setStudents([...students, { name: "", email: "" }])
  }

  const removeStudent = (index: number) => {
    const newStudents = students.filter((_, i) => i !== index)
    setStudents(newStudents)
  }

  const updateStudent = (index: number, field: "name" | "email", value: string) => {
    const newStudents = [...students]
    newStudents[index][field] = value
    setStudents(newStudents)
  }

  const handleCourseChange = (selectedId: string) => {
    setCourse(selectedId)
    const selectedCourse = courseDetails.find((course) => course.Id === selectedId)
    setCoursePrice(Number(selectedCourse?.coursePrice) || 0) // Update course price based on selection
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Typically, you would send this data to your backend
    console.log({ students, course, totalCost: students.length * coursePrice })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Bulk Course Enrollment</CardTitle>
          <CardDescription>Register multiple students for a paid course</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {students.map((student, index) => (
            <div key={index} className="flex flex-wrap items-end gap-4">
              <div className="flex-grow space-y-2">
                <Label htmlFor={`name-${index}`}>Student Name</Label>
                <Input
                  id={`name-${index}`}
                  value={student.name}
                  onChange={(e) => updateStudent(index, "name", e.target.value)}
                  required
                />
              </div>
              <div className="flex-grow space-y-2">
                <Label htmlFor={`email-${index}`}>Student Email</Label>
                <Input
                  id={`email-${index}`}
                  type="email"
                  value={student.email}
                  onChange={(e) => updateStudent(index, "email", e.target.value)}
                  required
                />
              </div>
              {students.length > 1 && (
                <Button type="button" variant="outline" onClick={() => removeStudent(index)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addStudent} className="mt-4">
            <PlusCircle className="w-4 h-4 mr-2" /> Add Another Student
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={course} onValueChange={handleCourseChange} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courseDetails.map((item) => (
                <SelectItem key={item.Id} value={item.Id}>
                  {item.courseName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enrollment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Number of students: {students.length}</p>
          <p>Course: {courseDetails.find((item) => item.Id === course)?.courseName || "Not selected"}</p>
          <p>Total cost: ${students.length * coursePrice}</p> {/* Display total cost */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="flex gap-4">
            <div className="flex-grow space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input id="expiry-date" placeholder="MM/YY" required />
            </div>
            <div className="flex-grow space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" required />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Complete Enrollment</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
