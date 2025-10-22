import { useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import { Slider } from '../ui/slider';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

interface CreateRequestModalProps {
  onClose: () => void;
}

type FormData = {
  // Step 1: Basic Requirements
  location: string;
  propertyType: string;
  priceRange: number[];
  bedrooms: string;
  tenure: string;

  // Step 2: Preferences
  furnishing: string;
  propertyStructure: string;
  locationType: string;
  moveInDate: string;
  additionalInfo: string;
};

const steps = [
  { id: 1, title: 'Basic Requirements', subtitle: 'Let\'s start with the essentials to help us find your perfect property.' },
  { id: 2, title: 'Preferences', subtitle: 'Help us refine your search with additional preferences.' },
];

export function CreateRequestModal({ onClose }: CreateRequestModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<FormData>({
    defaultValues: {
      location: '',
      propertyType: '',
      priceRange: [0, 100000000],
      bedrooms: '',
      tenure: '',
      furnishing: '',
      propertyStructure: '',
      locationType: '',
      moveInDate: '',
      additionalInfo: '',
    },
  });

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
      // Scroll to top of modal content on step change
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top of modal content on step change
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 100);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* Location - Single column at top */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter city, neighborhood, or area" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Two column grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* First row: Property Type and Budget Range */}
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type ▼" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range (₦)</FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        <Slider
                          min={0}
                          max={100000000}
                          step={100000}
                          value={field.value}
                          onValueChange={field.onChange}
                          className="w-full [&_[role=slider]]:bg-[#90CAF9] [&_[role=slider]]:border-[#90CAF9] [&_[role=slider]]:shadow-[#90CAF9]/50"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>₦{field.value?.[0]?.toLocaleString() || '0'}</span>
                          <span>₦{field.value?.[1]?.toLocaleString() || '100,000,000'}</span>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Second row: Bedrooms and Tenure */}
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tenure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tenure</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="rent">Rent</SelectItem>
                        <SelectItem value="buy">Buy</SelectItem>
                        <SelectItem value="lease">Lease</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {/* Two column grid for preferences */}
            <div className="grid grid-cols-2 gap-6">
              {/* First row: Furnishing and Property Structure */}
              <FormField
                control={form.control}
                name="furnishing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Furnishing</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select furnishing option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="furnished">Furnished</SelectItem>
                        <SelectItem value="semi-furnished">Semi-furnished</SelectItem>
                        <SelectItem value="fully-furnished">Fully furnished</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyStructure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Structure</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property structure" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="detached">Detached</SelectItem>
                        <SelectItem value="semi-detached">Semi-detached</SelectItem>
                        <SelectItem value="fully-detached">Fully detached</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Second row: Location Type and Move-in Date */}
              <FormField
                control={form.control}
                name="locationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="estate">In an estate</SelectItem>
                        <SelectItem value="standalone">Standalone</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="moveInDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Move-in Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Single column for Additional Information */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any specific requirements or preferences..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                By submitting this request, you agree to be contacted by verified agents on our platform. Your information is secure and will only be shared with agents matching your criteria.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl text-gray-900 font-semibold">Create New Request</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    step.id === currentStep
                      ? 'bg-[#90CAF9] text-white'
                      : step.id < currentStep
                      ? 'bg-[#90CAF9] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.id}
                </div>
                {step.id < steps.length && (
                  <div
                    className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 transition-colors ${
                      step.id < currentStep ? 'bg-[#90CAF9]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="px-6 pb-6 modal-content">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-gray-600">
                  {steps[currentStep - 1].subtitle}
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-6 transition-all duration-300 ease-in-out">
                {renderStepContent()}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="px-6"
                >
                  Back
                </Button>
              )}

              {currentStep < 2 ? (
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                  className="px-6 bg-[#90CAF9] hover:bg-[#42A5F5] text-white"
                >
                  Continue to {steps[currentStep].title}
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="px-6 bg-[#90CAF9] hover:bg-[#42A5F5] text-white"
                >
                  Submit Request
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
