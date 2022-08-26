import { BadgeProps } from "@components/molecules/Badge/models/Badge.types"

export interface RateCardProps {
    id: number
    label: string
    avatarSrc: string
    badgeSelectedImg?: string[]
    authorName: string
    dateString: string
    avatarAlt?: string
    title?: string
    score: number
    pros?: string[]
    cons?: string[]
    changeProfileData?: any
}