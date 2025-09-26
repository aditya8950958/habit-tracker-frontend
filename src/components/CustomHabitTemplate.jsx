import React, { useState, useEffect } from 'react';
import { 
  Target, Heart, Brain, Book, Dumbbell, Coffee, Camera, Music, 
  Star, Trophy, Medal, Gift, X, ArrowLeft, ChevronRight, Save,
  CheckCircle2, Sparkles, Clock, Zap, Activity, Award, TrendingUp,
  Utensils, Home, Sun, Moon, Bell, Calendar, Gamepad2, Code
} from 'lucide-react';

const CustomHabitTemplate = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Custom',
    icon: 'Target',
    time: '09:00',
    description: '',
    color: 'from-green-400 to-emerald-500',
    difficulty: 'easy',
    selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    reminderEnabled: true,
    priority: 'medium'
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [iconSearchTerm, setIconSearchTerm] = useState('');

  // Debug logging
  useEffect(() => {
    console.log('🔍 Current step:', step);
    console.log('🔍 FormData:', formData);
  }, [step]);

  // Enhanced Icon mapping with all available icons
  const iconMap = {
    Target, Heart, Brain, Book, Dumbbell, Coffee, Camera, Music, 
    Star, Trophy, Medal, Gift, Zap, Activity, Award, TrendingUp,
    Utensils, Home, Sun, Moon, Bell, Calendar, Gamepad2, Code
  };

  // Complete icon library with categories and colors
  const iconCategories = [
    {
      name: 'Health & Fitness',
      icons: [
        { name: 'Dumbbell', component: Dumbbell, color: 'text-red-600', bg: 'bg-red-100' },
        { name: 'Heart', component: Heart, color: 'text-pink-600', bg: 'bg-pink-100' },
        { name: 'Activity', component: Activity, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'Zap', component: Zap, color: 'text-yellow-600', bg: 'bg-yellow-100' }
      ]
    },
    {
      name: 'Learning & Work',
      icons: [
        { name: 'Brain', component: Brain, color: 'text-purple-600', bg: 'bg-purple-100' },
        { name: 'Book', component: Book, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Target', component: Target, color: 'text-green-600', bg: 'bg-green-100' },
        { name: 'TrendingUp', component: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100' }
      ]
    },
    {
      name: 'Daily Life',
      icons: [
        { name: 'Coffee', component: Coffee, color: 'text-amber-600', bg: 'bg-amber-100' },
        { name: 'Utensils', component: Utensils, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'Clock', component: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Home', component: Home, color: 'text-green-600', bg: 'bg-green-100' }
      ]
    },
    {
      name: 'Creative & Fun',
      icons: [
        { name: 'Music', component: Music, color: 'text-indigo-600', bg: 'bg-indigo-100' },
        { name: 'Camera', component: Camera, color: 'text-purple-600', bg: 'bg-purple-100' },
        { name: 'Gamepad2', component: Gamepad2, color: 'text-pink-600', bg: 'bg-pink-100' },
        { name: 'Gift', component: Gift, color: 'text-red-600', bg: 'bg-red-100' }
      ]
    },
    {
      name: 'Time & Planning',
      icons: [
        { name: 'Calendar', component: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Sun', component: Sun, color: 'text-yellow-600', bg: 'bg-yellow-100' },
        { name: 'Moon', component: Moon, color: 'text-gray-600', bg: 'bg-gray-100' },
        { name: 'Bell', component: Bell, color: 'text-indigo-600', bg: 'bg-indigo-100' }
      ]
    },
    {
      name: 'Achievement',
      icons: [
        { name: 'Star', component: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' },
        { name: 'Award', component: Award, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'Trophy', component: Trophy, color: 'text-amber-600', bg: 'bg-amber-100' },
        { name: 'Medal', component: Medal, color: 'text-purple-600', bg: 'bg-purple-100' }
      ]
    }
  ];

  // Enhanced color options with names and preview
  const colorOptions = [
    { name: 'Emerald', value: 'from-green-400 to-emerald-500', preview: 'bg-gradient-to-r from-green-400 to-emerald-500' },
    { name: 'Ocean', value: 'from-blue-400 to-cyan-500', preview: 'bg-gradient-to-r from-blue-400 to-cyan-500' },
    { name: 'Sunset', value: 'from-purple-400 to-pink-500', preview: 'bg-gradient-to-r from-purple-400 to-pink-500' },
    { name: 'Fire', value: 'from-orange-400 to-red-500', preview: 'bg-gradient-to-r from-orange-400 to-red-500' },
    { name: 'Golden', value: 'from-yellow-400 to-orange-500', preview: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
    { name: 'Royal', value: 'from-indigo-400 to-purple-500', preview: 'bg-gradient-to-r from-indigo-400 to-purple-500' },
    { name: 'Rose', value: 'from-pink-400 to-rose-500', preview: 'bg-gradient-to-r from-pink-400 to-rose-500' },
    { name: 'Mint', value: 'from-teal-400 to-cyan-500', preview: 'bg-gradient-to-r from-teal-400 to-cyan-500' },
    { name: 'Crimson', value: 'from-red-400 to-pink-600', preview: 'bg-gradient-to-r from-red-400 to-pink-600' },
    { name: 'Forest', value: 'from-emerald-400 to-green-600', preview: 'bg-gradient-to-r from-emerald-400 to-green-600' }
  ];

  const daysOfWeek = [
    { short: 'Mon', full: 'Monday' },
    { short: 'Tue', full: 'Tuesday' },
    { short: 'Wed', full: 'Wednesday' },
    { short: 'Thu', full: 'Thursday' },
    { short: 'Fri', full: 'Friday' },
    { short: 'Sat', full: 'Saturday' },
    { short: 'Sun', full: 'Sunday' }
  ];

  const difficultyOptions = [
    { value: 'easy', label: 'Easy', description: '5-15 minutes', color: 'text-green-600 bg-green-100', icon: '🟢' },
    { value: 'medium', label: 'Medium', description: '15-45 minutes', color: 'text-yellow-600 bg-yellow-100', icon: '🟡' },
    { value: 'hard', label: 'Hard', description: '45+ minutes', color: 'text-red-600 bg-red-100', icon: '🔴' }
  ];

  const categoryOptions = [
    'Health & Fitness', 'Mental Wellness', 'Learning & Growth', 
    'Productivity', 'Creative & Hobbies', 'Social & Relationships',
    'Finance & Career', 'Custom'
  ];

  // Get filtered icons based on search
  const getAllIcons = () => {
    let allIcons = [];
    iconCategories.forEach(category => {
      allIcons = [...allIcons, ...category.icons];
    });
    
    // Filter by search term
    if (iconSearchTerm) {
      allIcons = allIcons.filter(icon => 
        icon.name.toLowerCase().includes(iconSearchTerm.toLowerCase())
      );
    }
    
    return allIcons;
  };

  // Toggle day selection
  const toggleDay = (dayShort) => {
    setFormData(prev => ({
      ...prev,
      selectedDays: prev.selectedDays.includes(dayShort)
        ? prev.selectedDays.filter(d => d !== dayShort)
        : [...prev.selectedDays, dayShort]
    }));
  };

  // Quick day selection presets
  const selectDayPreset = (preset) => {
    switch(preset) {
      case 'everyday':
        setFormData(prev => ({ ...prev, selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }));
        break;
      case 'weekdays':
        setFormData(prev => ({ ...prev, selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }));
        break;
      case 'weekends':
        setFormData(prev => ({ ...prev, selectedDays: ['Sat', 'Sun'] }));
        break;
      case 'none':
        setFormData(prev => ({ ...prev, selectedDays: [] }));
        break;
      default:
        break;
    }
  };

  // FIXED: Validation function
  const validateStep = (stepNumber) => {
    const newErrors = {};
    console.log('🔍 Validating step:', stepNumber);
    
    if (stepNumber === 1) {
      if (!formData.name || !formData.name.trim()) {
        newErrors.name = 'Habit name is required';
      }
      if (!formData.category || !formData.category.trim()) {
        newErrors.category = 'Category is required';
      }
      if (!formData.selectedDays || formData.selectedDays.length === 0) {
        newErrors.selectedDays = 'Select at least one day';
      }
    }
    
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log('🔍 Validation result:', isValid, 'Errors:', newErrors);
    return isValid;
  };

  // FIXED: Step navigation functions with proper event handling
  const nextStep = (e) => {
    e.preventDefault(); // ← CRITICAL: Prevent form submission
    e.stopPropagation(); // ← CRITICAL: Stop event bubbling
    
    console.log('🔍 Next button clicked, current step:', step);
    
    if (validateStep(step)) {
      setStep(prevStep => {
        const newStep = prevStep + 1;
        console.log('🔍 Moving from step', prevStep, 'to step', newStep);
        return newStep;
      });
      setErrors({});
    } else {
      console.log('🔍 Validation failed, staying on step:', step);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🔍 Previous button clicked, current step:', step);
    setStep(prevStep => {
      const newStep = Math.max(1, prevStep - 1);
      console.log('🔍 Moving from step', prevStep, 'to step', newStep);
      return newStep;
    });
    setErrors({});
  };

  // FIXED: Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('🔍 Form submitted, current step:', step);
    if (step === 3) {
      console.log('🔍 Final validation passed, submitting:', formData);
      onSubmit(formData);
    } else {
      console.log('🔍 Form submitted but not on step 3, ignoring');
    }
  };

  // Live Preview Component
  const HabitPreview = () => {
    const IconComponent = iconMap[formData.icon] || Target;
    return (
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          Live Preview
        </h4>
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${formData.color} rounded-lg flex items-center justify-center shadow-lg`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-gray-800 text-lg">{formData.name || 'Your Habit Name'}</h5>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                <Clock className="h-4 w-4" />
                <span>{formData.time}</span>
                <span className="text-gray-400">•</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  formData.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  formData.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {formData.difficulty}
                </span>
              </div>
              {formData.selectedDays.length > 0 && (
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-xs text-gray-500">Days:</span>
                  {formData.selectedDays.map(day => (
                    <span key={day} className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded">
                      {day}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Icon Selection Component
  const IconSelectionSection = () => {
    const filteredIcons = getAllIcons();
    
    return (
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search icons..."
            value={iconSearchTerm}
            onChange={(e) => setIconSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Selected Icon Preview */}
        {formData.icon && (
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              {React.createElement(iconMap[formData.icon] || Target, { 
                className: "h-5 w-5 text-green-600" 
              })}
            </div>
            <div>
              <div className="font-medium text-green-800">Selected: {formData.icon}</div>
              <div className="text-sm text-green-600">Click another icon to change</div>
            </div>
          </div>
        )}

        {/* Icon Grid */}
        <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
            {filteredIcons.map((icon, index) => {
              const IconComponent = icon.component;
              const isSelected = formData.icon === icon.name;
              
              return (
                <button
                  key={`${icon.name}-${index}`}
                  type="button"
                  onClick={() => setFormData(prev => ({...prev, icon: icon.name}))}
                  className={`group relative p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                    isSelected 
                      ? 'bg-green-600 shadow-lg ring-2 ring-green-300' 
                      : `${icon.bg} hover:shadow-md`
                  }`}
                  title={icon.name}
                >
                  <IconComponent className={`h-5 w-5 mx-auto transition-colors ${
                    isSelected ? 'text-white' : icon.color
                  }`} />
                  
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          
          {filteredIcons.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Target className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No icons found matching "{iconSearchTerm}"</p>
              <button
                type="button"
                onClick={() => setIconSearchTerm('')}
                className="text-green-600 hover:text-green-700 text-sm mt-2"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Popular Icons Quick Select */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="text-sm font-medium text-blue-800 mb-3">Popular Choices</h5>
          <div className="flex flex-wrap gap-2">
            {['Target', 'Heart', 'Brain', 'Book', 'Dumbbell', 'Coffee', 'Star', 'Trophy'].map(iconName => {
              const IconComponent = iconMap[iconName];
              return (
                <button
                  key={iconName}
                  type="button"
                  onClick={() => setFormData(prev => ({...prev, icon: iconName}))}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-full transition-all ${
                    formData.icon === iconName 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {iconName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Target className="h-6 w-6 text-green-600" />
              Create Custom Habit Template
            </h3>
            <p className="text-gray-600">Step {step} of 3 - Build your perfect habit template</p>
          </div>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className={step === 1 ? 'text-green-600 font-semibold' : ''}>Basic Info</span>
            <span className={step === 2 ? 'text-green-600 font-semibold' : ''}>Schedule</span>
            <span className={step === 3 ? 'text-green-600 font-semibold' : ''}>Appearance</span>
          </div>
        </div>

        {/* FIXED: Form with proper submit handling */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Debug Info */}
          <div className="mb-4 p-2 bg-yellow-100 text-yellow-800 text-sm rounded">
            🔍 Debug: Currently showing step {step}
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Habit Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Morning Yoga, Read for 30 minutes"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({...prev, category: e.target.value}))}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                        errors.category ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      {categoryOptions.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      rows="3"
                      placeholder="What does this habit involve? Any specific goals?"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Quick Day Selection</label>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button type="button" onClick={() => selectDayPreset('everyday')} className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">📅 Every Day</button>
                      <button type="button" onClick={() => selectDayPreset('weekdays')} className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">💼 Weekdays</button>
                      <button type="button" onClick={() => selectDayPreset('weekends')} className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">🏖️ Weekends</button>
                      <button type="button" onClick={() => selectDayPreset('none')} className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">🚫 Clear All</button>
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Days *</label>
                    <div className="grid grid-cols-7 gap-2">
                      {daysOfWeek.map(day => (
                        <button
                          key={day.short}
                          type="button"
                          onClick={() => toggleDay(day.short)}
                          className={`p-3 border-2 rounded-lg text-center transition-all ${
                            formData.selectedDays.includes(day.short)
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-sm font-medium">{day.short}</div>
                          <div className="text-xs opacity-75">{day.full.slice(0, 3)}</div>
                        </button>
                      ))}
                    </div>
                    {errors.selectedDays && <p className="text-red-500 text-sm mt-1">{errors.selectedDays}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Schedule & Preferences */}
          {step === 2 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Schedule & Preferences</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData(prev => ({...prev, time: e.target.value}))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Difficulty Level</label>
                    <div className="space-y-3">
                      {difficultyOptions.map(diff => (
                        <div
                          key={diff.value}
                          onClick={() => setFormData(prev => ({...prev, difficulty: diff.value}))}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.difficulty === diff.value 
                              ? 'border-green-500 bg-green-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{diff.icon}</span>
                            <div>
                              <div className="font-medium text-gray-800">{diff.label}</div>
                              <div className="text-sm text-gray-500">{diff.description}</div>
                            </div>
                            {formData.difficulty === diff.value && (
                              <CheckCircle2 className="h-5 w-5 text-green-600 ml-auto" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium text-blue-800">Enable Reminders</div>
                        <div className="text-sm text-blue-600">Get notified at your scheduled time</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({...prev, reminderEnabled: !prev.reminderEnabled}))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.reminderEnabled ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.reminderEnabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Icon & Color Selection */}
          {step === 3 && (
            <div className="space-y-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">🎉 Appearance & Customization</h4>
              
              <HabitPreview />
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Icon Selection */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Choose Task Icon
                  </h4>
                  
                  <IconSelectionSection />
                </div>

                {/* Color Selection */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-green-600" />
                    Choose Color Theme
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {colorOptions.map(color => (
                      <div
                        key={color.value}
                        onClick={() => setFormData(prev => ({...prev, color: color.value}))}
                        className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md group ${
                          formData.color === color.value ? 'border-gray-800 ring-2 ring-green-500' : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <div className={`h-12 rounded-md ${color.preview} shadow-sm group-hover:shadow-md transition-shadow`}></div>
                        <div className="text-xs text-center text-gray-600 mt-2 font-medium">{color.name}</div>
                        {formData.color === color.value && (
                          <div className="absolute top-1 right-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Gift className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-green-800">Pro Tips!</h5>
                        <ul className="text-sm text-green-700 mt-1 space-y-1">
                          <li>• Use the search to find icons quickly by name</li>
                          <li>• Colors affect motivation - warm colors energize, cool colors promote focus</li>
                          <li>• Choose icons that clearly represent your habit for better visual recognition</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FIXED: Action Buttons with proper event handling */}
          <div className="flex justify-between pt-6 border-t border-gray-200 mt-8">
            <div>
              {step > 1 && (
                <button 
                  type="button" // ← CRITICAL: Prevents form submission
                  onClick={prevStep} 
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous
                </button>
              )}
            </div>
            
            <div className="flex space-x-3">
              <button 
                type="button" // ← CRITICAL: Prevents form submission
                onClick={onCancel} 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              
              {step < 3 ? (
                <button 
                  type="button" // ← CRITICAL: This was the main fix!
                  onClick={nextStep} 
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center gap-2"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button 
                  type="submit" // ← Only the final submit button should have type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg"
                >
                  <Save className="h-4 w-4" /> Create Habit Template
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomHabitTemplate;
