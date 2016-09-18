
const GeneralText = {
    Intro: "**[H]uman** nature is represented in the witnesses, the counsel, and the jurors. All three, in their weaknesses, have been kept in mind by the law of evidence. The multifold untrustworthinesses of witnesses; the constant partisan zeal, the lurking chicanery, the needless unpreparedness of counsel; the crude reasoning, the strong irrational emotions, the testimonial inexperience of jurors – all these elements have been considered [by the law of evidence and procedure]. In responding to this observation by Wigmore of the influence of ‘human nature’ on the shaping of rules of evidence and procedure, consider whether ‘multifold untrustworthinesses of [a witness]’, ‘partisan zeal’ etc. of counsel applied in your court observations. For example, did counsel seek to rely on the possibility the jury would engage in ‘crude reasoning’? Was a witness assumed to be untrustworthy (correctly or incorrectly)? Crucially, how did any of the assumptions (present or absent) operate with respect to the rules of evidence and procedure and the goals of the trial?",
    Categories: [
        "* The untrustworthiness of witnesses = is the witness trustworthy? Should their statements be relied upon? Why or why not? Choose from a variety of reasons in the game",
        "* The constant partisan zeal of the counsel  = are they being overly zealous? What rules are they in breach of? (Select in the game)",
        "* The chicanery of counsel = are they being deceitful? How are they being deceitful? What rules are they in breach of?",
        "* The crude reasoning of the jury = is the reasoning of the jury crude?",
        "* Rules of evidence = what was considered admissible/ not admissible? And for what reasons? What rules apply?"
    ],
    Forward: "\u201CHuman nature is represented in the witnesses, the counsel, and the jurors. All three, in their weaknesses, have been kept in mind by the law of evidence. The multifold untrustworthinesses of witnesses; the constant partisan zeal, the lurking chicanery, the needless unpreparedness of counsel; the crude reasoning, the strong irrational emotions, the testimonial inexperience of jurors \u2013 all these elements have been considered by the law of evidence and procedure\u201D\r\n-Wigmore in The Treatise (3rd edition, 8c at 262)\r\nIn practice, whether the laws of evidence sufficiently guard against human fallibility is open to question. This is particularly true in the adversarial system in which people are pitted against one another in all their manifold weaknesses. The presence of the jury allows for a performative style of argument that brings qualitative analysis into play. The dangers this presents to a fair trial are checked only by the extent to which a judge can rein in a trial based on the statutory scheme governing the admissibility of evidence.\r\nIn this game, you will be required to assume the role of the judge. You will be given a number of scenarios, based on real court observations. You will then be required to assess the admissibility of what you observe in each. You will be required to base your reasoning on the Australian Uniform Evidence Act. \r\nWhen you have completed all your scenarios you will be given a score as to how well you did. Good luck your honour!"
}
const scene = [
    {
        id: 1,
        title: "Brothers for Life",
        facts: [
            "A number of men accused of armed robbery, extortion and the dealing cocaine and ice"
        ],
        witness: "Cross examination of a crown witness (a police detective)",
        lawyer: "Who reported the offences allegedly committed by my client to you detective?",
        event: ""
    },
    {
        id: 2,
        title: "Brothers for Life",
        facts: [
            "A number of men accused of armed robbery, extortion and the dealing cocaine and ice"
        ],
        witness: "Cross examination of a crown witness (a police detective)",
        lawyer: "In your opinion what standard of protection can you offer to those who come forward in cases such as this?",
        event: ""
    },
    {
        id: 3,
        title: "Possession & Supply of Cocaine",
        facts: [
            "Cocaine dealing"
        ],
        witness: "",
        lawyer: "",
        event: "The jury asked to listen to a series of personal phone calls made by the accused. In the first phone call, people involved in the crime were identified in the phone call and the drugs referenced. In the second, no mention was made of the planned crime or the specific involvement of particular individuals. However, crude remarks were made and expletives used, proving what the crown referred to as  the “unsavoury character” of the defendant."
    },
    {
        id: 4,
        title: "Sexual Assault of a Child",
        facts: [
            "Man accused retrospectively of sexually assaulting the 9-year-old daughter of his partner."
        ],
        witness: "",
        lawyer: "",
        event: "The evidence in issue: Allegation that when they moved house he started saying things of a sexual nature."
    },
    {
        id: 5,
        title: "Sexual Assault of a Child",
        facts: [
            "Man accused retrospectively of sexually assaulting the 9-year-old daughter of his partner."
        ],
        witness: "",
        lawyer: "",
        event: "The evidence in issue: Evidence that the accused made a habit of smacking the victim on the bum"
    },
    {
        id: 6,
        title: "Growing Hydroponic Weed",
        facts: [
            "Man accused of growing and distributing hydroponic weed"
        ],
        witness: "Cross examination of a crown witness (police detective)",
        lawyer: "",
        event: "Defence feigns ignorance “Oh so just to recap so I know I’ve got it right” she then repeated the story with a slight alteration mentioning DNA not fingerprint evidence hoping that the witness would agree to her summation of the facts and not correct the error."
    },
    {
        id: 7,
        title: "Growing Hydroponic Weed",
        facts: [
            "Man accused of growing and distributing hydroponic weed"
        ],
        witness: "Cross examination of a crown witness (police detective)",
        lawyer: "",
        event: "The witness often replied, “I believe it was….” And “I’ll have to check that”"
    },
    {
        id: 8,
        title: "Growing Hydroponic Weed",
        facts: [
            "Man accused of growing and distributing hydroponic weed"
        ],
        witness: "Cross examination of a crown witness (police detective)",
        lawyer: "",
        event: "The defence keeps asking whether something is the witness’ “understanding”, or whether something was correct “to your knowledge,” thereby seeking to characterize the witness’ testimony as subjective belief rather than objective fact."
    },
    {
        id: 9,
        title: "Growing Hydroponic Weed",
        facts: [
            "Man accused of growing and distributing hydroponic weed"
        ],
        witness: "Cross examination of a crown witness (police detective)",
        lawyer: "",
        event: "The defence asked a highly technical question regarding phone tower reception which the witness was unable to answer. She then repeated the question to which the witness replied, “I guess it is then.” "
    },
    {
        id: 10,
        title: "Growing Hydroponic Weed",
        facts: [
            "Man accused of growing and distributing hydroponic weed"
        ],
        witness: "Cross examination of a crown witness (police detective)",
        lawyer: "",
        event: "During cross-examination, the defence counsel asked “detective, you neglected to take DNA evidence from the room in which the weed was found, correct?"
    },
    {
        id: 11,
        title: "Growing Hydroponic Weed",
        facts: [
            "Man accused of growing and distributing hydroponic weed"
        ],
        witness: "Cross examination of a crown witness (police detective)",
        lawyer: "",
        event: "The defence counsel often asked the detective leading questions, insisting on a yes or no answer instead of allowing the witness to qualify their answer with an explanation"
    },
    {
        id: 12,
        title: "Joint Criminal Enterprise",
        facts: [
            "A sentencing hearing of a man convicted of participating in a criminal group, defined as a group formed for the purpose of “obtaining material benefits from conduct that constitutes a serious indictable offence” (Crimes Act 1900 (NSW) s 93S(1)(a)). The convicted man had joined the group after the offence (drug supply) had been committed. His involvement was that of a debt collector."
        ],
        witness: "A sentencing interview: defence calling convicted man as its own witness.",
        lawyer: "",
        event: "The defence asked the following leading question: “you joined the gang after the drugs had already been supplied, didn’t you?"
    },
    {
        id: 13,
        title: "Joint Criminal Enterprise",
        facts: [
            "A sentencing hearing of a man convicted of participating in a criminal group, defined as a group formed for the purpose of “obtaining material benefits from conduct that constitutes a serious indictable offence” (Crimes Act 1900 (NSW) s 93S(1)(a)). The convicted man had joined the group after the offence (drug supply) had been committed. His involvement was that of a debt collector."
        ],
        witness: "Cross-examination",
        lawyer: "",
        event: "At the end of a recount, the prosecution asked the following leading question: “at the end of the conversation you said ‘don’t talk shit now, is that correct?’”"
    },
]



const Questions = [
    {
        id: 1,
        scene: 1,
        question: "What is the defence allowed to ask?",
        options: [
            {
                id: 1,
                text: 'Yes, the detective is under oath and must tell the whole truth as per section 21 of the UEA.',
            },
            {
                id: 2,
                text: 'No, the detective can remain silent about an ongoing investigation',
            },
        ],
        answer: 2,
        reason: 'If the public interest in admitting into evidence information or a document that relates to matters of state is outweighed by the public interest in preserving secrecy or confidentiality in relation to the information or document, the court may direct that the information or document not be adduced as evidence (s 130(1)).'
    },
    {
        id: 2,
        scene: 2,
        question: "Is this a permissible question?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No, opinion evidence is inadmissible as per section 76',
            },
        ],
        answer: 1,
        reason: 'Opinion evidence is not admissible insofar as it purports to prove the existence of a fact about which the opinion was expressed. Generally this question could not be asked in an attempt to prove that police protection is inadequate. However, witnesses with specialised knowledge, their opinion is admissible to the extent it “is wholly or substantially based on that knowledge.” (s 79)'
    },
    {
        id: 3,
        scene: 3,
        question: "Is this a permissible question?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            }
        ],
        answer: 2,
        reason: 'The first phone call was deemed relevant  (s 55) as specific people liable of crime were identified and the drugs were referenced. After it is found relevant, the evidence must also be found to have a probative value that outweighs the danger of unfair prejudice to the defendant before it is admitted (s 137). \n The second question, however, was successfully objected to by the defence, as it was not relevant to the facts in issue. What was merely a conversation full of expletives was tendered in order to damage the character of the accused. Evidence of the general bad character of the accused or other party is inadmissible (Attwood v R (1960)102 CLR 353), and does not meet the requirements of relevance under s 55. \n In this instance, the rules of evidence successfully allowed the admission of evidence that was relevant to the commission of the offence whilst removing evidence that was simply a smear on the character of the accused. '
    },
    {
        id: 4,
        scene: 4,
        question: "Is this evidence relevant? Will it be admitted?",
        options: [
            {
                id: 1,
                text: 'Yes to both',
            },
            {
                id: 2,
                text: 'No to both',
            },
            {
                id: 3,
                text: 'Yes it is relevant, but no it is not admissible.',
            },
        ],
        answer: 3,
        reason: 'The evidence is relevant, but not admissible. Although it cleared the hurdle in s 55 (relevance), it was rendered void under s 137. That is because the possibility of a prejudicial inference being drawn by the jury outweighed the probative value of the evidence. In emotive cases such as this, the rules of evidence restrict what is available to the jury.'
    },
    {
        id: 5,
        scene: 5,
        question: "Is this evidence admissible?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            }
        ],
        answer: 2,
        reason: 'No.  Whether the evidence is relevant (s 55) is arguable. It may be seen as insofar as it establishes a pattern of inappropriate behaviour, but given the vastly different nature of the behaviour, it would be of very low probative value. Therefore it almost certainly won\u2019t be admitted as its probative value is outweighed by the danger of unfair prejudice (s 137). See Neal in which it was held that though evidence about the accused\u2019s unfulfilling sex life was relevant to an alleged child sex offence, the low probative value meant that it was easily knocked out by s 137. \n In this instance. the rules of evidence are asked to perform a difficult function. Arguably, a jury would be in a better position to make a determination about the accused\u2019s guilt if they had all of the evidence that could possibly be admitted. However, given the sexual assault of a child is such an emotive crime, the propensity of the jury to be reactive is heightened. Therefore evidence that has a low probative value but is likely to prejudice a jury against the accused the law has decided should not be admitted. The law here is adjusting to what Wigmore calls the \u201Cstrong, irrational emotions\u201D of the jury. A suspicion of the kind of reasoning the jury will engage in determines the evidence that they are allowed to have before them.'
    },
    {
        id: 6,
        scene: 6,
        question: "Is this evidence admissible?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            }
        ],
        answer: 2,
        reason: 'No. Assuming this was a deliberate tactic by the defence, it should have been a disallowable question for being “misleading or confusing” (s 41 (1)(a)). It is the role of the defence counsel to vigorously pursue any discrepancies they perceive in the evidence of a witness, but this does not extend to deliberately trying to confuse them.',
    },
    {
        id: 7,
        scene: 7,
        question: "Does this kind of qualifying statements affect her credibility? ",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            },
            {
                id: 3,
                text: 'That is a matter left for the jury.'
            }
        ],
        answer: 2,
        reason: 'Where a witness is unable to recall information that is pertinent to the case, the court may grant leave for them to use a document to revive their memory (s 32). Whether the use of a document, or the inability of the witness to recall information, impacts upon the credibility of the witness is ultimately a matter of fact for the jury to decide. In this case, the information that the witness was unable to recall was peripheral to their main evidence so the jury was less likely to draw an unfavourable inference from their inability to remember. Whether they ultimately believe the witness is a matter for the jury to decide.ß',
    },
    {
        id: 8,
        scene: 8,
        question: "Is this a permissible question?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            }
        ],
        answer: 1,
        reason: 'Although this may seek to diminish the standing of the witness, it is true that the jury should take the witness’ testimony only as a credible account of their opinion rather than an objective fact. It is for the jury to determine the facts of the case.  '
    },
    {
        id: 9,
        scene: 9,
        question: "Should this be objected to?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            }
        ],
        answer: 2,
        reason: 'A question may be disallowed if it is “unduly… repetitive” (s 41(1)(c)), but this is highly unlikely to fall into that category. In this case, there was also the issue of whether the defence was badgering the witness into answering a question. Where a witness is unable to answer a question or has said they don’t know or understand something, they are well-advised to stick to this even after being questioned on the point again. It is very unlikely that the jury, being privy to the context of the comment, would have drawn an adverse inference here. Indeed, they are perhaps more likely to have formed an opinion against the defence counsel.'
    },
    {
        id: 10,
        scene: 10,
        question: "Can this be objected to?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            }
        ],
        answer: 2,
        reason: 'cross-examination allowed to ask leading questions (s 42).'
    },
    {
        id: 11,
        scene: 11,
        question: "Can this be objected to?",
        options: [
            {
                id: 1,
                text: 'Yes',
            },
            {
                id: 2,
                text: 'No',
            },
            {
                id: 3,
                text: 'Depends on the circumstances'
            }
        ],
        answer: 3,
        reason: 'Generally speaking, leading questions are permissible during cross-examination (s 42). However, the court may disallow a leading question if they think the testimony would be better presented in another form (s 42(3)). In this case, the defence counsel was arguably attempting to mislead the jury by preventing the witness from contextualising his responses. However, the rules of evidence anticipate this difficulty and allow it to be mediated by re-examination, in which a party can ask question of its witness on matters that arose in cross-examination (s 39(a)). '
    },
    {
        id: 12,
        scene: 12,
        question: "Can this be objected to?",
        options: [
            {
                id: 1,
                text: 'Yes. The accused has already been convicted so it is not a matter under dispute.',
            },
            {
                id: 2,
                text: 'No. Leading questions cannot be asked in examination in chief under any circumstances.',
            }
        ],
        answer: 1,
        reason: 'This is OK because already convicted of the offence – not a matter under dispute as per s 37(1)(d). There is no possibility of a jury being prejudiced after the accused has already been convicted. '
    },
    {
        id: 13,
        scene: 13,
        question: "Should you object?",
        options: [
            {
                id: 1,
                text: 'Yes.',
            },
            {
                id: 2,
                text: 'No.',
            }
        ],
        answer: 2,
        reason: 'objections can only be made to leading questions during examination in chief or re-examination, not cross examination: s 37(1). By not allowing the convicted man to speak, only to agree or disagree with the propositions he put, the crown effectively excludes any mitigating circumstances that might problematise a simple binary response. For example, he agreed he had maintained contact with one of the other members of the enterprise, but was not allowed to give the context in which this occurred, who had initiated the meeting or what had transpired. This can be partly rectified during a reexamination, but the defence counsel failed to bring it up.'
    },
]

export default {
    GeneralText: GeneralText,
    Questions: Questions,
    Scene: scene
}