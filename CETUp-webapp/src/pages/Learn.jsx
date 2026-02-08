import { useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'

// Mock data for subjects
const subjects = [
  {
    id: 1,
    name: 'Physics',
    icon: '⚡',
    color: 'bg-primary-blue',
    hoverColor: 'hover:bg-blue-700',
    borderColor: 'border-primary-blue',
  },
  {
    id: 2,
    name: 'Chemistry',
    icon: '🧪',
    color: 'bg-secondary-blue',
    hoverColor: 'hover:bg-blue-500',
    borderColor: 'border-secondary-blue',
  },
  {
    id: 3,
    name: 'Mathematics',
    icon: '📐',
    color: 'bg-primary-blue',
    hoverColor: 'hover:bg-blue-700',
    borderColor: 'border-primary-blue',
  },
  {
    id: 4,
    name: 'Biology',
    icon: '🧬',
    color: 'bg-secondary-blue',
    hoverColor: 'hover:bg-blue-500',
    borderColor: 'border-secondary-blue',
  },
]

// Generate 25 chapters for each subject
const generateChapters = (subjectName) => {
  const chapterTopics = {
    Physics: [
      'Units and Measurements',
      'Motion in a Straight Line',
      'Motion in a Plane',
      'Laws of Motion',
      'Work, Energy and Power',
      'System of Particles and Rotational Motion',
      'Gravitation',
      'Mechanical Properties of Solids',
      'Mechanical Properties of Fluids',
      'Thermal Properties of Matter',
      'Thermodynamics',
      'Kinetic Theory',
      'Oscillations',
      'Waves',
      'Electric Charges and Fields',
      'Electrostatic Potential and Capacitance',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Electromagnetic Induction',
      'Alternating Current',
      'Electromagnetic Waves',
      'Ray Optics and Optical Instruments',
      'Wave Optics',
      'Dual Nature of Radiation and Matter',
    ],
    Chemistry: [
      'Some Basic Concepts of Chemistry',
      'Structure of Atom',
      'Classification of Elements',
      'Chemical Bonding',
      'States of Matter',
      'Thermodynamics',
      'Equilibrium',
      'Redox Reactions',
      'Hydrogen',
      'The s-Block Elements',
      'The p-Block Elements',
      'Organic Chemistry - Basic Principles',
      'Hydrocarbons',
      'Environmental Chemistry',
      'Solid State',
      'Solutions',
      'Electrochemistry',
      'Chemical Kinetics',
      'Surface Chemistry',
      'General Principles of Metallurgy',
      'The d and f Block Elements',
      'Coordination Compounds',
      'Haloalkanes and Haloarenes',
      'Alcohols, Phenols and Ethers',
      'Aldehydes, Ketones and Carboxylic Acids',
    ],
    Mathematics: [
      'Sets, Relations and Functions',
      'Complex Numbers',
      'Quadratic Equations',
      'Sequences and Series',
      'Permutations and Combinations',
      'Binomial Theorem',
      'Matrices',
      'Determinants',
      'Straight Lines',
      'Conic Sections',
      'Introduction to 3D Geometry',
      'Limits and Derivatives',
      'Mathematical Reasoning',
      'Statistics',
      'Probability',
      'Continuity and Differentiability',
      'Applications of Derivatives',
      'Integrals',
      'Applications of Integrals',
      'Differential Equations',
      'Vector Algebra',
      'Three Dimensional Geometry',
      'Linear Programming',
      'Relations and Functions Advanced',
      'Inverse Trigonometric Functions',
    ],
    Biology: [
      'The Living World',
      'Biological Classification',
      'Plant Kingdom',
      'Animal Kingdom',
      'Morphology of Flowering Plants',
      'Anatomy of Flowering Plants',
      'Structural Organisation in Animals',
      'Cell: The Unit of Life',
      'Biomolecules',
      'Cell Cycle and Cell Division',
      'Transport in Plants',
      'Mineral Nutrition',
      'Photosynthesis',
      'Respiration in Plants',
      'Plant Growth and Development',
      'Digestion and Absorption',
      'Breathing and Exchange of Gases',
      'Body Fluids and Circulation',
      'Excretory Products and Elimination',
      'Locomotion and Movement',
      'Neural Control and Coordination',
      'Chemical Coordination',
      'Reproduction in Organisms',
      'Sexual Reproduction in Flowering Plants',
      'Human Reproduction',
    ],
  }

  return chapterTopics[subjectName].map((topic, index) => ({
    id: index + 1,
    title: `Chapter ${index + 1}: ${topic}`,
    topic: topic,
  }))
}

function Learn() {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject)
    setSelectedChapter(null)
  }

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter)
  }

  const handleBackToSubjects = () => {
    setSelectedSubject(null)
    setSelectedChapter(null)
  }

  const handleBackToChapters = () => {
    setSelectedChapter(null)
  }

  // View 1: Subject Selection
  if (!selectedSubject) {
    return (
      <PageContainer>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-2">Choose a Subject</h3>
          <p className="text-text-muted">Select a subject to view chapter-wise synopsis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={() => handleSubjectClick(subject)}
            />
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-12 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-center space-x-4">
            <div className="text-5xl">📚</div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Chapter-wise Synopsis PDFs</h4>
              <p className="text-lg opacity-90">
                Comprehensive study materials available for all 25 chapters in each subject
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    )
  }

  // View 2: Chapter List
  if (selectedSubject && !selectedChapter) {
    const chapters = generateChapters(selectedSubject.name)

    return (
      <PageContainer>
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={handleBackToSubjects}
            className="flex items-center text-primary-blue hover:text-blue-700 font-medium mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Subjects
          </button>
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{selectedSubject.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-primary-blue">{selectedSubject.name}</h3>
              <p className="text-text-muted">Select a chapter to view synopsis</p>
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="bg-white rounded-xl shadow-md border border-border p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-lg font-semibold text-text-primary">All Chapters ({chapters.length})</h4>
            <span className="text-sm text-text-muted">Click to view synopsis PDF</span>
          </div>
          <div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto pr-2">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                onClick={() => handleChapterClick(chapter)}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    )
  }

  // View 3: PDF Viewer
  if (selectedSubject && selectedChapter) {
    return (
      <PageContainer>
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-text-muted mb-4">
            <button
              onClick={handleBackToSubjects}
              className="hover:text-primary-blue transition-colors"
            >
              Subjects
            </button>
            <span>/</span>
            <button
              onClick={handleBackToChapters}
              className="hover:text-primary-blue transition-colors"
            >
              {selectedSubject.name}
            </button>
            <span>/</span>
            <span className="text-text-primary font-medium">{selectedChapter.topic}</span>
          </div>
          <button
            onClick={handleBackToChapters}
            className="flex items-center text-primary-blue hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Chapters
          </button>
        </div>

        {/* PDF Viewer */}
        <PDFViewer chapter={selectedChapter} subject={selectedSubject} />
      </PageContainer>
    )
  }
}

function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${subject.color} ${subject.hoverColor} rounded-2xl shadow-lg p-8 text-white cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
    >
      <div className="text-6xl mb-4">{subject.icon}</div>
      <h4 className="text-2xl font-bold mb-2">{subject.name}</h4>
      <p className="text-sm opacity-90">25 Chapters Available</p>
      <div className="mt-4 flex items-center text-sm font-medium">
        <span>View Chapters</span>
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

function ChapterCard({ chapter, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-4 border-2 border-border rounded-lg hover:border-primary-blue hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
    >
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-primary-blue text-white rounded-lg flex items-center justify-center font-bold group-hover:bg-blue-700 transition-colors">
          {chapter.id}
        </div>
        <div>
          <h5 className="font-semibold text-text-primary group-hover:text-primary-blue transition-colors">
            {chapter.topic}
          </h5>
          <p className="text-sm text-text-muted">Click to view synopsis PDF</p>
        </div>
      </div>
      <svg className="w-5 h-5 text-text-muted group-hover:text-primary-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )
}

function PDFViewer({ chapter, subject }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-border p-6">
      <div className="mb-6 pb-4 border-b border-border">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">{subject.icon}</span>
              <h3 className="text-2xl font-bold text-primary-blue">{subject.name}</h3>
            </div>
            <h4 className="text-xl font-semibold text-text-primary">{chapter.title}</h4>
          </div>
          <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* PDF Placeholder */}
      <div className="bg-app-bg rounded-lg p-8 min-h-[700px] flex flex-col items-center justify-center border-2 border-dashed border-border">
        <div className="text-center">
          <div className="text-8xl mb-6">📄</div>
          <h4 className="text-2xl font-bold text-text-primary mb-3">Synopsis PDF Viewer</h4>
          <p className="text-text-muted mb-6 max-w-md">
            This is a placeholder for the PDF viewer. In production, the synopsis PDF for{' '}
            <span className="font-semibold text-primary-blue">{chapter.topic}</span> would be displayed here.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-lg border border-border">
              <p className="text-sm text-text-muted">Subject: <span className="font-semibold text-text-primary">{subject.name}</span></p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-border">
              <p className="text-sm text-text-muted">Chapter: <span className="font-semibold text-text-primary">{chapter.id}</span></p>
            </div>
          </div>
          
          {/* Mock PDF Preview */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 max-w-2xl">
            <div className="space-y-4 text-left">
              <div className="border-b pb-3">
                <h5 className="font-bold text-lg text-primary-blue mb-2">{chapter.topic}</h5>
                <p className="text-sm text-text-muted">Synopsis Preview</p>
              </div>
              <div className="space-y-2 text-text-primary">
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris.
                </p>
                <div className="bg-app-bg p-3 rounded">
                  <p className="text-xs font-mono text-text-muted">
                    📌 Key Concepts • Important Formulas • Solved Examples
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
