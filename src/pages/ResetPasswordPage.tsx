import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../components/ui/form';
import { Check, X, Home, Eye, EyeOff } from 'lucide-react';

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

const ResetPasswordPage: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<ResetPasswordFormData>();

  const password = form.watch('newPassword');

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

  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setError('Invalid reset link. Please request a new password reset.');
    }
  }, []);

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    if (data.newPassword !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!Object.values(requirements).every(Boolean)) {
      setError('Password must meet all requirements');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://s-dev.domihive.com/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          newPassword: data.newPassword,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const navigateHome = () => {
    window.location.href = '/';
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#F5FAFF] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl animate-fadeIn">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 600 }}>Password Reset Successful!</h2>
              <p className="text-gray-600 mb-6">
                Your password has been successfully updated. You can now log in with your new password.
              </p>
            </div>
            <Button
              onClick={navigateHome}
              className="w-full flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#F5FAFF] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Reset Your Password</h1>
          <p className="text-gray-600">Enter your new password below</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleResetPassword)} className="space-y-6">
            <FormField
              control={form.control}
              name="newPassword"
              rules={{
                required: 'Password is required',
                validate: (value) => {
                  const req = checkRequirements(value);
                  return Object.values(req).every(Boolean) || 'Password must meet all requirements';
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {password && (
              <div className="flex gap-4">
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
              control={form.control}
              name="confirmPassword"
              rules={{
                required: 'Please confirm your password',
                validate: (value) => value === form.getValues('newPassword') || 'Passwords do not match'
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center gap-2 px-6 py-3 bg-[#90CAF9] text-white rounded-xl hover:bg-gradient-to-r hover:from-[#1565C0] hover:to-[#90CAF9] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontWeight: 600 }}
            >
              {isLoading ? 'Resetting Password...' : 'Reset Password'}
            </Button>
          </form>
        </Form>

        <div className="text-center mt-6">
          <button
            onClick={navigateHome}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;