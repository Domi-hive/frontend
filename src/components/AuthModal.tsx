import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SignupFormData {
  email: string;
  password: string;
  fullName: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const signupForm = useForm<SignupFormData>();
  const loginForm = useForm<LoginFormData>();

  const handleSignup = async (data: SignupFormData) => {
    try {
      const response = await fetch('https://s-dev.domihive.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: 'user',
          fullName: data.fullName,
        }),
      });
      if (response.ok) {
        alert('Signup successful!');
        onClose();
      } else {
        alert('Signup failed!');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup error!');
    }
  };

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await fetch('https://s-dev.domihive.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      if (response.ok) {
        alert('Login successful!');
        onClose();
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl text-gray-900 font-semibold">Authentication</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'signup')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
          <TabsContent value="login">
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="user@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  rules={{ required: 'Password is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="yourPassword123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="signup">
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                <FormField
                  control={signupForm.control}
                  name="email"
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="user@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="password"
                  rules={{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="strongPassword123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="fullName"
                  rules={{ required: 'Full name is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Sign Up</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;