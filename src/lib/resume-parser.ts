export interface ResumeData {
  id: string;
  name: string;
  title?: string;
  email: string;
  phone: string;
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  location?: string;
  gpa?: string;
}

export function parseResume(text: string): Omit<ResumeData, 'id'> {
  const cleanedText = text.replace(/\n{3,}/g, '\n\n').trim();
  const lines = cleanedText.split('\n').map(line => line.trim()).filter(line => line);
  
  // Extract contact info
  const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
  const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\d{10}/);
  const linkedinMatch = text.match(/(?:linkedin\.com\/in\/|linkedin:)\s*([\w-]+)/i);
  const githubMatch = text.match(/(?:github\.com\/|github:)\s*([\w-]+)/i);
  const portfolioMatch = text.match(/(https?:\/\/(?:www\.)?(?!linkedin|github)[\w-]+\.[\w]+(?:\/[\w.-]*)*)/);
  
  // Extract name and title
  let name = '';
  let title = '';
  
  const sectionHeaders = [
    'education', 'experience', 'projects', 'skills', 'technical skills',
    'work experience', 'summary', 'objective', 'certifications', 'awards'
  ];
  
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i];
    const lowerLine = line.toLowerCase();
    
    if (sectionHeaders.some(header => lowerLine === header || lowerLine.startsWith(header + ':'))) {
      continue;
    }
    
    // Skip contact info lines
    if (line.includes('@') || 
        (phoneMatch && line.includes(phoneMatch[0])) ||
        /linkedin|github|leetcode|portfolio/.test(lowerLine)) {
      
      // Extract name from contact line
      if (!name && line.length > 10) {
        const parts = line.split(/[|\/]|(?=\d{10})|(?=\+?\d)/);
        const potentialName = parts[0]?.trim();
        if (potentialName && 
            potentialName.length > 3 && 
            potentialName.length < 50 &&
            !potentialName.includes('@') &&
            !/^\d/.test(potentialName)) {
          name = potentialName;
        }
      }
      
      // Extract title from contact line if it has common job titles
      if (!title && /engineer|developer|designer|manager|analyst|scientist|architect/i.test(line)) {
        const titleMatch = line.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s*\([A-Z]+\)|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/);
        if (titleMatch && /engineer|developer|designer/i.test(titleMatch[0])) {
          title = titleMatch[0].split(/www\.|http|linkedin|github/i)[0].trim();
        }
      }
      continue;
    }
    
    if (line.length < 3 || line.length > 100) continue;
    if (/^\d{4}/.test(line) || /\d{4}\s*[-–—]\s*\d{4}/.test(line)) continue;
    
    if (!name) {
      name = line;
    } else if (!title && i <= 3) {
      if (!line.includes('|') && !line.includes('–') && !line.includes('—')) {
        title = line;
        break;
      }
    }
  }
  
  const summary = extractSummary(text);
  const skills = extractSkills(text);
  const experience = extractExperience(text);
  const projects = extractProjects(text);
  const education = extractEducation(text);
  
  console.log(`[Parser] Extracted ${skills.length} skills, ${experience.length} experiences, ${projects.length} projects, ${education.length} education entries`);
  
  return {
    name: name || 'Professional',
    title: title || undefined,
    email: emailMatch?.[0] || '',
    phone: phoneMatch?.[0] || '',
    linkedin: linkedinMatch ? `https://linkedin.com/in/${linkedinMatch[1]}` : undefined,
    github: githubMatch ? `https://github.com/${githubMatch[1]}` : undefined,
    portfolio: portfolioMatch?.[0],
    summary,
    skills,
    experience,
    projects,
    education,
  };
}

