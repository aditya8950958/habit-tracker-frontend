import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Plus, Target, Calendar, TrendingUp, Award,
  CheckCircle2, Circle, Flame, BarChart3, Settings,
  Bell, User, Home, Activity, Clock, Zap, X, Save,
  Coffee, Book, Dumbbell, Heart, Brain, Gamepad2,
  Moon, Sun, Utensils, Camera, Music, Code, Gift,
  Star, Trophy, Medal, Sparkles, ChevronRight,
  PieChart, LineChart, BarChart, TrendingDown,
  Download
} from 'lucide-react';
import CustomHabitTemplate from './CustomHabitTemplate'; 

const Dashboard = ({ onBack, userData, updateUserData }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [showCustomTemplate, setShowCustomTemplate] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); 

  // Enhanced Habit Templates
  const habitTemplates = [
    {
      category: 'Health & Fitness',
      icon: '💪',
      templates: [
        { name: 'Morning Exercise', icon: 'Dumbbell', time: '07:00', description: 'Start your day with 30 minutes of exercise', color: 'from-red-400 to-pink-500', difficulty: 'medium' },
        { name: 'Drink 8 Glasses of Water', icon: 'Heart', time: '08:00', description: 'Stay hydrated throughout the day', color: 'from-blue-400 to-cyan-500', difficulty: 'easy' },
        { name: '3-Day Fitness Challenge', icon: 'Dumbbell', time: '07:00', description: 'Complete a 3-day progressive workout plan', color: 'from-purple-400 to-pink-500', difficulty: 'hard', totalDays: 3 },
        { name: 'Take Vitamins', icon: 'Heart', time: '09:00', description: 'Daily vitamin supplements', color: 'from-green-400 to-emerald-500', difficulty: 'easy' },
        { name: 'Evening Walk', icon: 'Dumbbell', time: '18:00', description: '30-minute walk after work', color: 'from-orange-400 to-red-500', difficulty: 'easy' },
        { name: '10,000 Steps Daily', icon: 'Dumbbell', time: '12:00', description: 'Track daily step count', color: 'from-purple-400 to-pink-500', difficulty: 'medium' }
      ]
    },
    {
      category: 'Mental Wellness',
      icon: '🧠',
      templates: [
        { name: 'Morning Meditation', icon: 'Brain', time: '07:30', description: '10 minutes of mindfulness', color: 'from-purple-400 to-pink-500', difficulty: 'easy' },
        { name: '5-Day Mindfulness Journey', icon: 'Brain', time: '08:00', description: 'Progressive meditation over 5 days', color: 'from-indigo-400 to-purple-500', difficulty: 'medium', totalDays: 5 },
        { name: 'Gratitude Journal', icon: 'Book', time: '22:00', description: 'Write 3 things you\'re grateful for', color: 'from-yellow-400 to-orange-500', difficulty: 'easy' },
        { name: 'Deep Breathing', icon: 'Brain', time: '12:00', description: '5 minutes of deep breathing exercises', color: 'from-indigo-400 to-purple-500', difficulty: 'easy' },
        { name: 'Digital Detox Hour', icon: 'Moon', time: '20:00', description: 'One hour without screens', color: 'from-gray-400 to-gray-600', difficulty: 'hard' }
      ]
    },
    {
      category: 'Learning & Growth',
      icon: '📚',
      templates: [
        { name: 'Read for 30 Minutes', icon: 'Book', time: '21:00', description: 'Daily reading habit', color: 'from-green-400 to-teal-500', difficulty: 'easy' },
        { name: '7-Day Learning Sprint', icon: 'Brain', time: '19:00', description: 'Intensive learning program over a week', color: 'from-blue-400 to-indigo-500', difficulty: 'hard', totalDays: 7 },
        { name: 'Learn New Language', icon: 'Brain', time: '19:00', description: '15 minutes of language practice', color: 'from-blue-400 to-indigo-500', difficulty: 'medium' },
        { name: 'Practice Coding', icon: 'Code', time: '20:00', description: 'Code for at least 1 hour', color: 'from-gray-700 to-gray-900', difficulty: 'hard' },
        { name: 'Watch Educational Videos', icon: 'Brain', time: '18:30', description: 'Learn something new every day', color: 'from-red-400 to-pink-500', difficulty: 'easy' }
      ]
    },
    {
      category: 'Productivity',
      icon: '⚡',
      templates: [
        { name: 'Plan Tomorrow', icon: 'Calendar', time: '22:30', description: 'Prepare for the next day', color: 'from-purple-400 to-indigo-500', difficulty: 'easy' },
        { name: 'Clean Workspace', icon: 'Home', time: '17:00', description: 'Keep your environment organized', color: 'from-green-400 to-emerald-500', difficulty: 'easy' },
        { name: '4-Day Productivity Boost', icon: 'Target', time: '09:00', description: 'Structured productivity enhancement over 4 days', color: 'from-orange-400 to-yellow-500', difficulty: 'medium', totalDays: 4 },
        { name: 'Review Daily Goals', icon: 'Target', time: '23:00', description: 'Reflect on daily achievements', color: 'from-orange-400 to-yellow-500', difficulty: 'easy' }
      ]
    }
  ];

  
  const iconMap = {
    Dumbbell, Heart, Brain, Book, Calendar, Target, Home, Sun, Moon, Music, Camera, Gamepad2, Code, Coffee, Utensils, Clock, User, Award, TrendingUp, Activity, Bell, Star, Trophy, Medal, Gift, Zap
  };

  
  const motivationalQuotes = [
    "The secret of getting ahead is getting started. - Mark Twain",
    "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "Your future is created by what you do today, not tomorrow. - Robert Kiyosaki",
    "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun"
  ];

  const achievements = [
    { id: 1, name: 'First Step', description: 'Complete your first habit', icon: '🎯', unlocked: false },
    { id: 2, name: 'Streak Master', description: 'Maintain a 7-day streak', icon: '🔥', unlocked: false },
    { id: 3, name: 'Consistency King', description: 'Complete habits for 30 days', icon: '👑', unlocked: false },
    { id: 4, name: 'Habit Collector', description: 'Create 10 different habits', icon: '📚', unlocked: false }
  ];

  const getToday = () => new Date().toISOString().split('T')[0];

  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getDateDisplay = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (dateStr === today.toISOString().split('T')[0]) return 'Today';
    if (dateStr === tomorrow.toISOString().split('T')[0]) return 'Tomorrow';
    
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getHabitCurrentDay = (habit) => {
    if (!habit.totalDays || habit.totalDays <= 1) return 1; 
    
    const habitDayKey = `${habit.id}-currentDay`;
    const currentDay = userData.habitDays?.[habitDayKey] || 1;
    return Math.min(currentDay, habit.totalDays); 
  };

  const getHabitDisplayInfo = (habit) => {
    const currentDay = getHabitCurrentDay(habit);
    const totalDays = habit.totalDays || 1;
    
    if (totalDays <= 1) {
      return { displayName: habit.name, progress: '' };
    }
    
    return {
      displayName: `${habit.name} - Day ${currentDay}`,
      progress: `${currentDay}/${totalDays}`
    };
  };

  const toggleHabit = (habitId) => {
    const habit = userData.habits.find(h => h.id === habitId);
    const currentDay = getHabitCurrentDay(habit);
    
    
    const completionKey = habit.totalDays > 1 
      ? `${habitId}-${selectedDate}-day${currentDay}` 
      : `${habitId}-${selectedDate}`;
    
    const isCurrentlyCompleted = userData.completions[completionKey] || false;
    
    const updatedCompletions = {
      ...userData.completions,
      [completionKey]: !isCurrentlyCompleted
    };

    
    let updatedHabitDays = { ...userData.habitDays };
    if (!isCurrentlyCompleted && habit.totalDays > 1) {
      const habitDayKey = `${habitId}-currentDay`;
      const nextDay = currentDay < habit.totalDays ? currentDay + 1 : 1; 
      updatedHabitDays[habitDayKey] = nextDay;
    }
    
    updateUserData({
      completions: updatedCompletions,
      habitDays: updatedHabitDays
    });

    updateStreaks(habitId, !isCurrentlyCompleted);
  };

  const updateStreaks = (habitId, completed) => {
    const currentStreak = userData.streaks[habitId] || 0;
    const newStreak = completed ? currentStreak + 1 : Math.max(0, currentStreak - 1);
    
    updateUserData({
      streaks: {
        ...userData.streaks,
        [habitId]: newStreak
      }
    });
  };

  const addHabitFromTemplate = (template) => {
    const newHabit = {
      id: Date.now(),
      name: template.name,
      category: template.category || 'Custom',
      icon: template.icon,
      time: template.time,
      frequency: 'daily',
      description: template.description,
      createdAt: new Date().toISOString(),
      color: template.color,
      difficulty: template.difficulty || 'easy',
      selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    };

    updateUserData({
      habits: [...userData.habits, newHabit]
    });

    setShowTemplates(false);
  };

  const addCustomHabit = (habitData) => {
    const newHabit = {
      id: Date.now(),
      ...habitData,
      createdAt: new Date().toISOString(),
      color: habitData.color || 'from-green-400 to-emerald-500'
    };

    updateUserData({
      habits: [...userData.habits, newHabit]
    });

    setShowAddHabit(false);
  };

  // NEW: Handler for custom template submission
  const handleCustomTemplateSubmit = (templateData) => {
    console.log('📝 Adding custom template:', templateData);
    
    const newHabit = {
      id: Date.now(),
      ...templateData,
      createdAt: new Date().toISOString(),
      frequency: 'daily'
    };

    updateUserData({
      habits: [...userData.habits, newHabit]
    });

    setShowCustomTemplate(false);
    
    
    alert('✅ Custom habit template created successfully!');
  };

  const deleteHabit = (habitId) => {
    
    const updatedCompletions = { ...userData.completions };
    Object.keys(updatedCompletions).forEach(key => {
      if (key.startsWith(`${habitId}-`)) {
        delete updatedCompletions[key];
      }
    });

    
    const updatedHabitDays = { ...userData.habitDays };
    delete updatedHabitDays[`${habitId}-currentDay`];

    
    const updatedStreaks = { ...userData.streaks };
    delete updatedStreaks[habitId];

    updateUserData({
      habits: userData.habits.filter(h => h.id !== habitId),
      completions: updatedCompletions,
      habitDays: updatedHabitDays,
      streaks: updatedStreaks
    });
  };

  const getHabitStats = () => {
    const today = getToday();
    
    
    const completedToday = userData.habits.filter(habit => {
      const currentDay = getHabitCurrentDay(habit);
      const completionKey = habit.totalDays > 1 
        ? `${habit.id}-${today}-day${currentDay}` 
        : `${habit.id}-${today}`;
      return userData.completions[completionKey];
    }).length;
    
    const streaks = Object.values(userData.streaks || {});
    const maxStreak = streaks.length > 0 ? Math.max(...streaks) : 0;
    
    const last7Days = Array.from({length: 7}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    });

    let totalPossible = userData.habits.length * 7;
    let totalCompleted = 0;
    
    last7Days.forEach(date => {
      userData.habits.forEach(habit => {
        
        if (habit.totalDays > 1) {
          for (let day = 1; day <= habit.totalDays; day++) {
            if (userData.completions[`${habit.id}-${date}-day${day}`]) {
              totalCompleted++;
              break; 
            }
          }
        } else {
          if (userData.completions[`${habit.id}-${date}`]) {
            totalCompleted++;
          }
        }
      });
    });

    const weeklySuccess = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;

    return {
      totalHabits: userData.habits.length,
      completedToday,
      currentStreak: maxStreak,
      weeklySuccess
    };
  };

  const stats = getHabitStats();

  
  const getWeeklyChartData = () => {
    const last7Days = Array.from({length: 7}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date;
    }).reverse();

    return last7Days.map(date => {
      const dateStr = date.toISOString().split('T')[0];
      
      
      const completed = userData.habits.filter(habit => {
        if (habit.totalDays > 1) {
          
          for (let day = 1; day <= habit.totalDays; day++) {
            if (userData.completions[`${habit.id}-${dateStr}-day${day}`]) {
              return true;
            }
          }
          return false;
        } else {
          return userData.completions[`${habit.id}-${dateStr}`];
        }
      }).length;
      
      const total = userData.habits.length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        percentage,
        completed,
        total
      };
    });
  };

  const weeklyData = getWeeklyChartData();

 
  useEffect(() => {
    if (userData.habits.length === 0) {
      const sampleHabits = [
        { 
          id: Date.now() + 1, 
          name: 'Morning Meditation', 
          category: 'Mental Wellness',
          icon: 'Brain',
          time: '07:00',
          frequency: 'daily',
          description: 'Start your day with mindfulness',
          createdAt: new Date().toISOString(),
          color: 'from-purple-400 to-pink-500',
          difficulty: 'easy',
          selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        { 
          id: Date.now() + 2, 
          name: 'Drink Water', 
          category: 'Health & Fitness',
          icon: 'Heart',
          time: '08:00',
          frequency: 'daily',
          description: 'Stay hydrated throughout the day',
          createdAt: new Date().toISOString(),
          color: 'from-blue-400 to-cyan-500',
          difficulty: 'easy',
          selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ];

      updateUserData({
        habits: sampleHabits,
        completions: {},
        streaks: {},
        habitDays: {} 
      });
    }
  }, []);

  
  const CustomHabitForm = ({ onSubmit, onCancel }) => {
   
    return <div>Old Custom Habit Form - Can be removed</div>;
  };

  l
  const TemplateModal = ({ onClose, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTemplates = habitTemplates.map(category => ({
      ...category,
      templates: category.templates.filter(template =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.templates.length > 0);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center p-4 sm:p-6 border-b">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Choose from Templates</h3>
              <p className="text-gray-600 text-sm sm:text-base">Pick a habit template to get started quickly</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="p-4 sm:p-6 border-b bg-gray-50">
            <input
              type="text"
              placeholder="Search habits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            />
          </div>

          <div className="p-4 sm:p-6 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
            {filteredTemplates.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {category.templates.map((template, templateIndex) => {
                    const IconComponent = iconMap[template.icon];
                    return (
                      <div
                        key={templateIndex}
                        onClick={() => onSelect(template)}
                        className="p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 cursor-pointer transition-all transform hover:scale-105"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${template.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-gray-800 text-sm sm:text-base truncate">{template.name}</h5>
                            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{template.description}</p>
                            <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                ⏰ {template.time}
                              </span>
                              {template.totalDays && template.totalDays > 1 && (
                                <span className="text-xs px-1 sm:px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                                  {template.totalDays} days
                                </span>
                              )}
                              <span className={`text-xs px-1 sm:px-2 py-1 rounded-full ${
                                template.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                template.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {template.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  
  const WeeklyChart = () => (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Weekly Progress</h2>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <BarChart className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Last 7 days</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-64 flex items-end justify-between space-x-2 sm:space-x-4">
        {weeklyData.map((day, index) => (
          <div key={index} className="flex flex-col items-center flex-1 group">
            <div className="w-full bg-gray-200 rounded-t-lg relative overflow-hidden" style={{ height: '160px' }}>
              <div 
                className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all duration-1000 absolute bottom-0"
                style={{ height: `${day.percentage}%` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm">
                {day.percentage}%
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
              <div className="truncate">{day.day}</div>
              <div className="text-xs">{day.completed}/{day.total}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


  const DashboardView = () => (
    <div className="space-y-6 sm:space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 sm:p-6 text-white hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm sm:text-base">Today's Progress</p>
              <p className="text-2xl sm:text-3xl font-bold">{stats.completedToday}/{stats.totalHabits}</p>
              <p className="text-xs text-green-200 mt-1">
                {stats.totalHabits > 0 ? Math.round((stats.completedToday / stats.totalHabits) * 100) : 0}% complete
              </p>
            </div>
            <Target className="h-10 w-10 sm:h-12 sm:w-12 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-4 sm:p-6 text-white hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm sm:text-base">Best Streak</p>
              <p className="text-2xl sm:text-3xl font-bold">{stats.currentStreak} days</p>
              <p className="text-xs text-orange-200 mt-1">Keep it burning! 🔥</p>
            </div>
            <Flame className="h-10 w-10 sm:h-12 sm:w-12 text-orange-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-4 sm:p-6 text-white hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm sm:text-base">Weekly Success</p>
              <p className="text-2xl sm:text-3xl font-bold">{stats.weeklySuccess}%</p>
              <p className="text-xs text-blue-200 mt-1">
                {stats.weeklySuccess >= 80 ? 'Excellent!' : stats.weeklySuccess >= 60 ? 'Good job!' : 'Keep trying!'}
              </p>
            </div>
            <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-4 sm:p-6 text-white hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm sm:text-base">Total Habits</p>
              <p className="text-2xl sm:text-3xl font-bold">{stats.totalHabits}</p>
              <p className="text-xs text-purple-200 mt-1">Building consistency!</p>
            </div>
            <Award className="h-10 w-10 sm:h-12 sm:w-12 text-purple-200" />
          </div>
        </div>
      </div>

     
      <div className="flex gap-2 sm:gap-4 flex-wrap">
        <button
          onClick={() => setShowTemplates(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Add from Templates</span>
          <span className="sm:hidden">Templates</span>
        </button>
        
       
        <button
          onClick={() => setShowCustomTemplate(true)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base"
        >
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Create Custom Template</span>
          <span className="sm:hidden">Custom</span>
        </button>
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            {getDateDisplay(selectedDate)}'s Habits
          </h2>
          
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedDate(getToday())}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDate === getToday()
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setSelectedDate(getTomorrow())}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDate === getTomorrow()
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tomorrow
            </button>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
        
        {userData.habits.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <Target className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">No habits yet</h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">Start building better habits by adding your first one!</p>
            <div className="flex justify-center gap-2 sm:gap-4 flex-col sm:flex-row">
              <button
                onClick={() => setShowTemplates(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                Browse Templates
              </button>
              <button
                onClick={() => setShowCustomTemplate(true)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                Create Custom
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {userData.habits.map(habit => {
              const currentDay = getHabitCurrentDay(habit);
              const habitDisplay = getHabitDisplayInfo(habit);
              
              e
              const completionKey = habit.totalDays > 1 
                ? `${habit.id}-${selectedDate}-day${currentDay}` 
                : `${habit.id}-${selectedDate}`;
              const isCompleted = userData.completions[completionKey] || false;
              
              const streak = userData.streaks[habit.id] || 0;
              const IconComponent = iconMap[habit.icon] || Target;

              
              const selectedDateObj = new Date(selectedDate);
              const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
              const dayName = dayNames[selectedDateObj.getDay()];
              const shortDayName = dayName === 'Sun' ? 'Sun' : dayName === 'Mon' ? 'Mon' : dayName === 'Tue' ? 'Tue' : dayName === 'Wed' ? 'Wed' : dayName === 'Thu' ? 'Thu' : dayName === 'Fri' ? 'Fri' : 'Sat';
              
              if (habit.selectedDays && !habit.selectedDays.includes(shortDayName)) {
                return null; 
              }

              return (
                <div key={habit.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-all group hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <button
                        onClick={() => toggleHabit(habit.id)}
                        className="transition-transform hover:scale-110 flex-shrink-0"
                        disabled={selectedDate < getToday()} 
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                        ) : (
                          <Circle className={`h-6 w-6 sm:h-8 sm:w-8 transition-colors ${
                            selectedDate < getToday() 
                              ? 'text-gray-300 cursor-not-allowed' 
                              : 'text-gray-400 hover:text-green-500'
                          }`} />
                        )}
                      </button>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${habit.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`text-base sm:text-lg font-semibold transition-all truncate ${
                          isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'
                        }`}>
                          {habitDisplay.displayName}
                        </h3>
                        <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            {habit.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                            {streak} day streak
                          </span>
                          {habitDisplay.progress && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              Progress: {habitDisplay.progress}
                            </span>
                          )}
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {habit.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            habit.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                            habit.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {habit.difficulty}
                          </span>
                          {selectedDate !== getToday() && (
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                              {getDateDisplay(selectedDate)}
                            </span>
                          )}
                        </div>
                        {habit.selectedDays && habit.selectedDays.length < 7 && (
                          <div className="text-xs text-gray-400 mt-1">
                            Days: {habit.selectedDays.join(', ')}
                          </div>
                        )}
                        {habit.totalDays > 1 && (
                          <div className="text-xs text-blue-600 mt-1">
                            Multi-day habit: {habit.totalDays} days total
                          </div>
                        )}
                        {habit.description && (
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{habit.description}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all hover:scale-110 flex-shrink-0 ml-2"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      
      {showTemplates && (
        <TemplateModal
          onClose={() => setShowTemplates(false)}
          onSelect={addHabitFromTemplate}
        />
      )}

      {showAddHabit && (
        <CustomHabitForm
          onSubmit={addCustomHabit}
          onCancel={() => setShowAddHabit(false)}
        />
      )}

      
      {showCustomTemplate && (
        <CustomHabitTemplate
          onSubmit={handleCustomTemplateSubmit}
          onCancel={() => setShowCustomTemplate(false)}
        />
      )}
    </div>
  );

  
  const ProgressView = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Your Progress</h2>
        <p className="text-gray-600 text-sm sm:text-base">Track your habit-building journey with detailed analytics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 sm:p-6 text-white">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">{stats.weeklySuccess}%</div>
            <div className="text-blue-100 text-sm sm:text-base">Weekly Success</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 sm:p-6 text-white">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">{stats.currentStreak}</div>
            <div className="text-green-100 text-sm sm:text-base">Current Streak</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 sm:p-6 text-white">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">{stats.completedToday}</div>
            <div className="text-purple-100 text-sm sm:text-base">Completed Today</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-4 sm:p-6 text-white">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">{stats.totalHabits}</div>
            <div className="text-orange-100 text-sm sm:text-base">Total Habits</div>
          </div>
        </div>
      </div>

      <WeeklyChart />

      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Habit Streaks</h3>
        <div className="space-y-3 sm:space-y-4">
          {userData.habits.map(habit => {
            const streak = userData.streaks[habit.id] || 0;
            const IconComponent = iconMap[habit.icon] || Target;
            
            return (
              <div key={habit.id} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${habit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800 text-sm sm:text-base truncate">{habit.name}</span>
                </div>
                <div className="flex items-center gap-1 text-orange-600 font-bold text-sm sm:text-base flex-shrink-0">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{streak} days</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  
  const MotivationView = () => {
    const [currentQuote] = useState(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);

    return (
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
            Stay Motivated
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Your daily dose of inspiration and achievements</p>
        </div>

        <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 sm:h-6 sm:w-6" />
            <h3 className="text-lg sm:text-xl font-semibold">Quote of the Day</h3>
          </div>
          <p className="text-lg sm:text-xl italic leading-relaxed">"{currentQuote}"</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
            <h3 className="text-lg sm:text-xl font-semibold">Your Progress</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{stats.completedToday}</div>
              <div className="text-green-100 text-sm sm:text-base">Completed Today</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{stats.currentStreak}</div>
              <div className="text-green-100 text-sm sm:text-base">Best Streak</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{stats.weeklySuccess}%</div>
              <div className="text-green-100 text-sm sm:text-base">Weekly Success</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{stats.totalHabits}</div>
              <div className="text-green-100 text-sm sm:text-base">Total Habits</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Medal className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {achievements.map(achievement => {
              const totalCompletions = Object.keys(userData.completions || {}).filter(key => userData.completions[key]).length;
              const isUnlocked = (
                (achievement.id === 1 && totalCompletions >= 1) ||
                (achievement.id === 2 && stats.currentStreak >= 7) ||
                (achievement.id === 3 && totalCompletions >= 30) ||
                (achievement.id === 4 && userData.habits.length >= 10)
              );
              
              return (
                <div
                  key={achievement.id}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    isUnlocked 
                      ? 'bg-yellow-50 border-yellow-300 shadow-md' 
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl sm:text-2xl">{achievement.icon}</span>
                    <span className={`font-semibold text-sm sm:text-base ${
                      isUnlocked ? 'text-yellow-800' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </span>
                    {isUnlocked && <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />}
                  </div>
                  <p className={`text-xs sm:text-sm ${
                    isUnlocked ? 'text-yellow-700' : 'text-gray-400'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Pro Tips</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Start Small</h4>
              <p className="text-blue-700 text-xs sm:text-sm">Begin with habits that take 2 minutes or less. Success breeds success!</p>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">Stack Your Habits</h4>
              <p className="text-green-700 text-xs sm:text-sm">Link new habits to existing routines. "After I pour my coffee, I will meditate for 2 minutes."</p>
            </div>
            <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Track Your Progress</h4>
              <p className="text-purple-700 text-xs sm:text-sm">What gets measured gets managed. Use our analytics to see your patterns.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

 
  const SettingsView = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Settings & Data</h2>
        <p className="text-gray-600 text-sm sm:text-base">Manage your account and habit data</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Data Management</h3>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-3 sm:gap-0">
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Export Habit Data</h4>
              <p className="text-xs sm:text-sm text-gray-600">Download all your habit data as JSON</p>
            </div>
            <button 
              onClick={() => {
                try {
                  const dataStr = JSON.stringify(userData, null, 2);
                  const dataBlob = new Blob([dataStr], {type: 'application/json'});
                  const url = URL.createObjectURL(dataBlob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = `habitflow-data-${new Date().toISOString().split('T')[0]}.json`;
                  link.click();
                  URL.revokeObjectURL(url);
                  alert('Data exported successfully!');
                } catch (error) {
                  console.error('Export failed:', error);
                  alert('Failed to export data');
                }
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
            >
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              Export
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors gap-3 sm:gap-0">
            <div>
              <h4 className="font-semibold text-red-800 text-sm sm:text-base">Clear All Data</h4>
              <p className="text-xs sm:text-sm text-red-600">⚠️ This will permanently delete all habits and progress</p>
            </div>
            <button 
              onClick={() => {
                if (window.confirm('Are you absolutely sure? This action cannot be undone.')) {
                  if (window.confirm('Last chance! This will permanently delete everything. Continue?')) {
                    updateUserData({
                      habits: [],
                      completions: {},
                      streaks: {}
                    });
                    alert('All data has been cleared successfully.');
                  }
                }
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Clear All Data
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">App Statistics</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              {userData?.habits?.length || 0}
            </div>
            <div className="text-xs sm:text-sm text-blue-700">Total Habits Created</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-green-600">
              {userData?.completions ? 
                Object.keys(userData.completions).filter(key => userData.completions[key]).length 
                : 0
              }
            </div>
            <div className="text-xs sm:text-sm text-green-700">Total Completions</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-purple-600">
              {(userData?.habits?.length > 0 && userData?.streaks) ? 
                Math.max(...Object.values(userData.streaks), 0) 
                : 0
              }
            </div>
            <div className="text-xs sm:text-sm text-purple-700">Longest Streak</div>
          </div>
        </div>
      </div>
    </div>
  );

  
  const renderContent = () => {
    console.log('Current activeTab:', activeTab);
    switch(activeTab) {
      case 'progress':
        return <ProgressView />;
      case 'motivation':
        return <MotivationView />;
      case 'settings':
        return <SettingsView />;
      case 'dashboard':
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
     
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Back to Home</span>
              </button>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                HabitFlow Dashboard
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                U
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
         
          <div className="w-full lg:w-64 order-2 lg:order-1">
           
            <div className="lg:hidden flex space-x-2 overflow-x-auto pb-2 mb-4">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'dashboard' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-gray-600 bg-white hover:bg-gray-100'
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="text-sm">Dashboard</span>
              </button>
              
              <button
                onClick={() => setActiveTab('progress')}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'progress' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-gray-600 bg-white hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="h-4 w-4" />
                <span className="text-sm">Progress</span>
              </button>
              
              <button
                onClick={() => setActiveTab('motivation')}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'motivation' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-gray-600 bg-white hover:bg-gray-100'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Motivation</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'settings' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-gray-600 bg-white hover:bg-gray-100'
                }`}
              >
                <Settings className="h-4 w-4" />
                <span className="text-sm">Settings</span>
              </button>
            </div>

            
            <div className="hidden lg:block space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'dashboard' 
                    ? 'bg-green-500 text-white shadow-lg scale-105' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
              
              <button
                onClick={() => setActiveTab('progress')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'progress' 
                    ? 'bg-green-500 text-white shadow-lg scale-105' 
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Progress</span>
              </button>
            
            <button
              onClick={() => setActiveTab('motivation')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'motivation' 
                  ? 'bg-green-500 text-white shadow-lg scale-105' 
                  : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              <Sparkles className="h-5 w-5" />
              <span>Motivation</span>
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'settings' 
                  ? 'bg-green-500 text-white shadow-lg scale-105' 
                  : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            </div>
          </div>

          
          <div className="flex-1 order-1 lg:order-2">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


