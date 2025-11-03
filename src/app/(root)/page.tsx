import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <header className="relative bg-white">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg"
            alt="Modern library and study space"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Aptiverse
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
              Intelligent Educational Platform for South African Scholars
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              AI-powered academic support system designed specifically for Grade 11 and 12 students, 
              delivering personalized learning experiences and comprehensive performance analytics.
            </p>
            <Link 
              href="/login" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Access Platform
            </Link>
          </div>
        </div>
      </header>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Addressing Educational Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern education requires modern solutions tailored to South Africa's unique landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Learning Gap</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional classrooms struggle to adapt to individual learning paces and styles, 
                leaving many students behind in critical matriculation years.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resource Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality educational tools remain inaccessible to many students due to institutional 
                barriers and subscription limitations.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Wellbeing</h3>
              <p className="text-gray-600 leading-relaxed">
                Academic pressure and emotional challenges often go unaddressed, impacting both 
                performance and long-term educational outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg"
                alt="Student using digital learning platform"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Intelligent Learning Adaptation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our AI-driven platform continuously analyzes student performance, adapting content 
                and teaching methods to individual learning patterns and pace.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personalized learning paths based on performance analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time progress tracking and adjustment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Subject-specific AI tutoring and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Comprehensive Educational Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting every aspect of the student learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed performance metrics and learning analytics to identify strengths and areas for improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emotional Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered sentiment analysis and wellness support to maintain student motivation and mental health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Shared analytics for teachers and parents to support student development through coordinated efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Equal Access to Quality Education
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            We believe that every South African student deserves access to premium educational resources, 
            regardless of their school's subscription status or geographic location. Our merit-based 
            access system ensures that dedication and achievement are the only requirements for success.
          </p>
          <div className="bg-white bg-opacity-10 rounded-lg p-6 inline-block">
            <p className="text-lg font-medium">
              "Democratizing advanced educational tools through technology and innovation"
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
            Begin Your Educational Transformation
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join educators and students across South Africa who are achieving exceptional results with our intelligent learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login" 
              className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Access Your Account
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-medium text-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Schedule Demonstration
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Aptiverse</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Advanced educational intelligence for South Africa's future leaders
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Aptiverse. Transforming education through technology and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}