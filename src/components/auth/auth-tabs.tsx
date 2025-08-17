'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoginForm } from './login-form'
import { RegisterForm } from './register-form'

export function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Sign In</TabsTrigger>
        <TabsTrigger value="register">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login" className="space-y-4">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register" className="space-y-4">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}