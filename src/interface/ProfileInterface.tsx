export interface IProfileInterface {
    first_section : IFirstSection
    second_section : ISecondSection
    third_section : IThirdSection
}


interface IFirstSection {
    avatar_and_profile_info: IUserInfo
}

interface IUserInfo {
    imageSrc: string
    avatarSrc: string
    full_name: string
    locate: string
    short_description: string
    long_description: string
}


interface ISecondSection {
    principal_and_collapsed_box: IPrincipalAndCollapsedBox
}

interface IPrincipalAndCollapsedBox {
    global_score: number
    stars: IStars
}

interface IStars {
    principal_stars: IStar[]
    collapsed_stars: IStar[]
}

interface IStar {
    label: string
    score: number
}

interface IThirdSection {
    cards: ICard[]
}

interface ICard {
        label: string
        authorName: string
        dateString: string
        imageSrc: string
        avatarSrc: string
        title: string
        score: number
        pros: string[],
        cons: string[],
}