function extractSkills(text: string): string[] {
  const skillsSection = extractSection(text, ['skills', 'technical skills', 'technologies', 'tech stack', 'core competencies']);
  
  const skills: string[] = [];
  
  if (skillsSection) {
    const commonSkills = [
      'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin',
      'React', 'Vue', 'Angular', 'Next.js', 'Nuxt', 'Svelte', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'FastAPI',
      'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'SASS', 'SCSS', 'Material-UI', 'Chakra UI', 'ShadCN',
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase', 'DynamoDB', 'Cassandra',
      'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Netlify',
      'REST', 'GraphQL', 'API', 'Microservices', 'CI/CD', 'Jenkins', 'GitHub Actions',
      'TensorFlow', 'PyTorch', 'Machine Learning', 'AI', 'Data Science', 'Pandas', 'NumPy',
      'Redux', 'MobX', 'Zustand', 'React Query', 'SWR', 'Fiber', 'Colly', 'Drogon',
      'Jest', 'Mocha', 'Cypress', 'Playwright', 'Testing Library', 'Supertest',
      'Webpack', 'Vite', 'Rollup', 'Babel', 'ESLint', 'Prettier', 'Swagger', 'JWT',
      'NoSQL', 'SQL', 'Vectara', 'OpenAI', 'OpenRouter', 'Hugging Face', 'Llama', 'Gemma', 'RAG',
      'Matplotlib', 'Seaborn', 'Plotly', 'CLI Development', 'Bubble Tea'
    ];
    
    const lowerText = skillsSection.toLowerCase();
    
    for (const skill of commonSkills) {
      if (lowerText.includes(skill.toLowerCase()) && !skills.includes(skill)) {
        skills.push(skill);
      }
    }
    
    const separated = skillsSection
      .split(/[,;|•\n\t]/)
      .map(s => s.trim())
      .filter(s => {
        return s && 
               s.length > 1 && 
               s.length < 30 && 
               !s.toLowerCase().includes('skills') &&
               !s.toLowerCase().includes('technologies') &&
               !/^\d+$/.test(s) &&
               !skills.some(existing => existing.toLowerCase() === s.toLowerCase());
      });
    
    skills.push(...separated);
  }
  
  if (skills.length < 5) {
    const techKeywords = ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Go'];
    for (const keyword of techKeywords) {
      if (text.includes(keyword) && !skills.includes(keyword)) {
        skills.push(keyword);
      }
    }
  }
  
  const uniqueSkills = Array.from(new Map(
    skills.map(s => [s.toLowerCase(), s])
  ).values());
  
  return uniqueSkills.slice(0, 30);
}

function extractSummary(text: string): string | undefined {
  const summarySection = extractSection(text, ['summary', 'objective', 'about', 'profile', 'professional summary']);
  if (!summarySection) return undefined;
  
  const lines = summarySection.split('\n').map(l => l.trim()).filter(l => l);
  const summary = lines.join(' ').trim();
  
  if (summary.length > 20 && summary.length < 500) {
    return summary;
  }
  
  return undefined;
}

