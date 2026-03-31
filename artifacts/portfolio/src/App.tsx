import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Folder, 
  Search, 
  GitBranch, 
  Settings, 
  ChevronRight, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Globe,
  Youtube,
  Instagram,
  FileCode,
  Layout,
  Cpu,
  Database,
  Briefcase,
  Cloud,
  Shield
} from 'lucide-react';

const FILES = [
  { id: 'home.tsx', name: 'home.tsx', icon: <Cpu className="w-4 h-4 text-blue-400" />, type: 'tsx' },
  { id: 'about.html', name: 'about.html', icon: <Layout className="w-4 h-4 text-orange-500" />, type: 'html' },
  { id: 'projects.js', name: 'projects.js', icon: <FileCode className="w-4 h-4 text-yellow-400" />, type: 'js' },
  { id: 'skills.json', name: 'skills.json', icon: <Database className="w-4 h-4 text-yellow-600" />, type: 'json' },
  { id: 'experience.ts', name: 'experience.ts', icon: <Briefcase className="w-4 h-4 text-blue-500" />, type: 'ts' },
  { id: 'contact.css', name: 'contact.css', icon: <FileText className="w-4 h-4 text-blue-300" />, type: 'css' },
  { id: 'README.md', name: 'README.md', icon: <FileText className="w-4 h-4 text-blue-400" />, type: 'md' },
];

const SKILLS_DATA = [
  { category: 'CLOUD INFRASTRUCTURE', items: [
    { name: 'AWS IAM', level: 88, color: '#f59e0b' },
    { name: 'AWS S3', level: 85, color: '#f59e0b' },
    { name: 'AWS EC2', level: 82, color: '#f59e0b' },
    { name: 'AWS VPC', level: 80, color: '#f59e0b' },
    { name: 'Cloud Security', level: 84, color: '#ef4444' },
  ]},
  { category: 'REMOTE SUPPORT TOOLS', items: [
    { name: 'VPN', level: 90, color: '#3b82f6' },
    { name: 'RDP / VDI', level: 88, color: '#6366f1' },
    { name: 'RMM Tools', level: 82, color: '#10b981' },
    { name: 'Zoom / Slack', level: 95, color: '#a855f7' },
  ]},
  { category: 'ITSM & INCIDENT MANAGEMENT', items: [
    { name: 'ITIL 4', level: 90, color: '#10b981' },
    { name: 'Incident Management', level: 88, color: '#3b82f6' },
    { name: 'Ticket Lifecycles', level: 85, color: '#6366f1' },
    { name: 'SLA Management', level: 80, color: '#f59e0b' },
  ]},
  { category: 'OPERATING SYSTEMS', items: [
    { name: 'Windows 10/11', level: 92, color: '#3b82f6' },
    { name: 'macOS', level: 85, color: '#a855f7' },
    { name: 'Linux', level: 80, color: '#f59e0b' },
    { name: 'ChromeOS', level: 75, color: '#10b981' },
  ]},
  { category: 'IDENTITY MANAGEMENT', items: [
    { name: 'Active Directory', level: 85, color: '#3b82f6' },
    { name: 'MFA', level: 88, color: '#ef4444' },
    { name: 'IAM Policy Design', level: 84, color: '#f59e0b' },
  ]},
  { category: 'DEVELOPMENT & VERSION CONTROL', items: [
    { name: 'Angular', level: 72, color: '#ef4444' },
    { name: 'Git / GitLab', level: 80, color: '#f59e0b' },
    { name: 'API Integration', level: 75, color: '#10b981' },
  ]},
  { category: 'VIRTUALIZATION', items: [
    { name: 'VirtualBox', level: 85, color: '#3b82f6' },
    { name: 'VM Configuration', level: 82, color: '#6366f1' },
    { name: 'Cross-platform Testing', level: 80, color: '#10b981' },
  ]},
  { category: 'SOFT SKILLS', items: [
    { name: 'Technical Documentation', level: 90, color: '#ec4899' },
    { name: 'Remote Communication', level: 95, color: '#a855f7' },
    { name: 'Customer Service', level: 92, color: '#10b981' },
  ]},
];

