import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Accordion from '../components/faq_education_comp/Accordion';
import Accordion_top from '../components/faq_education_comp/Accordion_top';

const educationalData= [
  { 
    question:'1. How the platform works?',
    ans:"This platform operates in these following easy steps 1. Register to sign up on the platform. 2. Login to your account. 3. Share your innovative idea with us in the submission section. 4. Wait for the evaluation process, if your idea meets our criteria, you qualify for mentorship from ventures."
  },
  { 
    question:"2. What type of ideas can be submitted on the platform?",
    ans:"We welcome a wide range of innovative ideas with future potential, so if your idea is unique and has the potential to make an important impact in the future, we highly encourage you to submit it on our platform."
  },
  { 
    question:"3. What's the submission process?",
    ans:"The submission process is simple. Register your idea on our platform, and if it aligns with our criteria, you will be eligible for mentorship from venturing."
  },
  { 
    question:"4. Criteria used to evaluate and select ideas for mentorship",
    ans:"Your ideas will be evaluated on the basis of their creativity, uniqueness, feasibility, and future potential. Plagiarism is strictly prohibited. If your idea is original, implementable, and shows promise for the future, it meets our criteria for mentorship consideration."
  },
  { 
    question:"5. Discussion forum for users to interact with each other",
    ans:"Our platform provides a discussion forum where users can interact, share insights, and connect with like-minded innovators. It serves as a collaborative space, fostering a supportive community where users can discuss ideas, seek advice, and build valuable networks."
  },
  { 
    question:"6. Finding options for early stage startups",
    ans:" Our platform facilitates this process of discovering early-stage funding options, by providing access to a network of mentorship and resources. Through mentorship programs, you will gain insights into various funding avenues, like investors, grants, crowdfunding, etc. Additionally, our community and educational content offer guidance on preparing pitches and connecting with potential investors, empowering you to explore and pursue the funding options that best suit your startup's needs."
  },
  { 
    question:"7. Business plan for startup idea",
    ans:"Developing a solid business plan is key to securing funding, attracting partners, and growing your startup. Our platform recognises the importance of a well-crafted business plan and offers assistance in its development. Through mentorship and educational resources, we help you refine your business concept, ensuring your plan aligns with industry standards."
  },
  { 
    question:"8. Registering idea with Govt",
    ans:" Registering an idea with the Government involves the following steps:1. Developing a clear business plan.2. Deciding on a business structure (e.g., Private Limited Company).3. Obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN). 4. Checking and reserving business name through the Ministry of Corporate Affairs (MCA). 5. Filing necessary documents with the Registrar of Companies (RoC) to incorporate the company.6. Getting a PAN for the company, applying for a Tax Deduction and Collection Account Number (TAN) , and registering for Goods and Services Tax (GST) if the startup's annual turnover is expected to exceed the prescribed threshold.7. Obtaining a trade license from the local municipal authority.8. Considering patents or trademarks to protect the business ideas.9. Opening a business account with required documents.10. Staying compliant with statutory requirements and filing annual documents.This platform streamlines the process of registering your idea with the government for the future. By offering mentorship from venturing experts, we guide you through the necessary steps and provide insights on presenting your idea effectively."
  },
  { 
    question:"9. Patents",
    ans:"A patent is a legal document that is granted by the government of the state or the country. It gives the inventor of a particular thing, the exclusive right to make, use and sell his or her creation for a specified period of time. Our platform educates users through mentorship and articles, to help them understand its protective benefits, and navigate the patent landscape."
  },
  { 
    question:"10. When can one apply for a patent?",
    ans:" One can apply for a patent while registering an idea, when they have developed a novel invention, that is considered an advancement in its field. It's advisable to file a patent application before making any public disclosures or sharing the details of the invention. This proactive approach helps in protecting the intellectual property associated with the idea. Consulting with relevant government patent authorities or legal professionals is recommended for accurate and timely application submission."
  },
  { 
    question:"11.  Govt. Website to register ideas",
    ans:"To register your ideas for patents in India, you can visit the official website of the Indian Patent Office (IPO) at www.ipindia.nic.in. This platform provides comprehensive information and the necessary forms for patent registration. Additionally, our platform offers guidance on navigating these websites, ensuring a seamless experience in the registration process."
  },
  { 
    question:"12. Legal considerations you should be aware of",
    ans:"When submitting your idea, it's crucial to be mindful of potential legal considerations. Our platform advises users to avoid any infringement on existing patents. We also encourage understanding and adhering to relevant industry regulations."
  },
]

export default function EducationalContent() {
  return (
    <ScrollView>
    <View>
      <Accordion_top />
      <View style={styles.gap}></View>
      <View style={styles.accordionWrapper}>
        {educationalData.map((data, index)=>(
          <View  key= {index}>
        <Accordion title={data.question} content={data.ans}/></View>
        ))}
      </View>
     
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    accordionWrapper: {
        marginBottom: 0, // Adjust this value as needed
      },
      gap:{
        height:13,
      }
})