import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
    {
        question: `How many model files are supported?`,
        answer: 'Data Model Navigator supports an unlimited number of model definition files, and will build an aggregate model automatically upon load. Whether your Data Common has 1 model file–or 30–Model Navigator will natively support it without any additional configuration.',
    },
    {
        question: `Do I have to provide a model README?`,
        answer: 'No. Both the model README and version history documents are optional resources for your end users to utilize; Model Navigator will simply hide any references to either of these resources if you choose not to provide them.',
    },
    {
        question: 'What node categories are supported?',
        answer: `Model Navigator supports the following node categories by default: Administrative, Study, Case, Biospecimen, Clinical Trial, Clinical, Analysis, and Data File. You may utilize any of these node categories within your Data Model MDF as many times as you need to, and more than one node can be assigned to the same category.
`
    },
    {
        question: 'What filters are available by default?',
        answer: 'Model Navigator supports filters for both Nodes and Properties. By default, end users can filter nodes by: Category, Model Assignment, Class. Likewise, they can filter properties by: Inclusion or UI Display.',
    },
    {
        question: 'What model definitions are supported?',
        answer: 'Data Model Navigator currently only supports the Graph Model Definition Framework (MDF). More information can be found here: https://github.com/CBIIT/bento-mdf'
    }
];