const PROJECTS = [
  { 
    id: 1, 
    title: 'AWS Cloud Infrastructure Lab', 
    tags: ['CLOUD', 'AWS', 'SECURITY'], 
    color: '#f59e0b', 
    description: 'Designed and deployed a secure, scalable cloud environment using AWS. Configured S3 buckets, launched EC2 instances, and managed user permissions through IAM policies.',
    icon: '☁️',
    stack: ['AWS S3', 'AWS EC2', 'IAM', 'VPC']
  },
  { 
    id: 2, 
    title: 'Remote Support & Virtualization Lab', 
    tags: ['VIRTUALIZATION', 'REMOTE SUPPORT', 'ITSM'], 
    color: '#3b82f6', 
    description: 'Simulated a remote help desk environment to troubleshoot multi-platform issues. Set up VMs using VirtualBox across Windows, Linux, and macOS; documented and resolved simulated user tickets.',
    icon: '🖥️',
    stack: ['VirtualBox', 'Slack', 'Zoom', 'Windows/Linux/macOS']
  },
  { 
    id: 3, 
    title: 'Interactive Web Application (Full-Stack)', 
    tags: ['FULL STACK', 'ANGULAR', 'API'], 
    color: '#ec4899', 
    description: 'Developed a functional web application to streamline data retrieval. Built a front-end interface using Angular integrated with external APIs, with version control managed via GitLab.',
    icon: '🌐',
    stack: ['Angular', 'REST APIs', 'GitLab', 'HTML/CSS']
  }
];

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] flex items-center justify-center"
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)', transition: 'none' }}
    >
      <div className={`w-4 h-4 border flex items-center justify-center ${isHovering ? 'border-[#61dafb]' : 'border-white'}`}>
        <div className={`w-1 h-1 ${isHovering ? 'bg-[#61dafb]' : 'bg-white'}`}></div>
      </div>
    </div>
  );
};

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Designing secure AWS cloud environments ☁️",
    "Troubleshooting multi-platform systems 🖥️",
    "Delivering remote IT support & guidance ⚙️"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="text-gray-400 font-mono text-sm h-6">
      <span className="text-white">{text}</span>
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </div>
  );
};

