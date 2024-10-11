import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
type propTypes = {
  credentials: {
    userName: string,
    password: string
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  // following prop is a function
  handleSubmit: () => void
}
export default function LoginForm({credentials, handleChange, handleSubmit} : propTypes) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="userName" type="email" placeholder="m@example.com" value={credentials?.userName} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" value={credentials?.password} onChange={handleChange} required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit} disabled = {credentials?.password === '' || credentials?.userName === ''} >Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  )
}