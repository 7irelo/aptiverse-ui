import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-frygia">
              Aptiverse
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Smart Learning Interface for South African Learners
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
              AI-powered educational platform supporting Grade 11 and 12 students through personalized learning, emotional intelligence insights, and performance-driven rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Enter Platform
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-frygia">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students, teachers, and parents with intelligent tools for educational success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Student Portal */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                👩‍🎓
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Portal</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Personalized dashboard & progress tracking</li>
                <li>• AI-guided note-taking & learning</li>
                <li>• Emotional journaling with sentiment analysis</li>
                <li>• Smart study companion</li>
              </ul>
            </div>

            {/* Teacher Dashboard */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🧑‍🏫
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Teacher Dashboard</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time class performance analytics</li>
                <li>• Individual student progress monitoring</li>
                <li>• Emotional wellness flagging system</li>
                <li>• Task assignment & tracking</li>
              </ul>
            </div>

            {/* Parent View */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                👨‍👩‍👧
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Parent View</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Student performance summaries</li>
                <li>• Configurable privacy settings</li>
                <li>• Progress monitoring</li>
                <li>• Student-controlled access</li>
              </ul>
            </div>

            {/* Reward System */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🎮
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reward System</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Goal-setting & achievement tracking</li>
                <li>• Performance-based progression</li>
                <li>• Unlock advanced tools</li>
                <li>• Gamified learning experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-frygia">
              Built With Modern Technology
            </h2>
            <p className="text-xl text-gray-600">
              Leveraging cutting-edge tools for optimal performance and user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend Framework</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js 14</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">State & Data</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Zustand</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">React Query</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">React Hook Form</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS Cognito</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Vercel</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-frygia">
            Mission-Driven Design
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Aptiverse is built for <strong>equity and excellence</strong>—empowering students across South Africa with access to intelligent tools, emotional wellness features, and school-agnostic support.
          </p>
          <p className="text-lg text-blue-100">
            Even if your school isn't subscribed, you can still use Aptiverse as an individual and grow your own way.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-frygia">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the Aptiverse community and experience the future of education today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-frygia">Aptiverse</h3>
            <p className="text-gray-400 mb-6">
              A Platform Where Every Student Can Rise
            </p>
            <p className="text-gray-500 text-sm">
              Built with care, intelligence, and resilience—by students, for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}