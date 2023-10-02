

export function getProfileDatabyId(id_user) {
    let userProfile;
    switch (id_user) {
        default:
            userProfile = undefined;
        case 244000:
            userProfile = {
                first_section: {
                    avatar_and_profile_info:
                    {
                        id: 244000,
                        imageSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                        avatarSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                        full_name: "Alessandro Gallucci",
                        locate: "Cosenza, Italy",
                        short_description: "Sono il gallo dello sballo uhuhuhu",
                        long_description: "Mi piace stappare prossecchi con mio zio a Tropea da Giugno fino ad Ottobre. La vita è uno schifo ma chi sono io per dirlo? Uhuhuhuhhuh gli amici quelli veri"
                    },
                },
                badge_section: {
                    badges: {
                        all_badges:
                            [
                                {
                                    id: 1,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                }
                            ]
                    }
                },
                second_section: {
                    principal_and_collapsed_box:
                    {
                        global_score: 4.5,
                        stars:
                        {
                            principal_stars: [
                                {
                                    label: 'Bellezza',
                                    score: 2,
                                },
                                {
                                    label: 'Simpatia',
                                    score: 3,
                                },
                                {
                                    label: 'Carisma',
                                    score: 1,
                                },
                                {
                                    label: 'Intelligenza',
                                    score: 2,
                                },
                            ],

                            collapsed_stars: [
                                {
                                    label: 'Bacio Primo Appuntamento',
                                    score: 2,
                                },
                                {
                                    label: 'Bella Presenza',
                                    score: 2,
                                },
                                {
                                    label: 'Parlantina',
                                    score: 3,
                                },
                                {
                                    label: 'Bidonaro',
                                    score: 2,
                                },
                                {
                                    label: 'Imbarazzo',
                                    score: 4,
                                },

                            ]
                        }
                    },
                },
                third_section: {
                    cards:
                        [
                            {
                                id: 244111,
                                label: "New",
                                authorName: 'Brunella',
                                badgeSelectedImg: ['https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png','https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png','https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png'],
                                dateString: 'Aug 22, 2022',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                                title: 'Mi sono scialata!',
                                score: 3.5,
                                pros: [
                                    'Molto bene',
                                    'Wow'
                                ],
                                cons: [
                                    '-'
                                ]
                            },
                            {
                                id: 244222,
                                authorName: 'Carmela',
                                badgeSelectedImg: ['https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png','https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png'],
                                dateString: 'Feb 18, 2021',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
                                title: 'Non proprio a mio agio...',
                                score: 1.5,
                                pros: [
                                    'Alla fine simpatico'
                                ],
                                cons: [
                                    'Senza soldi, ho pagato io la cena..',
                                    'Mi aveva detto di avere un Mercedes invece era una panda',
                                    'Dopo cena ho avvertito della fiatella'
                                ]
                            },
                            {
                                id: 244333,
                                authorName: 'Davide',
                                badgeSelectedImg: ['https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'],
                                dateString: 'Mar 10, 2021',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                                title: 'Tu chiami, il Gallo risponde!',
                                score: 4,
                                pros: [
                                    'Una sicurezza per i caffè',
                                    'Grande Amico',
                                    'uhuhuh'
                                ],
                                cons: [
                                ]
                            },
                            {
                                id: 244444,
                                authorName: 'Giovanna',
                                dateString: 'Mar 10, 2009',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                                title: 'Foto profilo ingannevole!!!',
                                score: 0.5,
                                pros: [
                                    'Ci rincontreremo'
                                ],
                                cons: [
                                    'Forse....'
                                ]
                            }
                        ]

                }
            }
            break;
        case 244111:
            userProfile = {
                first_section: {
                    avatar_and_profile_info:
                    {
                        id: 244111,
                        imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                        avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                        full_name: "Brunella",
                        locate: "Roma, Italy",
                        short_description: "Ciao a tutti",
                        long_description: "Passavo di qui"
                    },
                },
                badge_section: {
                    badges: {
                        all_badges:
                            [
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: true,
                                    date_unlock: '11 Set 2020',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: true,
                                    date_unlock: '11, Sept 2020',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                }
                            ]
                    }
                },
                second_section: {
                    principal_and_collapsed_box:
                    {
                        global_score: 2,
                        stars:
                        {
                            principal_stars: [
                                {
                                    label: 'Bellezza',
                                    score: 1,
                                },
                                {
                                    label: 'Simpatia',
                                    score: 0,
                                },
                                {
                                    label: 'Carisma',
                                    score: 3,
                                },
                                {
                                    label: 'Intelligenza',
                                    score: 4,
                                },
                            ],

                            collapsed_stars: [
                                {
                                    label: 'Bacio Primo Appuntamento',
                                    score: 2,
                                },
                                {
                                    label: 'Bella Presenza',
                                    score: 2,
                                },
                                {
                                    label: 'Parlantina',
                                    score: 3,
                                },
                                {
                                    label: 'Bidonaro',
                                    score: 2,
                                },
                                {
                                    label: 'Imbarazzo',
                                    score: 4,
                                },

                            ]
                        }
                    },
                },
                third_section: {
                    cards:
                        [
                            {
                                id: 244000,
                                label: "New",
                                authorName: 'Alessandro',
                                dateString: 'Aug 22, 2022',
                                imageSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                                avatarSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                                title: 'Ti ricordi di me? Sono il gallo',
                                score: 5,
                                pros: [
                                    'uhuhuhuh',
                                ],
                                cons: [
                                    '-'
                                ]
                            },
                            {
                                id: 244222,
                                authorName: 'Carmela',
                                dateString: 'Feb 18, 2021',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
                                title: 'Non proprio a mio agio...',
                                score: 1.5,
                                pros: [
                                    'Alla fine simpatico'
                                ],
                                cons: [
                                    'Senza soldi, ho pagato io la cena..',
                                    'Mi aveva detto di avere un Mercedes invece era una panda',
                                    'Dopo cena ho avvertito della fiatella'
                                ]
                            }
                        ]

                }
            }
            break;
        case 244222:
            userProfile = {
                first_section: {
                    avatar_and_profile_info:
                    {
                        id: 244222,
                        imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
                        avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
                        full_name: "Carmela",
                        locate: "Rende, Italy",
                        short_description: "Mi piace trascorrere il tempo con i miei amici",
                        long_description: "Sempre, dopo aver passato del tempo con gli amici, non riusciamo a dividere bene il conto. Abbiamo persino dimenticato chi deve chi. Devo sempre ricordare i debiti con il mio amico."
                    },
                },
                badge_section: {
                    badges: {
                        all_badges:
                            [
                                {
                                    id: 1,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                }
                            ]
                    }
                },
                second_section: {
                    principal_and_collapsed_box:
                    {
                        global_score: 3,
                        stars:
                        {
                            principal_stars: [
                                {
                                    label: 'Bellezza',
                                    score: 3,
                                },
                                {
                                    label: 'Simpatia',
                                    score: 2.5,
                                },
                                {
                                    label: 'Carisma',
                                    score: 4,
                                },
                                {
                                    label: 'Intelligenza',
                                    score: 3,
                                },
                            ],

                            collapsed_stars: [
                                {
                                    label: 'Bacio Primo Appuntamento',
                                    score: 3,
                                },
                                {
                                    label: 'Bella Presenza',
                                    score: 3,
                                },
                                {
                                    label: 'Parlantina',
                                    score: 3,
                                },
                                {
                                    label: 'Bidonaro',
                                    score: 3,
                                },
                                {
                                    label: 'Imbarazzo',
                                    score: 3,
                                },

                            ]
                        }
                    },
                },
                third_section: {
                    cards:
                        [
                            {
                                id: 244111,
                                label: "New",
                                authorName: 'Brunella',
                                dateString: 'Aug 22, 2022',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                                title: 'Mi sono scialata!',
                                score: 3.5,
                                pros: [
                                    'Molto bene',
                                    'Wow'
                                ],
                                cons: [
                                    '-'
                                ]
                            },
                            {
                                id: 244000,
                                authorName: 'Alessandro',
                                dateString: 'Feb 18, 2021',
                                imageSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                                avatarSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                                title: 'Non proprio a mio agio...',
                                score: 1.5,
                                pros: [
                                    'Alla fine simpatico'
                                ],
                                cons: [
                                    'Senza soldi, ho pagato io la cena..',
                                    'Mi aveva detto di avere un Mercedes invece era una panda',
                                    'Dopo cena ho avvertito della fiatella'
                                ]
                            },
                            {
                                id: 244333,
                                authorName: 'Davide',
                                dateString: 'Mar 10, 2021',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                                title: 'Tu chiami, il Gallo risponde!',
                                score: 4,
                                pros: [
                                    'Una sicurezza per i caffè',
                                    'Grande Amico',
                                    'uhuhuh'
                                ],
                                cons: [
                                ]
                            },
                            {
                                id: 244444,
                                authorName: 'Giovanna',
                                dateString: 'Mar 10, 2009',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                                title: 'Foto profilo ingannevole!!!',
                                score: 0.5,
                                pros: [
                                    'Ci rincontreremo'
                                ],
                                cons: [
                                    'Forse....'
                                ]
                            }
                        ]

                }
            }
            break;
        case 244333:
            userProfile = {
                first_section: {
                    avatar_and_profile_info:
                    {
                        id: 244222,
                        imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                        avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                        full_name: "Davide",
                        locate: "Rende, Italy",
                        short_description: "Dungeon & Dragons",
                        long_description: "Sono grandissimo amico di Gallo evviva i caffe."
                    },
                },
                badge_section: {
                    badges: {
                        all_badges:
                            [
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: true,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: true,
                                    date_unlock: 'Aug 22, 2022',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                }
                            ]
                    }
                },
                second_section: {
                    principal_and_collapsed_box:
                    {
                        global_score: 5,
                        stars:
                        {
                            principal_stars: [
                                {
                                    label: 'Bellezza',
                                    score: 5,
                                },
                                {
                                    label: 'Simpatia',
                                    score: 5,
                                },
                                {
                                    label: 'Carisma',
                                    score: 5,
                                },
                                {
                                    label: 'Intelligenza',
                                    score: 5,
                                },
                            ],

                            collapsed_stars: [
                                {
                                    label: 'Bacio Primo Appuntamento',
                                    score: 5,
                                },
                                {
                                    label: 'Bella Presenza',
                                    score: 5,
                                },
                                {
                                    label: 'Parlantina',
                                    score: 5,
                                },
                                {
                                    label: 'Bidonaro',
                                    score: 5,
                                },
                                {
                                    label: 'Imbarazzo',
                                    score: 5,
                                },

                            ]
                        }
                    },
                },
                third_section: {
                    cards:
                        [
                            {
                                id: 244111,
                                label: "New",
                                authorName: 'Brunella',
                                dateString: 'Aug 22, 2022',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
                                title: 'Mi sono scialata!',
                                score: 3.5,
                                pros: [
                                    'Molto bene',
                                    'Wow'
                                ],
                                cons: [
                                    '-'
                                ]
                            },
                            {
                                id: 244000,
                                authorName: 'Alessandro',
                                dateString: 'Feb 18, 2021',
                                imageSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                                avatarSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                                title: 'Non proprio a mio agio...',
                                score: 1.5,
                                pros: [
                                    'Alla fine simpatico'
                                ],
                                cons: [
                                    'Senza soldi, ho pagato io la cena..',
                                    'Mi aveva detto di avere un Mercedes invece era una panda',
                                    'Dopo cena ho avvertito della fiatella'
                                ]
                            },
                            {
                                id: 244333,
                                authorName: 'Davide',
                                dateString: 'Mar 10, 2021',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png",
                                title: 'Tu chiami, il Gallo risponde!',
                                score: 4,
                                pros: [
                                    'Una sicurezza per i caffè',
                                    'Grande Amico',
                                    'uhuhuh'
                                ],
                                cons: [
                                ]
                            },
                            {
                                id: 244444,
                                authorName: 'Giovanna',
                                dateString: 'Mar 10, 2009',
                                imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                                avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                                title: 'Foto profilo ingannevole!!!',
                                score: 0.5,
                                pros: [
                                    'Ci rincontreremo'
                                ],
                                cons: [
                                    'Forse....'
                                ]
                            }
                        ]

                }
            }
            break;
        case 244444:
            userProfile = {
                first_section: {
                    avatar_and_profile_info:
                    {
                        id: 244444,
                        imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                        avatarSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
                        full_name: "Giovanna",
                        locate: "Rende, Italy",
                        short_description: "Amo i gelati",
                        long_description: ""
                    },
                },
                badge_section: {
                    badges: {
                        all_badges:
                            [
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 1,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Welcome',
                                    description: 'This achievement is awarded when a new member activates their account.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                                    width: 100,
                                    height: 100

                                },
                                {
                                    id: 2,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Best Friend',
                                    description: 'This badge is awarded to users when they accept 10 friend requests.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 3,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Chameleon',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 4,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Yolo',
                                    description: 'This badge is earned by joining 5 different groups',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 5,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Starstruck',
                                    description: 'Created a repository that has many stars.',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/starstruck-default--light-medium.png",
                                    width: 100,
                                    height: 100
                                },
                                {
                                    id: 6,
                                    unlocked: false,
                                    date_unlock: '',
                                    title: 'Arctic',
                                    description: 'Contributed code to 1 repository',
                                    selected: false,
                                    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
                                    width: 100,
                                    height: 100
                                }
                            ]
                    }
                },
                second_section: {
                    principal_and_collapsed_box:
                    {
                        global_score: 0,
                        stars:
                        {
                            principal_stars: [
                                {
                                    label: 'Bellezza',
                                    score: 0,
                                },
                                {
                                    label: 'Simpatia',
                                    score: 0,
                                },
                                {
                                    label: 'Carisma',
                                    score: 0,
                                },
                                {
                                    label: 'Intelligenza',
                                    score: 0,
                                },
                            ],

                            collapsed_stars: [
                                {
                                    label: 'Bacio Primo Appuntamento',
                                    score: 0,
                                },
                                {
                                    label: 'Bella Presenza',
                                    score: 0,
                                },
                                {
                                    label: 'Parlantina',
                                    score: 0,
                                },
                                {
                                    label: 'Bidonaro',
                                    score: 0,
                                },
                                {
                                    label: 'Imbarazzo',
                                    score: 0,
                                },

                            ]
                        }
                    },
                },
                third_section: {
                    cards:
                        [
                           
                        ]

                }
            }
            break;
    }
    return userProfile;
}

export function getUserInfo(){
    let userInfo = {
        id : 244000,
        name: 'Alessandro',
        nickname: 'wewe',
        mail: '',
        number: 1111111,
        createdAt: ''
    }
    return userInfo;
}