function extractExperience(text: string): Experience[] {
  const experienceSection = extractSection(text, ['experience', 'work experience', 'employment', 'professional experience']);
  if (!experienceSection) return [];
  
  const experiences: Experience[] = [];
  const lines = experienceSection.split('\n').map(l => l.trim()).filter(l => l);
  
  let currentExp: Partial<Experience> | null = null;
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Skip very short lines and standalone bullets
    if (line.length < 3 || line === '•' || line === '-' || line === '*') {
      i++;
      continue;
    }
    
    // Check for company line (has "Remote" or location at end, or followed by position line)
    const hasRemoteOrLocation = /Remote$|India$|USA$|UK$|,\s*[A-Z]{2}$/.test(line);
    const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
    const nextLineHasPosition = nextLine && /engineer|developer|fellow|intern|manager|analyst|designer|architect/i.test(nextLine);
    
    if ((hasRemoteOrLocation || nextLineHasPosition) && !line.startsWith('•') && line !== '•') {
      // Save previous experience
      if (currentExp?.company && currentExp?.position) {
        experiences.push({
          company: currentExp.company,
          position: currentExp.position,
          duration: currentExp.duration || '',
          location: currentExp.location,
          description: currentExp.description || []
        });
      }
      
      // Parse company and location
      const companyParts = line.split(/\s*[–—-]\s*(?=Remote|[A-Z][a-z]+,)/);
      const company = companyParts[0].trim().replace(/Remote$/, '').trim();
      const location = line.includes('Remote') ? 'Remote' : 
                      companyParts[companyParts.length - 1] !== companyParts[0] ? companyParts[companyParts.length - 1].trim() : undefined;
      
      // Move to position line
      i++;
      if (i >= lines.length) break;
      const positionLine = lines[i];
      
      // Extract position and duration
      const durationMatch = positionLine.match(/([A-Z][a-z]{2,8}\s+\d{4})\s*[–—-]\s*([A-Z][a-z]{2,8}\s+\d{4}|Present|Current)/i) ||
                           positionLine.match(/(\d{4})\s*[–—-]\s*(\d{4}|Present|Current)/i);
      
      let position = positionLine.split(/\s*[–—-]\s*(?=[A-Z][a-z]{2,8}\s+\d{4}|\d{4})/)[0].trim();
      let duration = durationMatch ? durationMatch[0] : '';
      
      currentExp = {
        company,
        position,
        duration,
        location,
        description: []
      };
      
      i++;
      continue;
    }
    
    // Handle bullet points (can be on same line or next line after standalone bullet)
    if (currentExp) {
      let bulletContent = '';
      
      // Case 1: Line starts with bullet character
      if (/^[•\-*○\u2022\u2023\u2043\u25E6\u25AA\u25AB\u25CF]/.test(line)) {
        bulletContent = line.replace(/^[•\-*○\u2022\u2023\u2043\u25E6\u25AA\u25AB\u25CF]\s*/, '').trim();
      }
      // Case 2: Previous line was standalone bullet, this is the content
      else if (i > 0 && (lines[i - 1] === '•' || lines[i - 1] === '-' || lines[i - 1] === '*')) {
        bulletContent = line;
      }
      
      if (bulletContent && bulletContent.length > 5) {
        if (!currentExp.description) currentExp.description = [];
        currentExp.description.push(bulletContent);
      }
    }
    
    i++;
  }
  
  // Add last experience
  if (currentExp?.company && currentExp?.position) {
    experiences.push({
      company: currentExp.company,
      position: currentExp.position,
      duration: currentExp.duration || '',
      location: currentExp.location,
      description: currentExp.description || []
    });
  }
  
  return experiences.slice(0, 10);
}

