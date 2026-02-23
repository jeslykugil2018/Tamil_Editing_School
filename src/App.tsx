/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Users, 
  Smartphone, 
  Video, 
  Award, 
  ChevronDown, 
  MessageCircle, 
  CreditCard,
  Instagram,
  Youtube,
  Twitter,
  Menu,
  X,
  Star
} from 'lucide-react';

const curriculum = [
  { id: 1, title: "Chapter 01 - Why do we need video editing?", duration: "2:39" },
  { id: 2, title: "Chapter 02 - Why is storytelling important in video editing?", duration: "3:05" },
  { id: 3, title: "Chapter 03 - Things you must know about CapCut Interface", duration: "6:07" },
  { id: 4, title: "Chapter 04 - 2 Main types of Video Editing", duration: "1:42" },
  { id: 5, title: "Chapter 05 - 5 types of Cuts you must know", duration: "7:18" },
  { id: 6, title: "Chapter 06 - Why is Color Grading necessary?", duration: "4:12" },
  { id: 7, title: "Chapter 07 - How to do Lightness-Based Color Correction correctly", duration: "6:22" },
  { id: 8, title: "Chapter 08 - How to do Color-Based Color Correction correctly", duration: "13:22" },
  { id: 9, title: "Chapter 09 - Importance of good Audio Quality", duration: "8:23" },
  { id: 10, title: "Chapter 10 - How to enhance Audio Quality using CapCut", duration: "6:32" },
  { id: 11, title: "Chapter 11 - A secret website to improve Audio Quality", duration: "4:20" },
  { id: 12, title: "Chapter 12 - Importance of Keyframes in Video Editing", duration: "4:55" },
  { id: 13, title: "Chapter 13 - How to get quality output using Zoom Effects correctly", duration: "8:31" },
  { id: 14, title: "Chapter 14 - How to increase engagement using B-Rolls", duration: "9:50" },
  { id: 15, title: "Chapter 15 - Why are Text & Captions important for quality video?", duration: "12:57" },
  { id: 16, title: "Chapter 16 - Advantage of Masking and Green Screen in Video Editing", duration: "5:30" },
  { id: 17, title: "Chapter 17 - How to remove background of any object in CapCut", duration: "6:41" },
  { id: 18, title: "Chapter 18 - How to edit quality video using Speed Ramping", duration: "6:52" },
  { id: 19, title: "Chapter 19 - 2 types of Transitions you must know", duration: "7:25" },
  { id: 20, title: "Chapter 20 - How to increase engagement using Sound Effects", duration: "7:03" },
  { id: 21, title: "Chapter 21 - Why are Tracking & Lock-on Stabilization needed?", duration: "7:05" },
  { id: 22, title: "Chapter 22 - 9 Secret Websites that help you edit videos easily", duration: "3:56" },
  { id: 23, title: "Chapter 23 - How to identify mistakes in an edited video", duration: "2:48" },
  { id: 24, title: "Chapter 24 - How to correct mistakes and make a quality video", duration: "8:58" },
  { id: 25, title: "Chapter 25 - 5 Tips to edit videos easily", duration: "4:04" },
  { id: 26, title: "Chapter 26 - Why should a Video Editor have a Portfolio?", duration: "4:06" },
  { id: 27, title: "Chapter 27 - How to create a free Portfolio and increase Clients", duration: "3:55" },
  { id: 28, title: "Chapter 28 - Edit a video with me CapCut PC version Part 1", duration: "20:58" },
  { id: 29, title: "Chapter 29 - Edit a video with me CapCut PC version Part 2", duration: "22:49" },
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [showAllLessons, setShowAllLessons] = useState(false);

  const displayedCurriculum = showAllLessons ? curriculum : curriculum.slice(0, 10);

  return (
    <div className="min-h-screen font-sans selection:bg-sky-500/30 text-slate-900">
      {/* Header */}
      <header className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12 md:gap-20">
            {/* Institute Logo - Exactly as provided */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 md:w-32 md:h-32 bg-[#1ac1dd] rounded-2xl shadow-xl flex flex-col items-center justify-center p-3 text-center shrink-0"
            >
              <div className="font-black text-black text-[10px] md:text-xs tracking-tighter leading-none mb-0.5 uppercase">
                Tamil Editing
              </div>
              <div className="bg-black text-white font-black text-sm md:text-xl px-2 py-1 tracking-tighter leading-none uppercase">
                School
              </div>
            </motion.div>
            
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 uppercase leading-[0.9]">
              Tamil Editing <br />
              <span className="text-gradient">School</span>
            </h1>
          </div>

          {/* CapCut Logo - Suitable Position in Header */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden sm:flex items-center gap-4"
          >
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Mastering</div>
              <div className="text-sm font-black text-slate-900 uppercase tracking-tighter">CapCut</div>
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/CapCut_logo.svg/512px-CapCut_logo.svg.png" 
                alt="CapCut Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1ac1dd]/10 border border-[#1ac1dd]/20 text-[#1ac1dd] text-xs font-bold uppercase tracking-widest mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/CapCut_logo.svg/512px-CapCut_logo.svg.png" 
                  alt="CapCut" 
                  className="w-4 h-4 object-contain"
                  referrerPolicy="no-referrer"
                />
                CapCut Editing Masterclass
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
                MASTER THE ART <br />
                <span className="text-gradient">OF EDITING</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
                Master the art of professional video editing using CapCut. From foundational storytelling to advanced color grading and cinematic effects, this course transforms you into a pro editor.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button className="w-full sm:w-auto bg-[#1ac1dd] text-white px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 group shadow-xl shadow-[#1ac1dd]/20 hover:bg-[#1599af] transition-all">
                  Enroll Now
                  <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('curriculum');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white text-[#1ac1dd] border-2 border-[#1ac1dd] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#1ac1dd]/5 transition-all"
                >
                  View Curriculum
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 opacity-60 mb-20">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#1ac1dd]" />
                  <span className="text-sm font-medium">Mobile & PC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#1ac1dd]" />
                  <span className="text-sm font-medium">Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#1ac1dd]" />
                  <span className="text-sm font-medium">Community</span>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white"
            >
              <div className="aspect-video relative group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/editing/1280/720" 
                  alt="Course Preview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#1ac1dd] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="text-white w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Students", value: "5,000+" },
              { label: "Lessons", value: "30+" },
              { label: "Hours Content", value: "10h+" },
              { label: "Rating", value: "4.9/5" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-slate-900">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Course Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Why Choose This Course?</h2>
            <p className="text-slate-500">The most comprehensive video editing program in Tamil.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Learn in Tamil",
                description: "Complex editing concepts explained simply in your native language for better understanding.",
                icon: <MessageCircle className="w-6 h-6 text-sky-500" />
              },
              {
                title: "Practical Projects",
                description: "Don't just watch, do. Work on real-world projects to build your professional portfolio.",
                icon: <Video className="w-6 h-6 text-sky-500" />
              },
              {
                title: "Lifetime Access",
                description: "Enroll once and get lifetime access to all course materials and future updates.",
                icon: <Clock className="w-6 h-6 text-sky-500" />
              },
              {
                title: "Mobile & PC",
                description: "Master editing on both mobile (CapCut) and PC, giving you flexibility in your workflow.",
                icon: <Smartphone className="w-6 h-6 text-sky-500" />
              },
              {
                title: "Community Support",
                description: "Join an exclusive community of Tamil editors to share work and get feedback.",
                icon: <Users className="w-6 h-6 text-sky-500" />
              },
              {
                title: "Certification",
                description: "Get a recognized certificate upon completion to showcase your skills to clients.",
                icon: <Award className="w-6 h-6 text-sky-500" />
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl glass border-slate-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Course Curriculum</h2>
            <p className="text-slate-500">A step-by-step guide to becoming a professional editor.</p>
          </div>

          <div className="space-y-4">
            {displayedCurriculum.map((item) => (
              <motion.div 
                key={item.id}
                initial={false}
                className="glass rounded-2xl overflow-hidden border-slate-200"
              >
                <button 
                  onClick={() => setActiveChapter(activeChapter === item.id ? null : item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#1ac1dd]/10 flex items-center justify-center text-[#1ac1dd] font-bold text-sm">
                      {item.id}
                    </div>
                    <span className="font-medium text-slate-800">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-400 font-mono">{item.duration}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform ${activeChapter === item.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeChapter === item.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                        In this lesson, you will learn the core concepts of {item.title.split('-')[1].trim()}. 
                        We cover practical examples and real-world workflows to ensure you can apply these skills immediately.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {!showAllLessons && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAllLessons(true)}
                className="inline-flex items-center gap-2 text-[#1ac1dd] font-bold hover:text-[#1599af] transition-colors group"
              >
                View all lessons
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border-white">
                <img 
                  src="https://picsum.photos/seed/vaakesh/800/1000" 
                  alt="Mr. Vaakesh" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl hidden md:block border-white shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-slate-900">5,000+ Students</div>
                    <div className="text-slate-400">Joined the journey</div>
                  </div>
                </div>
                <div className="flex gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#1ac1dd] font-bold uppercase tracking-widest text-sm mb-4 block">Meet Your Instructor</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Mr. Vaakesh</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over 10 years of experience in the creative industry, Mr. Vaakesh has helped thousands of aspiring editors find their voice. 
                His teaching style focuses on practical, result-oriented techniques that you can use to build a career or grow your social media presence.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Expert in CapCut & Premiere Pro",
                  "Content Creator with 1M+ Reach",
                  "Mentor to 5,000+ Students",
                  "Award-winning Video Editor"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#1ac1dd] w-5 h-5" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full glass hover:bg-white transition-colors border-slate-200"><Instagram className="w-6 h-6 text-slate-600" /></a>
                <a href="#" className="p-3 rounded-full glass hover:bg-white transition-colors border-slate-200"><Youtube className="w-6 h-6 text-slate-600" /></a>
                <a href="#" className="p-3 rounded-full glass hover:bg-white transition-colors border-slate-200"><Twitter className="w-6 h-6 text-slate-600" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#1ac1dd]/5 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-16 rounded-[40px] border-[#1ac1dd]/20 relative bg-white/80 shadow-2xl">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1ac1dd] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
              Limited Time Offer
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Start Your Journey Today</h2>
              <p className="text-slate-500 text-lg">Get full lifetime access to the course and all future updates.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
              <div className="text-center md:text-left">
                <div className="text-slate-300 line-through text-xl mb-2">LKR 15,000</div>
                <div className="text-6xl font-bold text-slate-900">LKR 10,850</div>
                <div className="text-[#1ac1dd] text-sm font-bold mt-2">Save 30% Today</div>
              </div>
              
              <div className="space-y-4 w-full md:w-auto">
                <button className="w-full bg-[#1ac1dd] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#1599af] transition-all shadow-xl shadow-[#1ac1dd]/20">
                  Enroll Now
                </button>
                <button className="w-full bg-white text-[#1ac1dd] border-2 border-[#1ac1dd] px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#1ac1dd]/5 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </button>
              </div>
            </div>

            <div className="pt-12 border-t border-slate-100">
              <div className="max-w-md mx-auto md:mx-0">
                <h4 className="font-bold flex items-center gap-2 mb-4 text-slate-900">
                  <CreditCard className="w-5 h-5 text-[#1ac1dd]" />
                  Bank Transfer Details
                </h4>
                <div className="text-sm text-slate-500 space-y-1 font-mono">
                  <p>Bank: Seylan Bank</p>
                  <p>Account: 0080 13487898 001</p>
                  <p>Name: Tamil Editing School (Pvt) Ltd</p>
                  <p>Branch: Kollupitiya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1ac1dd] rounded-xl flex flex-col items-center justify-center p-2 text-[8px] leading-none font-black shrink-0">
                  <div className="text-black uppercase mb-0.5">Tamil Editing</div>
                  <div className="bg-black text-white px-1 uppercase">School</div>
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">Tamil Editing <span className="text-[#1ac1dd]">School</span></span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Empowering the next generation of content creators through high-quality education and community support.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-[#1ac1dd]">Home</a></li>
                <li><a href="#curriculum" className="hover:text-[#1ac1dd]">Curriculum</a></li>
                <li><a href="#instructor" className="hover:text-[#1ac1dd]">Instructor</a></li>
                <li><a href="#" className="hover:text-[#1ac1dd]">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>Email: hello@tes-tamil.edu</li>
                <li>Phone: +94 75 403 0515</li>
                <li>Location: Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest font-bold">
            <div>© 2024 Tamil Editing School. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#1ac1dd] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#1ac1dd] transition-colors">Youtube</a>
              <a href="#" className="hover:text-[#1ac1dd] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
