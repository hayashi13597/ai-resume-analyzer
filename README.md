# Resumind - AI Resume Analyzer

**Smart feedback for your dream job!**

An intelligent resume analysis tool that provides comprehensive feedback on your resume using AI, helping you optimize it for specific job applications and improve your chances of getting hired.

## Features

- 🤖 **AI-Powered Analysis** - Advanced AI feedback on resume content, structure, and ATS compatibility
- 📊 **Comprehensive Scoring** - Detailed scoring across multiple categories (ATS, tone & style, content, structure, skills)
- 🎯 **Job-Specific Feedback** - Tailored analysis based on specific job titles and descriptions
- 📄 **PDF Support** - Upload and analyze PDF resumes with automatic image conversion
- 📈 **Visual Analytics** - Interactive score gauges and detailed feedback displays
- 💾 **Resume Tracking** - Save and track multiple resume analyses for different job applications
- 🔒 **Secure Authentication** - User authentication with Puter cloud services
- 🎨 **Modern UI** - Clean, responsive interface built with TailwindCSS
- 🚀 **Server-side rendering** - Built with React Router for optimal performance

## How It Works

1. **Authentication** - Sign in securely through Puter authentication
2. **Upload Resume** - Upload your PDF resume along with job details (company name, job title, job description)
3. **AI Analysis** - The system analyzes your resume using advanced AI models
4. **Get Feedback** - Receive detailed scores and actionable tips across five key areas:
   - **ATS Compatibility** - How well your resume works with Applicant Tracking Systems
   - **Tone & Style** - Professional language and presentation assessment
   - **Content Quality** - Relevance and impact of your experience and achievements
   - **Structure** - Organization and formatting evaluation
   - **Skills Alignment** - How well your skills match the job requirements
5. **Track Progress** - View and compare multiple resume analyses for different applications

## Technology Stack

- **Frontend**: React 19 with React Router 7
- **Styling**: TailwindCSS with custom animations
- **PDF Processing**: PDF.js for document handling and image conversion
- **State Management**: Zustand for client-side state
- **Cloud Services**: Puter.com for authentication, file storage, AI processing, and key-value storage
- **Build Tool**: Vite for fast development and optimization
- **Type Safety**: TypeScript throughout the application

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hayashi13597/ai-resume-analyzer.git
cd ai-resume-analyzer
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Other Commands

- **Type checking**: `npm run typecheck`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`

## Building for Production

Create a production build:

```bash
npm run build
```

This will generate optimized files in the `build/` directory:
- `build/client/` - Static assets for the frontend
- `build/server/` - Server-side code

## Deployment

### Docker Deployment

The project includes a Dockerfile for containerized deployment:

```bash
# Build the Docker image
docker build -t resumind .

# Run the container
docker run -p 3000:3000 resumind
```

The containerized application can be deployed to any platform supporting Docker:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Manual Deployment

For manual deployment, ensure you have the following files:
```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static frontend assets
│   └── server/    # Server-side application
```

Run the production server with:
```bash
npm start
```

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── ATS.tsx         # ATS score display
│   ├── Details.tsx     # Detailed feedback view
│   ├── FileUploader.tsx # PDF upload component
│   ├── Navbar.tsx      # Navigation component
│   ├── Summary.tsx     # Score summary view
│   └── ...
├── lib/                # Utility libraries
│   ├── pdf2img.ts      # PDF to image conversion
│   ├── puter.ts        # Puter cloud service integration
│   └── utils.ts        # General utilities
├── routes/             # Application routes
│   ├── auth.tsx        # Authentication page
│   ├── home.tsx        # Dashboard/home page
│   ├── resume.tsx      # Resume analysis view
│   ├── upload.tsx      # Resume upload page
│   └── wipe.tsx        # Data management
├── types/              # TypeScript type definitions
└── ...
constants/              # Application constants and AI prompts
public/                 # Static assets
```

## Key Components

- **File Upload**: Drag-and-drop PDF upload with validation
- **AI Analysis**: Integration with Puter AI services for intelligent resume evaluation
- **Score Visualization**: Interactive gauges and badges showing performance metrics
- **Feedback Display**: Structured presentation of improvement suggestions
- **Authentication**: Secure user management through Puter auth services

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is private and proprietary.

---

Built with ❤️ using React Router and powered by Puter AI services.