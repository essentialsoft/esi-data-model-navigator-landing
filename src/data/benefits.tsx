import { FiFileText, FiUpload, FiDatabase, FiBookOpen, FiClock, FiUsers, FiSearch, FiCompass, FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Graph View",
        description: "Easily visualize data models with an interactive graph, highlighting hierarchical relationships for seamless navigation and understanding of complex data structures.",
        bullets: [
            {
                title: "Interactive Graph Visualization",
                description: "Easily explore your data model with an intuitive graph that highlights relationships between nodes and their parents.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Clear Hierarchical Representation",
                description: "Nodes are categorically and hierarchically structured, making it simple to understand complex data relationships.",
                icon: <FiTarget size={26} />
            },
            {
                title: "User-Friendly Navigation",
                description: "Navigate intricate data models effortlessly with an interactive and visually organized map.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/Picture1.png"
    },
    {
        title: "Data Export",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Multi-Format Export",
                description: "Effortlessly export your data dictionary in TSV, JSON, or PDF formats, including node properties and attributes like Required and Data Type.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Data Loading Templates",
                description: "Easily create TSV-based Data Loading Templates for specific nodes, automatically incorporating key property fields from parent nodes.",
                icon: <FiUpload size={26} />
            },
            {
                title: "Comprehensive Node Details",
                description: "Ensure all relevant property attributes are captured, providing a clear, structured view of your data model.",
                icon: <FiDatabase size={26} />
            }
        ],
        imageSrc: "/images/Picture2.png"
    },
    {
        title: "Model Documentation",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
            title: "Built-In Documentation",
            description: "Keep your model well-documented with optional README.md and version history, making it easy for users to understand model intricacies.",
            icon: <FiBookOpen size={26} />
        },
        {
            title: "Version History Tracking",
            description: "Ensure transparency by maintaining a version history document, helping users track changes across new releases.",
            icon: <FiClock size={26} />
        },
        {
            title: "Streamlined Collaboration",
            description: "Integrated documentation simplifies collaboration, providing quick access to essential model details for all users.",
            icon: <FiUsers size={26} />
        }
        ],    
        imageSrc: "/images/Picture3.png"
    },
    {
        title: "Model-Wide Searching",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
            bullets: [
                {
                    title: "Powerful Search",
                    description: "Quickly find nodes, properties, or attributes using an advanced search mechanism.",
                    icon: <FiSearch size={26} />
                },
                {
                    title: "Instant Results",
                    description: "Search results highlight relevant nodes, making it easy to locate the exact information you need.",
                    icon: <FiTarget size={26} />
                },
                {
                    title: "Enhanced Navigation",
                    description: "Effortlessly explore your data model with a streamlined search experience.",
                    icon: <FiCompass size={26} />
                }
            ],
        imageSrc: "/images/Picture5.png"
    },
]