import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Check, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
}

interface SignupFormData {
  email: string;
  password: string;
  fullName: string;
  role: 'user' | 'agent';
}

interface LoginFormData {
  email: string;
  password: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, navigate }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [selectedRole, setSelectedRole] = useState<'user' | 'agent'>('user');
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);

  const signupForm = useForm<SignupFormData>();
  const loginForm = useForm<LoginFormData>();
  const forgotPasswordForm = useForm<{ email: string }>();

  const password = signupForm.watch('password');

  const checkRequirements = (pwd: string) => {
    return {
      minLength: pwd.length >= 8,
      hasLowercase: /[a-z]/.test(pwd),
      hasUppercase: /[A-Z]/.test(pwd),
      hasNumber: /\d/.test(pwd),
      hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
    };
  };

  const requirements = checkRequirements(password || '');

  const handleSignup = async (data: SignupFormData) => {
    try {
      const response = await fetch('https://s-dev.domihive.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: data.role,
          fullName: data.fullName,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('authToken', responseData.accessToken || responseData.token);
        localStorage.setItem('userRole', responseData.user?.role || responseData.role || selectedRole);
        localStorage.setItem('userData', JSON.stringify(responseData.user || { fullName: responseData.fullName, role: selectedRole }));
        navigate((responseData.user?.role || responseData.role || selectedRole) === 'agent' ? '/agent' : '/dashboard');
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
      const response = await fetch('https://s-dev.domihive.com/auth/login', {
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
        const data = await response.json();
        localStorage.setItem('authToken', data.accessToken);
        localStorage.setItem('userRole', data.user.role);
        localStorage.setItem('userData', JSON.stringify(data.user));
        navigate(data.user.role === 'agent' ? '/agent' : '/dashboard');
        onClose();
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error!');
    }
  };

  const handleForgotPassword = async (data: { email: string }) => {
    try {
      const response = await fetch('https://s-dev.domihive.com/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });
      if (response.ok) {
        forgotPasswordForm.reset();
        setForgotPasswordSuccess(true);
        setTimeout(() => {
          setForgotPasswordSuccess(false);
          setForgotPasswordMode(false);
        }, 3000);
      } else {
        alert('Failed to send reset link. Please try again.');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      alert('Error sending reset link. Please check your connection and try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#F5FAFF] rounded-2xl max-w-lg w-full max-h-[90vh] shadow-2xl animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-end justify-end p-4">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer hover:scale-110"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'signup')}>
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#E3F2FD]">
              <TabsTrigger value="login" className="tab-transition cursor-pointer" style={{ backgroundColor: activeTab === 'login' ? '#F5FAFF' : '#E3F2FD' }}>
                <span className="hover:bg-inherit hover:scale-105 transition-all duration-200 rounded px-1">Login</span>
              </TabsTrigger>
              <TabsTrigger value="signup" className="tab-transition cursor-pointer" style={{ backgroundColor: activeTab === 'signup' ? '#F5FAFF' : '#E3F2FD' }}>
                <span className="hover:bg-inherit hover:scale-105 transition-all duration-200 rounded px-1">Sign Up</span>
              </TabsTrigger>
            </TabsList>
          <TabsContent value="login" className={`transition-all duration-300 ${activeTab === 'login' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {forgotPasswordMode ? (
              forgotPasswordSuccess ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reset Link Sent!</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Check your email for a password reset link. It may take a few minutes to arrive.
                    </p>
                  </div>
                  <Button
                    onClick={() => setForgotPasswordMode(false)}
                    className="w-full flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
                    style={{ fontWeight: 600 }}
                  >
                    Back to Login
                  </Button>
                </div>
              ) : (
                <Form {...forgotPasswordForm}>
                  <form onSubmit={forgotPasswordForm.handleSubmit(handleForgotPassword)} className="space-y-4">
                    <FormField
                      control={forgotPasswordForm.control}
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
                    <Button type="submit" className="w-full flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer" style={{ fontWeight: 600 }}>Send Reset Link</Button>
                    <button
                      type="button"
                      onClick={() => setForgotPasswordMode(false)}
                      className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      Back to Login
                    </button>
                  </form>
                </Form>
              )
            ) : (
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
                  <Button type="submit" className="w-full flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer" style={{ fontWeight: 600 }}>Login</Button>
                  <button
                    type="button"
                    onClick={() => setForgotPasswordMode(true)}
                    className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </form>
              </Form>
            )}
          </TabsContent>
          <TabsContent value="signup" className={`transition-all duration-300 ${activeTab === 'signup' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
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
                  rules={{
                    required: 'Password is required',
                    validate: (value) => {
                      const req = checkRequirements(value);
                      return Object.values(req).every(Boolean) || 'Password must meet all requirements';
                    }
                  }}
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
                {password && (
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      {requirements.minLength ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-xs font-medium ${requirements.minLength ? 'text-green-600' : 'text-gray-400'}`}>
                        8 chars
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {requirements.hasLowercase ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-xs font-medium ${requirements.hasLowercase ? 'text-green-600' : 'text-gray-400'}`}>
                        1 lower
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {requirements.hasUppercase ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-xs font-medium ${requirements.hasUppercase ? 'text-green-600' : 'text-gray-400'}`}>
                        1 upper
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {requirements.hasNumber ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-xs font-medium ${requirements.hasNumber ? 'text-green-600' : 'text-gray-400'}`}>
                        1 num
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {requirements.hasSpecial ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-xs font-medium ${requirements.hasSpecial ? 'text-green-600' : 'text-gray-400'}`}>
                        1 special
                      </span>
                    </div>
                  </div>
                )}
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
                <FormField
                  control={signupForm.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>I am a:</FormLabel>
                      <FormControl>
                        <div className="flex flex-col space-y-2">
                          <Tabs value={selectedRole} onValueChange={(value) => {
                            const role = value as 'user' | 'agent';
                            field.onChange(role);
                            setSelectedRole(role);
                          }}>
                            <TabsList className="grid w-32 grid-cols-2 bg-[#E3F2FD] h-8 p-1">
                              <TabsTrigger value="user" className="tab-transition cursor-pointer text-xs px-1 py-0.5 mx-0.5 my-0.5 rounded-md" style={{ backgroundColor: selectedRole === 'user' ? '#F5FAFF' : 'transparent' }}>
                                <span className="hover:bg-inherit hover:scale-105 transition-all duration-200">Client</span>
                              </TabsTrigger>
                              <TabsTrigger value="agent" className="tab-transition cursor-pointer text-xs px-1 py-0.5 mx-0.5 my-0.5 rounded-md" style={{ backgroundColor: selectedRole === 'agent' ? '#F5FAFF' : 'transparent' }}>
                                <span className="hover:bg-inherit hover:scale-105 transition-all duration-200">Agent</span>
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer" style={{ fontWeight: 600 }}>Sign Up</Button>
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