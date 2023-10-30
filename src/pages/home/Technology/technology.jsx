import React from 'react'
import '../pages.css'
import Header from '../../../header/header.jsx';
import Post from '../../../post/post.jsx';
import {Link} from 'react-router-dom';

function technology() {
  return (
    <div className='tPage'>
      <Header/>
      <h5 className="pageTitle">Technology</h5>
      
        <div className="pagePosts">
        <Link to="/tech1" className='postLink'><Post date="October 29"
            imageUrl="https://redriver.com/wp-content/uploads/2021/10/Zero-trust-Security-Model.jpg" category="Technology" title="Zero Trust"
            content="“Zero Trust” means “Believe No One”. Zero Trust is a term in association with security, a conception that the organizations today consider with paramount importance. Zero Trust uses robust authentication techniques, makes use of network segmentation, prevents lateral movement, offers Layer 7 threat protection, and streamlines granular, least access regulations in order to safeguard contemporary environments and facilitate digital transformation. The workforce today is constantly on the go and a large number of applications and data are accessed via multiple devices from many locations. So, with this kind of interaction with the common data from the diversified source, there is a question that would strike the minds of every end-user, “Am I accessing the safe data.” Therefor sure exists the fundamental level of security for such access that protects one’s enterprise network and data. This infrastructure is assumed to be defending against the ever-evolving threats like malware and targeted breaches that can emanate from anywhere by anyone. This kind of conventional perimeter security puts the business at stake and must transform to protect the business environment. The understanding that existing security solutions rely on the outdated concept that everything in a company's network should be trusted led to the creation of Zero Trust. Due to a lack of granular security controls, users on the network, including threat actors and malicious insiders, are allowed to move laterally and access or exfiltrate critical data as a result of this implicit trust. Therefore, the solution to this proposed was Zero Trust security architecture, which means verify and never trust which implies the access to apps and data is only given to authenticated and verified end-users where logs are monitored frequently and malware and predefined breaches are prevented.
            The technologies that hold Zero Trust upright is granular perimeter enforcement and micro-segmentation (for perfect network transparency) based on users and their whereabouts. Any case study on Zero Trust begins with the question “who the user exactly is?” and the policy hence maintained at the entry point of this architecture defines who and what kind of user is the person. To make this approach so very lively into action Zero Trust ropes in technologies such as IAM, end to end encryption, user and system level defined file permissions, MFA (Multi-factor authentication) and a very commonly seen application of MFA is 2FA (2-Way factor authentication). Gone are those days when organizations did believe the castle-fence model where they simply relied on the conventional security infrastructure set up that here refer to the fence around the castle, and believe everything that is inside the fence is safe and everything outside the fence is untrusted. They used firewalls and other technologies to create a security perimeter. But then a very baffling question arises “what if the perimeter was breached?”. Organizations because of their business requirements are moving to the cloud. As per security experts and further surveys it has been shown that clouds are the better place to start the Zero Trust. Another very fascinating question would be “how do I implement this?” Earlier it was a perception of being detailed implementation of security engineers working and deploying the above-mentioned technologies. But today with the introduction to the application like Cloudflare Access, any organization can implement zero-trust security with ease. This application controls access to one’s site and integrates with the enterprise Identity Provider for handling user credentials.
            
            A zero-trust strategy believes no network as safe even the internal fenced nework. For instance, workloads are prevented from interacting until a set of qualities, such as a fingerprint or identity, have verified their validity. Stronger security is provided by identity-based validation policies and follows the workload wherever it communicates, whether that be in a public cloud, a hybrid environment, a container, or an on-premises network architecture. Protection from both internal and external threats, data protection, increased network visibility, and compliance are advantages of implementing a zero-trust architecture.
            Believe no one in the long run approach has helped organizations these days to keep themselves away from the threats that could potentially disrupt the successful business flow and can shatter the entire reputation of the identity that one holds. In IT Zero Trust is no more perceived as technology or any kind of meager implementation but a mindset."/></Link>
            <hr className='divider'/>
            <Link to="/tech2" className='postLink'><Post date="October 29"
            imageUrl="https://www.autommate.com/wp-content/uploads/2023/02/blog-go%CC%88rselleri_C%CC%A7alis%CC%A7ma-Yu%CC%88zeyi-1.jpg" category="Technology" title="Hyper-Automation"
            content="What if I say you, that your refrigerator can help you by reminding you to buy a pack of cottage cheese when you are on the undersupply of same. The other day I came across a platform Alteryx, and therefore I thought of sharing my views on the trending technology hyperautomation. A one-liner, Alteryx, is a platform that holds the capability to process humongous documents using Natural Language Processing (NLP) & Optical Character Recognition (OCR) and provides quick insights from the data analysed from within the documents. 
            Hyperautomation is built on Robot Process Automation (RPA) with the amalgamation of advanced technologies like AI, ML, analytics, and Process mining. Hyperautomation utilizes the data collected over different kinds of digital platforms to draw inferences from them to make prompt and effective decision-making. Many organizations should look to adopt hyperautomation to perform their business operations seamlessly.
            The marketing function specifically, would be keen on retaining a positive and long customer relationship with the help of NLP where the machine learns and updates itself through interacting with consumers in real-time. Chatbots are one such example. Think from a shoe of seller's perspective in terms of lead generation where they fail to obtain data from people who visit their website, but not disclose any information. Hence sellers fall short in converting prospective leads. Therefore, by gathering IP-related digital footprints of the digital medium used, the system can store such information and can target useful and relevant information by launching a series of e-mails, or pre-approach sale calls.
            Human Resource Management should consider hyperautomation thoughtfully. RPA blended with AI generates a team of a virtual team to handle the monotonous functions to optimize employee performance. Other important aspects that we all were familiar with in HR functionality are candidate shortlisting, employee onboarding, employee exit, and employee management. Today we know how top organizations use hyperautomation to cut down their manual tasks which earlier charged them additional human resources, time, and money. 
            It was quite great to share a lot of applications of hyperautomation. It is quite debatable or rather open for a healthy discussion whether “Hyperautomation” can disrupt the marketplace by replacing human effort. If yes, how techies would vouch for this? How would Marketers see this as a game-changer strategy in the market? Would they still need a human touch, or would technology suffice and stand out for outstanding results? What would Human Resource Management opine about substituting human resources for important aspects? Would be happy to learn other perspectives from the readers as well. Jovial reading!
            #Hyperautomation #RPA #NLP #AI #Marketing #Human Resource Management #Customer Relationship"/></Link>
            <hr className='divider'/>
            <Link to="/tech3" className='postLink'><Post date="October 29"
            imageUrl="https://www.costain.com/media/599050/2-shutterstock_1254636121_web.jpg" category="Technology" title="Digital twin technology"
            content="Once upon a time, there was a budding thought, that how are humongous projects developed to ensure the deliverables are met precisely. Projects which have heavy investments ranging from lakhs to crores of rupees. Who or what assures the working of these projects or products in the market? This was a random thought. But then the other day I come across a terminology Digital twin technology which answered my question.
            To introduce Digital twin, it is a technology that creates a virtual replica of the actual product and real-time simulations on the virtual clone that helps to take decisions better. What benefits you as a product owner here is that, the clone has been trained well with the real-time data that has interacted with the environment, and hence you as a product marketer can easily eliminate the redundancies that the market wouldn't be looking for. Thanks to IoT blending with Artificial Intelligence (AI) and Machine Learning (ML) has disrupted technology which has led many organizations to consider Digital twin technology. 
            What the market and the marketers should consider is the market attractiveness of Digital Twin technology. IoT stays and is emerging victorious in every front of the market. A USD 49 billion market of digital twining technology is expected by 2026, based on estimates from industry specialists. Businesses now have an unmatched understanding of how their products function because to digital twins. A digital twin can be used to locate possible issues, conduct remote troubleshooting, and ultimately raise client satisfaction. Additionally, it aids in product differentiation.
            What's in it for Human Resource management to ponder is that digital twin technology holds the potential to create a whole new universe of possibilities for utilizing data to streamline operations by scrutinizing many crucial factors. The key areas can be aided by setting up a digital twin framework around job role design, training programs, and future skills and competencies. Organizations could proactively monitor workloads using digital twin technologies. Digital twin tech can provide an immersive environment where anything can be transformed into a digital experience by leveraging other technologies, such as Augmented Reality (AR), ML, and Deep Learning when considering human resource facet.
            I would hence keep this forum open for an engaging discussion to know the reader's opinion that how prevalent product owners or developers in the market would find Digital Twin technology. Secondly, would also like to know whether human resource management believes that such an intervention of Digital Twin, could impact the human resources of an organization or if is it a far-fetched term seeming to be quite fascinating in this process of technological transformation. Jovial reading!
            #Digital Twin #IoT #artificialintelligence #machinelearning #Augmented Reality #Marketing #Human Resources"/></Link>
            <hr className='divider'/>
            <Link to="/tech4" className='postLink'><Post date="October 29"
            imageUrl="https://fdn.gsmarena.com/imgroot/news/23/01/bharos-announced/-1220x526/gsmarena_001.jpg" category="Technology" title="BharOS - Indian Operating System"
            content="Suno! Ye kya ab bhi purane OS par ho, naya OS dalwalo abb! Yet another outstanding Aatmanirbhar Abhiyaan feat unlocked. The BharOS. A new Operating system that soon our smartphones will be able to run. Finally, we have a new player in the market!
 
            The BharOS was developed by J & K operations Private limited under the incubation of IIT Madras and Pravartak technology foundation. This new operating system puts all users at ease while considering security. It is claimed to be the best secure box where the user gets all the control. That is the USP! Once the user is assured full control, I guess you would not doubt its security again. It gives the flexibility to the user to choose the app that suits their needs. Data belongs to the consumers, and with this novel idea, this OS was created. This OS can empower you whether to collect data or not. Now isn't this interesting.
             
            We have often had issues with pre-installed applications that took up memory on our gadgets, but with the emergence of BharOS, users will be able to get the most out of their storage space. The days of manually updating applications will be over. Apps would now be automatically updated. Next, one might like to know what kinds of apps he/she can install on his/her phone. Then PASS, a private app store service that provides a handpicked list of applications that have been properly examined and have met all security and privacy standards, would come into action.
             
            In conclusion, we can understand one thing it is an honour to have a separate operating system guided by India, running alongside big giants. Though studies so far cannot evidently state the efficacy of this initiative because it has not been launched completely rather only specific segments have been given access to it.
             
            Forum is now open! This time I would like the readers to pinpoint the challenges BharOS might face in the tough tech ecosystem. I know a few!! Let’s see whether you can pinpoint it or not. Would like to hear and discuss this. Jovial Reading!!
            "/></Link>
        </div>
    </div>
  )
}

export default technology