function extractProjects(text: string): Project[] {
  const projectsSection = extractSection(text, ['projects', 'personal projects', 'portfolio', 'key projects']);
  if (!projectsSection) return [];
  
  const projects: Project[] = [];
  const lines = projectsSection.split('\n').map(l => l.trim()).filter(l => l);
  
  let currentProject: Partial<Project> | null = null;
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Skip standalone bullets and very short lines
    if (line.length < 3 || line === '•' || line === '-' || line === '*') {
      i++;
      continue;
    }
    
    // Project title: has pipe separator OR doesn't start with bullet and is followed by bullets
    const hasPipeSeparator = line.includes('|') && !line.startsWith('•') && !/^[•\-*○\u2022\u2023\u2043\u25E6\u25AA\u25AB\u25CF]/.test(line);
    const nextLineIsBullet = i + 1 < lines.length && (lines[i + 1] === '•' || lines[i + 1].startsWith('•'));
    const isProjectTitle = (hasPipeSeparator || nextLineIsBullet) && !line.toLowerCase().includes('skill');
    
    if (isProjectTitle) {
      // Save previous project
      if (currentProject?.name) {
        projects.push({
          name: currentProject.name,
          description: currentProject.description || '',
          technologies: currentProject.technologies || [],
          link: currentProject.link
        });
      }
      
      let projectName = line;
      let technologies: string[] = [];
      let projectLink = '';
      
      // Extract technologies and links from pipe-separated format
      if (line.includes('|')) {
        const parts = line.split('|');
        projectName = parts[0].trim();
        
        // Process remaining parts for technologies and links
        for (let j = 1; j < parts.length; j++) {
          const part = parts[j].trim();
          
          // Check if this part contains link keywords
          if (/Live|GitHub|Demo|Link|Code|Video|Documentation/i.test(part)) {
            if (!projectLink) projectLink = part;
          }
          // Otherwise, treat as technologies
          else {
            const techs = part
              .split(/[,;]/)
              .map(t => t.trim())
              .filter(t => t.length > 1 && t.length < 30 && !t.includes('http'));
            technologies.push(...techs);
          }
        }
      }
      
      // Remove trailing punctuation from project name
      projectName = projectName.replace(/[-–—|]+$/, '').trim();
      
      currentProject = {
        name: projectName,
        description: '',
        technologies: technologies,
        link: projectLink || undefined
      };
      
      i++;
      continue;
    }
    
    // Handle bullet points for project descriptions
    if (currentProject) {
      let bulletContent = '';
      
      // Case 1: Line starts with bullet
      if (/^[•\-*○\u2022\u2023\u2043\u25E6\u25AA\u25AB\u25CF]/.test(line)) {
        bulletContent = line.replace(/^[•\-*○\u2022\u2023\u2043\u25E6\u25AA\u25AB\u25CF]\s*/, '').trim();
      }
      // Case 2: Previous line was standalone bullet
      else if (i > 0 && (lines[i - 1] === '•' || lines[i - 1] === '-' || lines[i - 1] === '*')) {
        bulletContent = line;
      }
      
      if (bulletContent && bulletContent.length > 10) {
        // Check for technologies in description
        const techIndicators = /technologies|tech stack|built with|using|tools|frameworks/i;
        if (techIndicators.test(bulletContent)) {
          const techMatch = bulletContent.match(/(?:technologies|tech stack|built with|using|tools|frameworks)[:\s]+(.*)/i);
          if (techMatch) {
            const techs = techMatch[1]
              .split(/[,;|&]/)
              .map(t => t.trim())
              .filter(t => t.length > 1 && t.length < 30);
            currentProject.technologies = [...(currentProject.technologies || []), ...techs];
          }
        }
        
        // Add to description
        currentProject.description = currentProject.description 
          ? `${currentProject.description} ${bulletContent}` 
          : bulletContent;
        
        // Extract URLs from description
        const urlMatch = bulletContent.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch && !currentProject.link) {
          currentProject.link = urlMatch[0];
        }
        
        // Extract link keywords from description
        const linkMatch = bulletContent.match(/\b(Live|GitHub|Demo|Documentation|Code|Video|Link)\b/i);
        if (linkMatch && !currentProject.link) {
          currentProject.link = linkMatch[0];
        }
      }
    }
    
    i++;
  }
  
  // Add last project
  if (currentProject?.name) {
    projects.push({
      name: currentProject.name,
      description: currentProject.description || '',
      technologies: currentProject.technologies || [],
      link: currentProject.link
    });
  }
  
  // Extract technologies from description if none found
  projects.forEach(project => {
    if (project.technologies.length === 0 && project.description) {
      const commonTech = [
        'React', 'Node', 'Python', 'Java', 'TypeScript', 'JavaScript', 'Go', 'C++',
        'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Next.js', 'Redis', 'Express', 
        'Fiber', 'Colly', 'Bubble Tea', 'OpenAI', 'GraphQL', 'JWT', 'Gemma', 
        'Vectara', 'RAG', 'Llama', 'NoSQL', 'Swagger', 'Drogon'
      ];
      project.technologies = commonTech.filter(tech => 
        project.description.toLowerCase().includes(tech.toLowerCase())
      );
    }
  });
  
  return projects.slice(0, 10);
}