export default function App() {
  const [openFiles, setOpenFiles] = useState(['home.tsx']);
  const [activeFile, setActiveFile] = useState('home.tsx');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  
  useEffect(() => {
    if (activeFile === 'skills.json') {
      setSkillsVisible(false);
      setTimeout(() => setSkillsVisible(true), 50);
    }
  }, [activeFile]);

  const handleOpenFile = (fileId: string) => {
    if (!openFiles.includes(fileId)) {
      setOpenFiles([...openFiles, fileId]);
    }
    setActiveFile(fileId);
    setIsPaletteOpen(false);
    setActiveMenu(null);
  };

  const handleCloseFile = (e: React.MouseEvent, fileId: string) => {
    e.stopPropagation();
    const newFiles = openFiles.filter(f => f !== fileId);
    setOpenFiles(newFiles);
    if (activeFile === fileId && newFiles.length > 0) {
      setActiveFile(newFiles[newFiles.length - 1]);
    } else if (newFiles.length === 0) {
      setActiveFile('');
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Amal_Osman_Resume.pdf';
    link.download = 'Amal_Osman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setActiveMenu(null);
  };

  const renderContent = () => {
    switch (activeFile) {
      case 'home.tsx':
        return (
          <div className="p-12 font-mono text-white">
            <div className="text-emerald-400 mb-8">// hello world !! Welcome to my portfolio</div>
            <h1 className="text-8xl font-black mb-2 tracking-tighter">Amal</h1>
            <h1 className="text-8xl font-black text-pink-500 mb-8 tracking-tighter">Osman</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1 rounded-full text-xs border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Remote IT Specialist
              </span>
              <span className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1 rounded-full text-xs border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span> Cloud & AWS
              </span>
              <span className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1 rounded-full text-xs border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> ITIL 4 Certified
              </span>
              <span className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1 rounded-full text-xs border border-zinc-700 text-pink-300">
                <span className="w-2 h-2 rounded-full bg-pink-400"></span> @ WGU
              </span>
            </div>

            <TypingEffect />

            <p className="mt-8 text-lg max-w-2xl leading-relaxed text-zinc-400">
              I specialize in <span className="text-blue-400">cloud infrastructure</span>, <span className="text-blue-400">virtualization</span>, and <span className="text-blue-400">multi-platform troubleshooting</span>. I build and maintain systems that are genuinely <span className="text-blue-400 italic">secure and reliable</span>.
            </p>

            <div className="flex gap-4 mt-12">
              <button onClick={() => handleOpenFile('projects.js')} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 flex items-center gap-2 text-sm font-bold transition-all transform hover:-translate-y-0.5">
                <Folder className="w-4 h-4" /> Projects
              </button>
              <button onClick={() => handleOpenFile('about.html')} className="border border-zinc-700 bg-zinc-800/30 hover:bg-zinc-800 px-6 py-2 flex items-center gap-2 text-sm transition-all transform hover:-translate-y-0.5">
                <Settings className="w-4 h-4" /> About Me
              </button>
              <button onClick={() => handleOpenFile('contact.css')} className="border border-zinc-700 bg-zinc-800/30 hover:bg-zinc-800 px-6 py-2 flex items-center gap-2 text-sm transition-all transform hover:-translate-y-0.5">
                <Mail className="w-4 h-4" /> Contact
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-24 border-t border-zinc-800 pt-12 text-center">
              <div>
                <div className="text-4xl font-bold">2+</div>
                <div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Years</div>
              </div>
              <div>
                <div className="text-4xl font-bold">2</div>
                <div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold">3</div>
                <div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold">↑</div>
                <div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Always Learning</div>
              </div>
            </div>

            <div className="mt-20 flex flex-wrap gap-4 items-center justify-center opacity-60">
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs"><Linkedin size={14} className="text-blue-500"/> LinkedIn</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs"><Mail size={14} className="text-emerald-400"/> Email</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs"><Cloud size={14} className="text-yellow-400"/> AWS Certified</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs"><Shield size={14} className="text-purple-400"/> ITIL 4</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs"><Globe size={14} className="text-blue-400"/> WGU</div>
            </div>
          </div>
        );

      case 'about.html':
        return (
          <div className="p-12 text-zinc-300">
            <div className="text-zinc-600 mb-2 font-mono text-sm">&lt;!-- about.html - Amal Osman --&gt;</div>
            <h1 className="text-5xl font-black text-white mb-2 font-mono">About Me</h1>
            <div className="text-emerald-400 font-mono mb-12">// who I am - what I do - where I build</div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded mb-8 max-w-4xl">
              <p className="leading-relaxed">
                Hi! I'm <span className="text-blue-400 font-bold">Amal Osman</span>, a dedicated <span className="text-blue-400 underline decoration-zinc-600">Remote IT Specialist</span> with a strong foundation in <span className="text-blue-400 underline decoration-zinc-600">cloud infrastructure</span>, <span className="text-blue-400 underline decoration-zinc-600">virtualization</span>, and multi-platform troubleshooting. I have a proven ability to design secure AWS environments and resolve complex technical issues through hands-on labs and ad-hoc consultancy. I'm committed to delivering exceptional customer service and technical guidance in distributed, remote-first settings — backed by <span className="text-blue-400 italic font-bold">AWS Cloud Practitioner</span> and <span className="text-blue-400 italic font-bold">ITIL 4</span> certifications.
              </p>
            </div>

            <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4">Current Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl">
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded text-sm">
                ☁️ Building and securing AWS cloud environments (IAM, S3, EC2, VPC)
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded text-sm">
                🖥️ Remote troubleshooting across Windows, macOS, Linux & ChromeOS
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded text-sm">
                📋 Applying ITIL 4 frameworks to incident management and service desk ops
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded text-sm">
                🎓 Completing B.S. in Software Engineering at WGU (Expected 2026)
              </div>
            </div>

            <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4">Education</h2>
            <div className="space-y-4 max-w-4xl">
              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">🎓 Western Governors University (WGU)</h3>
                  <span className="text-zinc-500 font-mono text-xs">2023 - Present</span>
                </div>
                <div className="text-blue-400 text-sm mb-2">Bachelor of Science in Software Engineering</div>
                <div className="text-zinc-500 text-xs italic">Expected Graduation: 2026</div>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">🏫 Great River Connections Academy</h3>
                  <span className="text-zinc-500 font-mono text-xs">2019 - 2023</span>
                </div>
                <div className="text-zinc-400 text-sm mb-2">High School Diploma</div>
              </div>
            </div>

            <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4 mt-12">Volunteer & Academic Experience</h2>
            <div className="space-y-4 max-w-4xl">
              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">IT Case Studies & Simulations</h3>
                  <span className="text-zinc-500 font-mono text-xs">2023 – Present</span>
                </div>
                <div className="text-blue-400 text-sm mb-3">@ WGU</div>
                <p className="text-zinc-400 text-sm leading-relaxed">Applied ITIL 4 frameworks to resolve mock service desk incidents. Completed coursework in Network Administration and Operating Systems with a focus on remote troubleshooting and security.</p>
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Technical Support Volunteer</h3>
                  <span className="text-zinc-500 font-mono text-xs">2024 – Present</span>
                </div>
                <div className="text-blue-400 text-sm mb-3">@ Independent Consultant</div>
                <p className="text-zinc-400 text-sm leading-relaxed">Provided ad-hoc hardware and software troubleshooting for peers and local community members, including macOS data recovery and network setup. Translated complex technical concepts into easy-to-understand instructions for non-technical users.</p>
              </div>
            </div>
          </div>
        );

      case 'projects.js':
        return (
          <div className="p-12">
            <div className="text-zinc-600 mb-2 font-mono text-sm">// projects.js - things I've built & shipped</div>
            <h1 className="text-5xl font-black text-white mb-12 font-mono">Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map(p => (
                <div key={p.id} className="group relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-sm transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 z-0" style={{ backgroundColor: p.color }}></div>
                  
                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-2xl">{p.icon}</span>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {p.tags.map(t => (
                          <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-zinc-700 bg-zinc-800/50" style={{ color: p.color }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-100 transition-colors">{p.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">{p.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map(s => (
                        <span key={s} className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills.json':
        return (
          <div className="p-12">
            <div className="text-zinc-600 mb-2 font-mono text-sm">// skills.json - tech stack & tools I actually use</div>
            <h1 className="text-5xl font-black text-white mb-4 font-mono">Skills</h1>
            <div className="text-zinc-500 font-mono text-sm mb-12">{`{ "status": "always_learning", "passion": "immeasurable" }`}</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl">
              {SKILLS_DATA.map(cat => (
                <div key={cat.category}>
                  <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-6">{cat.category}</h3>
                  <div className="space-y-4">
                    {cat.items.map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-[11px] mb-1.5 font-mono">
                          <span className="text-zinc-300">{skill.name}</span>
                          <span className="text-zinc-500">{skill.level}%</span>
                        </div>
                        <div className="h-[3px] w-full bg-zinc-800/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: skillsVisible ? `${skill.level}%` : '0%',
                              backgroundColor: skill.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">ALSO FAMILIAR WITH:</h3>
              <div className="flex flex-wrap gap-3">
                {['PowerShell', 'Bash', 'Network Troubleshooting', 'TCP/IP', 'DNS', 'DHCP', 'Remote Desktop', 'ServiceNow', 'Jira', 'Microsoft 365', 'Google Workspace', 'VoIP'].map(item => (
                  <div key={item} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-blue-400 hover:border-blue-500 transition-colors cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'experience.ts':
        return (
          <div className="p-12">
            <div className="text-emerald-400 mb-2 font-mono text-sm">// experience.ts - certifications & credentials</div>
            <h1 className="text-6xl font-black text-white mb-2 font-mono">Certifications</h1>
            <div className="text-zinc-500 font-mono text-sm mb-12">interface Credentials extends Professional {'{}'}</div>

            <div className="relative pl-8 border-l border-zinc-800 space-y-16">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-yellow-500"></div>
                <div className="text-zinc-500 font-mono text-xs mb-2">Active · 2024</div>
                <h3 className="text-2xl font-bold text-white mb-1">AWS Certified Cloud Practitioner</h3>
                <div className="text-yellow-400 font-mono text-sm mb-4">@ Amazon Web Services</div>
                <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed mb-4">
                  Validates foundational, high-level understanding of AWS Cloud, services, and terminology. Demonstrates proficiency in cloud architecture, security best practices, and AWS core services including IAM, S3, EC2, and VPC — directly applied in hands-on lab environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AWS IAM', 'S3', 'EC2', 'VPC', 'Cloud Security', 'Cloud Architecture'].map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] text-yellow-400">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500"></div>
                <div className="text-zinc-500 font-mono text-xs mb-2">Active · 2024</div>
                <h3 className="text-2xl font-bold text-white mb-1">ITIL® 4 Foundation</h3>
                <div className="text-purple-400 font-mono text-sm mb-4">@ Axelos / PeopleCert</div>
                <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed mb-4">
                  Establishes expertise in IT Service Management (ITSM) best practices. Covers incident management, service desk operations, ticket lifecycle management, and SLA adherence — all applied through IT case studies and simulations at WGU to minimize downtime and improve user satisfaction.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Incident Management', 'Ticket Lifecycles', 'SLA Management', 'Service Desk', 'ITSM'].map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] text-purple-400">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-blue-400"></div>
                <div className="text-zinc-500 font-mono text-xs mb-2">2023 – Present</div>
                <h3 className="text-2xl font-bold text-white mb-1">B.S. Software Engineering (In Progress)</h3>
                <div className="text-blue-400 font-mono text-sm mb-4">@ Western Governors University</div>
                <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed mb-4">
                  Rigorous coursework in Network Administration, Operating Systems, and Software Development. Applying ITIL 4 frameworks to real-world scenarios through simulations and case studies, with an expected graduation in 2026.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Network Administration', 'Operating Systems', 'Software Dev', 'Security'].map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] text-blue-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact.css':
        return (
          <div className="p-12">
            <div className="text-yellow-500 mb-2 font-mono text-sm">/* contact.css - let's connect */</div>
            <h1 className="text-6xl font-black text-white mb-2 font-mono">Contact</h1>
            <div className="text-zinc-500 font-mono text-sm mb-12">// open to remote IT roles, collabs & good conversations</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">FIND ME ON</h3>
                <div className="space-y-4">
                  <a href="mailto:amalosman102938@gmail.com" className="group flex items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800 rounded hover:border-zinc-600 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center rounded">
                        <Mail className="text-emerald-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-emerald-500 uppercase font-mono">Email</div>
                        <div className="text-sm text-zinc-300">amalosman102938@gmail.com</div>
                      </div>
                    </div>
                    <ChevronRight className="text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/amal-osman-27bb8b264/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800 rounded hover:border-zinc-600 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center rounded">
                        <Linkedin className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-blue-500 uppercase font-mono">LinkedIn</div>
                        <div className="text-sm text-zinc-300">linkedin.com/in/amal-osman-27bb8b264</div>
                      </div>
                    </div>
                    <ChevronRight className="text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                  <div className="group flex items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800 rounded hover:border-zinc-600 transition-colors cursor-pointer" onClick={downloadResume}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-500/10 flex items-center justify-center rounded">
                        <FileText className="text-red-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-red-400 uppercase font-mono">Resume</div>
                        <div className="text-sm text-zinc-300">Download PDF Resume</div>
                      </div>
                    </div>
                    <ChevronRight className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">SEND A MESSAGE</h3>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <div>
                    <div className="text-emerald-500 font-mono text-[10px] mb-1">// YOUR_NAME *</div>
                    <input type="text" placeholder="string" className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-blue-500 outline-none text-zinc-300 font-mono" />
                  </div>
                  <div>
                    <div className="text-emerald-500 font-mono text-[10px] mb-1">// YOUR_EMAIL *</div>
                    <input type="email" placeholder="string" className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-blue-500 outline-none text-zinc-300 font-mono" />
                  </div>
                  <div>
                    <div className="text-emerald-500 font-mono text-[10px] mb-1">// SUBJECT</div>
                    <input type="text" placeholder="string" className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-blue-500 outline-none text-zinc-300 font-mono" />
                  </div>
                  <div>
                    <div className="text-emerald-500 font-mono text-[10px] mb-1">// MESSAGE *</div>
                    <textarea rows={4} placeholder={`"your message"`} className="w-full bg-zinc-900 border border-zinc-800 p-3 text-sm focus:border-blue-500 outline-none text-zinc-300 font-mono resize-none"></textarea>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 font-mono text-sm transition-colors mt-4">
                    send_message()
                  </button>
                  <div className="text-zinc-500 text-[10px] font-mono italic mt-2">
                    // Or reach me directly at amalosman102938@gmail.com
                  </div>
                </form>
              </div>
            </div>
          </div>
        );

      case 'README.md':
        return (
          <div className="p-12 text-zinc-300 max-w-4xl">
            <div className="flex items-end gap-2 mb-8">
              <h1 className="text-4xl font-bold text-white">Amal Osman</h1>
              <div className="h-px bg-zinc-800 flex-grow mb-2"></div>
            </div>
            <div className="text-xs text-zinc-500 font-mono mb-8 uppercase tracking-widest">
              Remote IT Specialist · AWS & ITIL 4 Certified · WGU 🎓
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 text-[10px] border border-yellow-900/50 flex items-center gap-1"><Cloud size={10}/> AWS Cloud Practitioner</span>
              <span className="px-2 py-0.5 bg-purple-900/30 text-purple-400 text-[10px] border border-purple-900/50 flex items-center gap-1"><Shield size={10}/> ITIL 4 Foundation</span>
              <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-[10px] border border-blue-900/50 flex items-center gap-1"><Cpu size={10}/> Windows · macOS · Linux</span>
              <span className="px-2 py-0.5 bg-emerald-900/30 text-emerald-400 text-[10px] border border-emerald-900/50 flex items-center gap-1"><Cpu size={10}/> VPN · RDP · VDI</span>
            </div>

            <h2 className="text-xl font-bold text-pink-400 flex items-center gap-2 mb-4">👋 About</h2>
            <p className="leading-relaxed mb-12">
              Hi, Amal here! I'm a dedicated Remote IT Specialist with a passion for cloud infrastructure, virtualization, and solving complex technical challenges in distributed environments. I hold an AWS Cloud Practitioner certification and an ITIL 4 Foundation certification, and I'm currently completing my Bachelor of Science in Software Engineering at WGU. Whether it's designing secure AWS environments, troubleshooting across Windows, macOS, and Linux, or translating technical jargon for non-technical users — I love making technology work for people. Always learning, always shipping.
            </p>

            <div className="space-y-2 mb-12 text-sm text-zinc-400 font-mono">
              <div className="flex items-center gap-3"><ChevronRight size={14} className="text-emerald-500"/> Designing secure <span className="text-white">AWS cloud environments</span> (IAM, S3, EC2, VPC)</div>
              <div className="flex items-center gap-3"><ChevronRight size={14} className="text-emerald-500"/> Remote support across <span className="text-white">Windows, macOS, Linux & ChromeOS</span></div>
              <div className="flex items-center gap-3"><ChevronRight size={14} className="text-emerald-500"/> Applying <span className="text-white">ITIL 4 frameworks</span> to incident management & SLAs</div>
              <div className="flex items-center gap-3"><ChevronRight size={14} className="text-emerald-500"/> Making <span className="text-white">complex tech simple</span> for non-technical users</div>
            </div>

            <h2 className="text-xl font-bold text-white mb-4">Stack</h2>
            <div className="space-y-4 text-xs font-mono">
              <div className="flex gap-4">
                <span className="text-zinc-500 w-28">Cloud:</span>
                <span className="text-yellow-400 flex flex-wrap gap-2">
                  {['AWS IAM', 'S3', 'EC2', 'VPC', 'Cloud Security'].map(s => <span key={s} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">{s}</span>)}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-28">Remote Tools:</span>
                <span className="text-blue-400 flex flex-wrap gap-2">
                  {['VPN', 'RDP', 'VDI', 'RMM Tools', 'Zoom', 'Slack'].map(s => <span key={s} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">{s}</span>)}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-28">Identity:</span>
                <span className="text-purple-400 flex flex-wrap gap-2">
                  {['Active Directory', 'MFA', 'IAM Policy Design'].map(s => <span key={s} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">{s}</span>)}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-28">Dev:</span>
                <span className="text-orange-400 flex flex-wrap gap-2">
                  {['Angular', 'GitLab', 'REST APIs', 'VirtualBox'].map(s => <span key={s} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">{s}</span>)}
                </span>
              </div>
            </div>

            <div className="mt-12 p-4 bg-zinc-900/40 border border-zinc-800 rounded max-w-2xl">
              <div className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest mb-2">Contact</div>
              <div className="text-sm text-zinc-300 font-mono">📧 amalosman102938@gmail.com</div>
              <div className="text-sm text-zinc-300 font-mono mt-1">🔗 linkedin.com/in/amal-osman-27bb8b264</div>
              <div className="text-sm text-zinc-300 font-mono mt-1">📞 +1 (216) 772-3739</div>
            </div>

            <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-zinc-600 text-[10px] font-mono italic">
              Made with 🤍 by Amal · 2026
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full text-zinc-600 font-mono text-sm">
            Select a file from the sidebar to view its contents
          </div>
        );
    }
  };

  return (
    <div 
      className="flex flex-col h-screen bg-[#1e1e1e] text-zinc-300 select-none overflow-hidden cursor-none"
      onClick={() => setActiveMenu(null)}
    >
      <CustomCursor />
      
      {/* Top Menu Bar */}
      <div className="flex items-center justify-between px-2 py-1 bg-[#333333] text-[11px] border-b border-[#2b2b2b] z-50">
        <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
          {(['file', 'edit', 'view', 'go', 'run', 'terminal'] as const).map(menu => (
            <div key={menu} className="relative">
              <button 
                className="hover:bg-zinc-700 px-2 py-1 capitalize"
                onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </button>
              {activeMenu === menu && (
                <div className="absolute top-full left-0 bg-[#252526] border border-[#3c3c3c] shadow-xl w-64 z-[100] py-1 text-zinc-300">
                  {menu === 'file' && (
                    <>
                      <button onClick={() => { setIsPaletteOpen(true); setActiveMenu(null); }} className="w-full text-left px-6 py-1 hover:bg-blue-600 flex justify-between">
                        <span>Open File...</span><span className="text-zinc-500">Ctrl+O</span>
                      </button>
                      <div className="h-px bg-zinc-700 my-1 mx-2"></div>
                      <button onClick={downloadResume} className="w-full text-left px-6 py-1 hover:bg-blue-600">
                        <span>Download Resume (PDF)</span>
                      </button>
                    </>
                  )}
                  {menu === 'go' && (
                    <>
                      <button onClick={() => { setIsPaletteOpen(true); setActiveMenu(null); }} className="w-full text-left px-6 py-1 hover:bg-blue-600 flex justify-between">
                        <span>Go to File...</span><span className="text-zinc-500">Ctrl+P</span>
                      </button>
                      <div className="h-px bg-zinc-700 my-1 mx-2"></div>
                      <div className="px-6 py-1 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Files</div>
                      {FILES.map(f => (
                        <button key={f.id} onClick={() => handleOpenFile(f.id)} className="w-full text-left px-6 py-1 hover:bg-blue-600 text-xs flex items-center gap-2">
                          {f.icon} {f.name}
                        </button>
                      ))}
                    </>
                  )}
                  {(menu === 'edit' || menu === 'view' || menu === 'run' || menu === 'terminal') && (
                    <button className="w-full text-left px-6 py-1 hover:bg-blue-600 text-zinc-500 italic text-xs">
                      No actions available
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-zinc-500 font-medium">amal-osman : portfolio</div>
        <div className="flex items-center gap-2">
          <button className="hover:bg-zinc-700 p-1"><X className="w-3 h-3" /></button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 text-zinc-500 border-r border-[#2b2b2b] z-40">
          <FileText className="w-6 h-6 text-zinc-300 cursor-pointer" />
          <Search className="w-6 h-6 hover:text-zinc-300 cursor-pointer" />
          <GitBranch className="w-6 h-6 hover:text-zinc-300 cursor-pointer" />
          <div className="flex-1"></div>
          <button onClick={downloadResume} title="Download Resume PDF">
            <FileText className="w-6 h-6 text-red-500/80 hover:text-red-500 cursor-pointer" />
          </button>
          <Settings className="w-6 h-6 hover:text-zinc-300 cursor-pointer" />
        </div>

        {/* Sidebar */}
        <div className="w-64 bg-[#252526] flex flex-col text-[11px] border-r border-[#2b2b2b] overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-2 text-zinc-400 font-bold uppercase tracking-wider">
            PORTFOLIO
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-[#37373d]/50 text-zinc-300">
              <ChevronRight className="w-3 h-3 rotate-90" />
              <Folder className="w-3 h-3" />
              <span className="font-bold">src</span>
            </div>
            <div className="ml-4 flex flex-col">
              {FILES.map(f => (
                <div 
                  key={f.id}
                  onClick={() => handleOpenFile(f.id)}
                  className={`flex items-center gap-2 px-4 py-1.5 cursor-pointer hover:bg-[#2a2d2e] ${activeFile === f.id ? 'bg-[#37373d] text-white' : 'text-zinc-400'}`}
                >
                  {f.icon}
                  <span>{f.name}</span>
                </div>
              ))}
              <div 
                onClick={downloadResume}
                className="flex items-center gap-2 px-4 py-1.5 cursor-pointer hover:bg-[#2a2d2e] text-zinc-400"
              >
                <FileText className="w-4 h-4 text-red-400" />
                <span>Amal_Osman_Resume.pdf</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#1e1e1e]">
          {/* Tabs */}
          <div className="flex bg-[#252526] overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {openFiles.map(fileId => {
              const file = FILES.find(f => f.id === fileId);
              return (
                <div 
                  key={fileId}
                  onClick={() => setActiveFile(fileId)}
                  className={`flex items-center gap-2 px-3 py-2 cursor-pointer border-r border-[#1e1e1e] min-w-[120px] max-w-[200px] text-[11px] group transition-all ${activeFile === fileId ? 'bg-[#1e1e1e] border-t border-t-blue-500 text-white' : 'bg-[#2d2d2d] text-zinc-500 hover:bg-[#252526]'}`}
                >
                  {file?.icon}
                  <span className="truncate flex-1">{file?.name}</span>
                  <X 
                    className={`w-3 h-3 hover:bg-[#454545] rounded flex-shrink-0 transition-opacity ${activeFile === fileId ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                    onClick={(e) => handleCloseFile(e, fileId)} 
                  />
                </div>
              );
            })}
          </div>

          {/* Breadcrumbs */}
          {activeFile && (
            <div className="px-4 py-1 bg-[#1e1e1e] border-b border-[#2b2b2b] flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
              <span className="hover:text-zinc-300 cursor-pointer">amal-osman</span>
              <span>&gt;</span>
              <span className="hover:text-zinc-300 cursor-pointer">src</span>
              <span>&gt;</span>
              <span className="text-zinc-300">{activeFile}</span>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto" style={{ scrollbarColor: '#333 #1e1e1e', scrollbarWidth: 'thin' }}>
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-[#007acc] h-6 flex items-center justify-between px-3 text-[11px] text-white z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 hover:bg-[#ffffff22] px-1 transition-colors cursor-pointer">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hover:bg-[#ffffff22] px-1 cursor-pointer">UTF-8</div>
          <div className="hover:bg-[#ffffff22] px-1 cursor-pointer">TypeScript React</div>
          <div className="hover:bg-[#ffffff22] px-1 cursor-pointer">Amal Dark ✨</div>
        </div>
      </div>

      {/* Command Palette */}
      {isPaletteOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[200] flex justify-center pt-2"
          onClick={() => setIsPaletteOpen(false)}
        >
          <div 
            className="w-full max-w-[600px] bg-[#252526] border border-[#3c3c3c] shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 p-2 border-b border-[#3c3c3c] bg-[#1e1e1e]">
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              <input 
                autoFocus 
                type="text" 
                placeholder="Go to file or run command..." 
                className="bg-transparent border-none outline-none text-xs w-full text-zinc-300 font-mono"
              />
              <button onClick={() => setIsPaletteOpen(false)} className="text-[10px] text-zinc-500 bg-[#333333] px-1 rounded cursor-pointer">Esc</button>
            </div>
            <div className="p-2">
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest px-2 mb-2">Files</div>
              <div className="space-y-0.5">
                {FILES.map(f => (
                  <button 
                    key={f.id} 
                    onClick={() => handleOpenFile(f.id)}
                    className="w-full text-left px-3 py-2 hover:bg-blue-600 group flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      {f.icon}
                      <span className="text-zinc-300 group-hover:text-white">{f.name}</span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-white/70 italic text-[10px]">src/</span>
                  </button>
                ))}
                <button onClick={downloadResume} className="w-full text-left px-3 py-2 hover:bg-blue-600 group flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-red-400" />
                    <span className="text-zinc-300 group-hover:text-white">Amal_Osman_Resume.pdf</span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-white/70 italic text-[10px]">./</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
