import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    socials: ISocials;
    address: string;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Who We Are",
            url: "https://www.essential-soft.com/who-we-are/"
        },
        {
            text: "What We Do",
            url: "https://www.essential-soft.com/what-we-do/"
        },
         {
            text: "Contact Us",
            url: "https://www.essential-soft.com/contact-us/"
        }
    ],
    address: '9711 Washingtonian Blvd Suite 550 Gaithersburg, MD 20878',
    email: 'modelnavigator@essential-soft.com', // Add email property
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/essential-software-inc/',
    }
}