function extractEducation(text: string): Education[] {
  const educationSection = extractSection(text, ['education', 'academic', 'qualification', 'academic background']);
  if (!educationSection) return [];
  
  const education: Education[] = [];
  const lines = educationSection.split('\n').map(l => l.trim()).filter(l => l && l.length > 3);
  
  let currentEdu: Partial<Education> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.toLowerCase() === 'education') continue;
    
    // Institution line: longer, doesn't start with degree keyword
    const isInstitutionLine = !line.startsWith('•') && 
                               line.length > 10 &&
                               !/^(bachelor|master|phd|b\.tech|m\.tech|b\.sc|m\.sc|diploma|undergraduate|graduate)/i.test(line) &&
                               !/\|\s*\d/.test(line); // Not a degree line with pipe and numbers
    
    if (isInstitutionLine) {
      // Save previous education
      if (currentEdu?.institution && currentEdu?.degree) {
        education.push({
          institution: currentEdu.institution,
          degree: currentEdu.degree,
          field: currentEdu.field,
          duration: currentEdu.duration || '',
          location: currentEdu.location,
          gpa: currentEdu.gpa
        });
      }
      
      let institution = line;
      let location = '';
      
      // Extract location from end of institution line
      const locationMatch = line.match(/,\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*),?\s*([A-Z][a-z]+|India|USA|UK)$/);
      if (locationMatch) {
        location = locationMatch[0].trim();
        institution = line.replace(locationMatch[0], '').trim();
      }
      
      // Remove dates if present
      institution = institution.replace(/\d{4}\s*[-–—]\s*\d{4}$/, '').trim();
      institution = institution.replace(/\d{4}\s*[-–—]\s*Present$/i, '').trim();
      
      currentEdu = {
        institution,
        degree: '',
        duration: '',
        field: '',
        location: location || undefined,
        gpa: undefined
      };
    }
    // Degree line
    else if (currentEdu && (
      /bachelor|master|phd|b\.tech|m\.tech|b\.sc|m\.sc|diploma|undergraduate|graduate/i.test(line) ||
      line.includes('|') ||
      /\d{4}\s*[-–—]\s*\d{4}/.test(line) ||
      /cgpa|gpa|percentage/i.test(line)
    )) {
      let degree = line;
      let gpa = '';
      let duration = '';
      
      // Extract CGPA (format: "| 8.2 CGPA" or "8.2 CGPA" or "CGPA: 8.2")
      const cgpaMatch = line.match(/(\d+\.\d+)\s*CGPA|CGPA[:\s]*(\d+\.\d+)|GPA[:\s]*(\d+\.\d+)|(\d+)%/i);
      if (cgpaMatch) {
        gpa = cgpaMatch[1] || cgpaMatch[2] || cgpaMatch[3] || (cgpaMatch[4] ? `${cgpaMatch[4]}%` : '');
        // Remove CGPA from rest of line
        degree = degree.replace(/\|\s*\d+\.\d+\s*CGPA|\d+\.\d+\s*CGPA|CGPA[:\s]*\d+\.\d+|GPA[:\s]*\d+\.\d+|\d+%/i, '').trim();
      }
      
      // Extract duration
      const durationMatch = line.match(/([A-Z][a-z]{2,8}\s+\d{4})\s*[–—-]\s*([A-Z][a-z]{2,8}\s+\d{4}|Present|Current)/i) ||
                           line.match(/(\d{4})\s*[–—-]\s*(\d{4}|Present|Current)/i);
      if (durationMatch) {
        duration = durationMatch[0];
        degree = degree.replace(durationMatch[0], '').trim();
      }
      
      // Handle pipe separator
      if (degree.includes('|')) {
        const parts = degree.split('|').map(p => p.trim());
        degree = parts[0];
        
        // Check other parts for GPA or duration
        parts.slice(1).forEach(part => {
          const partGpaMatch = part.match(/(\d+\.\d+)|(\d+)%/);
          if (partGpaMatch && !gpa) {
            gpa = partGpaMatch[0];
          } else if (/\d{4}/.test(part) && !duration) {
            duration = part;
          }
        });
      }
      
      // Clean up degree
      degree = degree.replace(/[-–—|]+$/, '').trim();
      degree = degree.replace(/^[-–—|]+/, '').trim();
      
      if (currentEdu) {
        currentEdu.degree = degree;
        if (gpa) currentEdu.gpa = gpa;
        if (duration) currentEdu.duration = duration;
      }
    }
  }
  
  // Add last education
  if (currentEdu?.institution && currentEdu?.degree) {
    education.push({
      institution: currentEdu.institution,
      degree: currentEdu.degree,
      field: currentEdu.field,
      duration: currentEdu.duration || '',
      location: currentEdu.location,
      gpa: currentEdu.gpa
    });
  }
  
  return education.slice(0, 5);
}

function extractSection(text: string, headers: string[]): string | null {
  const lines = text.split('\n');
  let sectionStart = -1;
  let sectionEnd = lines.length;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase().trim();
    if (headers.some(header => line.includes(header))) {
      sectionStart = i + 1;
      break;
    }
  }
  
  if (sectionStart === -1) return null;
  
  const commonHeaders = ['experience', 'education', 'skills', 'projects', 'certifications', 'awards', 'technical skills'];
  for (let i = sectionStart; i < lines.length; i++) {
    const line = lines[i].toLowerCase().trim();
    if (commonHeaders.some(header => line === header || line.startsWith(header + ':'))) {
      sectionEnd = i;
      break;
    }
  }
  
  return lines.slice(sectionStart, sectionEnd).join('\n');
}
