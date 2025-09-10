import { createContext, useState } from "react";
import { 
    introductionContent, 
    sidebarContent, 
    educationContent, 
    skillsContent, 
    experienceContent, 
    blogsContent, 
    projectsContent, 
    achivementContent,
    socialLinks
} from '../config/content';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prev) => {
            if (prev === "en") return "vi";
            if (prev === "vi") return "ja";
            return "en";
        });
    };

    const value = { 
        language, 
        toggleLanguage, 
        content: {
            introduction: introductionContent[language],
            sidebar: sidebarContent[language],
            education: educationContent[language],
            skills: skillsContent[language],
            experience: experienceContent[language],
            blogs: blogsContent[language],
            projects: projectsContent[language],
            achivement: achivementContent[language],
        },
        socialLinks
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContext;