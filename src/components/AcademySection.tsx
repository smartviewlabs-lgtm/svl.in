import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Clock, 
  Award, 
  Star, 
  CheckCircle, 
  BookOpen, 
  ArrowRight,
  MessageSquare,
  Users
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/contentData';

export const AcademySection: React.FC = () => {
  return (
    <section id="academy" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
            <GraduationCap className="w-4 h-4 text-sky-600" />
            <span>Smart View Labs Academy</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Learn 360° VR Photography &{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Agency Mastery
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Gain certified hands-on skills from Google Trusted Photographers. Master high-end panoramic workflows, nodal calibration, Matterport LiDAR scanning, and client acquisition.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ACADEMY_COURSES.map((course) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Course Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-100 text-sky-800 border border-sky-200 uppercase tracking-wide">
                    {course.level}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {course.title}
                </h3>

                {/* Duration & Mode Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-2.5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{course.duration}</span>
                  </div>
                  <span>•</span>
                  <span>{course.mode}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Highlights List */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Curriculum Highlights:
                  </span>
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Bottom Action */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-500 block">Course Fee</span>
                  <span className="text-base font-extrabold font-heading text-slate-900">
                    {course.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/917508094760?text=${encodeURIComponent(`Hello Smart View Labs Academy! I would like to enroll in the "${course.title}" program. Please share the syllabus and upcoming batch details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-sm transition hover:scale-105"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Enroll on WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Academy Trust Guarantee */}
        <div className="mt-12 p-6 rounded-3xl glass-panel-glow flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-heading">
                Accreditation & Client Acquisition Network
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Top graduates receive official SVL Creator Accreditation and real client project referrals.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs%20Academy!%20I%20want%20to%20speak%20with%20an%20admissions%20counselor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-bold text-xs border border-sky-200 shadow-sm hover:bg-sky-50 transition shrink-0"
          >
            <span>Talk to Course Mentor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
